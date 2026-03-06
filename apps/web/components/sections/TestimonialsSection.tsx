"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "AGNO ile çalışmak bir dönüm noktasıydı. ERP sistemimizi entegre ettikten sonra operasyonel verimliliğimiz %35 arttı. Ekip son derece profesyonel ve çözüm odaklı.",
    name: "Ahmet Yılmaz",
    title: "Genel Müdür",
    company: "Metaş Üretim A.Ş.",
    initial: "AY",
  },
  {
    quote: "Web sitemizi ve CRM sistemimizi birlikte yenilettik. Müşteri dönüşüm oranlarımız 2 katına çıktı. Teknik destek her zaman ulaşılabilir ve hızlı.",
    name: "Fatma Kaya",
    title: "Pazarlama Direktörü",
    company: "Nova Ticaret Ltd.",
    initial: "FK",
  },
  {
    quote: "Çok dilli kurumsal web sitemizi 6 haftada teslim ettiler. SEO sonuçlarımız ilk 3 ayda dramatik biçimde iyileşti. Kesinlikle tavsiye ediyorum.",
    name: "Zeynep Arslan",
    title: "İş Geliştirme Müdürü",
    company: "Global Holding",
    initial: "ZA",
  },
  {
    quote: "AGNO&apos;nun ERP entegrasyonu sayesinde operasyonel süreçlerimizi merkezi bir platform üzerinden yönetir olduk. Verimlilik artışı gözle görülür.",
    name: "Can Öztürk",
    title: "Operasyon Direktörü",
    company: "Precisa Makina",
    initial: "CÖ",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
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

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 56px)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <p className="section-num">04 — Müşteri Görüşleri</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(48px, 8vw, 120px)",
          alignItems: "start",
        }}
      >
        {/* Heading + navigation */}
        <div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "48px",
            }}
          >
            Ne{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>dediler.</em>
          </h2>

          {/* Client selector */}
          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--line)",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  textAlign: "left",
                  transition: "all 0.3s",
                }}
                className="tm-btn"
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: i === active ? "var(--gold)" : "transparent",
                    border: `1px solid ${i === active ? "var(--gold)" : "var(--line)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.5rem",
                    letterSpacing: "0.05em",
                    color: i === active ? "var(--bg)" : "var(--dim)",
                    fontFamily: "var(--font-geist-mono), monospace",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}
                >
                  {item.initial}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: i === active ? "var(--fg)" : "var(--dim)",
                      transition: "color 0.3s",
                      marginBottom: "2px",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--dim)",
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    {item.company}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="reveal reveal-delay-1" style={{ paddingTop: "8px" }}>
          {/* Big quotation mark */}
          <div
            aria-hidden
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "8rem",
              lineHeight: 0.8,
              color: "rgba(232,213,163,0.12)",
              marginBottom: "24px",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <blockquote
            key={active}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
              fontWeight: 300,
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              marginBottom: "40px",
              animation: "fadeSlide 0.6s ease forwards",
            }}
          >
            {t.quote}
          </blockquote>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "var(--gold)",
                opacity: 0.4,
              }}
            />
            <div>
              <p style={{ fontSize: "0.875rem", color: "var(--fg)", marginBottom: "4px" }}>
                {t.name}
              </p>
              <p
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  fontFamily: "var(--font-geist-mono), monospace",
                }}
              >
                {t.title} — {t.company}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tm-btn:hover { opacity: 0.8; }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
