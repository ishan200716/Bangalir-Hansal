"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const categories = ["সব", "মাছ", "মাংস", "ভাত ও ডাল", "মিষ্টি"];

const dishes = [
  {
    name:     "সরষে ইলিশ",
    english:  "Mustard Hilsa",
    price:    "₹320",
    category: "মাছ",
    tag:      "Chef's Special",
    desc:     "Hilsa fish in a fiery mustard-mustard seed gravy — the pride of Bengali cuisine.",
    spice:    3,
  },
  {
    name:     "চিংড়ি মালাই কারি",
    english:  "Prawn Malai Curry",
    price:    "₹280",
    category: "মাছ",
    tag:      "Popular",
    desc:     "Plump river prawns slow-cooked in velvety coconut milk with whole spices.",
    spice:    2,
  },
  {
    name:     "মুটন কষা",
    english:  "Mutton Kosha",
    price:    "₹380",
    category: "মাংস",
    tag:      "Weekend Special",
    desc:     "Slow-cooked mutton in a thick, deeply caramelised onion-ginger gravy.",
    spice:    4,
  },
  {
    name:     "ভাপা দই",
    english:  "Steamed Yoghurt",
    price:    "₹80",
    category: "মিষ্টি",
    tag:      "Must Try",
    desc:     "Silky steamed curd with cardamom — the understated crown of the Bengali dessert table.",
    spice:    0,
  },
  {
    name:     "ডাল-ভাত সেট",
    english:  "Dal-Bhat Thali",
    price:    "₹180",
    category: "ভাত ও ডাল",
    tag:      "Best Value",
    desc:     "A complete Bengali thali: dal, rice, fry, sabji, achar, papad — the full comfort meal.",
    spice:    1,
  },
  {
    name:     "পাবদা ঝাল",
    english:  "Pabda Fish Curry",
    price:    "₹240",
    category: "মাছ",
    tag:      "Seasonal",
    desc:     "Tender pabda fish in a sharp green chilli and cumin-forward gravy.",
    spice:    3,
  },
];

function SpiceIndicator({ level }: { level: number }) {
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            i <= level ? "bg-[#8B1A1A]" : "bg-[#D4A017]/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function MenuHighlights() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("সব");

  const filtered = active === "সব" ? dishes : dishes.filter(d => d.category === active);

  return (
    <section id="menu" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/2 -translate-y-1/2
                      rounded-full bg-[#D4A017]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4A017]/40" />
            <span className="font-ui text-[11px] tracking-[0.3em] text-[#D4A017]/60 uppercase">
              Our Menu
            </span>
            <div className="h-px w-16 bg-[#D4A017]/40" />
          </div>
          <h2 className="font-bengali text-5xl md:text-6xl font-bold text-[#F5E6D3] leading-tight">
            রান্নাঘরের
            <span className="text-gold-shimmer ml-3">গল্প</span>
          </h2>
          <p className="mt-4 font-body italic text-[#C8B49A]/60 text-xl">
            Signature dishes from our kitchen
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-hover
              className={`px-5 py-2 font-bengali text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-[#8B1A1A] text-[#F5E6D3] border border-[#8B1A1A]"
                  : "border border-[#D4A017]/20 text-[#C8B49A]/60 hover:border-[#D4A017]/50 hover:text-[#D4A017]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="glass-card p-6 relative group cursor-default"
              data-hover
            >
              {/* Tag */}
              <div className="absolute -top-3 left-5">
                <span className="px-3 py-1 bg-[#8B1A1A] text-[#F5E6D3] font-ui text-[10px] tracking-[0.2em] uppercase">
                  {dish.tag}
                </span>
              </div>

              <div className="flex justify-between items-start mb-3 pt-2">
                <div>
                  <h3 className="font-bengali text-xl font-semibold text-[#F5E6D3] group-hover:text-[#D4A017] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="font-body italic text-[#C8B49A]/50 text-sm mt-0.5">{dish.english}</p>
                </div>
                <span className="font-display text-lg text-[#D4A017] font-bold ml-4 whitespace-nowrap">
                  {dish.price}
                </span>
              </div>

              <p className="font-body text-[#C8B49A]/65 text-sm leading-relaxed mb-4">
                {dish.desc}
              </p>

              <div className="flex items-center justify-between">
                <SpiceIndicator level={dish.spice} />
                <span className="font-bengali text-xs text-[#D4A017]/40">{dish.category}</span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#reserve"
            data-hover
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#D4A017]/30
                       text-[#D4A017] font-ui text-sm tracking-[0.2em] uppercase
                       hover:bg-[#D4A017]/10 transition-all duration-300"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>

      <div className="mt-24 divider-gold" />
    </section>
  );
}
