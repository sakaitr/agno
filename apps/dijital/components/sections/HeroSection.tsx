"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    const onHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isHoverable = t.closest("a, button");
      if (ringRef.current) {
        ringRef.current.classList.toggle("hovering", !!isHoverable);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 6vw, 5rem)",
          paddingTop: "8rem",
          overflow: "hidden",
        }}
      >
        {/* Background grid lines */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(var(--line) 1px, transparent 1px),
              linear-gradient(90deg, var(--line) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            pointerEvents: "none",
          }}
        />

        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            background:
              "radial-gradient(ellipse, rgba(232,213,163,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: "clamp(5rem, 10vw, 7rem)",
            left: "clamp(1.5rem, 6vw, 5rem)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--dim)",
            animation: "fadeIn 1.5s ease forwards",
          }}
        >
          — agno dijital
        </div>

        {/* Vertical label right */}
        <div
          style={{
            position: "absolute",
            right: "clamp(1.5rem, 4vw, 3rem)",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            transformOrigin: "center",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--dim)",
            whiteSpace: "nowrap",
            animation: "fadeIn 2s ease forwards",
          }}
        >
          ERP · CRM · Web · Dijital Dönüşüm
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "1.5rem",
              animation: "fadeSlide 1s cubic-bezier(0.16,1,0.3,1) 0.2s both",
            }}
          >
            Dijital Dönüşüm Platformu
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{
                display: "block",
                animation: "fadeSlide 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s both",
              }}
            >
              Sektörünüzde
            </span>
            <span
              style={{
                display: "block",
                color: "var(--gold)",
                fontStyle: "italic",
                animation: "fadeSlide 1.1s cubic-bezier(0.16,1,0.3,1) 0.45s both",
              }}
            >
              öncü olun.
            </span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "var(--dim)",
              maxWidth: "42rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              animation: "fadeSlide 1.1s cubic-bezier(0.16,1,0.3,1) 0.55s both",
            }}
          >
            KOBİ'lerden holding yapılarına kadar — ERP, CRM, sektöre özel
            yazılım ve kapsamlı dijital dönüşüm çözümleri. Yol çiziyoruz.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              animation: "fadeSlide 1.1s cubic-bezier(0.16,1,0.3,1) 0.65s both",
            }}
          >
            <Link href="/hizmetler" className="btn-main">
              Hizmetlerimiz
            </Link>
            <Link href="/iletisim" className="btn-ghost">
              İletişime Geç →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "clamp(1.5rem, 6vw, 5rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            animation: "fadeIn 2s ease 1s both",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--dim)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Aşağı
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "var(--line)",
              animation: "scrollPulse 2s ease infinite",
            }}
          />
        </div>
      </section>
    </>
  );
}
