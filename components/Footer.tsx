"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "Facebook",  href: "#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#080402] border-t border-[#D4A017]/8 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="font-bengali text-2xl font-bold text-[#D4A017] mb-2">
              বাঙালির হেঁসেল
            </div>
            <div className="font-ui text-[10px] tracking-[0.25em] text-[#C8B49A]/40 uppercase mb-5">
              Bengali Restaurant · Serampore
            </div>
            <p className="font-body text-[#C8B49A]/50 text-sm leading-relaxed mb-6">
              Serampore's heartfelt ode to authentic Bengali cooking. Rooted in the flavours
              of Hooghly's rich culinary heritage.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  data-hover
                  aria-label={s.name}
                  className="w-9 h-9 border border-[#D4A017]/20 flex items-center justify-center
                             text-[#C8B49A]/40 hover:text-[#D4A017] hover:border-[#D4A017]/50
                             transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="font-ui text-[11px] tracking-[0.25em] text-[#D4A017]/60 uppercase mb-5">
              Opening Hours
            </div>
            <div className="space-y-3">
              {[
                { day: "Mon – Fri", time: "11:00 AM – 10:30 PM" },
                { day: "Saturday",  time: "10:00 AM – 11:00 PM" },
                { day: "Sunday",    time: "10:00 AM – 11:30 PM" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between font-body text-sm">
                  <span className="text-[#C8B49A]/50">{h.day}</span>
                  <span className="text-[#F5E6D3]/70">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span className="font-ui text-xs text-[#4CAF50]/80">Open Now</span>
            </div>
          </div>

          {/* Address & contact */}
          <div>
            <div className="font-ui text-[11px] tracking-[0.25em] text-[#D4A017]/60 uppercase mb-5">
              Find Us
            </div>
            <address className="not-italic space-y-3 font-body text-sm text-[#C8B49A]/55 leading-relaxed">
              <p>
                Bangalir Hansal<br />
                Serampore, Hooghly<br />
                West Bengal – 712201
              </p>
              <a href="tel:+91XXXXXXXXXX" data-hover
                 className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
                📞 +91 XXXXX XXXXX
              </a>
              <a href="mailto:hello@bangalirhansal.in" data-hover
                 className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
                ✉ hello@bangalirhansal.in
              </a>
            </address>

            {/* Map placeholder */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="mt-5 inline-flex items-center gap-2 font-ui text-[10px] tracking-[0.2em] uppercase
                         text-[#D4A017]/50 border border-[#D4A017]/15 px-4 py-2
                         hover:border-[#D4A017]/40 hover:text-[#D4A017] transition-all duration-300"
            >
              Open in Maps →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D4A017]/8 flex flex-col md:flex-row
                        items-center justify-between gap-4">
          <p className="font-ui text-[11px] text-[#C8B49A]/30 tracking-wide">
            © 2024 বাঙালির হেঁসেল. All rights reserved.
          </p>
          <p className="font-bengali text-xs text-[#D4A017]/25">
            সুস্বাদু খাবারের একটাই ঠিকানা
          </p>
        </div>
      </div>
    </footer>
  );
}
