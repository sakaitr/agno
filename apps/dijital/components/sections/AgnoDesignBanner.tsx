export default function AgnoDesignBanner() {
  return (
    <div
      style={{
        margin: "0",
        padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 6vw, 5rem)",
        background: "rgba(232,213,163,0.03)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <div
          style={{
            width: "1px",
            height: "2.5rem",
            background: "rgba(232,213,163,0.3)",
            flexShrink: 0,
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.3rem",
            }}
          >
            Kardeş Platform
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 300,
              color: "var(--fg)",
            }}
          >
            3D baskı ve üretim için{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              agno design
            </span>
          </p>
        </div>
      </div>

      <a
        href="https://agno.digital"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
      >
        agno.digital&apos;ı Ziyaret Et →
      </a>
    </div>
  );
}
