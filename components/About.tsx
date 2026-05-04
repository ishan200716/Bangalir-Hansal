"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "100+",  label: "Authentic Recipes",    bengali: "রেসিপি" },
  { number: "500+",  label: "Happy Families Daily",  bengali: "পরিবার" },
  { number: "5★",    label: "Rated on Zomato",       bengali: "রেটিং"  },
  { number: "2018",  label: "Established",           bengali: "প্রতিষ্ঠিত" },
];

export default function About() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden mandala-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full
                      bg-[#8B1A1A]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#D4A017]/60" />
                <span className="font-ui text-[11px] tracking-[0.3em] text-[#D4A017]/70 uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="font-bengali text-4xl md:text-5xl font-bold text-[#F5E6D3] leading-tight mb-2">
                আমাদের হেঁসেলের
              </h2>
              <h2 className="font-bengali text-4xl md:text-5xl font-bold text-gold-shimmer leading-tight mb-8">
                গল্প
              </h2>

              <div className="space-y-5 font-body text-lg text-[#C8B49A]/80 leading-relaxed">
                <p>
                  <strong className="text-[#F5E6D3] font-semibold">Bangalir Hansal</strong> is
                  Serampore's heartfelt ode to authentic Bengali cooking. Rooted in the flavours of
                  Hooghly's rich culinary heritage, we bring to your plate the kind of food that
                  feels like home — slow-cooked, soulful, and made with love.
                </p>
                <p>
                  From river-fresh fish curries to timeless dal-bhat, every dish at our হেঁসেল
                  (kitchen) is crafted the old-fashioned way — because great food needs no
                  shortcuts. Each recipe carries the memory of a grandmother's patience and the
                  warmth of a Bengali afternoon.
                </p>
                <p className="font-bengali text-[#D4A017]/80 text-base italic">
                  "সুস্বাদু খাবারের একটাই ঠিকানা — বাঙালির হেঁসেল।"
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="#menu"
                  data-hover
                  className="inline-flex items-center gap-3 px-7 py-3.5
                             bg-[#8B1A1A] text-[#F5E6D3] font-ui text-sm tracking-[0.15em] uppercase
                             hover:bg-[#D4A017] hover:text-[#0D0806] transition-all duration-300"
                >
                  Explore Menu
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-7 relative overflow-hidden group"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D4A017]/20
                                group-hover:border-[#D4A017]/50 transition-colors duration-300" />

                <div className="font-display text-4xl font-bold text-gold-shimmer mb-1">
                  {s.number}
                </div>
                <div className="font-ui text-xs tracking-[0.15em] text-[#C8B49A]/50 uppercase">
                  {s.label}
                </div>
                <div className="font-bengali text-sm text-[#D4A017]/40 mt-1">
                  {s.bengali}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 divider-gold" />
    </section>
  );
}
