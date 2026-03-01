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
  FiTrendingUp,
  FiTarget,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineAcademicCap } from "react-icons/hi2";
import { MdSchool, MdScience, MdEngineering } from "react-icons/md";
import { GiTeacher, GiGraduateCap } from "react-icons/gi";

const EducationPreview: React.FC = () => {
  const educationData = [
    {
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      degree: "Bachelor of Science in Mechanical Engineering",
      period: "2012 - 2016",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Graduated with Honors (CGPA 3.75/4.00)",
        "Dean's List Recognition (2014, 2015)",
        "Best Thesis Award",
      ],
      icon: <GiGraduateCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-400 to-cyan-400",
      badge: "Premier Institution",
    },
    {
      institution: "Ullapara Science College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2010 - 2012",
      location: "Ullapara, Sirajganj",
      achievements: [
        "Merit Scholarship (2011, 2012)",
        "Science Group Champion",
        "College Topper",
      ],
      icon: <MdScience className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-cyan-400 to-teal-400",
      badge: "Merit Scholar",
    },
    {
      institution: "Krishnadia Raisa Obayed High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2008 - 2010",
      location: "Krishnadia, Sirajganj",
      achievements: [
        "First Division with Star Marks",
        "Science Fair Winner (2009)",
        "Best Student Award",
      ],
      icon: <MdSchool className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-teal-400 to-emerald-400",
      badge: "Excellent Results",
    },
  ];

  const teachingExperience = {
    institution: "উদ্ভাস - Udvash Academic & Admission Care",
    role: "Senior Physics Faculty",
    period: "2016 - 2017",
    description: "Taught Physics to aspiring engineering and medical students",
    icon: <GiTeacher className="w-8 h-8 sm:w-10 sm:h-10" />,
    students: "500+",
    successRate: "95%",
    color: "from-purple-400 to-pink-400",
    achievements: [
      "Best Teacher Award",
      "Student Satisfaction: 4.9/5",
      "Produced 50+ BUET admittees",
    ],
  };

  const academicStats = [
    {
      label: "BUET Alumni",
      value: "Mechanical Eng.",
      icon: <MdEngineering className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      label: "Students Taught",
      value: "500+",
      icon: <FiUsers className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-cyan-400 to-teal-400",
    },
    {
      label: "Academic Awards",
      value: "5+",
      icon: <FiAward className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-teal-400 to-emerald-400",
    },
    {
      label: "Teaching Rating",
      value: "4.9/5",
      icon: <FiStar className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-amber-400 to-orange-400",
    },
  ];

  const timelineEvents = [
    { year: "2016", event: "BUET Graduate", icon: "🎓" },
    { year: "2016-17", event: "Udvash Faculty", icon: "📐" },
    { year: "2012", event: "HSC Complete", icon: "📚" },
    { year: "2010", event: "SSC Complete", icon: "🏫" },
  ];

  return (
    <section className="relative bg-black py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Simple Background */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-4 sm:mb-6">
            <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-white/80">
              Academic Background
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Education &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-1 sm:mt-2">
              Teaching Journey
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 max-w-3xl mx-auto">
            From BUET to Udvash, a journey of academic excellence and knowledge
            sharing
          </p>
        </div>

        {/* BUET Spotlight */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <GiGraduateCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="px-2 sm:px-3 py-1 bg-blue-400/10 rounded-full text-xs text-blue-400">
                    BUET · 2012-2016
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  Bangladesh University of Engineering and Technology
                </h2>
                <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  Bachelor of Science in Mechanical Engineering
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-gray-400">
                  <span>CGPA: 3.75/4.00</span>
                  <span>•</span>
                  <span>Dean's List: 2x</span>
                  <span>•</span>
                  <span>Top 5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Cards - Clean Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {educationData.map((edu, index) => (
            <div key={index} className="group">
              <div className="h-full bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                {/* Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center`}
                  >
                    <div className="text-white text-xl sm:text-2xl">
                      {edu.icon}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2">
                  {edu.degree}
                </p>
                <p className="text-gray-500 text-xs flex items-center gap-1 mb-3">
                  <FiMapPin className="w-3 h-3" />
                  {edu.location}
                </p>

                {/* Achievements */}
                <div className="space-y-1 mb-4">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FiStar className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-gray-400">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badge at bottom */}
                <span
                  className={`text-xs px-2 py-1 bg-gradient-to-r ${edu.color} text-black rounded-full`}
                >
                  {edu.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Udvash Teaching Experience */}
        <div className="relative mb-12 sm:mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <GiTeacher className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="px-2 sm:px-3 py-1 bg-purple-400/10 rounded-full text-xs text-purple-400">
                    Teaching Experience
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-pink-400/10 rounded-full text-xs text-pink-400">
                    500+ Students
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {teachingExperience.institution}
                </h2>
                <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {teachingExperience.role} · {teachingExperience.period}
                </p>

                <p className="text-xs sm:text-sm text-gray-400 mb-3">
                  {teachingExperience.description}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
                  <span>⭐ 500+ Students</span>
                  <span>•</span>
                  <span>📊 95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Timeline */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 text-center">
            Academic Timeline
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl mb-1 block">
                  {event.icon}
                </span>
                <span className="text-sm sm:text-base font-bold text-white block">
                  {event.year}
                </span>
                <span className="text-xs text-gray-400">{event.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary School Link */}
        <div className="text-center mb-6 sm:mb-8">
          <Link
            href="/education#primary"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 text-xs sm:text-sm text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300"
          >
            <MdSchool className="w-4 h-4" />
            <span>Krishnodia Govt. Primary School (2002 - 2008)</span>
            <FiArrowRight className="w-3 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="relative text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10">
            <HiOutlineAcademicCap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              Explore Full Academic History
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
              Discover detailed achievements, certifications, and professional
              development
            </p>

            <Link
              href="/education"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-lg font-bold text-sm sm:text-base hover:shadow-lg transition-all duration-300"
            >
              <FiBookOpen className="w-4 h-4" />
              <span>View Complete History</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default EducationPreview;
