"use client";
import { Github, Twitter, Facebook, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <section className="px-4 md:px-16 lg:px-32 py-6 mt-6 md:mt-10">

      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Let&apos;s Get in Touch
        </h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-xl mx-auto">
          Feel free to contact me for any questions, opportunities, or collaborations.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">

        {/* Left — Contact Cards */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:flex-1">

          {/* Email Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={18} />
              <h3 className="font-semibold text-sm md:text-base">Email</h3>
            </div>
            <p className="text-sm md:text-base break-all">gamoctobre@gmail.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Phone size={18} />
              <h3 className="font-semibold text-sm md:text-base">Phone</h3>
            </div>
            <p className="text-sm md:text-base">09912274498</p>
          </div>

          {/* Social Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={18} />
              <h3 className="font-semibold text-sm md:text-base">Connect with me</h3>
            </div>
            <div className="flex gap-3 md:gap-4">
              
              <a
                href="https://github.com/imsoCOOKED101"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/Crator124"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/gamaliel10196/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="w-full md:flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Whether you have a project in mind or simply want to connect, I&apos;d love to hear from you.
          </p>

          <form className="flex flex-col gap-3 md:gap-4" onSubmit={handleSubmit}>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="First Name"
                required
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="How can I help you? Max 500 characters"
              maxLength={500}
              rows={4}
              required
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition text-sm md:text-base w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}