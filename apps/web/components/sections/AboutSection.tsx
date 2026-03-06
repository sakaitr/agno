"use client";

import { useEffect, useRef } from "react";

export function AboutSection() {
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

  const digitalServices: [string, string][] = [
    ["ERP Çözümleri", "Finans, stok, İK, operasyon — tek platform"],
    ["CRM Sistemi", "Müşteri takibi, satış pipeline, teklif yönetimi"],
    ["Web Sitesi & Dijital Varlık", "Kurumsal, e-ticaret, landing page"],
    ["Kurumsal Kimlik & Marka", "Logo, tipografi, marka rehberi"],
    ["Dijitalleşme Danışmanlığı", "Süreç analizi, yol haritası, uygulama"],
    ["Özel Hizmet Programları", "Sektöre özel paket çözümler"],
  ];

  const designServices: [string, string][] = [
    ["3D CAD Modelleme", "Profesyonel ürün tasarımı ve prototipleme"],
    ["3D Baskı Üretimi", "Prototipten seriye, her ölçekte üretim"],
    ["Endüstriyel Parçalar", "Teknik bileşenler, kalıp ve aparatlar"],
    ["Özel Sipariş Ürünler", "Kişiselleştirilmiş tasarım ve üretim"],
    ["E-Ticaret Platformu", "Tasarım ürünleri için online satış kanalı"],
    ["Türkiye Geneli Teslimat", "İstanbul aynı gün, yurt içi kargo"],
  ];

  const armItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: "16px",
    padding: "16px 0",
    borderBottom: "1px solid var(--line)",
  } as const;

  return (
    <section
      ref={sectionRef}
      style={{ padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 56px)" }}
    >
      <p className="section-num">00 — Kimiz</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 8vw, 120px)",
          alignItems: "start",
          marginBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        <div className="reveal">
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            İki dünya.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Tek</em>{" "}
            çatı.
          </h2>
        </div>

        <div className="reveal reveal-delay-1" style={{ paddingTop: "8px" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--dim)", maxWidth: "480px" }}>
            KOBİ&apos;lerin dijital dönüşümünü hızlandırmak ve fikirleri
            dokunulabilir ürünlere dönüştürmek için yazılım ve üretim
            uzmanlığını tek bir çatı altında sunuyoruz. Projeniz ne boyutta
            olursa olsun — koddan kalıba kadar yanınızdayız.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          borderTop: "1px solid var(--line)",
        }}
      >
        <div className="reveal arm-panel arm-left" style={{ padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, letterSpacing: "0.04em" }}>
              agno <em style={{ fontStyle: "italic", color: "var(--gold)" }}>dijital</em>
            </span>
            <a
              href="/hizmetler"
              style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--dim)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--dim)"; }}
            >
              Keşfet ↗
            </a>
          </div>
          {digitalServices.map(([title, desc]) => (
            <div key={title} className="arm-item" style={armItemStyle}>
              <span className="arm-title" style={{ fontSize: "0.875rem", color: "var(--fg)", transition: "color 0.3s", minWidth: "160px" }}>{title}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--dim)", textAlign: "right" }}>{desc}</span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-1 arm-panel arm-right" style={{ padding: "clamp(40px, 6vw, 72px) 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, letterSpacing: "0.04em" }}>
              agno <em style={{ fontStyle: "italic", color: "var(--gold)" }}>design</em>
            </span>
            <a
              href="https://agno.digital"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--dim)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--dim)"; }}
            >
              agno.digital ↗
            </a>
          </div>
          {designServices.map(([title, desc]) => (
            <div key={title} className="arm-item" style={armItemStyle}>
              <span className="arm-title" style={{ fontSize: "0.875rem", color: "var(--fg)", transition: "color 0.3s", minWidth: "160px" }}>{title}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--dim)", textAlign: "right" }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .arm-left { padding-right: clamp(24px, 5vw, 64px) !important; border-right: 1px solid var(--line); }
          .arm-right { padding-left: clamp(24px, 5vw, 64px) !important; }
        }
        @media (max-width: 639px) {
          .arm-right { border-top: 1px solid var(--line); }
        }
        .arm-item:hover .arm-title { color: var(--gold); }
      `}</style>
    </section>
  );
}
