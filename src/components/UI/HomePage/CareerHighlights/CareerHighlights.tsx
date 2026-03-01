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
  FiClock,
  FiUserCheck,
  FiTarget,
  FiCpu,
  FiStar,
  FiBarChart2,
  FiGlobe,
  FiUsers,
  FiThumbsUp,
} from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsRocketTakeoff, BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineWaterDrop, MdOutlineEngineering } from "react-icons/md";
import { GiMechanicGarage, GiWaterTank } from "react-icons/gi";

const CareerHighlights: React.FC = () => {
  const positions = [
    {
      title: "Executive Engineer",
      period: "2023 — Present",
      location: "Bheramara Mechanical Division",
      description:
        "Leading mechanical operations and maintenance of pump stations, managing division-wide projects and teams with strategic oversight.",
      metrics: ["15+ Major Projects", "30+ Team Members", "98% Efficiency"],
      icon: <GiWaterTank className="w-6 h-6" />,
      achievements: ["Zero downtime record", "Team of the Year 2023"],
    },
    {
      title: "Sub-Divisional Engineer",
      period: "2022 — 2023",
      location: "Pump Station Maintenance, Kushtia",
      description:
        "Supervised mechanical maintenance operations and managed sub-division engineering team with high efficiency and precision.",
      metrics: ["8 Key Projects", "12 Team Members", "100% Safety"],
      icon: <MdOutlineEngineering className="w-6 h-6" />,
      achievements: ["Maintenance Excellence", "Safety Champion"],
    },
    {
      title: "Assistant Engineer",
      period: "2017 — 2022",
      location: "P&D Mechanical Circle",
      description:
        "Assisted in project planning, conducted field surveys, and supported project execution across multiple locations with dedication.",
      metrics: ["10+ Projects", "5 Districts", "3 Awards"],
      icon: <GiMechanicGarage className="w-6 h-6" />,
      achievements: ["Young Engineer Award", "Best Performer"],
    },
  ];

  const stats = [
    {
      value: "8+",
      label: "Years Experience",
      icon: <FiClock className="w-6 h-6" />,
    },
    {
      value: "25+",
      label: "Projects Completed",
      icon: <BsRocketTakeoff className="w-6 h-6" />,
    },
    {
      value: "3",
      label: "Divisions Served",
      icon: <FiGlobe className="w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <BsGraphUpArrow className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      title: "Project Excellence",
      description:
        "Successfully delivered 25+ infrastructure projects ahead of schedule with exceptional quality",
      icon: <FiStar className="w-8 h-8" />,
      stat: "98%",
      statLabel: "On-time delivery",
    },
    {
      title: "Team Leadership",
      description:
        "Mentored 15+ junior engineers across multiple divisions, fostering growth",
      icon: <FiUsers className="w-8 h-8" />,
      stat: "15+",
      statLabel: "Engineers trained",
    },
    {
      title: "Innovation Impact",
      description:
        "Implemented new maintenance protocols reducing downtime by 40% across all divisions",
      icon: <HiOutlineRocketLaunch className="w-8 h-8" />,
      stat: "40%",
      statLabel: "Efficiency increase",
    },
  ];

  return (
    <section className="relative  py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Simple Background */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/70  backdrop-blur-xl rounded-full border border-white/10 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">
              Professional Journey
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Career
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 my-2">
              Highlights
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Over 8 years of progressive experience at Bangladesh Water
            Development Board
          </p>
        </div>

        {/* Current Role Card - Clean */}
        <div className="relative mb-20">
          <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <GiWaterTank className="w-12 h-12 text-black" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 rounded-full text-blue-400 text-sm mb-4 border border-blue-400/20">
                    <FiClock className="w-3 h-3" />
                    Current Position · 2023 — Present
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                    Executive Engineer
                  </h2>
                  <p className="text-gray-400 flex items-center gap-2 text-lg">
                    <FiMapPin className="w-5 h-5 text-blue-400" />
                    Bheramara Mechanical Division, Kushtia
                  </p>

                  {/* Quick stats */}
                  <div className="flex gap-6 mt-4">
                    <span className="text-sm text-gray-400">15+ Projects</span>
                    <span className="text-sm text-gray-400">30+ Team</span>
                    <span className="text-sm text-gray-400">98% Success</span>
                  </div>
                </div>
              </div>

              <Link
                href="/career"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <span>View Full Profile</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Career Timeline - Clean Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {positions.map((position, index) => (
            <div key={index} className="group">
              <div className="h-full bg-gray-900/70  backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-400/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">{position.icon}</div>
                  </div>
                  <span className="text-sm text-gray-400">
                    {position.period}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {position.title}
                </h3>

                <p className="text-gray-400 text-sm flex items-center gap-1 mb-4">
                  <FiMapPin className="w-4 h-4" />
                  {position.location}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  {position.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {position.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 mb-2">Key Achievements</p>
                  <div className="flex flex-wrap gap-2">
                    {position.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements - Clean Cards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Key Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl text-blue-400">
                    {achievement.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  {achievement.description}
                </p>

                {/* Stats */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-blue-400">
                    {achievement.stat}
                  </span>
                  <span className="text-sm text-gray-500">
                    {achievement.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Explore More?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover the complete journey, achievements, and future
              aspirations
            </p>

            <Link
              href="/career"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              <FiBriefcase className="w-6 h-6" />
              <span>Explore Complete Career History</span>
              <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default CareerHighlights;
