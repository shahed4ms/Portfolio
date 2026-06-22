export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f5]">
      <div className="px-8 py-8 flex justify-between items-center">
        <div>
            <img src="/logo.PNG" alt="ShahedLogo" className="h-16 w-auto" />
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-widest">
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
      </div>
    </nav>
  );
}
