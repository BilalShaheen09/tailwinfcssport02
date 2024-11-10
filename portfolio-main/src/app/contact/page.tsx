'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 via-blue-600 to-purple-700 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-10 flex flex-col lg:flex-row gap-10 items-center justify-between w-full">
        
        {/* Left Section (Contact Information) */}
        <div className="w-full lg:w-1/3 space-y-8">
          <h2 className="text-4xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
            Contact Information
          </h2>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaPhoneAlt className="text-teal-500 text-2xl" />
              <span className="text-lg">+92 3173123243</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaEnvelope className="text-teal-500 text-2xl" />
              <span className="text-lg">Bilalkk130@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-black bg-opacity-60 rounded-lg border-2 border-teal-400 shadow-lg hover:bg-opacity-80 transition">
              <FaMapMarkerAlt className="text-teal-500 text-2xl" />
              <span className="text-lg">420 Main Street Saddar Karachi</span>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-full lg:w-2/3 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-4xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows={5}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
