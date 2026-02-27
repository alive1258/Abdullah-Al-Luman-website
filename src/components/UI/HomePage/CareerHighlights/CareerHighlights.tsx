"use client";
import React from "react";
import Link from "next/link";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiTrendingUp,
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiStar,
} from "react-icons/fi";

const CareerHighlights: React.FC = () => {
  const positions = [
    {
      title: "Executive Engineer",
      period: "2023 - Present",
      location: "Bheramara Mechanical Division, Kushtia",
      description:
        "Leading mechanical operations and maintenance of pump stations, managing division-wide projects and teams.",
      icon: "🚀",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Sub-Divisional Engineer",
      period: "2022 - 2023",
      location: "Pump Station Mechanical Maintenance, Kushtia",
      description:
        "Supervised mechanical maintenance operations and managed sub-division engineering team.",
      icon: "⚙️",
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Assistant Engineer",
      period: "2017 - 2022",
      location: "P&D Mechanical Circle, Dhaka & Bheramara",
      description:
        "Assisted in project planning, conducted field surveys, and supported project execution.",
      icon: "📐",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  const achievements = [
    {
      value: "25+",
      label: "Projects Completed",
      icon: "🏗️",
      description: "Successfully delivered infrastructure projects",
    },
    {
      value: "3",
      label: "Divisions Served",
      icon: "📍",
      description: "Dhaka, Kushtia, and Bheramara divisions",
    },
    {
      value: "15+",
      label: "Team Members",
      icon: "👥",
      description: "Junior engineers trained and mentored",
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: "📊",
      description: "Project completion within deadlines",
    },
  ];

  const keyMilestones = [
    {
      year: "2023",
      title: "Promoted to Executive Engineer",
      description: "Took leadership of Bheramara Mechanical Division",
    },
    {
      year: "2022",
      title: "Sub-Divisional Engineer",
      description: "Managed pump station maintenance operations",
    },
    {
      year: "2017",
      title: "Joined BWDB",
      description: "Started career as Assistant Engineer",
    },
    {
      year: "2016",
      title: "Graduated from BUET",
      description: "Completed Mechanical Engineering",
    },
  ];

  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              💼 Professional Journey
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Career
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Highlights
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Over 8 years of progressive experience at Bangladesh Water
            Development Board, with increasing responsibilities and impactful
            contributions.
          </p>
        </div>

        {/* Current Position Spotlight */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl p-6 lg:p-8 overflow-hidden group hover:border-blue-400 transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl text-black">🚀</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                      Current Position
                    </span>
                    <FiClock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">
                      Oct 2023 - Present
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                    Executive Engineer
                  </h3>
                  <p className="text-sm text-gray-400">
                    Bangladesh Water Development Board
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                    <FiMapPin className="w-3 h-3" />
                    Bheramara Mechanical Division, Kushtia
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    8+
                  </div>
                  <div className="text-xs text-gray-500">Years Exp</div>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    25+
                  </div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    3
                  </div>
                  <div className="text-xs text-gray-500">Divisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline Preview */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${position.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              ></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center`}
                  >
                    <span className="text-xl text-black">{position.icon}</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {position.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400">
                  {position.title}
                </h3>

                <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                  <FiMapPin className="w-3 h-3" />
                  {position.location}
                </p>

                <p className="text-xs text-gray-400 line-clamp-2">
                  {position.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Counter */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FiAward className="text-cyan-400" />
            Key Achievements
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 text-center group hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-gray-300 font-medium mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Timeline Visualization */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FiTrendingUp className="text-blue-400" />
            Career Progression
          </h3>

          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

            <div className="space-y-6">
              {keyMilestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Timeline dot */}
                  <div className="absolute left-4 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full z-10"></div>

                  {/* Year badge */}
                  <div className="w-16 flex-shrink-0">
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-4">
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/career"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900/60 border border-gray-800 rounded-xl text-white font-medium hover:border-blue-400 transition-all duration-300 hover:scale-105"
          >
            <FiBriefcase className="w-5 h-5 text-blue-400" />
            <span>View Full Career History</span>
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

export default CareerHighlights;
