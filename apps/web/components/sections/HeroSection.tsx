"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DIGITAL_MODEL_DEFS } from "@/lib/three-models";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    // Pick random model
    const idx = Math.floor(Math.random() * DIGITAL_MODEL_DEFS.length);
    const def = DIGITAL_MODEL_DEFS[idx];
    if (labelRef.current) labelRef.current.textContent = def.label;
    const model = def.build(scene);
    model.scale.setScalar(1.0);
    scene.add(model);

    // Particles
    const pGeo = new THREE.BufferGeometry();
    const pCount = 300;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 20;
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xf0ede8, size: 0.015, transparent: true, opacity: 0.25 })));

    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouse);

    const resize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.005;
      model.rotation.y += 0.004;
      model.rotation.x += (mouseY * 0.2 - model.rotation.x) * 0.03;
      model.rotation.y += (mouseX * 0.2 - model.rotation.y + t * 0.5) * 0.008;
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

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById("agno-cursor");
    const ring = document.getElementById("agno-ring");
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(animRing);
    };
    animRing();

    const expand = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "rgba(232,213,163,0.6)";
    };
    const collapse = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(240,237,232,0.5)";
    };
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", collapse);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", collapse);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor" id="agno-cursor" />
      <div className="cursor-ring" id="agno-ring" />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(32px, 5vw, 56px)",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "16px",
              animation: "fadeSlide 1s ease forwards 0.8s",
              opacity: 0,
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            — Yazılım & Üretim Platformu
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              animation: "fadeSlide 1.1s ease forwards 1s",
              opacity: 0,
            }}
          >
            Yazılım.<br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Üretim.</em>
            <br />
            Agno.
          </h1>
        </div>

        {/* Model label */}
        <div
          ref={labelRef}
          style={{
            position: "absolute",
            top: "50%",
            right: "clamp(24px, 5vw, 56px)",
            transform: "translateY(-50%)",
            writingMode: "vertical-rl",
            fontSize: "0.58rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--dim)",
            animation: "fadeIn 1.5s ease forwards 2s",
            opacity: 0,
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          Yükleniyor…
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(32px, 5vw, 56px)",
            left: "clamp(24px, 5vw, 56px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            animation: "fadeIn 1.5s ease forwards 2.2s",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--dim)",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            Aşağı
          </span>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, var(--dim), transparent)",
              animation: "scrollPulse 2s ease infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
