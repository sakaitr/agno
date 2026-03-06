"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    title: "Genel Müdür",
    company: "Metaş Üretim A.Ş.",
    initial: "AY",
    quote:
      "AGNO ile çalışmak bir dönüm noktasıydı. ERP sistemimizi entegre ettikten sonra operasyonel verimliliğimiz %35 arttı. Ekip son derece profesyonel ve çözüm odaklı.",
  },
  {
    name: "Fatma Kaya",
    title: "Pazarlama Direktörü",
    company: "Nova Ticaret Ltd.",
    initial: "FK",
    quote:
      "Web sitemizi ve CRM sistemimizi birlikte yenilettik. Müşteri dönüşüm oranlarımız 2 katına çıktı. Teknik destek her zaman ulaşılabilir ve hızlı.",
  },
  {
    name: "Zeynep Arslan",
    title: "İş Geliştirme Müdürü",
    company: "Global Holding",
    initial: "ZA",
    quote:
      "Çok dilli kurumsal web sitemizi 6 haftada teslim ettiler. SEO sonuçlarımız ilk 3 ayda dramatik biçimde iyileşti. Kesinlikle tavsiye ediyorum.",
  },
  {
    name: "Can Öztürk",
    title: "Operasyon Direktörü",
    company: "Precisa Makina",
    initial: "CÖ",
    quote:
      "AGNO'nun ERP entegrasyonu sayesinde operasyonel süreçlerimizi merkezi bir platform üzerinden yönetir olduk. Verimlilik artışı gözle görülür.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const changeActive = (idx: number) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 300);
  };

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

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="page-section"
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <p className="section-num reveal">06 — Müşteri Görüşleri</p>
        <h2 className="section-title reveal reveal-delay-1">
          Ne{" "}
          <em style={{ color: "var(--gold)" }}>dediler.</em>
        </h2>
      </div>

      {/* Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "start",
        }}
        className="testimonial-grid reveal"
      >
        {/* Client selector */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => changeActive(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 1rem",
                background: i === active ? "var(--surface)" : "transparent",
                border: "none",
                borderLeft: `2px solid ${i === active ? "var(--gold)" : "var(--line)"}`,
                cursor: "none",
                textAlign: "left",
                transition: "background 0.3s ease, border-color 0.3s ease",
                width: "100%",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: `1px solid ${i === active ? "var(--gold)" : "var(--line)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.08em",
                  color: i === active ? "var(--gold)" : "var(--dim)",
                  flexShrink: 0,
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
              >
                {t.initial}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: i === active ? "var(--fg)" : "var(--dim)",
                    transition: "color 0.3s ease",
                    lineHeight: 1.2,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.52rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    marginTop: "0.2rem",
                  }}
                >
                  {t.company}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Quote display */}
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Big quotation mark */}
          <div
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "8rem",
              lineHeight: 0.7,
              color: "var(--gold)",
              opacity: 0.3,
              userSelect: "none",
              marginBottom: "1rem",
            }}
            aria-hidden
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              marginBottom: "2rem",
            }}
          >
            {t.quote}
          </blockquote>

          <div>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                color: "var(--fg)",
                marginBottom: "0.25rem",
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dim)",
              }}
            >
              {t.title} — {t.company}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
