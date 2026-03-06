import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Teknoloji, dijital dönüşüm, ERP/CRM ve yazılım geliştirme üzerine makaleler.",
};

const posts = [
  { slug: "dijital-donusum-rehberi-2024", title: "KOBİ'ler İçin Dijital Dönüşüm Rehberi: Nereden Başlamalı?", excerpt: "Dijital dönüşüm bir lüks değil, artık bir zorunluluk. Küçük ve orta ölçekli işletmeler için adım adım dijital dönüşüm stratejisi.", category: "Dijital Dönüşüm", readTime: "7 dk", author: "Mert Yıldırım", date: "15 Kasım 2024", featured: true },
  { slug: "erp-kurumsal-yazilim-secimi", title: "ERP Sistemi Seçerken Dikkat Edilmesi Gereken 8 Kritik Nokta", excerpt: "Yanlış ERP seçimi milyonlarca lira maliyet yaratabilir. Doğru sistemi seçmek için hangi kriterlere bakmalısınız?", category: "ERP", readTime: "9 dk", author: "Selin Doğan", date: "8 Kasım 2024", featured: false },
  { slug: "nextjs-web-projesi-performans", title: "Next.js ile Yüksek Performanslı Web Uygulaması Geliştirme", excerpt: "Lighthouse skorunu 95+ tutarken büyük ölçekli web uygulaması nasıl geliştirilir? Gerçek proje deneyimlerimizden.", category: "Web Geliştirme", readTime: "11 dk", author: "Ayşe Çelik", date: "28 Ekim 2024", featured: false },
  { slug: "crm-ile-satis-otomasyonu", title: "CRM ile Satış Otomasyonu: %40 Daha Fazla Kapanan Anlaşma", excerpt: "Doğru CRM kurulumu ve satış otomasyonuyla nasıl dönüşüm oranlarınızı dramatik biçimde artırabilirsiniz.", category: "CRM", readTime: "8 dk", author: "Selin Doğan", date: "20 Ekim 2024", featured: false },
  { slug: "react-native-vs-flutter-2024", title: "React Native vs Flutter: 2024'te Hangisini Seçmeli?", excerpt: "Mobil uygulama geliştirme için React Native mi Flutter mı? Gerçek projelerden deneyimlerle kapsamlı karşılaştırma.", category: "Mobil", readTime: "12 dk", author: "Ayşe Çelik", date: "10 Ekim 2024", featured: false },
  { slug: "mobil-uygulama-isletmenize-katkisi", title: "Mobil Uygulama İşletmenize Nasıl Katkı Sağlar?", excerpt: "React Native ile geliştirilen mobil uygulamaların işletme verimliliğine ve müşteri sadakatine somut etkisi.", category: "Mobil", readTime: "6 dk", author: "Emre Kara", date: "2 Ekim 2024", featured: false },
];

const SERIF = "var(--font-cormorant), Georgia, serif";
const MONO = "var(--font-geist-mono), monospace";

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <div className="page-hero">
        <p className="section-num">Blog</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          Teknoloji &{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>içgörüler.</em>
        </h1>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "520px" }}>
          Yazılım, dijital dönüşüm ve teknoloji üzerine ekibimizin deneyimlerini paylaştığı makaleler.
        </p>
      </div>

      <div className="page-body">
        {/* Featured */}
        <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "clamp(32px,5vw,64px) 0", marginBottom: "0" }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", fontFamily: MONO, marginBottom: "24px", opacity: 0.8 }}>
            Öne Çıkan
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,5vw,60px)", alignItems: "end" }}>
            <div>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dim)", fontFamily: MONO, marginBottom: "16px" }}>
                {featured.category} — {featured.date} — {featured.readTime}
              </p>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                {featured.title}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--dim)", marginBottom: "32px" }}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="btn-ghost">
                Okumaya Devam Et
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular posts */}
        <div style={{ borderTop: "none" }}>
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="blog-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                  gap: "clamp(16px,3vw,48px)",
                  padding: "clamp(24px,3vw,36px) 0",
                  borderBottom: "1px solid var(--line)",
                  alignItems: "center",
                  transition: "background 0.3s",
                }}
              >
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--dim)", fontFamily: MONO, marginBottom: "10px" }}>
                    {post.category} — {post.date}
                  </p>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{post.title}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--dim)" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--dim)", fontFamily: MONO }}>{post.readTime}</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--dim)", transition: "color 0.3s" }} className="blog-arrow">↗</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .blog-row:hover { background: rgba(240,237,232,0.02); }
        .blog-row:hover .blog-arrow { color: var(--gold); }
      `}</style>
    </>
  );
}
