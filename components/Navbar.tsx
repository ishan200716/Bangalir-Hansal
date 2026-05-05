"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "আমাদের গল্প", href: "#about" },
  { label: "মেনু",        href: "#menu"  },
  { label: "গ্যালারি",   href: "#gallery" },
  { label: "যোগাযোগ",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0D0806]/80 border-b border-[#D4A017]/10 py-3"
          : "py-6"
      }`}
    >
      {/* Mobile layout: 3-column grid so logo is centered */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-[40px_1fr_40px] md:flex items-center md:justify-between">
        {/* Empty spacer on mobile left (matches hamburger width) */}
        <div className="md:hidden" />

        {/* Logo – centered on mobile, left-aligned on desktop */}
        <a href="#" className="flex flex-col items-center md:items-start leading-none shrink-0 justify-self-center md:justify-self-start" data-hover>
          <span className="font-bengali text-lg md:text-xl font-bold text-[#D4A017] tracking-wide whitespace-nowrap">
            বাঙালির হেঁসেল
          </span>
          <span className="font-ui text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.25em] text-[#C8B49A]/60 uppercase mt-0.5 whitespace-nowrap">
            Bengali Restaurant · Serampore
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-hover
              className="relative font-bengali text-sm text-[#C8B49A]/70 hover:text-[#D4A017] transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A017] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 justify-self-end"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-[#D4A017] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-4 h-px bg-[#D4A017] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#D4A017] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#0D0806]/95 backdrop-blur-xl border-b border-[#D4A017]/10"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-bengali text-base py-3 text-[#C8B49A] border-b border-[#D4A017]/10 hover:text-[#D4A017] transition-colors"
            >
              {l.label}
            </a>
          ))}

        </div>
      </motion.div>
    </motion.header>
  );
}
