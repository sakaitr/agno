import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Farklı sektörlerde hayata geçirdiğimiz dijital projeler ve başarı hikayeleri.",
};

export default function ReferanslarPage() {
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
            — Referanslar
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Sonuçlarla
            <br />
            <em style={{ color: "var(--gold)" }}>konuşur.</em>
          </h1>
        </div>

        <PortfolioSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
