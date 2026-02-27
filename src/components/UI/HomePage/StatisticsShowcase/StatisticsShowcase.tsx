"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FiBriefcase,
  FiCheckCircle,
  FiUsers,
  FiFileText,
  FiMapPin,
  FiAward,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

const StatisticsShowcase: React.FC = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    teamMembers: 0,
    papers: 0,
    divisions: 0,
    awards: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Target values
  const targets = {
    experience: 8,
    projects: 25,
    teamMembers: 50,
    papers: 5,
    divisions: 3,
    awards: 4,
  };

  // Stats categories
  const mainStats = [
    {
      id: "experience",
      icon: FiBriefcase,
      value: counts.experience,
      suffix: "+",
      label: "Years of Experience",
      description: "Dedicated service at BWDB",
      color: "from-blue-400 to-cyan-400",
      target: 8,
    },
    {
      id: "projects",
      icon: FiCheckCircle,
      value: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Infrastructure & development",
      color: "from-cyan-400 to-blue-400",
      target: 25,
    },
    {
      id: "teamMembers",
      icon: FiUsers,
      value: counts.teamMembers,
      suffix: "+",
      label: "Team Members",
      description: "Engineers & staff managed",
      color: "from-blue-400 to-cyan-400",
      target: 50,
    },
    {
      id: "papers",
      icon: FiFileText,
      value: counts.papers,
      suffix: "+",
      label: "Technical Papers",
      description: "Research & publications",
      color: "from-cyan-400 to-blue-400",
      target: 5,
    },
  ];

  const secondaryStats = [
    {
      id: "divisions",
      icon: FiMapPin,
      value: counts.divisions,
      suffix: "",
      label: "Divisions Served",
      description: "Dhaka, Kushtia, Bheramara",
      color: "from-blue-400 to-cyan-400",
      target: 3,
    },
    {
      id: "awards",
      icon: FiAward,
      value: counts.awards,
      suffix: "+",
      label: "Awards Received",
      description: "Excellence in service",
      color: "from-cyan-400 to-blue-400",
      target: 4,
    },
  ];

  // Achievement milestones
  const milestones = [
    {
      year: "2023",
      title: "Executive Engineer",
      description: "Promoted to lead Bheramara Mechanical Division",
    },
    {
      year: "2022",
      title: "25th Project",
      description: "Completed major pump station rehabilitation",
    },
    {
      year: "2021",
      title: "Technical Paper",
      description: "Published research on pump efficiency",
    },
    {
      year: "2017",
      title: "BWDB Journey",
      description: "Started as Assistant Engineer",
    },
  ];

  // Animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counting
          const duration = 2000; // 2 seconds
          const steps = 60;
          const interval = duration / steps;

          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets];
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts((prev) => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, interval);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Numbers Background */}
        <div className="absolute top-20 left-1/4 text-8xl font-bold text-gray-800/10 rotate-12">
          8+
        </div>
        <div className="absolute bottom-20 right-1/4 text-8xl font-bold text-gray-800/10 -rotate-12">
          25+
        </div>
        <div className="absolute top-1/3 right-1/3 text-6xl font-bold text-gray-800/10">
          50+
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              📊 By The Numbers
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Performance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Statistics
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A track record of excellence and commitment to water resource
            development in Bangladesh
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {mainStats.map((stat) => {
            const Icon = stat.icon;
            const percentage = (stat.value / stat.target) * 100;

            return (
              <div
                key={stat.id}
                className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 lg:p-6 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-black" />
                </div>

                {/* Value */}
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-sm text-gray-500 ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-xs text-gray-500 mb-3">
                  {stat.description}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Stats Row */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {secondaryStats.map((stat) => {
            const Icon = stat.icon;
            const percentage = (stat.value / stat.target) * 100;

            return (
              <div
                key={stat.id}
                className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-black" />
                  </div>

                  <div className="flex-1">
                    {/* Value */}
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.value}
                      <span className="text-sm text-gray-500 ml-1">
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="#1f1f1f"
                        strokeWidth="3"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke={`url(#gradient-${stat.id})`}
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 20}`}
                        strokeDashoffset={`${2 * Math.PI * 20 * (1 - percentage / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${stat.id}`}
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
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {Math.round(percentage)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Timeline */}
        <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <FiTrendingUp className="text-cyan-400" />
            Key Milestones
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group">
                {/* Year */}
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {milestone.year}
                </div>

                {/* Title */}
                <div className="text-sm font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                  {milestone.title}
                </div>

                {/* Description */}
                <div className="text-xs text-gray-500">
                  {milestone.description}
                </div>

                {/* Connector Line (except last) */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-4 -right-2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-full">
            <FiClock className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">
              <span className="font-bold text-white">8+ years</span> of
              dedicated service •
              <span className="font-bold text-white ml-1">25+ projects</span>{" "}
              completed •<span className="font-bold text-white ml-1">98%</span>{" "}
              success rate
            </span>
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

export default StatisticsShowcase;
