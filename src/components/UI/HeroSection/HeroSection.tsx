import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiGithub,
  FiMail,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

const HeroSection: React.FC = () => {
  // Career highlights with icons
  const careerHighlights = [
    { text: "Executive Engineer at BWDB", icon: "🏢", color: "blue" },
    { text: "Former Sub-Divisional Engineer", icon: "📐", color: "cyan" },
    { text: "BUET Alumni", icon: "🎓", color: "teal" },
    { text: "Ex-Physics Teacher at Udvash", icon: "🔬", color: "green" },
  ];

  // Social media links
  const socialLinks = [
    {
      href: "https://linkedin.com/in/abdullah-al-luman",
      icon: FiLinkedin,
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]",
    },
    {
      href: "https://twitter.com/abdullahalluman",
      icon: FiTwitter,
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      href: "https://facebook.com/abdullahalluman",
      icon: FiFacebook,
      label: "Facebook",
      color: "hover:bg-[#4267B2]",
    },
    {
      href: "https://github.com/abdullahalluman",
      icon: FiGithub,
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      href: "mailto:abdullah.luman@bwdb.gov.bd",
      icon: FiMail,
      label: "Email",
      color: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400",
    },
  ];

  // Expertise areas
  const expertiseAreas = [
    "Water Resource Management",
    "Infrastructure Development",
    "Flood Control Systems",
    "Irrigation Projects",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b md:pt-32 from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden"
    >
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Gradient Orbs with modern positioning */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-to-l from-cyan-400/20 to-teal-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Modern floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative container  flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-28 lg:py-0">
          {/* Left Column - Modern Content Layout */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Name with modern typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              <span className="text-white">Abdullah Al</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                Luman
              </span>
            </h1>

            {/* Current Position with modern styling */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg border border-blue-400/20">
                <FiBriefcase className="text-blue-400" />
                <span className="text-white font-semibold">
                  Executive Engineer
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <FiMapPin className="text-cyan-400" />
                <span className="text-gray-300">Bheramara, Kushtia</span>
              </div>
            </div>

            {/* Modern Description Card */}
            <div className="relative mb-8 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-800 group hover:border-blue-400/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
                Dedicated civil engineer specializing in water resource
                management and infrastructure development in Bangladesh.
                Passionate about creating sustainable solutions for complex
                water challenges.
              </p>
            </div>

            {/* Career Highlights - Modern Chip Design */}
            <div className="flex flex-wrap gap-2 mb-8">
              {careerHighlights.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 group-hover:border-blue-400 transition-all duration-300">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Areas - Modern Pill Design */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">Expertise Areas</p>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700 hover:border-blue-400 hover:bg-gray-800 transition-all duration-300 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Modern Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl text-black font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></span>
                <span className="relative flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  Contact Me
                </span>
              </Link>
            </div>

            {/* Social Links with Modern Design */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Connect</span>
              <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-10 h-10 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />

                      {/* Tooltip */}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-800">
                        {social.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Modern Photo Card Design */}
          {/* Right Column - Professional Photo - responsive sizing */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main photo container - responsive dimensions */}
            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[600px]">
              {/* Animated gradient background with glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl rotate-6 blur-xl sm:blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl rotate-6 blur-lg sm:blur-xl opacity-40"></div>

              {/* Main gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl rotate-3"></div>

              {/* Image container */}
              <div className="relative w-full h-full bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-800/50 z-10 backdrop-blur-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/luman1.jpg"
                    alt="Abdullah Al Luman - Executive Engineer"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
                  />

                  {/* Gradient overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div> */}
                </div>

                {/* Decorative corner elements - responsive */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl sm:rounded-tr-3xl"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-20 h-12 sm:h-20 border-b-2 border-l-2 border-blue-400/30 rounded-bl-2xl sm:rounded-bl-3xl"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl sm:rounded-br-3xl"></div>
              </div>

              {/* Floating badges - responsive positioning with glow */}
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-2 sm:-left-4 lg:-left-8 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl hover:scale-105 transition-transform duration-300 z-20">
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-400/30">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-lg sm:text-xl lg:text-3xl">
                      🏛️
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm lg:text-base font-semibold">
                      BUET Alumni
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      Class of 2016
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-2 sm:-right-4 lg:-right-11 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl hover:scale-105 transition-transform duration-300 z-20">
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-400/30">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-lg sm:text-xl lg:text-3xl">
                      📚
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm lg:text-base font-semibold">
                      Ex-Physics Teacher
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      Udvash
                    </p>
                  </div>
                </div>
              </div>

              {/* Side badge - hidden on mobile/tablet */}
              <div className="absolute top-1/2 -right-8 lg:-right-12 transform -translate-y-1/2 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg lg:rounded-2xl p-2 lg:p-3 shadow-2xl hover:scale-105 transition-transform duration-300 z-20 hidden lg:block">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center border border-blue-400/30">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-lg lg:text-xl">
                      🏢
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-semibold">
                      Current Role
                    </p>
                    <p className="text-gray-500 text-[10px] lg:text-xs">
                      Executive Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center relative group hover:border-blue-400 transition-colors">
            <div className="w-1.5 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 animate-bounce group-hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </div>

      {/* Modern Gradient Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Modern Corner Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-cyan-400/10 to-transparent rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
