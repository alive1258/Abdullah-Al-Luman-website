"use client";
import React from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiArrowRight,
  FiStar,
  FiBook,
  FiGraduationCap,
} from "react-icons/fi";

const EducationPreview: React.FC = () => {
  const educationData = [
    {
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      degree: "Bachelor of Science in Mechanical Engineering",
      period: "2012 - 2016",
      location: "Dhaka, Bangladesh",
      achievements: ["Graduated with honors", "Dean's List recognition"],
      icon: "🎓",
      color: "from-blue-400 to-cyan-400",
      badge: "Premier Engineering Institution",
    },
    {
      institution: "Ullapara Science College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2010 - 2012",
      location: "Ullapara, Sirajganj",
      achievements: ["Science group", "Merit scholarship"],
      icon: "📚",
      color: "from-cyan-400 to-blue-400",
      badge: "College Merit Scholar",
    },
    {
      institution: "Krishnadia Raisa Obayed High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2008 - 2010",
      location: "Krishnadia, Sirajganj",
      achievements: ["First division", "Science fair winner"],
      icon: "🏫",
      color: "from-blue-400 to-cyan-400",
      badge: "Excellent Results",
    },
  ];

  const teachingExperience = {
    institution: "উদ্ভাস - Udvash Academic & Admission Care",
    role: "Former Physics Teacher",
    period: "Prior to 2017",
    description: "Taught Physics to aspiring engineering students",
    icon: "📐",
    students: "500+",
    color: "from-cyan-400 to-blue-400",
  };

  const academicStats = [
    { label: "Graduation Year", value: "2016", icon: "🎓" },
    { label: "BUET Alumni", value: "Mechanical", icon: "⚙️" },
    { label: "Teaching Experience", value: "500+ Students", icon: "👨‍🏫" },
    { label: "Academic Awards", value: "3+", icon: "🏆" },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl"></div>

        {/* Floating academic icons */}
        <div className="absolute top-20 right-1/4 text-4xl text-gray-800 opacity-20 animate-pulse">
          🎓
        </div>
        <div className="absolute bottom-20 left-1/4 text-4xl text-gray-800 opacity-20 animate-pulse delay-700">
          📚
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              📖 Academic Background
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Education &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Teaching Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            From BUET to Udvash, a strong foundation in engineering and a
            passion for teaching.
          </p>
        </div>

        {/* BUET Spotlight - Featured Education */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl p-6 lg:p-8 overflow-hidden group hover:border-blue-400 transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-6">
              {/* BUET Icon */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <span className="text-4xl lg:text-5xl text-black">🎓</span>
              </div>

              {/* BUET Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-400/10 rounded-full text-xs text-blue-400 border border-blue-400/20">
                    Premier Engineering Institution
                  </span>
                  <span className="px-3 py-1 bg-cyan-400/10 rounded-full text-xs text-cyan-400 border border-cyan-400/20">
                    Class of 2016
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                  Bangladesh University of Engineering and Technology
                </h3>
                <p className="text-base text-blue-400 mb-2">
                  Bachelor of Science in Mechanical Engineering
                </p>
                <p className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                  <FiMapPin className="w-4 h-4" />
                  Dhaka, Bangladesh
                  <span className="text-gray-600">•</span>
                  <FiCalendar className="w-4 h-4" />
                  2012 - 2016
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Honors
                  </div>
                  <div className="text-xs text-gray-500">Graduation</div>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Dean's
                  </div>
                  <div className="text-xs text-gray-500">List</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              ></div>

              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-400 to-cyan-400 text-black text-xs font-bold rounded-full">
                    {edu.badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center mb-3`}
                >
                  <span className="text-2xl text-black">{edu.icon}</span>
                </div>

                {/* Institution */}
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
                  {edu.institution}
                </h3>

                <p className="text-xs text-blue-400 mb-2">{edu.degree}</p>

                <div className="flex items-center gap-2 mb-2">
                  <FiCalendar className="w-3 h-3 text-gray-600" />
                  <span className="text-xs text-gray-500">{edu.period}</span>
                  <FiMapPin className="w-3 h-3 text-gray-600 ml-2" />
                  <span className="text-xs text-gray-500 truncate">
                    {edu.location}
                  </span>
                </div>

                {/* Achievements */}
                <div className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <FiStar className="w-3 h-3 text-cyan-400" />
                      <span className="text-xs text-gray-400">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Udvash Teaching Experience */}
        <div className="mb-12">
          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-6">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-50"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-black">📐</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 bg-cyan-400/10 rounded-full text-xs text-cyan-400 border border-cyan-400/20">
                    Teaching Experience
                  </span>
                  <span className="px-3 py-1 bg-blue-400/10 rounded-full text-xs text-blue-400 border border-blue-400/20">
                    500+ Students
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {teachingExperience.institution}
                </h3>
                <p className="text-lg text-cyan-400 mb-2">
                  {teachingExperience.role}
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  {teachingExperience.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4 text-gray-600" />
                    <span className="text-xs text-gray-500">
                      {teachingExperience.period}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-800"></div>
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-xs text-gray-500">Physics</span>
                  </div>
                </div>
              </div>

              {/* Student count badge */}
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {teachingExperience.students}
                </div>
                <div className="text-xs text-gray-500">Students Taught</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {academicStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center group hover:border-blue-400 transition-all duration-300"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Primary Education Link */}
        <div className="mb-8 text-center">
          <Link
            href="/education#primary"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <span>Krishnodia Govt. Primary School (2002 - 2008)</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/education"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900/60 border border-gray-800 rounded-xl text-white font-medium hover:border-blue-400 transition-all duration-300 hover:scale-105"
          >
            <FiBook className="w-5 h-5 text-blue-400" />
            <span>View Full Education History</span>
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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

export default EducationPreview;
