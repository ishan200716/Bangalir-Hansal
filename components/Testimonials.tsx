"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    name:    "Sourav Chatterjee",
    loc:     "Serampore",
    stars:   5,
    text:    "The mustard hilsa here is absolutely legendary. It tastes exactly like my dida used to make — I haven't tasted anything this authentic in years.",
    bengali: "অসাধারণ খাবার!",
    platform: "Zomato",
  },
  {
    name:    "Priyanka Ghosh",
    loc:     "Kolkata",
    stars:   5,
    text:    "Drove all the way from Kolkata for the mutton kosha. Completely worth it. The ambience feels warm and homely, just like the food.",
    bengali: "মনে রাখার মতো অভিজ্ঞতা",
    platform: "Google",
  },
  {
    name:    "Arnab Mitra",
    loc:     "Hooghly",
    stars:   5,
    text:    "Best Bengali thali in the district, hands down. The bhaapa doi at the end is the perfect finish. Became a regular after the first visit.",
    bengali: "প্রতি সপ্তাহে আসি!",
    platform: "Zomato",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < n ? "#D4A017" : "none"}>
          <path
            d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.435L7 8.765l-3.09 1.74.59-3.435L2 4.635l3.455-.505L7 1z"
            stroke="#D4A017" strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" ref={ref} className="relative py-32 mandala-bg overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
                      rounded-full bg-[#8B1A1A]/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4A017]/40" />
            <span className="font-ui text-[11px] tracking-[0.3em] text-[#D4A017]/60 uppercase">
              Reviews
            </span>
            <div className="h-px w-16 bg-[#D4A017]/40" />
          </div>
          <h2 className="font-bengali text-5xl md:text-6xl font-bold text-[#F5E6D3]">
            মনের <span className="text-gold-shimmer">কথা</span>
          </h2>
          <p className="mt-3 font-body italic text-[#C8B49A]/60 text-xl">
            What our guests say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-7 flex flex-col gap-4 relative group"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-6 font-display text-6xl text-[#D4A017]/15 leading-none">
                "
              </div>

              <Stars n={r.stars} />

              <p className="font-body text-[#C8B49A]/75 leading-relaxed text-base flex-1">
                {r.text}
              </p>

              <div className="font-bengali text-sm text-[#D4A017]/50 italic">
                "{r.bengali}"
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#D4A017]/10">
                <div>
                  <div className="font-ui text-sm font-medium text-[#F5E6D3]">{r.name}</div>
                  <div className="font-ui text-xs text-[#C8B49A]/40">{r.loc}</div>
                </div>
                <span className="font-ui text-[10px] tracking-[0.15em] text-[#D4A017]/40 uppercase border border-[#D4A017]/15 px-2 py-0.5">
                  {r.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 divider-gold" />
    </section>
  );
}
