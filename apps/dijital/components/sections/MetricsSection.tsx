"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 50, suffix: "+", label: "Tamamlanan Proje" },
  { value: 30, suffix: "+", label: "Aktif Müşteri" },
  { value: 5, suffix: "+", label: "Yıl Deneyim" },
  { value: 96, suffix: "%", label: "Müşteri Memnuniyeti" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="grid-divide"
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.8s ease ${i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "var(--gold)",
              }}
            >
              <CountUp target={m.value} suffix={m.suffix} active={visible} />
            </div>
            <p
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--dim)",
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
