import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referanslar",
  description: "AGNO'nun tamamladığı projeler ve referanslar.",
};

const projects = [
  { idx: "01", title: "Endüstriyel ERP Entegrasyonu", client: "Üretim Firması", category: "ERP Çözümü", desc: "500+ kullanıcıyla çalışan kapsamlı ERP sistemi. Stok, muhasebe, üretim ve lojistik modülleri tek platformda.", tags: ["ERP", "PostgreSQL", "React", "Odoo"], year: "2024" },
  { idx: "02", title: "B2B E-Ticaret Platformu", client: "Toptan Satış Şirketi", category: "Web & Portal", desc: "Özel fiyatlandırma, bayi yönetimi ve entegre ödeme sistemi ile kurgulanmış B2B e-ticaret platformu.", tags: ["Next.js", "Prisma", "Stripe"], year: "2024" },
  { idx: "03", title: "CRM & Satış Otomasyonu", client: "Finans Şirketi", category: "CRM Sistemi", desc: "Özelleştirilmiş CRM ile satış süreçlerini %40 hızlandıran otomasyon sistemi. Pipeline, teklif, raporlama.", tags: ["CRM", "TypeScript", "Redis"], year: "2023" },
  { idx: "04", title: "Çok Dilli Kurumsal Site", client: "Holding Şirketi", category: "Web Geliştirme", desc: "SEO odaklı, admin panelli, çok dilli kurumsal web sitesi ve dijital katalog. Organik trafikte 3 ayda %180 artış.", tags: ["Next.js", "i18n", "CMS"], year: "2023" },
  { idx: "05", title: "Müşteri Sipariş Portali", client: "Tekstil Firması", category: "B2B Portal", desc: "Bayi ve müşteri sipariş yönetimi, katalog ve fatura takip portali. 200+ aktif bayi.", tags: ["Portal", "API", "Fatura"], year: "2024" },
  { idx: "06", title: "Saha Teknisyen Uygulaması", client: "Servis Şirketi", category: "Mobil Uygulama", desc: "Teknisyen takibi, iş emri yönetimi ve offline çalışma özellikli saha uygulaması. iOS & Android.", tags: ["React Native", "Offline", "GPS"], year: "2024" },
  { idx: "07", title: "İK Yönetim Sistemi", client: "Çok Uluslu Şirket", category: "ERP Çözümü", desc: "İzin yönetimi, bordro entegrasyonu ve performans takip sistemi. 1.200+ çalışan.", tags: ["React", "Node.js", "PostgreSQL"], year: "2023" },
  { idx: "08", title: "Lojistik Takip Platformu", client: "Nakliyat Şirketi", category: "Web Geliştirme", desc: "Araç takibi, sefer yönetimi ve müşteri bildirim sistemi. Gerçek zamanlı harita entegrasyonu.", tags: ["Next.js", "WebSocket", "Redis"], year: "2024" },
  { idx: "09", title: "Franchise Yönetim Sistemi", client: "Gıda Zinciri", category: "ERP Çözümü", desc: "Çok şubeli stok, ciro ve performans takip sistemi. 40+ şube.", tags: ["React", "Node.js", "Recharts"], year: "2024" },
];

const SERIF = "var(--font-cormorant), Georgia, serif";
const MONO = "var(--font-geist-mono), monospace";

export default function ReferanslarPage() {
  return (
    <>
      <div className="page-hero">
        <p className="section-num">03 — Referanslar</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          Sonuç üreten{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>projeler.</em>
        </h1>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "520px" }}>
          120+ tamamlanan proje. Her biri farklı bir sektör, her biri farklı bir başarı hikayesi.
        </p>
      </div>

      <div className="page-body">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            borderTop: "1px solid var(--line)",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.idx}
              style={{
                padding: "48px 0",
                borderBottom: "1px solid var(--line)",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <div style={{ paddingTop: "4px" }}>
                <span style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--dim)", fontFamily: MONO, marginBottom: "6px" }}>{p.idx}</span>
                <span style={{ display: "block", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontFamily: MONO, opacity: 0.7 }}>{p.year}</span>
              </div>
              <div>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--dim)", marginBottom: "8px", fontFamily: MONO }}>
                  {p.category} — {p.client}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.45rem", fontWeight: 300, letterSpacing: "-0.01em", marginBottom: "12px", lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--dim)" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dim)", border: "1px solid var(--line)", padding: "4px 10px", fontFamily: MONO }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "40px" }}>
            Projenizi bu listede{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>görmek ister misiniz?</em>
          </h2>
          <Link href="/iletisim" className="btn-main">Projenizi Anlatın</Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .pf-page-grid { grid-template-columns: repeat(2,1fr); }
          .pf-page-grid > div:nth-child(odd) { padding-right: 60px; border-right: 1px solid var(--line); }
          .pf-page-grid > div:nth-child(even) { padding-left: 60px; }
        }
      `}</style>
    </>
  );
}
