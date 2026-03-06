"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MODEL_DEFS } from "@/lib/three-models";

const capabilities = [
  "Profesyonel 3D CAD modelleme ve ürün tasarımı",
  "Prototip üretimi ve tasarım doğrulama testleri",
  "Küçük seriden büyük partiye seri üretim",
  "Kişiselleştirilmiş ve özel sipariş ürünler",
  "Endüstriyel parçalar ve teknik bileşenler",
  "E-ticaret platformuyla doğrudan satış kanalı",
  "Türkiye geneli kargo, İstanbul aynı gün teslimat",
];

export function AgnoDesignSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, wrap.offsetWidth / wrap.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    const def = MODEL_DEFS[Math.floor(Math.random() * MODEL_DEFS.length)];
    if (labelRef.current) labelRef.current.textContent = def.label;
    const model = def.build(scene);
    model.scale.setScalar(1.1);
    scene.add(model);

    const resize = () => {
      const w = wrap.offsetWidth, h = wrap.offsetHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouse);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      model.rotation.y += 0.005;
      model.rotation.x += (mouseY * 0.15 - model.rotation.x) * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="agno-design"
      ref={sectionRef}
      style={{
        borderTop: "1px solid var(--line)",
        background: "rgba(232,213,163,0.025)",
      }}
    >
      {/* Label bar */}
      <div
        style={{
          padding: "0 clamp(24px, 5vw, 56px)",
          borderBottom: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "56px",
        }}
      >
        <p className="section-num" style={{ marginBottom: 0 }}>02 — Agno Design</p>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.7,
          }}
        >
          3D Baskı & Üretim
        </span>
      </div>

      {/* Main grid */}
      <div
        style={{
          padding: "clamp(64px, 10vw, 130px) clamp(24px, 5vw, 56px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(48px, 8vw, 100px)",
          alignItems: "center",
        }}
      >
        {/* 3D Canvas */}
        <div
          ref={wrapRef}
          className="reveal"
          style={{ position: "relative", aspectRatio: "1", background: "transparent" }}
        >
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          <div
            ref={labelRef}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--dim)",
              padding: "12px 0",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            —
          </div>
        </div>

        {/* Content */}
        <div>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Hayal edin.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Üretelim.</em>
          </h2>

          <p
            className="reveal reveal-delay-1"
            style={{ fontSize: "0.78rem", lineHeight: 1.85, color: "var(--dim)", marginBottom: "40px", maxWidth: "420px" }}
          >
            Agno Design; 3D baskı üretim, modelleme ve tasarım ürünleri satışı
            alanında hizmet veren kardeş platformumuzdur. Fikrinizden kalıba,
            prototipten seri üretime kadar her aşamada yanınızdayız.
          </p>

          <ul
            className="reveal reveal-delay-1"
            style={{ listStyle: "none", display: "flex", flexDirection: "column", marginBottom: "40px" }}
          >
            {capabilities.map((cap, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "20px",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--line)",
                  fontSize: "0.72rem",
                  lineHeight: 1.7,
                  color: "var(--dim)",
                  transition: "color 0.3s",
                  cursor: "default",
                }}
                className="threed-li"
              >
                <span
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: "var(--gold)",
                    opacity: 0.6,
                    minWidth: "24px",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {cap}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-delay-2" style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://agno.digital"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              agno.digital&apos;i Ziyaret Et
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="/iletisim"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--dim)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--dim)"; }}
            >
              Teklif Al →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .threed-li:hover { color: var(--fg); }
      `}</style>
    </div>
  );
}
