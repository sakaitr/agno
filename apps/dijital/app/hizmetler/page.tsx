import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "ERP, CRM, web geliştirme, dijitalleşme danışmanlığı ve sektöre özel yazılım çözümleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
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
            — Hizmetler
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
            Dijital çözümler,
            <br />
            <em style={{ color: "var(--gold)" }}>her ölçekte.</em>
          </h1>
        </div>

        <ServicesSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
