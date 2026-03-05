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
  FiGlobe,
  FiAward,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import PhotoGallery from "./PhotoGallery";

const AboutPreview: React.FC = () => {
  const expertiseAreas = [
    { name: "Water Resource Management", icon: "💧" },
    { name: "Pump Station Maintenance", icon: "⚙️" },
    { name: "Infrastructure Development", icon: "🏗️" },
    { name: "Team Leadership", icon: "👥" },
    { name: "Flood Control Systems", icon: "🌊" },
    { name: "Project Management", icon: "📊" },
  ];

  const quickFacts = [
    { icon: FiBriefcase, label: "Experience", value: "8+ Years" },
    { icon: FiMapPin, label: "Location", value: "Kushtia, Bangladesh" },
    { icon: FiCalendar, label: "Joined BWDB", value: "2017" },
    { icon: FiHeart, label: "Previous Role", value: "Physics Teacher" },
  ];

  const achievements = [
    {
      year: "2023",
      title: "Executive Engineer",
      description: "Bheramara Division",
      icon: "🚀",
    },
    {
      year: "2019",
      title: "Sub-Divisional Engineer",
      description: "BWDB",
      icon: "🏗️",
    },
    {
      year: "2016",
      title: "BUET Graduate",
      description: "Civil Engineering",
      icon: "🎓",
    },
    {
      year: "2014",
      title: "Physics Teacher",
      description: "Udvash",
      icon: "🔬",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-cyan-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl rounded-full border border-gray-800 mb-4">
            <FiUser className="text-blue-400" />
            <span className="text-sm text-gray-300">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Abdullah Al
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Luman
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Executive Engineer at Bangladesh Water Development Board
          </p>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/luman1.jpg"
                      alt="Abdullah Al Luman - Executive Engineer"
                      width={80}
                      height={80}
                      quality={100}
                      className="object-cover rounded-full object-center hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Abdullah Al Luman
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                    <FiMapPin className="text-blue-400" />
                    Executive Engineer, BWDB
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Born and raised in Sirajganj, I developed a deep connection with
                Bangladesh's water systems from an early age. This passion led
                me to pursue civil engineering at BUET and eventually join the
                Bangladesh Water Development Board.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-3">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-800/30 p-3 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{fact.label}</p>
                        <p className="text-sm font-medium text-white">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-blue-400" />
                Career Journey
              </h3>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-white font-medium">{item.title}</p>
                        <span className="text-xs text-blue-400">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-6">
            {/* Expertise Grid */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiTarget className="text-blue-400" />
                Core Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/30 p-3 rounded-xl"
                  >
                    <span className="text-lg">{area.icon}</span>
                    <span className="text-xs text-gray-300">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Certifications */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <FiGlobe className="text-blue-400" />
                  Languages
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                    <span className="text-sm text-gray-300">Bengali</span>
                    <span className="text-xs text-gray-500">Native</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-800/30 rounded-lg">
                    <span className="text-sm text-gray-300">English</span>
                    <span className="text-xs text-gray-500">Professional</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <FiAward className="text-blue-400" />
                  Certifications
                </h4>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 p-2 bg-gray-800/30 rounded-lg">
                    • Professional Engineer (IEB)
                  </p>
                  <p className="text-xs text-gray-400 p-2 bg-gray-800/30 rounded-lg">
                    • PMP Certified
                  </p>
                  <p className="text-xs text-gray-400 p-2 bg-gray-800/30 rounded-lg">
                    • Water Resource Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 14 Pictures of Abdullah Al Luman */}

        <PhotoGallery />
        {/* CTA */}
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default AboutPreview;
