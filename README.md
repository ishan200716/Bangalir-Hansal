# বাঙালির হেঁসেল — Bangalir Hansal Website

A high-end scrollytelling restaurant website built with Next.js 14, Framer Motion, and HTML5 Canvas.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Canvas:** HTML5 Canvas for scroll-linked image sequence

## Brand Colors
| Name        | Hex       |
|-------------|-----------|
| Brand Red   | `#8B1A1A` |
| Dark Red    | `#6B0F0F` |
| Deep Red    | `#3D0808` |
| Gold        | `#D4A017` |
| Gold Light  | `#F0C040` |
| Cream       | `#F5E6D3` |
| Background  | `#0D0806` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Image Sequence Setup

1. Place your WebP frame sequence in `/public/sequence/`
2. Name files: `frame_00_delay-0.067s.webp`, `frame_01_delay-0.067s.webp`, ... up to frame_88
3. The background of frames should be `#0D0806` for seamless blending

> **Tip:** You can generate the sequence from a video using FFmpeg:
> ```bash
> ffmpeg -i your_food_video.mp4 -vf "fps=15,scale=1920:-1" public/sequence/frame_%02d_delay-0.067s.webp
> ```

## Project Structure

```
bangalir-hansal/
├── app/
│   ├── globals.css        # Global styles, fonts, variables
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main page composition
├── components/
│   ├── Navbar.tsx         # Sticky nav with Bengali links
│   ├── ScrollyCanvas.tsx  # ★ Core scrollytelling canvas hero
│   ├── About.tsx          # Restaurant story + stats
│   ├── MenuHighlights.tsx # Filterable dish cards
│   ├── Gallery.tsx        # Masonry photo gallery
│   ├── Testimonials.tsx   # Zomato/Google reviews
│   ├── ReservationCTA.tsx # Table booking form
│   └── Footer.tsx         # Contact, hours, social
└── public/
    └── sequence/          # ← Put your WebP frames here
```

## Customization Checklist

- [ ] Add real phone number in `ReservationCTA.tsx` and `Footer.tsx`
- [ ] Add real email in `Footer.tsx`
- [ ] Replace Gallery placeholder gradients with actual food photos
- [ ] Update menu items and prices in `MenuHighlights.tsx`
- [ ] Drop 89 WebP frames into `/public/sequence/`
- [ ] Connect reservation form to backend / WhatsApp API
- [ ] Update Zomato/Google review text in `Testimonials.tsx`
- [ ] Add Google Maps embed in Footer
