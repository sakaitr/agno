"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "Web Sitesi", "ERP", "CRM", "Kurumsal Kimlik", "Dijitalleşme",
  "Sektöre Özel Yazılım", "3D Baskı", "Ürün Modelleme",
  "B2B Portal", "UI/UX", "E-Ticaret", "API Entegrasyonu",
  "Özel Hizmet Programları", "Agno Design",
];

export function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    let html = "";
    for (let i = 0; i < 3; i++) {
      ITEMS.forEach((item) => {
        html += `<span>${item}</span><span class="dot">·</span>`;
      });
    }
    trackRef.current.innerHTML = html + html;
  }, []);

  return (
    <div className="marquee-wrap">
      <div className="marquee-track" ref={trackRef} />
    </div>
  );
}
