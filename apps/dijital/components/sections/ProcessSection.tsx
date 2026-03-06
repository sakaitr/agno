"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    idx: "01",
    title: "Analiz",
    desc: "Mevcut süreçlerinizi, ihtiyaçlarınızı ve hedeflerinizi derinlemesine analiz ediyoruz.",
  },
  {
    idx: "02",
    title: "Strateji",
    desc: "Dijital dönüşüm yol haritanızı ve çözüm mimarisini birlikte tasarlıyoruz.",
  },
  {
    idx: "03",
    title: "Geliştirme",
    desc: "Agile sprint'lerle iteratif ve şeffaf bir geliştirme süreci yürütüyoruz.",
  },
  {
    idx: "04",
    title: "Teslimat",
    desc: "Test, ekip eğitimi ve yönetilen canlıya alma süreciyle sistemi devreye alıyoruz.",
  },
  {
    idx: "05",
    title: "Destek",
    desc: "Canlıya almadan sonra da sürekli bakım, optimizasyon ve büyüme desteği veriyoruz.",
  },
];

export default function ProcessSection() {
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
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <p className="section-num reveal">03 — Süreç</p>
        <h2 className="section-title reveal reveal-delay-1">
          Nasıl{" "}
          <em style={{ color: "var(--gold)" }}>çalışıyoruz.</em>
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: "1px solid var(--line)",
        }}
        className="process-grid"
      >
        {steps.map((step, i) => (
          <div
            key={step.idx}
            className="reveal"
            style={{
              padding: "2.5rem 1.75rem",
              borderRight: i < steps.length - 1 ? "1px solid var(--line)" : "none",
              transitionDelay: `${i * 0.1}s`,
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {/* Step number */}
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              {step.idx}
            </p>

            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: "2.9rem",
                right: 0,
                width: "50%",
                height: "1px",
                background: i < steps.length - 1 ? "var(--line)" : "transparent",
                zIndex: 0,
              }}
            />

            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                fontWeight: 300,
                marginBottom: "0.85rem",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--dim)",
                lineHeight: 1.7,
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid > * {
            border-right: none !important;
            border-bottom: 1px solid var(--line);
          }
          .process-grid > *:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
