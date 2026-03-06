"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    idx: "01",
    title: "Endüstriyel ERP Entegrasyonu",
    client: "Üretim Firması",
    category: "ERP Çözümü",
    desc: "500+ kullanıcılı kapsamlı ERP sistemi. Stok, muhasebe, üretim ve lojistik modülleri tek platformda.",
    tags: ["ERP", "PostgreSQL", "React"],
    year: "2024",
  },
  {
    idx: "02",
    title: "B2B E-Ticaret Platformu",
    client: "Toptan Satış Şirketi",
    category: "Web & Portal",
    desc: "Özel fiyatlandırma, bayi yönetimi ve entegre ödeme sistemi ile kurgulanmış B2B e-ticaret platformu.",
    tags: ["Next.js", "Prisma", "Stripe"],
    year: "2024",
  },
  {
    idx: "03",
    title: "CRM & Satış Otomasyonu",
    client: "Finans Şirketi",
    category: "CRM Sistemi",
    desc: "Özelleştirilmiş CRM ile satış süreçlerini %40 hızlandıran otomasyon sistemi. Pipeline, teklif, raporlama.",
    tags: ["CRM", "TypeScript", "Redis"],
    year: "2023",
  },
  {
    idx: "04",
    title: "Çok Dilli Kurumsal Site",
    client: "Holding Şirketi",
    category: "Web Geliştirme",
    desc: "SEO odaklı, admin panelli, çok dilli kurumsal web sitesi ve dijital katalog. Organik trafikte 3 ayda %180 artış.",
    tags: ["Next.js", "i18n", "CMS"],
    year: "2023",
  },
  {
    idx: "05",
    title: "Müşteri Sipariş Portali",
    client: "Tekstil Firması",
    category: "B2B Portal",
    desc: "Bayi ve müşteri sipariş yönetimi, katalog ve fatura takip portali. 200+ aktif bayi.",
    tags: ["Portal", "API", "Fatura"],
    year: "2024",
  },
  {
    idx: "06",
    title: "Saha Teknisyen Uygulaması",
    client: "Servis Şirketi",
    category: "Özel Yazılım",
    desc: "Teknisyen takibi, iş emri yönetimi ve offline çalışma özellikli saha uygulaması. iOS & Android.",
    tags: ["React Native", "Offline", "GPS"],
    year: "2024",
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="referanslar"
      ref={sectionRef}
      style={{ padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 56px)" }}
    >
      <p className="section-num">03 — Referanslar</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(32px, 6vw, 80px)",
          marginBottom: "80px",
          alignItems: "end",
        }}
      >
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Sonuç üreten{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>projeler.</em>
        </h2>
        <p
          className="reveal reveal-delay-1"
          style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "400px", alignSelf: "end" }}
        >
          Farklı sektörlerde tamamladığımız projelerden seçkiler. Her biri,
          müşterimizin büyümesine somut katkı sağladı.
        </p>
      </div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          borderTop: "1px solid var(--line)",
        }}
        className="pf-grid"
      >
        {projects.map((p, i) => (
          <div
            key={p.idx}
            className={`pf-item reveal${i % 2 === 1 ? " reveal-delay-1" : ""}`}
            style={{
              padding: "48px 0",
              borderBottom: "1px solid var(--line)",
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "28px",
              alignItems: "start",
              transition: "background 0.4s",
              cursor: "default",
            }}
          >
            <div style={{ paddingTop: "4px" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--dim)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  marginBottom: "6px",
                }}
              >
                {p.idx}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  opacity: 0.7,
                }}
              >
                {p.year}
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  marginBottom: "8px",
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                {p.category} — {p.client}
              </p>
              <h3
                className="pf-title"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.45rem",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  marginBottom: "12px",
                  transition: "color 0.3s",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--dim)" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pf-tag"
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      border: "1px solid var(--line)",
                      padding: "4px 10px",
                      transition: "all 0.3s",
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: "64px", display: "flex", justifyContent: "flex-end" }}>
        <Link href="/referanslar" className="btn-ghost">
          Tüm Referanslar
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </Link>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .pf-grid { grid-template-columns: repeat(2, 1fr); }
          .pf-item:nth-child(odd) { padding-right: 60px; border-right: 1px solid var(--line); }
          .pf-item:nth-child(even) { padding-left: 60px; }
        }
        .pf-item:hover { background: rgba(240,237,232,0.02); }
        .pf-item:hover .pf-title { color: var(--gold); }
        .pf-item:hover .pf-tag { border-color: rgba(232,213,163,0.25); color: var(--gold); }
      `}</style>
    </section>
  );
}
