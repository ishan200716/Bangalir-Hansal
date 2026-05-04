"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const TOTAL_FRAMES = 159;
const SEQUENCE_PATH = (i: number) =>
  `/sequence/frame_${String(i).padStart(3, "0")}_delay-0.05s.webp`;

/* ── Overlay text sections ── */
const textSections = [
  {
    threshold: 0,
    bengali: "সুস্বাদু খাবারের",
    sub: "একটাই ঠিকানা",
    english: "The only address for delicious food",
    align: "center" as const,
    size: "lg",
  },
  {
    threshold: 0.28,
    bengali: "হুগলির মাটির গন্ধ",
    sub: "প্রতিটি রান্নায়",
    english: "The soul of Hooghly in every dish",
    align: "left" as const,
    size: "md",
  },
  {
    threshold: 0.58,
    bengali: "মায়ের হাতের মতো",
    sub: "যত্নে রান্না করা",
    english: "Cooked with the care of a mother's hands",
    align: "right" as const,
    size: "md",
  },
];

function useImageSequence(totalFrames: number) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const images: HTMLImageElement[] = [];
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = SEQUENCE_PATH(i);
      images.push(img);
    }
    imagesRef.current = images;
  }, [totalFrames]);

  return imagesRef;
}

function drawCoverFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;

  const scale = Math.max(cw / iw, ch / ih);
  const sw = iw * scale;
  const sh = ih * scale;

  // Keep the image perfectly centered on both mobile and desktop to prevent the logo from getting cut off
  const alignX = 0.5;

  const ox = (cw - sw) * alignX;
  const oy = (ch - sh) / 2;
  ctx.drawImage(img, ox, oy, sw, sh);
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useImageSequence(TOTAL_FRAMES);
  const frameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Smooth frame index */
  const rawFrame = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const smoothFrame = useSpring(rawFrame, { stiffness: 120, damping: 30 });

  /* Draw on canvas whenever smoothed frame changes */
  useEffect(() => {
    return smoothFrame.on("change", (val) => {
      const idx = Math.round(Math.min(Math.max(val, 0), TOTAL_FRAMES - 1));
      if (idx === frameRef.current) return;
      frameRef.current = idx;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[idx];
      if (!img?.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCoverFrame(ctx, img, canvas.width, canvas.height);
    });
  }, [smoothFrame, imagesRef]);

  /* Resize canvas to fill screen */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      /* Redraw current frame after resize */
      const ctx = canvas.getContext("2d");
      const img = imagesRef.current[frameRef.current];
      if (ctx && img?.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCoverFrame(ctx, img, canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [imagesRef]);

  /* Draw first frame once images start loading */
  useEffect(() => {
    const img = imagesRef.current[0];
    if (!img) return;
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCoverFrame(ctx, img, canvas.width, canvas.height);
    };
    img.complete ? draw() : (img.onload = draw);
  }, [imagesRef]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Fallback gradient bg while sequence loads */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D0808] via-[#1A0A0A] to-[#0D0806]" />

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(13,8,6,0.75) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #0D0806)",
          }}
        />

        {/* Text overlays */}
        {textSections.map((section, i) => {
          const start = Math.max(0, section.threshold - 0.06);
          const peak = section.threshold + 0.05;
          const end = section.threshold + 0.22;

          const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
          const translateY = useTransform(scrollYProgress, [start, peak, end], [30, 0, -30]);

          const alignClass = {
            center: "items-center text-center",
            left: "items-start text-left pl-12 md:pl-24",
            right: "items-end text-right pr-12 md:pr-24",
          }[section.align];

          return (
            <motion.div
              key={i}
              style={{ opacity, y: translateY }}
              className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
            >
              {/* Decorative line */}
              <motion.div className="w-12 h-px bg-[#D4A017] mb-6 opacity-70" />

              <h1
                className={`font-bengali font-bold leading-tight text-[#F5E6D3] drop-shadow-2xl ${section.size === "lg"
                  ? "text-5xl md:text-7xl lg:text-8xl"
                  : "text-4xl md:text-5xl lg:text-6xl"
                  }`}
                style={{ textShadow: "0 4px 40px rgba(13,8,6,0.8)" }}
              >
                {section.bengali}
                <br />
                <span className="text-gold-shimmer">{section.sub}</span>
              </h1>

              <p className="mt-4 font-body italic text-[#C8B49A]/80 text-lg md:text-xl tracking-wide">
                {section.english}
              </p>

              {i === 0 && (
                <div className="flex items-center gap-4 mt-8">
                  <a
                    href="#menu"
                    className="px-6 py-3 bg-[#8B1A1A] text-[#F5E6D3] font-ui text-sm tracking-[0.15em] uppercase
                               hover:bg-[#D4A017] hover:text-[#0D0806] transition-all duration-300 pointer-events-auto"
                  >
                    See Our Menu
                  </a>

                </div>
              )}
            </motion.div>
          );
        })}

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-[#C8B49A]/50">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4A017]/50 to-transparent animate-flicker" />
        </motion.div>

        {/* Frame counter (dev) - remove in production */}
        {/* <div className="absolute top-24 right-6 text-xs text-white/20 font-mono z-20">
          {Math.round(rawFrame.get())} / {TOTAL_FRAMES}
        </div> */}
      </div>
    </section>
  );
}
