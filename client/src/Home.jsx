import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import { FiMenu, FiX, FiHeart, FiArrowDown } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Me",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  const getId = (item) => {
    if (item === "About Me") return "about";

    return item.toLowerCase();
  };
const githubUrl = import.meta.env.VITE_GITHUB_URL;
const email = import.meta.env.VITE_EMAIL;
  return (
    <section
      id="home"
      className="min-h-screen bg-[#fff8fb]"
    >
      {/* Navbar */}
      <nav className="border-b border-[#f1dce5] bg-white">
        <div className="mx-auto flex max-w-[1024px] items-center justify-between px-[30px] py-[16px] md:px-[67px]">

          {/* Logo */}
          <a
            href="#home"
            className="text-[31px] font-bold text-[#e85b9b]"
          >
            Pooja<span className="text-[#e828c8] text-xl">♥</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-[25px] md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${getId(item)}`}
                className="text-[12px] font-medium text-gray-600 transition hover:text-[#e85b9b]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#e85b9b] md:hidden"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#f3e1e8] bg-white px-[30px] py-[12px] md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${getId(item)}`}
                onClick={() => setMenuOpen(false)}
                className="block py-[9px] text-[13px] text-gray-600 hover:text-[#e85b9b]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[1024px] items-center px-[30px] md:px-[67px]">

        <div className="grid w-full items-center gap-[50px] md:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}
          <div>

            <p className="mb-[8px] text-[14px] font-medium text-[#e85b9b]">
              Hello, I'm
            </p>

            <h1 className="text-[42px] font-bold leading-[1.1] text-[#222] md:text-[52px]">
              Pooja
            </h1>

            <h2 className="mt-[8px] text-[22px] font-semibold text-[#444] md:text-[27px]">
              Java Full Stack Developer
            </h2>

            <p className="mt-[15px] max-w-[520px] text-[13px] leading-[22px] text-gray-600">
              Passionate about building clean, responsive and
              user-friendly web applications using modern
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-[23px] flex flex-wrap gap-[10px]">

              <a
                href="#projects"
                className="rounded-[5px] bg-[#e85b9b] px-[18px] py-[9px] text-[11px] font-medium text-white transition hover:bg-[#db4d8c]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-[5px] border border-[#e85b9b] px-[18px] py-[9px] text-[11px] font-medium text-[#e85b9b] transition hover:bg-[#fff0f6]"
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}
            <div className="mt-[22px] flex items-center gap-[13px]">

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#fde8f1] text-[#e85b9b] transition hover:bg-[#e85b9b] hover:text-white"
              >
                <FaGithub size={15} />
              </a>

              
              <a
                href={`mailto:${email}`} 
                className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#fde8f1] text-[#e85b9b] transition hover:bg-[#e85b9b] hover:text-white"
              >
                <FaGoogle size={14} />
              </a>

            </div>
          </div>

          {/* Right Profile Circle */}
          <div className="flex justify-center md:justify-end">

            <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full bg-[#fde8f1] md:h-[300px] md:w-[300px]">

              <div className="flex h-[220px] w-[220px] items-center justify-center rounded-full border-[5px] border-white bg-[#f7c8dc] md:h-[255px] md:w-[255px]">

                <span className="text-[65px] font-bold text-white">
                  P
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-[18px] left-1/2 hidden -translate-x-1/2 flex-col items-center text-[#e85b9b] md:flex">
        <span className="text-[9px]">Scroll Down</span>
        <FiArrowDown size={14} className="mt-[3px]" />
      </div>
    </section>
  );
}