"use client";

import { useState } from "react";

const GetInTouch: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Email submitted: ${email}`);
    setEmail(""); // Reset the email field after submission
  };

  return (
    <div className="flex flex-col items-center p-20 bg-blue-300">
      <div className="text-center bg-blue-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex items-center mb-2">
            <label className="w-10/12">
              <input
                name="email"
                type="email"
                className="
                block
                w-full
                px-4 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                placeholder="Email address"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <button
              type="submit"
              className="
              ml-2
              px-4 py-2
              bg-blue-500
              text-white
              rounded-md
              hover:bg-blue-600
              transition-colors
              duration-300
            "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
