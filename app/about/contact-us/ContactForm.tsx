"use client";

import { reasonOptions } from "@/src/lib/contactData";
import { useState } from "react";

export function ContactForm() {
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const MAX_CHARS = 300;

  const handleSubmit = () => {
    console.log({ reason, email, phone, message });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <h2 className="text-base font-semibold">Feedback and Queries</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700">
          Select Reason<span className="text-red-500">*</span>
        </label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
        >
          <option value="">Select an Option</option>
          {reasonOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
        />
      </div>


      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700">Contact Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact Number with Country Code"
          className="border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
        />
      </div>


      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-700">
          Drop your feedback/query<span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= MAX_CHARS) setMessage(e.target.value);
          }}
          placeholder={`Max Allowed Characters: ${MAX_CHARS}`}
          rows={5}
          className="border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:border-gray-400"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-gray-900 text-white text-sm py-2 px-4 rounded hover:bg-black transition-colors duration-200"
      >
        Submit
      </button>

      <p className="text-sm text-gray-600">
        To contribute, please see the{" "}
        <a href="#" className="text-green-600 hover:underline">
          contribute page
        </a>
      </p>
    </div>
  );
}
