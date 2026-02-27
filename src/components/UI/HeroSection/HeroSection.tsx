import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const HeroSection: React.FC = () => {
  // Professional stats based on actual career data
  const professionalStats = [
    { label: "Years of Experience", value: "8+", icon: "⏳" },
    { label: "Projects Completed", value: "25+", icon: "🏗️" },
    { label: "Divisions Served", value: "3", icon: "📍" },
    { label: "Technical Papers", value: "5+", icon: "📄" },
  ];

  // Career highlights
  const careerHighlights = [
    "Executive Engineer at BWDB",
    "Former Sub-Divisional Engineer",
    "BUET Alumni",
    "Ex-Physics Teacher at Udvash",
  ];

  // Social media links with React Icons
  const socialLinks = [
    {
      href: "https://linkedin.com/in/abdullah-al-luman",
      icon: FiLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/abdullahalluman",
      icon: FiTwitter,
      label: "Twitter",
    },
    {
      href: "https://facebook.com/abdullahalluman",
      icon: FiFacebook,
      label: "Facebook",
    },
    {
      href: "https://github.com/abdullahalluman",
      icon: FiGithub,
      label: "GitHub",
    },
    {
      href: "mailto:abdullah.luman@bwdb.gov.bd",
      icon: FiMail,
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated background grid pattern - responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Responsive gradient orbs */}
      <div className="absolute top-20 sm:top-40 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-40 -right-20 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      {/* Central orb for depth */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl"></div>

      {/* Floating glow particles - responsive */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>

      <div className="relative container py-12 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting with responsive text */}
            <div className="inline-block relative mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-800 backdrop-blur-sm">
                👋 Welcome to my professional space
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
            </div>

            {/* Name and Title - responsive font sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Abdullah Al
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-1 sm:mt-2">
                Luman
              </span>
            </h1>

            {/* Current Position - responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-xl sm:text-2xl">
                  🏢
                </span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Executive Engineer at{" "}
                  <span className="text-white font-semibold relative group">
                    BWDB
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
                  Bheramara Division, Kushtia
                </p>
              </div>
            </div>

            {/* Description - responsive text */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-gradient-to-r from-blue-400 to-cyan-400 pl-3 sm:pl-4">
              Dedicated civil engineer specializing in water resource management
              and infrastructure development in Bangladesh.
            </p>

            {/* Career Highlights Pills - responsive grid */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-6 sm:mb-8">
              {careerHighlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/80 backdrop-blur-sm text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-800 hover:border-blue-400 hover:border-cyan-400 hover:bg-gray-800/80 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Social Media Icons with React Icons - responsive positioning with glow */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">
                  Connect
                </span>
                <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-800 transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:border-cyan-400">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300" />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Professional Stats - responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 max-w-3xl mx-auto lg:mx-0">
              {professionalStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center hover:border-blue-400 hover:border-cyan-400 hover:bg-gray-800/60 transition-all duration-300 group hover:scale-105"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 group-hover:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

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

              <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-2 sm:-right-4 lg:-right-8 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-2xl hover:scale-105 transition-transform duration-300 z-20">
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
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

        {/* Scroll indicator - responsive */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-3">
            <span className="text-gray-700 text-[10px] sm:text-xs tracking-wider font-medium">
              EXPLORE
            </span>
            <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-gray-800 rounded-full flex justify-center relative group hover:border-blue-400 transition-colors">
              <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 lg:w-1.5 lg:h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1 sm:mt-1.5 lg:mt-2 animate-bounce group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-32 sm:w-40 lg:w-64 h-32 sm:h-40 lg:h-64 bg-gradient-to-r from-blue-400/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-40 lg:w-64 h-32 sm:h-40 lg:h-64 bg-gradient-to-l from-cyan-400/10 to-transparent rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
