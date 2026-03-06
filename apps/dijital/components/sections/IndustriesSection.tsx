"use client";

import { useEffect, useRef } from "react";

const industries = [
  {
    title: "Üretim & Endüstri",
    desc: "ERP entegrasyonu, üretim takibi, kalite yönetimi ve lojistik otomasyonu.",
    tags: ["ERP", "Üretim Takibi", "Kalite"],
  },
  {
    title: "Tekstil & Hazır Giyim",
    desc: "Sipariş yönetimi, model ve ürün takibi, bayi portalleri ve ihracat süreçleri.",
    tags: ["Sipariş", "Bayi Portalı", "İhracat"],
  },
  {
    title: "Finans & Muhasebe",
    desc: "Muhasebe entegrasyonu, fatura takibi, kredi yönetimi ve raporlama sistemleri.",
    tags: ["Muhasebe", "Fatura", "Raporlama"],
  },
  {
    title: "İnşaat & Gayrimenkul",
    desc: "Proje takibi, hak ediş yönetimi, bina yönetimi ve satış süreçleri.",
    tags: ["Proje Takibi", "Hak Ediş", "CRM"],
  },
  {
    title: "Perakende & E-Ticaret",
    desc: "Online satış kanalları, stok entegrasyonu, müşteri yönetimi ve pazaryeri.",
    tags: ["E-Ticaret", "Stok", "Pazar Yeri"],
  },
  {
    title: "Hizmet & Danışmanlık",
    desc: "CRM, saha ekibi takibi, teklif yönetimi ve müşteri self-servis portalları.",
    tags: ["CRM", "Saha", "Self-Servis"],
  },
];

export default function IndustriesSection() {
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
        <p className="section-num reveal">04 — Sektörler</p>
        <h2 className="section-title reveal reveal-delay-1">
          Sektörünüze özel{" "}
          <em style={{ color: "var(--gold)" }}>dijital dönüşüm.</em>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginTop: "1rem" }}>
          Her sektörün dinamikleri farklı. Çözümlerimiz sektörünüzün diline konuşur.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}
        className="industries-grid"
      >
        {industries.map((ind, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              padding: "2.5rem 2rem",
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              transitionDelay: `${i * 0.07}s`,
              transition: "background 0.3s ease, border-color 0.3s ease",
              cursor: "default",
              borderTop: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--surface)";
              el.style.borderTopColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.borderTopColor = "transparent";
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                marginBottom: "0.75rem",
              }}
            >
              {ind.title}
            </h3>

            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--dim)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {ind.desc}
            </p>

            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {ind.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    border: "1px solid var(--line)",
                    padding: "0.2rem 0.5rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
