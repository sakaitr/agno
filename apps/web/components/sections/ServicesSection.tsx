"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    idx: "01",
    name: "ERP Çözümleri",
    desc: "Finans, stok, İK ve operasyon modülleri tek platformda. İşletmenizin tüm verisini merkezi olarak yönetin.",
    tags: ["Modüler", "Ölçeklenebilir", "Entegrasyon"],
  },
  {
    idx: "02",
    name: "CRM Sistemi",
    desc: "Müşteri takibi, satış pipeline ve teklif yönetimi. Ekibinizin verimliliğini artıran, satışları hızlandıran sistemler.",
    tags: ["Özel Geliştirme", "Otomasyon", "Raporlama"],
  },
  {
    idx: "03",
    name: "Web Sitesi & Dijital Varlık",
    desc: "Kurumsal siteden e-ticarete, landing page'den bayi portalına. SEO uyumlu, mobil öncelikli, performans odaklı.",
    tags: ["React", "Next.js", "SEO", "E-Ticaret"],
  },
  {
    idx: "04",
    name: "Kurumsal Kimlik & Marka",
    desc: "Logo tasarımı, tipografi, renk sistemi ve marka rehberi. Markanızı tüm kanallarda tutarlı kılan görsel dil.",
    tags: ["Logo", "Marka Rehberi", "Tasarım Sistemi"],
  },
  {
    idx: "05",
    name: "Sektöre Özel Yazılım",
    desc: "Standart yazılımların çözemediği süreçler için özel web uygulamaları, API entegrasyonları ve otomasyon sistemleri.",
    tags: ["Full-Stack", "API", "Otomasyon"],
  },
  {
    idx: "06",
    name: "Dijitalleşme Danışmanlığı",
    desc: "Mevcut süreçlerinizi analiz eder, dijital dönüşüm yol haritanızı birlikte oluştururuz. Uygulamada da yanınızdayız.",
    tags: ["Süreç Analizi", "Yol Haritası", "Danışmanlık"],
  },
  {
    idx: "07",
    name: "Özel Hizmet Programları",
    desc: "Sektörünüze ve ölçeğinize özel paket çözümler. Tekstilden inşaata, finansa kadar sektör odaklı dijital programlar.",
    tags: ["Sektörel", "Paket Çözüm", "Destek"],
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hizmetler"
      ref={sectionRef}
      style={{ padding: "0 clamp(24px, 5vw, 56px) clamp(80px, 12vw, 160px)" }}
    >
      <p className="section-num">01 — Dijital Hizmetler</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(32px, 6vw, 80px)",
          marginBottom: "100px",
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
          Web&apos;den{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>kurumsal</em>
          {" "}sisteme — her çözüm.
        </h2>
        <p
          className="reveal reveal-delay-1"
          style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "400px", alignSelf: "end" }}
        >
          KOBİ&apos;lerden holding yapılarına kadar her ölçekte işletmenin
          ihtiyacına özel dijital çözümler tasarlıyor ve hayata geçiriyoruz.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          borderTop: "1px solid var(--line)",
        }}
        className="svc-grid"
      >
        {services.map((svc, i) => (
          <div
            key={svc.idx}
            className={`svc-item reveal${i % 2 === 1 ? " reveal-delay-1" : ""}`}
            style={{
              padding: "52px 0",
              borderBottom: "1px solid var(--line)",
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "32px",
              alignItems: "start",
              transition: "background 0.4s",
              cursor: "default",
            }}
          >
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "var(--dim)",
                paddingTop: "4px",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              {svc.idx}
            </span>
            <div>
              <h3
                className="svc-name"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  marginBottom: "12px",
                  transition: "color 0.3s",
                }}
              >
                {svc.name}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--dim)" }}>
                {svc.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="svc-tag"
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
        <a href="/hizmetler" className="btn-ghost">
          Tüm Hizmetleri Gör
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-item:nth-child(odd) { padding-right: 60px; border-right: 1px solid var(--line); }
          .svc-item:nth-child(even) { padding-left: 60px; }
        }
        .svc-item:hover { background: rgba(240,237,232,0.02); }
        .svc-item:hover .svc-name { color: var(--gold); }
        .svc-item:hover .svc-tag { border-color: rgba(232,213,163,0.25); color: var(--gold); }
      `}</style>
    </section>
  );
}
