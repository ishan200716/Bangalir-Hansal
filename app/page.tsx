"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";

export default function Home() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  /* ── Custom cursor ── */
  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left  = `${mx}px`;
      dot.style.top   = `${my}px`;
    };

    let raf = 0;
    const lerp = () => {
      const rx = parseFloat(ring.style.left  || "0");
      const ry = parseFloat(ring.style.top   || "0");
      ring.style.left = `${rx + (mx - rx) * 0.12}px`;
      ring.style.top  = `${ry + (my - ry) * 0.12}px`;
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    const hover = () => ring.classList.add("hovered");
    const leave = () => ring.classList.remove("hovered");
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="relative bg-[#0D0806] min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />

      <Navbar />
      <ScrollyCanvas />
      <About />
      <Gallery />
      <Testimonials />

      <Footer />
    </main>
  );
}
