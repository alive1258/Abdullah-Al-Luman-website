"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiArrowRight,
  FiEye,
  FiTag,
  FiBookOpen,
  FiHeart,
  FiMessageCircle,
  FiFilter,
  FiX,
} from "react-icons/fi";

const RecentBlogPosts: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Modern Approaches to Pump Station Maintenance in Bangladesh",
      excerpt:
        "Exploring innovative techniques for maintaining pump stations in the context of Bangladesh's unique water management challenges and climate conditions.",
      author: "Abdullah Al Luman",
      date: "December 15, 2023",
      readTime: "5 min read",
      views: 234,
      category: "Technical Tips",
      tags: ["Pump Station", "Maintenance", "Innovation"],
      image: "🏭",
      featured: true,
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      title: "The Future of Water Resource Management in Delta Regions",
      excerpt:
        "Analyzing sustainable solutions for water management in the Ganges-Brahmaputra delta and their implications for Bangladesh's future.",
      author: "Abdullah Al Luman",
      date: "November 28, 2023",
      readTime: "8 min read",
      views: 189,
      category: "Water Management",
      tags: ["Delta", "Sustainability", "Climate Change"],
      image: "🌊",
      featured: false,
      likes: 32,
      comments: 8,
    },
    {
      id: 3,
      title: "Lessons from 5 Years at BWDB: A Personal Journey",
      excerpt:
        "Reflecting on key experiences, challenges, and learnings from my tenure at the Bangladesh Water Development Board.",
      author: "Abdullah Al Luman",
      date: "October 10, 2023",
      readTime: "10 min read",
      views: 567,
      category: "Career Insights",
      tags: ["Career", "Experience", "BWDB"],
      image: "📝",
      featured: true,
      likes: 89,
      comments: 23,
    },
    {
      id: 4,
      title: "Flood Control Strategies: Balancing Development and Nature",
      excerpt:
        "Examining the delicate balance between infrastructure development and environmental conservation in flood-prone areas of Bangladesh.",
      author: "Abdullah Al Luman",
      date: "September 22, 2023",
      readTime: "7 min read",
      views: 312,
      category: "Industry Insights",
      tags: ["Flood Control", "Environment", "Strategy"],
      image: "🌧️",
      featured: false,
      likes: 28,
      comments: 15,
    },
    {
      id: 5,
      title: "Emerging Technologies in Water Infrastructure",
      excerpt:
        "How IoT, AI, and smart sensors are revolutionizing water management systems globally and their potential in Bangladesh.",
      author: "Abdullah Al Luman",
      date: "August 5, 2023",
      readTime: "6 min read",
      views: 445,
      category: "Technology",
      tags: ["Technology", "Innovation", "Smart Systems"],
      image: "💡",
      featured: false,
      likes: 56,
      comments: 19,
    },
    {
      id: 6,
      title: "Daily Fitness Routines for Busy Engineers",
      excerpt:
        "Simple and effective fitness routines that can be incorporated into a busy engineer's schedule for better health and productivity.",
      author: "Abdullah Al Luman",
      date: "July 18, 2023",
      readTime: "6 min read",
      views: 378,
      category: "Fitness",
      tags: ["Fitness", "Health", "Wellness", "Productivity"],
      image: "💪",
      featured: false,
      likes: 67,
      comments: 14,
    },
    {
      id: 7,
      title: "Mental Wellness Tips for Field Engineers",
      excerpt:
        "Maintaining mental health while working in challenging field conditions: practical advice for engineers in remote locations.",
      author: "Abdullah Al Luman",
      date: "June 5, 2023",
      readTime: "7 min read",
      views: 298,
      category: "Fitness",
      tags: ["Mental Health", "Wellness", "Field Work"],
      image: "🧠",
      featured: false,
      likes: 52,
      comments: 9,
    },
  ];

  const categories = [
    { name: "All", icon: "📚", count: blogPosts.length },
    {
      name: "Water Management",
      icon: "🌊",
      count: blogPosts.filter((p) => p.category === "Water Management").length,
    },
    {
      name: "Technical Tips",
      icon: "🔧",
      count: blogPosts.filter((p) => p.category === "Technical Tips").length,
    },
    {
      name: "Career Insights",
      icon: "📝",
      count: blogPosts.filter((p) => p.category === "Career Insights").length,
    },
    {
      name: "Industry Insights",
      icon: "🏭",
      count: blogPosts.filter((p) => p.category === "Industry Insights").length,
    },

    {
      name: "Fitness",
      icon: "💪",
      count: blogPosts.filter((p) => p.category === "Fitness").length,
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="relative  py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-20 right-1/4 text-6xl text-gray-800/10">
          📝
        </div>
        <div className="absolute bottom-20 left-1/4 text-6xl text-gray-800/10">
          💪
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-sm">
              📝 Insights & Ideas
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-cyan-400"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Blog Posts
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge, experiences, and perspectives on water
            management, engineering challenges, professional development, and
            fitness for a balanced life.
          </p>
        </div>

        {/* Category Filters - Enhanced with icons and counts */}
        <div className="mb-10">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden w-full mb-4 px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FiFilter className="text-blue-400" />
              Filter by Category
            </span>
            {showFilters ? <FiX /> : <FiFilter />}
          </button>

          {/* Category Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 ${showFilters ? "block" : "hidden lg:grid"}`}
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowFilters(false);
                }}
                className={`group relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                  selectedCategory === category.name
                    ? "bg-linear-to-r from-blue-400 to-cyan-400 text-black"
                    : "bg-gray-900/60 text-gray-400 hover:text-white border border-gray-800 hover:border-blue-400"
                }`}
              >
                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    selectedCategory === category.name ? "hidden" : ""
                  }`}
                ></div>

                <div className="relative flex space-x-2 items-center">
                  <span className="text-xl mb-1">{category.icon}</span>
                  <span className="text-xs">{category.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Filter Indicator */}
          {selectedCategory !== "All" && (
            <div className="flex items-center justify-center mt-4 gap-2">
              <span className="text-sm text-gray-400">Active Filter:</span>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full text-sm text-blue-400 border border-blue-400/30">
                {selectedCategory}
              </span>
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>

        {/* Posts Grid - Exactly 3 cards per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/10"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>

              {/* Image/Icon Section */}
              <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-5xl text-gray-700 group-hover:scale-110 transition-transform duration-500">
                  {post.image}
                </span>

                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-400 to-cyan-400 text-black text-[10px] font-bold rounded-full flex items-center gap-1">
                      <FiBookOpen className="w-2 h-2" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-black/80 backdrop-blur-sm rounded-full text-[10px] text-gray-300 border border-gray-700 flex items-center gap-1">
                    <FiTag className="w-2 h-2" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta Info */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author & Engagement Stats */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                      <FiUser className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-xs text-gray-400">
                      {post.author.split(" ").pop()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FiEye className="w-3 h-3" />
                      {post.views}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FiHeart className="w-3 h-3" />
                      {post.likes}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-0.5 bg-gray-800 rounded text-[8px] text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-[8px] text-gray-600">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:gap-2 transition-all"
                >
                  Read More
                  <FiArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Hover Indicator */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                  hoveredPost === post.id ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Fitness Highlight */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  New Fitness Category
                </h3>
                <p className="text-sm text-gray-400">
                  Check out our latest articles on fitness, health, and wellness
                  specifically designed for engineers and field professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="relative bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-2xl p-6 lg:p-8 mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/5 via-transparent to-transparent"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <FiBookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                  Never Miss an Update
                </h3>
                <p className="text-sm text-gray-400">
                  Subscribe to get notified about new articles and insights
                </p>
              </div>
            </div>

            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 bg-black/60 border border-gray-800 rounded-l-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black rounded-r-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-400/25 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900/60 border border-gray-800 rounded-xl text-white font-medium hover:border-blue-400 transition-all duration-300 hover:scale-105"
          >
            <FiBookOpen className="w-5 h-5 text-blue-400" />
            <span>View All Articles</span>
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  );
};

export default RecentBlogPosts;
