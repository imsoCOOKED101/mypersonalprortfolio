"use client";
import { Github, Twitter, Facebook, Mail, Phone, MessageSquare } from "lucide-react"; 


export default function ContactSection() {
  return (
    <section className="px-50 py-2 mt-10">
      {/* Header */}
      <div className="text-center mb-15">
        <h1 className="text-3xl font-bold mb-4">Let&apos;s Get in Touch</h1>
        <p className="text-gray-600 text-lg">
          Feel free to contact me for any questions, opportunities, or collaborations..
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 mb-10">
        {/* Left Column: Info Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Email Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={20} />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p>gamoctobre@gmail.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Phone size={20} />
              <h3 className="font-semibold">Phone</h3>
            </div>
            <p>09912274498</p>
          </div>

          {/* Social Connect Card */}
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} />
              <h3 className="font-semibold">Connect with me</h3>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/imsoCOOKED101" target="_blank" className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                <Github size={20} />
              </a>
              <a href="https://x.com/Crator124" target="_blank" className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/gamaliel10196/" target="_blank" className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Let&apos;s get in touch</h2>
          <p className="text-gray-600 mb-4">
            Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="How can I help you? Max 500 characters"
              maxLength={500}
              rows={4}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            {/* Submit Button with Alert */}
            <button
              type="button" // prevents form submission
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              onClick={() => alert("Thank you! Your message has been sent.")}
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
