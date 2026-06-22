import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f5] border-b border-gray-200">
      <div className="w-full pl-2 pr-4 md:pl-4 md:pr-8 py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/logo.PNG"
          alt="Shahed Logo"
          className="h-12 md:h-16 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#about" className="hover:opacity-60 transition">
            About
          </a>

          <a href="#projects" className="hover:opacity-60 transition">
            Projects
          </a>

          <a href="#skills" className="hover:opacity-60 transition">
            Skills
          </a>

          <a href="#journey" className="hover:opacity-60 transition">
            Journey
          </a>

          <a href="#achievements" className="hover:opacity-60 transition">
            Achievements
          </a>

          <a href="#contact" className="hover:opacity-60 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5f5] border-t border-gray-300">
          <div className="flex flex-col p-6 gap-4 uppercase tracking-widest text-sm">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#journey" onClick={() => setMenuOpen(false)}>
              Journey
            </a>

            <a href="#achievements" onClick={() => setMenuOpen(false)}>
              Achievements
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
