import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "AGNO hakkında: Misyonumuz, ekibimiz ve yolculuğumuz.",
};

const values = [
  { num: "01", title: "Odak", desc: "Her projede müşterinin hedefini merkeze alıyor, çözüme odaklanıyoruz." },
  { num: "02", title: "Şeffaflık", desc: "Proje süreçleri, fiyatlandırma ve iletişimde tam şeffaflık." },
  { num: "03", title: "Tutkulu İş", desc: "Teknolojiye olan tutkumuz her satır kodda, her tasarım kararında görünür." },
  { num: "04", title: "Sürekli Gelişim", desc: "Teknoloji hızla değişiyor; biz her zaman bir adım önde olmak için öğrenmeye devam ediyoruz." },
];

const timeline = [
  { year: "2016", event: "AGNO kuruldu. İlk web projesi tamamlandı." },
  { year: "2018", event: "ERP entegrasyon hizmetleri portföye eklendi." },
  { year: "2020", event: "React Native ile mobil uygulama birimi oluşturuldu." },
  { year: "2022", event: "Dijital dönüşüm danışmanlığı ve B2B portal hizmetleri portföye eklendi." },
  { year: "2023", event: "50+ kurumsal müşteriye ulaşıldı. Ekip genişledi." },
  { year: "2024", event: "Agno Design kolu kuruldu. 120+ proje tamamlandı." },
];

const MONO = "var(--font-geist-mono), monospace";
const SERIF = "var(--font-cormorant), Georgia, serif";

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <p className="section-num">Hakkımızda</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px", maxWidth: "14ch" }}>
          Dijital&apos;in <em style={{ fontStyle: "italic", color: "var(--gold)" }}>güvenilir</em> ortağı.
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(24px,5vw,60px)", maxWidth: "860px" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)" }}>
            2016 yılında kurulan AGNO, köklü teknoloji uzmanlığı ve yenilikçi yaklaşımıyla işletmelerin dijital dönüşüm yolculuğunda güvenilir partneri olmayı hedeflemektedir.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)" }}>
            Web yazılımı, kurumsal ERP/CRM çözümleri ve mobil uygulama geliştirme alanlarında farklı sektörlerdeki 85+ müşteriye hizmet verdik.
          </p>
        </div>
      </div>

      <div className="page-body" style={{ borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(40px,8vw,100px)" }}>
          {[
            { label: "Misyonumuz", heading: "İşletmelerin dijital potansiyelini en üst düzeye çıkarmak.", body: "Yenilikçi, ölçeklenebilir ve sürdürülebilir teknoloji çözümleri sunmak. Her proje, müşterimizin büyümesine somut katkı sağlamalı." },
            { label: "Vizyonumuz", heading: "Türkiye'nin dijital dönüşümüne öncülük etmek.", body: "Uluslararası standartlarda hizmet sunan ve teknoloji ekosisteminde referans nokta olan bir teknoloji firması olmak." },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", fontFamily: MONO, marginBottom: "24px", opacity: 0.8 }}>{item.label}</p>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>{item.heading}</h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--dim)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body" style={{ borderBottom: "1px solid var(--line)" }}>
        <p className="section-num">Değerlerimiz</p>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {values.map((v) => (
            <div key={v.num} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "clamp(20px,4vw,60px)", padding: "28px 0", borderBottom: "1px solid var(--line)", alignItems: "start" }}>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--dim)", fontFamily: MONO, paddingTop: "4px" }}>{v.num}</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px" }}>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.3rem,2.2vw,1.8rem)", fontWeight: 300, letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--dim)" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body" style={{ borderBottom: "1px solid var(--line)" }}>
        <p className="section-num">Yolculuğumuz</p>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {timeline.map((item) => (
            <div key={item.year} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "clamp(20px,4vw,60px)", padding: "24px 0", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
              <span style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 300, color: "var(--gold)", opacity: 0.85 }}>{item.year}</span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--dim)" }}>{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,5vw,5rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          Projenizi birlikte <em style={{ fontStyle: "italic", color: "var(--gold)" }}>hayata geçirelim.</em>
        </h2>
        <Link href="/iletisim" className="btn-main">İletişime Geç</Link>
      </div>
    </>
  );
}
