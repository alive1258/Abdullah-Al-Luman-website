"use client";
import React from "react";
import Link from "next/link";
import {
  FiAward,
  FiClock,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiTarget,
  FiHeart,
  FiGlobe,
} from "react-icons/fi";

const WhyWorkWithMe: React.FC = () => {
  const reasons = [
    {
      icon: FiAward,
      title: "Government Certified",
      description:
        "Executive Engineer at Bangladesh Water Development Board with 8+ years of proven experience in water resource management.",
      stats: "8+ Years",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: FiTarget,
      title: "Project Excellence",
      description:
        "Successfully completed 25+ infrastructure projects including pump stations, irrigation systems, and flood control structures.",
      stats: "25+ Projects",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: FiTrendingUp,
      title: "Technical Expertise",
      description:
        "Specialized in mechanical maintenance, pump station operations, and water development infrastructure across Bangladesh.",
      stats: "3 Divisions",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: FiUsers,
      title: "Team Leadership",
      description:
        "Led multiple engineering teams across Bheramara, Dhaka, and Kushtia divisions with proven project management skills.",
      stats: "50+ Team Members",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: FiClock,
      title: "Timely Delivery",
      description:
        "Consistent track record of completing projects within deadline while maintaining highest quality standards.",
      stats: "98% On-time",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: FiGlobe,
      title: "Nationwide Impact",
      description:
        "Contributing to Bangladesh's water infrastructure development with sustainable and innovative solutions.",
      stats: "All Divisions",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  const keyStrengths = [
    {
      icon: FiCheckCircle,
      text: "BUET Engineering Graduate",
    },
    {
      icon: FiHeart,
      text: "Passionate about Water Resource Development",
    },
    {
      icon: FiAward,
      text: "Excellence in Public Service",
    },
    {
      icon: FiUsers,
      text: "Strong Stakeholder Management",
    },
  ];

  return (
    <section
      id="why-me"
      className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Subtitle */}
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              💼 Why Choose Me
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Work With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Abdullah Al Luman
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            With over 8 years of dedicated service at Bangladesh Water
            Development Board, I bring technical excellence, leadership, and a
            commitment to sustainable water resource management.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Stats Overview - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center group hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
              8+
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center group hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
              25+
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center group hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
              3
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              Divisions Served
            </div>
          </div>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 text-center group hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1 sm:mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-400">Commitment</div>
          </div>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 hover:border-blue-400"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

                {/* Icon with Gradient */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-blue-400/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    {reason.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Strengths Section */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Key Strengths &
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-1">
                    Professional Values
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                  My approach combines technical expertise with a deep
                  understanding of Bangladesh's water infrastructure needs,
                  ensuring sustainable and impactful solutions.
                </p>

                {/* Strength List */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {keyStrengths.map((strength, index) => {
                    const IconComponent = strength.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg flex items-center justify-center border border-gray-800 group-hover:border-blue-400 transition-all">
                          <IconComponent className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                          {strength.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105"
                  >
                    <span>Discuss Your Project</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Column - Stats Circle */}
              <div className="relative flex justify-center">
                {/* Circular Progress Indicator */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  {/* Background Circle */}
                  <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>

                  {/* Progress Circle - Using gradient */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      100%
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1">
                      Commitment to
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      Excellence
                    </span>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">
                      50+ Team Members
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">
                      98% Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default WhyWorkWithMe;
