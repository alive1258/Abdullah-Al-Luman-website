import React from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-800 mb-4 sm:mb-6">
            <HiOutlineUser className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            Let's Connect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Abdullah Al Luman
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Have a question or want to collaborate? Feel free to reach out
            through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <HiOutlineMail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:abdullah.luman@example.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    abdullah.luman@example.com
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Professional Inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <HiOutlinePhone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+8801XXXXXXXXX"
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    +880 1XXX-XXXXXX
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <HiOutlineLocationMarker className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 group"
                >
                  <FiGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 group"
                >
                  <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 group"
                >
                  <FiTwitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 group"
                >
                  <FiFacebook className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
