"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    idx: "01",
    title: "ERP Çözümleri",
    desc: "Finans, stok, İK ve operasyon modülleri tek platformda. İşletmenizin tüm verisini merkezi olarak yönetin, verimliliği artırın.",
    tags: ["Modüler", "Ölçeklenebilir", "Entegrasyon"],
  },
  {
    idx: "02",
    title: "CRM Sistemi",
    desc: "Müşteri takibi, satış pipeline ve teklif yönetimi. Ekibinizin verimliliğini artıran, satışları hızlandıran özelleştirilmiş sistemler.",
    tags: ["Özel Geliştirme", "Otomasyon", "Raporlama"],
  },
  {
    idx: "03",
    title: "Web & Dijital Varlık",
    desc: "Kurumsal siteden e-ticarete, landing page'den bayi portalına. SEO uyumlu, mobil öncelikli, performans odaklı çözümler.",
    tags: ["React", "Next.js", "SEO"],
  },
  {
    idx: "04",
    title: "Sektöre Özel Yazılım",
    desc: "Standart yazılımların çözemediği süreçler için özel web uygulamaları, API entegrasyonları ve otomasyon sistemleri.",
    tags: ["Full-Stack", "API", "Otomasyon"],
  },
  {
    idx: "05",
    title: "Dijitalleşme Danışmanlığı",
    desc: "Mevcut süreçlerinizi analiz eder, dijital dönüşüm yol haritanızı birlikte oluştururuz. Uygulamada da yanınızdayız.",
    tags: ["Süreç Analizi", "Yol Haritası", "Danışmanlık"],
  },
  {
    idx: "06",
    title: "Kurumsal Kimlik & Marka",
    desc: "Logo tasarımı, tipografi, renk sistemi ve marka rehberi. Markanızı tüm kanallarda tutarlı kılan görsel dil.",
    tags: ["Logo", "Marka Rehberi", "Tasarım Sistemi"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
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
        <p className="section-num reveal">01 — Hizmetler</p>
        <h2
          className="section-title reveal reveal-delay-1"
          style={{ marginBottom: "1.25rem" }}
        >
          Her ölçekte, her sektörde —{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
            dijital çözüm.
          </em>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2">
          KOBİ&apos;lerden holding yapılarına kadar her ölçekte işletmenin
          ihtiyacına özel dijital çözümler tasarlıyor ve hayata geçiriyoruz.
        </p>
      </div>

      {/* Services grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}
      >
        {services.map((svc, i) => (
          <ServiceCard key={svc.idx} svc={svc} delay={i * 0.07} />
        ))}
      </div>

      {/* CTA */}
      <div
        className="reveal"
        style={{ marginTop: "3rem", display: "flex", justifyContent: "flex-start" }}
      >
        <Link href="/hizmetler" className="btn-ghost">
          Tüm Hizmetleri Gör →
        </Link>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof services)[0];
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="reveal"
      style={{
        padding: "2.5rem clamp(1.5rem, 3vw, 2.5rem)",
        borderRight: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, background 0.3s ease, border-left-color 0.3s ease`,
        cursor: "default",
        borderLeft: "3px solid transparent",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--surface)";
        el.style.borderLeftColor = "var(--gold)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "transparent";
        el.style.borderLeftColor = "transparent";
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.55rem",
          letterSpacing: "0.2em",
          color: "var(--dim)",
          marginBottom: "1.25rem",
        }}
      >
        {svc.idx}
      </p>

      <h3
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          marginBottom: "0.85rem",
        }}
      >
        {svc.title}
      </h3>

      <p
        style={{
          fontSize: "0.87rem",
          color: "var(--dim)",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
        }}
      >
        {svc.desc}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {svc.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--dim)",
              border: "1px solid var(--line)",
              padding: "0.25rem 0.6rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
