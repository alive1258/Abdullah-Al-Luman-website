"use client";
import {
  HiOutlineHeart,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineArrowUp,
} from "react-icons/hi";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-blue-500/50">
      {/* Animated gradient lines - matching navbar style */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Abdullah Al Luman
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Water Resources Engineer & Educator passionate about sustainable
              water management and knowledge sharing.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineHeart className="w-4 h-4 text-blue-400" />
              <span>Making waves in water management</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Experience",
                "Education",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMail className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:abdullah.luman@example.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
                >
                  abdullah.luman@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <a
                  href="tel:+8801..........."
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +880 1........
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h4>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="p-2.5 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-800 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-800 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-800 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-800 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 border border-gray-800 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4 text-gray-400 group-hover:text-pink-500" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-3">
                Subscribe to my newsletter
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-gray-900/60 border border-gray-800 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white placeholder-gray-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-8 sm:my-10 lg:my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-xs text-gray-500">
              Connect with me
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Abdullah Al Luman. Built with{" "}
            <HiOutlineHeart className="w-3 h-3 inline-block text-blue-400 mx-0.5" />{" "}
            for water and education.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 text-xs transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-gray-700">•</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-900/60 rounded-lg hover:bg-blue-500/20 border border-gray-800 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <HiOutlineArrowUp className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
