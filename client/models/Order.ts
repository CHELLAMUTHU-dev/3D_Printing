import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true },
    orderId: String,
    message: String,

    // Cloudinary file URLs
    files: [
      {
        fileName: String,
        url: String,
        publicId: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
