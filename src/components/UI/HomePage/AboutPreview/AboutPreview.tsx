"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiUser,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const AboutPreview: React.FC = () => {
  const expertiseAreas = [
    "Water Resource Management",
    "Pump Station Maintenance",
    "Infrastructure Development",
    "Team Leadership",
  ];

  const quickFacts = [
    { icon: FiBriefcase, text: "8+ Years Experience" },
    { icon: FiMapPin, text: "Kushtia, Bangladesh" },
    { icon: FiCalendar, text: "Joined BWDB: 2017" },
    { icon: FiHeart, text: "Ex-Physics Teacher" },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              👨‍💼 Get To Know Me
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Abdullah Al Luman
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Dedicated civil engineer with a passion for water resource
            management and infrastructure development in Bangladesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Profile Card */}
            <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>

              {/* Profile Image Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-full h-full bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700">
                    <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      👤
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-lg p-3 text-center group hover:bg-gray-800 transition-all"
                    >
                      <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-gray-300">{fact.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Languages */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <FiGlobe className="text-cyan-400" />
                  Languages
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-300">Bengali</span>
                      <span className="text-xs text-gray-500">Native</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-300">English</span>
                      <span className="text-xs text-gray-500">Fluent</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Personal Background */}
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FiUser className="text-blue-400" />
                Personal Background
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Born and raised in Sirajganj, I developed a deep connection with
                Bangladesh's water systems from an early age. This passion led
                me to pursue mechanical engineering at BUET and eventually join
                the Bangladesh Water Development Board.
              </p>

              {/* Professional Summary Teaser */}
              <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl p-4 mb-6 border border-blue-400/20">
                <p className="text-sm text-gray-300 italic">
                  "My journey from teaching physics at Udvash to becoming an
                  Executive Engineer at BWDB has been driven by a commitment to
                  serve my community through sustainable water solutions."
                </p>
              </div>

              {/* Key Expertise Areas */}
              <h4 className="text-sm font-semibold text-white mb-3">
                Key Expertise
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{area}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-lg font-medium hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105"
              >
                <span>View Full About</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
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

export default AboutPreview;
