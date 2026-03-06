import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi konuşalım. ERP, CRM veya dijital dönüşüm için bizimle iletişime geçin.",
};

const contactItems = [
  { label: "E-posta", value: "info@agno.com.tr", href: "mailto:info@agno.com.tr" },
  { label: "WhatsApp", value: "Mesaj Gönderin", href: "https://wa.me/905000000000" },
];

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            paddingTop: "clamp(7rem, 14vw, 11rem)",
            paddingBottom: "clamp(5rem, 10vw, 9rem)",
            paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
            paddingRight: "clamp(1.5rem, 6vw, 5rem)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(3rem, 6vw, 6rem)",
              alignItems: "start",
              maxWidth: "1100px",
            }}
          >
            {/* Left: heading */}
            <div>
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
                — İletişim
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.5rem, 6vw, 6rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  marginBottom: "2rem",
                }}
              >
                Projenizi
                <br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>konuşalım.</em>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--dim)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "36rem",
                }}
              >
                Dijital dönüşüm, yazılım geliştirme veya sektöre özel çözümler
                için bizimle iletişime geçin. İlk görüşme ücretsizdir.
              </p>

              {/* Contact info */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--dim)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "1.2rem",
                        fontWeight: 300,
                        color: "var(--fg)",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
