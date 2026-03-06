import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhyAgnoSection from "@/components/sections/WhyAgnoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Sektörde yol çizen dijital dönüşüm ortağınız. ERP, CRM ve özel yazılım çözümleriyle işletmenizi geleceğe taşıyoruz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            paddingTop: "clamp(7rem, 14vw, 11rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
            paddingRight: "clamp(1.5rem, 6vw, 5rem)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "1.5rem",
            }}
          >
            — Hakkımızda
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            Sektörde
            <br />
            <em style={{ color: "var(--gold)" }}>yol çiziyoruz.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "var(--dim)",
              maxWidth: "44rem",
              lineHeight: 1.75,
            }}
          >
            Agno Dijital, işletmelerin dijital dönüşüm yolculuğunda yalnızca
            teknik çözüm sağlayan değil — sürecin başından sonuna kadar birlikte
            düşünen, birlikte çalışan bir ortaktır. Sektörde yer sahibi olmak
            değil, yol çizmek için buradayız.
          </p>
        </div>

        <WhyAgnoSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
