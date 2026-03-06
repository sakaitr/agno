import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agno Design",
  description: "3D baskı, ürün modelleme ve üretim hizmetleri. agno.digital",
};

const capabilities = [
  { num: "01", title: "3D Baskı & Üretim", desc: "FDM, SLA ve SLS teknolojileriyle prototipten seri üretime kadar her ölçekte baskı hizmeti." },
  { num: "02", title: "Ürün Modelleme", desc: "Endüstriyel tasarımdan dekoratif ürünlere, fonksiyonel parçalardan sanat objelerine kadar 3D modelleme." },
  { num: "03", title: "Prototipleme", desc: "Fikrinizi somut bir prototipleye dönüştürün. Hızlı iterasyon, düşük maliyet." },
  { num: "04", title: "Özel Tasarım", desc: "Müşteriye özel boyut, malzeme ve renk seçenekleriyle kişiselleştirilmiş ürünler." },
  { num: "05", title: "Marka & Pazarlama", desc: "3D modellerinizin fotoğraf kalitesinde renderı, ürün görselleri ve pazarlama materyalleri." },
  { num: "06", title: "E-Ticaret", desc: "agno.digital üzerinden online sipariş. Tasarımlarınızı dünyaya satın." },
];

const materials = ["PLA+", "PETG", "ABS", "TPU", "Reçine", "Nylon"];

const SERIF = "var(--font-cormorant), Georgia, serif";
const MONO = "var(--font-geist-mono), monospace";

export default function AgnoDesignPage() {
  return (
    <>
      <div className="page-hero">
        <p className="section-num">Agno Design</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          Fiziksel dünyada{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>iz bırakın.</em>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(24px,5vw,60px)", maxWidth: "860px" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)" }}>
            Agno&apos;nun ikinci kolu: 3D baskı, ürün modelleme ve üretim. Fikrinizi fiziksel bir ürüne dönüştürüyoruz.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)" }}>
            agno.digital üzerinden online sipariş verin, özel tasarımlarınızı yaptırın veya mevcut modelleri keşfedin.
          </p>
        </div>
      </div>

      {/* Capabilities */}
      <div className="page-body" style={{ borderBottom: "1px solid var(--line)" }}>
        <p className="section-num">Hizmetler</p>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {capabilities.map((c) => (
            <div key={c.num} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "clamp(20px,4vw,60px)", padding: "28px 0", borderBottom: "1px solid var(--line)", alignItems: "start" }}>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--dim)", fontFamily: MONO, paddingTop: "4px" }}>{c.num}</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px" }}>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2.2vw,1.8rem)", fontWeight: 300, letterSpacing: "-0.01em" }}>{c.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--dim)" }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="page-body" style={{ borderBottom: "1px solid var(--line)" }}>
        <p className="section-num">Malzemeler</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {materials.map((m) => (
            <span key={m} style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--fg)", border: "1px solid var(--line)", padding: "12px 24px", fontFamily: MONO }}>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="page-body" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,5vw,5rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "48px" }}>
          Projenizi hayata geçirelim.
        </h2>
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <a href="https://agno.digital" target="_blank" rel="noopener noreferrer" className="btn-main">
            agno.digital&apos;i Ziyaret Et
          </a>
          <Link href="/iletisim" className="btn-ghost">
            Teklif Al
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
