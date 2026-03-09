/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "career", label: "Career" },
    { href: "education", label: "Education" },
    { href: "why-work", label: "Why Work With Me" },
    { href: "blog", label: "Blog" },
    { href: "contact", label: "Contact" },
  ];

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href);
      let current = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 72; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bg-gray-900 py-4 w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative text-left"
          >
            <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Abdullah Al
              <span className="text-2xl md:text-3xl font-medium text-blue-400 ml-2">
                Luman
              </span>
            </span>
            <span className="block text-xs text-gray-500 tracking-wider">
              Executive Engineer, BWDB
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group overflow-hidden rounded-lg ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-lg"></span>
                {activeSection === link.href && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 rounded-lg transition-colors text-white hover:bg-gray-800/80 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform"></div>
            <svg
              className="w-6 h-6 relative z-10 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800/50 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col space-y-2">
            {/* Mobile Profile Summary */}
            <div className="px-4 py-3 mb-2 border-b border-gray-800/50">
              <p className="text-white font-medium">Abdullah Al Luman</p>
              <p className="text-xs text-gray-400">Executive Engineer, BWDB</p>
              <p className="text-xs text-gray-500 mt-1">Kushtia, Bangladesh</p>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`group relative px-4 py-3 text-left transition-all duration-200 rounded-lg overflow-hidden ${
                  activeSection === link.href
                    ? "text-white bg-blue-600/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {link.label === "Home" && <span className="mr-3">🏠</span>}
                  {link.label === "About" && <span className="mr-3">👤</span>}
                  {link.label === "Career" && <span className="mr-3">💼</span>}
                  {link.label === "Education" && (
                    <span className="mr-3">🎓</span>
                  )}
                  {link.label === "Why Work With Me" && (
                    <span className="mr-3">⭐</span>
                  )}
                  {link.label === "Blog" && <span className="mr-3">📝</span>}
                  {link.label === "Contact" && <span className="mr-3">📞</span>}
                  {link.label}
                  {activeSection === link.href && (
                    <span className="ml-auto text-xs text-blue-400">●</span>
                  )}
                  <svg
                    className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
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
                </span>
                <span
                  className={`absolute inset-0 scale-x-0 transition-transform origin-left ${
                    activeSection === link.href
                      ? "bg-blue-600/10"
                      : "bg-gray-800/50 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-6 mt-2 border-t border-gray-800/50">
              <a
                href="https://linkedin.com/in/abdullah-al-luman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-xs">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/abdullahalluman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="text-xs">Twitter</span>
              </a>
              <a
                href="https://github.com/abdullahalluman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="text-xs">GitHub</span>
              </a>
            </div>

            <div className="text-center mt-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Executive Engineer at BWDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
