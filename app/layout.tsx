import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "বাঙালির হেঁসেল | Bangalir Hansal — Bengali Restaurant, Serampore",
  description:
    "Bangalir Hansal — Serampore's home of authentic Bengali cuisine. Slow-cooked, soulful food rooted in Hooghly's culinary heritage. সুস্বাদু খাবারের একটাই ঠিকানা।",
  keywords: ["Bengali restaurant", "Serampore", "Hooghly", "Bangalir Hansal", "বাঙালির হেঁসেল"],
  openGraph: {
    title: "বাঙালির হেঁসেল | Bangalir Hansal",
    description: "Serampore's heartfelt ode to authentic Bengali cooking.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
