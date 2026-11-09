
"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`relative flex items-center justify-between rounded-2xl bg-[#11111f]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ${
            scrolled ? "px-6 py-2.5" : "px-6 py-4"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className={`font-bold text-white transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Marco<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 ${
              scrolled ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"
            }`}
          >
            Contact Me
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden mt-3 p-6 rounded-2xl bg-[#11111f]/95 backdrop-blur-2xl border border-white/10 shadow-xl flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-purple-400 font-medium"
            >
              Contact Me →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
