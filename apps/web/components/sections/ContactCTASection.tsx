"use client";

import { useEffect, useRef } from "react";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "905000000000";

export function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="iletisim-cta"
      ref={sectionRef}
      style={{
        padding: "clamp(120px, 18vw, 200px) clamp(24px, 5vw, 56px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost text background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(80px, 22vw, 280px)",
          fontWeight: 300,
          color: "rgba(240,237,232,0.025)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          letterSpacing: "-0.04em",
          fontStyle: "italic",
          userSelect: "none",
        }}
      >
        Agno
      </div>

      <p
        className="reveal"
        style={{
          fontSize: "0.58rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--dim)",
          marginBottom: "32px",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        — Birlikte Çalışalım
      </p>

      <h2
        className="reveal"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(3rem, 8vw, 8rem)",
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          marginBottom: "32px",
        }}
      >
        Projeniz
        <br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>hazır mı?</em>
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "var(--dim)",
          maxWidth: "440px",
          margin: "0 auto 64px",
        }}
      >
        Dijital dönüşüm, yazılım geliştirme veya 3D üretim konularında
        konuşmak için bize ulaşın. İlk görüşme ücretsizdir.
      </p>

      {/* Three paths */}
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: "720px",
          margin: "0 auto",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}
      >
        {/* Email */}
        <a
          href="mailto:info@agno.com.tr"
          className="cta-path"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "40px 24px",
            borderRight: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            textDecoration: "none",
            transition: "background 0.4s",
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--dim)",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            E-posta
          </span>
          <span
            className="cta-label"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--fg)",
              transition: "color 0.3s",
            }}
          >
            info@agno.com.tr
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--dim)", transition: "color 0.3s" }} className="cta-arrow">↗</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=Merhaba%2C%20proje%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-path"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "40px 24px",
            borderRight: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            textDecoration: "none",
            transition: "background 0.4s",
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--dim)",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            WhatsApp
          </span>
          <span
            className="cta-label"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--fg)",
              transition: "color 0.3s",
            }}
          >
            Hızlı Mesaj
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--dim)", transition: "color 0.3s" }} className="cta-arrow">↗</span>
        </a>

        {/* Contact form */}
        <a
          href="/iletisim"
          className="cta-path cta-main"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "40px 24px",
            borderRight: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            textDecoration: "none",
            transition: "background 0.4s",
            background: "rgba(232,213,163,0.04)",
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "var(--font-geist-mono), monospace",
              opacity: 0.8,
            }}
          >
            Detaylı
          </span>
          <span
            className="cta-label"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--fg)",
              transition: "color 0.3s",
            }}
          >
            İletişim Formu
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--gold)", opacity: 0.6, transition: "color 0.3s" }} className="cta-arrow">→</span>
        </a>
      </div>

      <style>{`
        .cta-path:hover { background: rgba(240,237,232,0.03); }
        .cta-path:hover .cta-label { color: var(--gold); }
        .cta-path:hover .cta-arrow { color: var(--gold); opacity: 1; }
        .cta-main:hover { background: rgba(232,213,163,0.08) !important; }
      `}</style>
    </section>
  );
}
