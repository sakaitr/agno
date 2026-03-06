"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    idx: "01",
    title: "Endüstriyel ERP Entegrasyonu",
    client: "Üretim Firması",
    category: "ERP Çözümü",
    metric: "%35",
    metricLabel: "verimlilik artışı",
    desc: "500+ kullanıcılı kapsamlı ERP sistemi. Stok, muhasebe, üretim ve lojistik modülleri tek platformda.",
    tags: ["ERP", "PostgreSQL", "React"],
    year: "2024",
  },
  {
    idx: "02",
    title: "B2B E-Ticaret Platformu",
    client: "Toptan Satış Şirketi",
    category: "Web & Portal",
    metric: "200+",
    metricLabel: "aktif bayi",
    desc: "Özel fiyatlandırma, bayi yönetimi ve entegre ödeme sistemi ile kurgulanmış B2B e-ticaret platformu.",
    tags: ["Next.js", "Prisma", "Stripe"],
    year: "2024",
  },
  {
    idx: "03",
    title: "CRM & Satış Otomasyonu",
    client: "Finans Şirketi",
    category: "CRM Sistemi",
    metric: "%40",
    metricLabel: "satış hızında artış",
    desc: "Özelleştirilmiş CRM ile satış süreçlerini hızlandıran otomasyon sistemi. Pipeline, teklif, raporlama.",
    tags: ["CRM", "TypeScript", "Redis"],
    year: "2023",
  },
  {
    idx: "04",
    title: "Çok Dilli Kurumsal Site",
    client: "Holding Şirketi",
    category: "Web Geliştirme",
    metric: "%180",
    metricLabel: "organik trafik artışı",
    desc: "SEO odaklı, admin panelli, çok dilli kurumsal web sitesi ve dijital katalog.",
    tags: ["Next.js", "i18n", "CMS"],
    year: "2023",
  },
  {
    idx: "05",
    title: "Müşteri Sipariş Portali",
    client: "Tekstil Firması",
    category: "B2B Portal",
    metric: "3 ay",
    metricLabel: "teslimat süresi",
    desc: "Bayi ve müşteri sipariş yönetimi, katalog ve fatura takip portali. 200+ aktif bayi.",
    tags: ["Portal", "API", "Fatura"],
    year: "2024",
  },
  {
    idx: "06",
    title: "Saha Teknisyen Uygulaması",
    client: "Servis Şirketi",
    category: "Mobil Uygulama",
    metric: "iOS + Android",
    metricLabel: "çift platform",
    desc: "Teknisyen takibi, iş emri yönetimi ve offline çalışma özellikli saha uygulaması.",
    tags: ["React Native", "Offline", "GPS"],
    year: "2024",
  },
];

export default function PortfolioSection() {
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
        <p className="section-num reveal">05 — Referanslar</p>
        <h2 className="section-title reveal reveal-delay-1">
          Sonuçlarla{" "}
          <em style={{ color: "var(--gold)" }}>konuşur.</em>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginTop: "1rem" }}>
          Farklı sektörlerde tamamladığımız projelerden seçkiler — her biri
          ölçülebilir bir etki yarattı.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}
        className="portfolio-grid"
      >
        {projects.map((proj, i) => (
          <div
            key={proj.idx}
            className="reveal"
            style={{
              padding: "2.5rem 2rem",
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              transitionDelay: `${i * 0.07}s`,
              transition: "background 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.52rem",
                    letterSpacing: "0.18em",
                    color: "var(--dim)",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  {proj.idx} — {proj.category}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.52rem",
                    letterSpacing: "0.12em",
                    color: "var(--dim)",
                    textTransform: "uppercase",
                  }}
                >
                  {proj.client}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.15em",
                  color: "var(--dim)",
                  border: "1px solid var(--line)",
                  padding: "0.25rem 0.6rem",
                }}
              >
                {proj.year}
              </span>
            </div>

            {/* Metric highlight */}
            <div style={{ marginBottom: "1.25rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {proj.metric}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.12em",
                  color: "var(--dim)",
                  textTransform: "uppercase",
                }}
              >
                {proj.metricLabel}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                marginBottom: "0.75rem",
              }}
            >
              {proj.title}
            </h3>

            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--dim)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {proj.desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {proj.tags.map((tag) => (
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

      {/* CTA */}
      <div className="reveal" style={{ marginTop: "3rem" }}>
        <Link href="/referanslar" className="btn-ghost">
          Tüm Referanslar →
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
