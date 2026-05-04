"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* 
  Replace these placeholder gradients with actual <Image> components
  pointing to your food photography once you have the photos.
  e.g. <Image src="/gallery/ilish.jpg" alt="Ilish" fill className="object-cover" />
*/
const galleryItems = [
  { label: "সরষে ইলিশ", sub: "Mustard Hilsa",   bg: "from-[#8B1A1A]/60 to-[#3D0808]",  span: "row-span-2" },
  { label: "হেঁসেল",    sub: "Our Kitchen",     bg: "from-[#6B0F0F]/50 to-[#0D0806]",  span: "" },
  { label: "মিষ্টি",    sub: "Sweets & Desserts",bg: "from-[#B8860B]/40 to-[#3D0808]",  span: "" },
  { label: "আড্ডা",     sub: "The Dining Space",  bg: "from-[#1A0A0A]/80 to-[#3D0808]",  span: "col-span-2" },
  { label: "চিংড়ি",    sub: "Prawn Malai",      bg: "from-[#8B1A1A]/50 to-[#6B0F0F]",  span: "" },
];

export default function Gallery() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#D4A017]/60" />
              <span className="font-ui text-[11px] tracking-[0.3em] text-[#D4A017]/70 uppercase">
                Gallery
              </span>
            </div>
            <h2 className="font-bengali text-5xl md:text-6xl font-bold text-[#F5E6D3]">
              চোখের <span className="text-gold-shimmer">ভোজ</span>
            </h2>
            <p className="font-body italic text-[#C8B49A]/60 text-xl mt-2">
              A feast for the eyes
            </p>
          </div>

          <a
            href="#"
            data-hover
            className="font-ui text-xs tracking-[0.2em] uppercase text-[#D4A017]/60 hover:text-[#D4A017]
                       flex items-center gap-2 transition-colors"
          >
            View all photos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
            >
              {/* Placeholder — replace with <Image> */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />

              {/* Decorative pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0D0806]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2
                              group-hover:translate-y-0 transition-transform duration-400">
                <div className="h-px w-8 bg-[#D4A017]/70 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
                <div className="font-bengali font-semibold text-[#F5E6D3] text-base">{item.label}</div>
                <div className="font-body italic text-[#C8B49A]/60 text-sm">{item.sub}</div>
              </div>

              {/* Corner ornament */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-[#D4A017]/20
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 divider-gold" />
    </section>
  );
}
