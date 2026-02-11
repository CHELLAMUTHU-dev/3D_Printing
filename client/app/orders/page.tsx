"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const sendEmail = async () => {
    if (!email || !name || !orderId || !message) {
      setStatus("❌ All fields are required");
      return;
    }
    if (!files.length) {
      setStatus("❌ Please upload at least one file");
      return;
    }
    if (!isChecked) {
      setStatus("❌ You must agree to the terms");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("orderId", orderId);
    formData.append("message", message);
    files.forEach((file) => formData.append("files", file));

    try {
      setStatus("Uploading & sending...");
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");

      setStatus("✅ Order submitted successfully");
      setFiles([]);
      setName("");
      setOrderId("");
      setMessage("");
      setEmail("");
      setIsChecked(false);
    } catch (err: any) {
      setStatus(err.message || "❌ Something went wrong");
    }
  };

  return (
    <>
      <Header />

      {/* Background */}
      <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center px-4">
        <div className="max-w-xl w-full mt-24 mb-16 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-white/40 p-8 space-y-5 flex flex-col">

          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            File Upload
          </h1>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Name */}
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Order ID */}
          <input
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Order details (filament color, quantity, etc.)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />

          {/* File Upload */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-lg p-6 cursor-pointer hover:bg-blue-50 transition">
            <span className="text-blue-600 font-medium">
              Click to upload files
            </span>
            <span className="text-xs text-gray-500 mt-1">
              PDF, PNG, JPG supported
            </span>
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>

          {files.length > 0 && (
            <p className="text-sm text-gray-600">
              {files.length} file(s) selected
            </p>
          )}

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Button */}
          <button
            onClick={sendEmail}
            disabled={!isChecked}
            className="self-end mt-4 p-12 rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 "
          >
            Send
          </button>

          {/* Status */}
          {status && (
            <p className="text-center text-sm text-gray-700">{status}</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
