const items = [
  "ERP Çözümleri",
  "CRM Sistemi",
  "Web Sitesi",
  "Dijital Dönüşüm",
  "Sektöre Özel Yazılım",
  "B2B Portal",
  "E-Ticaret",
  "API Entegrasyonu",
  "UI/UX Tasarım",
  "Kurumsal Kimlik",
  "Dijitalleşme",
  "Özel Yazılım",
];

const sep = "·";

export default function MarqueeSection() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="marquee-wrap"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "1.1rem 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track" aria-hidden>
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              paddingRight: "1.25rem",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--gold)", fontSize: "0.5rem" }}>{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
