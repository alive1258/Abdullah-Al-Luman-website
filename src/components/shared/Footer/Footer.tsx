"use client";
import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
  FaBriefcase,
  FaGraduationCap,
  FaWater,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gray-900 pb-10">
          {/* Logo and Info - 5 columns */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                Abdullah Al
                <span className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ml-2">
                  Luman
                </span>
              </span>
              <span className="block text-xs text-gray-600 tracking-wider mt-1">
                Executive Engineer, BWDB
              </span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Dedicated civil engineer specializing in water resource
              management, pump station maintenance, and infrastructure
              development across Bangladesh.
            </p>

            {/* Professional stats badge */}
            <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-gray-800">
              <FaWater className="text-blue-400 animate-pulse" />
              <span className="text-xs text-gray-400">
                8+ Years at BWDB • 25+ Projects
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg flex items-center justify-center border border-gray-800">
                  <FaEnvelope className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">
                  abdullah.luman@bwdb.gov.bd
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg flex items-center justify-center border border-gray-800">
                  <FaPhone className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-gray-400">+880 1712 345678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg flex items-center justify-center border border-gray-800">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400">
                  Bheramara, Kushtia, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Home", href: "/", icon: "🏠" },
                { name: "About", href: "/about", icon: "👤" },
                { name: "Career", href: "/career", icon: "💼" },
                { name: "Education", href: "/education", icon: "🎓" },
                { name: "Gallery", href: "/gallery", icon: "📷" },
                { name: "Blog", href: "/blog", icon: "📝" },
                { name: "Contact", href: "/contact", icon: "📞" },
                { name: "Resume", href: "/resume", icon: "📄" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
                    {link.icon} {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Professional Profiles - 4 columns */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Professional Network
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: FaLinkedin,
                  name: "LinkedIn",
                  color: "hover:text-blue-500",
                  link: "https://linkedin.com/in/abdullah-al-luman",
                  handle: "@abdullah-al-luman",
                },
                {
                  icon: FaTwitter,
                  name: "Twitter",
                  color: "hover:text-sky-400",
                  link: "https://twitter.com/abdullahalluman",
                  handle: "@abdullahalluman",
                },
                {
                  icon: FaFacebook,
                  name: "Facebook",
                  color: "hover:text-blue-600",
                  link: "https://facebook.com/abdullahalluman",
                  handle: "/abdullahalluman",
                },
                {
                  icon: FaGithub,
                  name: "GitHub",
                  color: "hover:text-gray-300",
                  link: "https://github.com/abdullahalluman",
                  handle: "@abdullahalluman",
                },
              ].map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-3 hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <profile.icon
                        size={16}
                        className={`text-gray-400 ${profile.color} group-hover:text-white transition-colors`}
                      />
                    </div>
                    <div>
                      <span
                        className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400`}
                      >
                        {profile.name}
                      </span>
                      <p className="text-xs text-gray-600">{profile.handle}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Expertise Areas */}
        <div className="py-6 border-b border-gray-900">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-gray-600 text-xs uppercase tracking-wider">
              Areas of Expertise:
            </span>
            {[
              "Water Resource Management",
              "Pump Station Maintenance",
              "Infrastructure Development",
              "Project Planning",
              "Team Leadership",
              "Flood Control",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-gray-900/60 backdrop-blur-sm rounded-full text-gray-400 text-xs border border-gray-800 hover:border-blue-400 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-2">
            <span>© {currentYear} Abdullah Al Luman</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <span className="flex items-center gap-1">
              <FaBriefcase className="text-blue-400" size={12} />
              Executive Engineer, BWDB
            </span>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <span className="flex items-center gap-1">
              <FaGraduationCap className="text-cyan-400" size={12} />
              BUET Alumni
            </span>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <FaHeart className="text-red-500 animate-pulse" size={12} /> in
              Bangladesh
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            {[
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/abdullah-al-luman",
                label: "LinkedIn",
                color: "hover:text-blue-500",
              },
              {
                icon: FaTwitter,
                link: "https://twitter.com/abdullahalluman",
                label: "Twitter",
                color: "hover:text-sky-400",
              },
              {
                icon: FaFacebook,
                link: "https://facebook.com/abdullahalluman",
                label: "Facebook",
                color: "hover:text-blue-600",
              },
              {
                icon: FaGithub,
                link: "https://github.com/abdullahalluman",
                label: "GitHub",
                color: "hover:text-gray-300",
              },
              {
                icon: FaEnvelope,
                link: "mailto:abdullah.luman@bwdb.gov.bd",
                label: "Email",
                color: "hover:text-yellow-400",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.link}
                target="_blank"
                className="p-2 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-400 hover:bg-gray-800/60 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon
                  size={16}
                  className={`text-gray-500 group-hover:text-white group-hover:scale-110 transition-all ${social.color}`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full text-black shadow-lg hover:shadow-blue-400/30 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>

        {/* BWDB Attribution */}
        <div className="absolute bottom-4 left-4 opacity-10 text-xs text-gray-600 hidden lg:block">
          <pre className="font-mono">
            {`Bangladesh Water Development Board
    Govt. of The People's Republic of Bangladesh`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
