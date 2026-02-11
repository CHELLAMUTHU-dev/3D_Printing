import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const orderId = formData.get("orderId") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    if (!email || files.length === 0) {
      return NextResponse.json(
        { message: "Email and files are required" },
        { status: 400 }
      );
    }

    // 🔹 Upload to Cloudinary
    const uploadedFiles = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "orders",
              resource_type: "auto",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      uploadedFiles.push({
        fileName: file.name,
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      });
    }

    // 🔹 Save to MongoDB
    await Order.create({
      name,
      email,
      orderId,
      message,
      files: uploadedFiles,
    });

    // 🔹 Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔹 Admin Email (attach files)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📦 New Order Received",
      html: `
        <h3>New Order</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Order ID:</b> ${orderId}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      attachments: uploadedFiles.map((file) => ({
        filename: file.fileName,
        path: file.url, // Cloudinary URL
      })),
    });

    // 🔹 Customer Auto Reply
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Order Received",
      html: `
        <p>Hello ${name || "Customer"},</p>
        <p>We received your documents successfully.</p>
        <p>Our team will review them and contact you.</p>
        <br />
        <p>Regards,<br />Support Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
