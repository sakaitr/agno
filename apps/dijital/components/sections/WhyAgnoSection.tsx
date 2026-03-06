"use client";

import { useEffect, useRef } from "react";

const differentiators = [
  {
    idx: "01",
    title: "Sektör Deneyimi",
    desc: "Standart yazılım şirketi değil, sektörünüzü bilen bir ortak. Tekstilden üretime, finanstan inşaata — alanınıza özel bağlam ve çözümler.",
  },
  {
    idx: "02",
    title: "Uçtan Uca Sahiplik",
    desc: "Analizden canlıya alma, destekten sürekli optimizasyona. Proje bitiminde yalnız bırakmıyor, uzun vadeli ortaklık kuruyoruz.",
  },
  {
    idx: "03",
    title: "Özel Geliştirme",
    desc: "Hazır çözüm değil, işinize biçilmiş yazılım. Her süreç, her ihtiyaç farklı. Bizimle, standart dışı düşünüyorsunuz.",
  },
  {
    idx: "04",
    title: "Ölçeklenebilir Mimari",
    desc: "Bugünkü ihtiyacınız için değil, yarının büyümesi için tasarlıyoruz. Mimarilerimiz işletmenizle birlikte büyür.",
  },
];

export default function WhyAgnoSection() {
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
        }}
        className="flex-col-on-mobile"
      >
        {/* Left: manifesto */}
        <div>
          <p className="section-num reveal">02 — Neden Agno?</p>
          <h2
            className="section-title reveal reveal-delay-1"
            style={{ marginBottom: "2rem" }}
          >
            Fark<br />
            <em style={{ color: "var(--gold)" }}>yaratanlar.</em>
          </h2>
          <blockquote
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--dim)",
              lineHeight: 1.5,
              borderLeft: "2px solid var(--gold)",
              paddingLeft: "1.5rem",
              marginTop: "1rem",
            }}
          >
            &ldquo;Sektörde yer sahibi olmak değil — yol çizmek için buradayız.&rdquo;
          </blockquote>
        </div>

        {/* Right: differentiators */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {differentiators.map((d, i) => (
            <div
              key={d.idx}
              className="reveal"
              style={{
                padding: "2rem 0",
                borderBottom: i < differentiators.length - 1 ? "1px solid var(--line)" : "none",
                transitionDelay: `${0.1 + i * 0.08}s`,
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1.5rem",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.52rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  paddingTop: "0.35rem",
                }}
              >
                {d.idx}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--dim)",
                    lineHeight: 1.7,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex-col-on-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
