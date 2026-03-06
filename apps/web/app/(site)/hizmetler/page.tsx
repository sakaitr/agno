import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Web geliştirme, ERP/CRM entegrasyonu, dijital dönüşüm ve yazılım danışmanlığı hizmetleri.",
};

const services = [
  {
    num: "01",
    title: "Web Geliştirme",
    desc: "Kurumsal web sitelerinden e-ticaret platformlarına, SaaS uygulamalarından landing page'lere kadar. Next.js 14, modern mimari ve en iyi SEO pratikleriyle ziyaretçilerinizi müşteriye dönüştüren siteler.",
    tags: ["Next.js 14", "TypeScript", "SEO & Core Web Vitals", "Responsive", "CMS Entegrasyonu"],
  },
  {
    num: "02",
    title: "ERP Çözümleri",
    desc: "Odoo, özel ERP veya entegrasyon projeleriyle şirketinizin tüm departmanlarını tek bir sisteme bağlıyoruz. Stok yönetimi, üretim takibi, muhasebe ve raporlama süreçlerinizi otomatikleştiriyoruz.",
    tags: ["Özel ERP Geliştirme", "Odoo Özelleştirme", "Stok Yönetimi", "Muhasebe Modülü", "BI & Raporlama"],
  },
  {
    num: "03",
    title: "CRM Sistemleri",
    desc: "Salesforce, HubSpot entegrasyonu veya özelleştirilmiş CRM çözümleriyle müşteri ilişkilerinizi güçlendiriyoruz. Otomatik segmentasyon, satış pipeline ve e-posta otomasyonuyla dönüşüm oranlarınızı artırıyoruz.",
    tags: ["Özel CRM Geliştirme", "Satış Pipeline", "E-posta Otomasyonu", "Müşteri Segmentasyonu"],
  },
  {
    num: "04",
    title: "Kurumsal Kimlik & Marka",
    desc: "Logo, renk paleti, tipografi ve marka rehberi ile tutarlı bir kurumsal kimlik. Dijital varlıklardan baskı materyallerine kadar her temas noktasında markanızı güçlendiriyoruz.",
    tags: ["Logo & Marka", "Renk Paleti", "Tipografi", "Marka Rehberi", "Dijital Varlıklar"],
  },
  {
    num: "05",
    title: "Sektöre Özel Yazılım",
    desc: "Üretim, lojistik, tekstil, gıda — her sektörün kendine özgü iş süreçleri var. Standart paketlerin yetersiz kaldığı yerde, işinize tam uyan özel yazılım çözümleri geliştiriyoruz.",
    tags: ["Özel Geliştirme", "React Native", "iOS & Android", "Offline Destek", "API Entegrasyonu"],
  },
  {
    num: "06",
    title: "Dijitalleşme Danışmanlığı",
    desc: "Mevcut süreçlerinizi analiz ediyor, dijitalleşme fırsatlarını belirliyoruz. Teknoloji seçiminden implementasyona, değişim yönetiminden ekip eğitimine kadar tüm süreçte yanınızdayız.",
    tags: ["Süreç Analizi", "Teknoloji Danışmanlığı", "Değişim Yönetimi", "Ekip Eğitimi", "ROI Ölçümleme"],
  },
  {
    num: "07",
    title: "Özel Hizmet Programları",
    desc: "Tek seferlik proje yerine uzun vadeli ortaklık arıyorsanız, ihtiyaçlarınıza özel aylık hizmet paketleri oluşturuyoruz. Teknik destek, bakım ve sürekli geliştirme dahil.",
    tags: ["Aylık Bakım", "Teknik Destek", "Sürekli Geliştirme", "Öncelikli Hizmet"],
  },
];

const SERIF = "var(--font-cormorant), Georgia, serif";
const MONO = "var(--font-geist-mono), monospace";

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <p className="section-num">Hizmetlerimiz</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          İşletmenize değer katan{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>çözümler.</em>
        </h1>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "520px" }}>
          Web geliştirmeden ERP/CRM entegrasyonuna, dijital dönüşümden yazılım danışmanlığına kadar eksiksiz teknoloji hizmetleri.
        </p>
      </div>

      <div className="page-body">
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((s) => (
            <div
              key={s.num}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: "clamp(20px,4vw,60px)",
                padding: "clamp(32px,4vw,52px) 0",
                borderBottom: "1px solid var(--line)",
                alignItems: "start",
              }}
            >
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--dim)", fontFamily: MONO, paddingTop: "6px" }}>{s.num}</span>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "clamp(16px,3vw,48px)", alignItems: "start", marginBottom: "24px" }}>
                  <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,2.8vw,2.2rem)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.1 }}>{s.title}</h2>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--dim)" }}>{s.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dim)", border: "1px solid var(--line)", padding: "4px 12px", fontFamily: MONO }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--dim)", fontFamily: MONO, marginBottom: "32px" }}>
            — Hangi hizmetin size uygun olduğundan emin değil misiniz?
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "40px" }}>
            Ücretsiz danışmanlık <em style={{ fontStyle: "italic", color: "var(--gold)" }}>alın.</em>
          </h2>
          <Link href="/iletisim" className="btn-main">Danışmanlık Talep Et</Link>
        </div>
      </div>
    </>
  );
}
