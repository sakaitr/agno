"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const contactPaths = [
  {
    label: "E-posta",
    value: "info@agno.com.tr",
    href: "mailto:info@agno.com.tr",
    detail: "Proje detaylarını paylaşın",
  },
  {
    label: "WhatsApp",
    value: "Hızlı Mesaj",
    href: "https://wa.me/905000000000?text=Merhaba%2C%20agno%20dijital%20hizmetleri%20hakk%C3%B1nda%20bilgi%20almak%20istiyorum.",
    detail: "Anında yanıt alın",
    external: true,
  },
  {
    label: "İletişim Formu",
    value: "Detaylı Başvuru",
    href: "/iletisim",
    detail: "Tüm bilgileri iletin",
    highlight: true,
  },
];

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="page-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ghost text background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-5vw",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(8rem, 22vw, 20rem)",
          fontWeight: 600,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px var(--line)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Agno
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Label */}
        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--dim)",
            marginBottom: "1.5rem",
          }}
        >
          — Birlikte Çalışalım
        </p>

        {/* Heading */}
        <h2
          className="section-title reveal reveal-delay-1"
          style={{ marginBottom: "1rem" }}
        >
          Projenizi
          <br />
          <em style={{ color: "var(--gold)" }}>konuşalım.</em>
        </h2>

        <p
          className="section-subtitle reveal reveal-delay-2"
          style={{ marginBottom: "4rem" }}
        >
          Dijital dönüşüm, yazılım geliştirme veya sektöre özel çözümler için
          iletişime geçin. İlk görüşme ücretsizdir.
        </p>

        {/* Contact paths */}
        <div
          className="reveal reveal-delay-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--line)",
            borderLeft: "1px solid var(--line)",
            maxWidth: "900px",
          }}
        >
          {contactPaths.map((path, i) => (
            <Link
              key={i}
              href={path.href}
              target={path.external ? "_blank" : undefined}
              rel={path.external ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem 2rem",
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                textDecoration: "none",
                background: path.highlight ? "rgba(232,213,163,0.04)" : "transparent",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = path.highlight
                  ? "rgba(232,213,163,0.09)"
                  : "var(--surface)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = path.highlight
                  ? "rgba(232,213,163,0.04)"
                  : "transparent";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  marginBottom: "0.75rem",
                }}
              >
                {path.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: path.highlight ? 400 : 300,
                  color: path.highlight ? "var(--gold)" : "var(--fg)",
                  marginBottom: "0.5rem",
                }}
              >
                {path.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  color: "var(--dim)",
                }}
              >
                {path.detail}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
