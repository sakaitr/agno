"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "clamp(32px, 5vw, 60px) clamp(24px, 5vw, 56px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap" as const,
        gap: "24px",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.2rem",
          fontWeight: 300,
          letterSpacing: "0.12em",
          color: "var(--fg)",
          textDecoration: "none",
          textTransform: "lowercase" as const,
        }}
      >
        agno
      </Link>

      <p
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          color: "var(--dim)",
          textAlign: "center" as const,
        }}
      >
        © {currentYear} Agno — agno.com.tr & agno.digital
      </p>

      <div style={{ display: "flex", gap: "36px", flexWrap: "wrap" as const }}>
        {[
          { label: "agno.com.tr", href: "https://agno.com.tr" },
          { label: "agno.digital", href: "https://agno.digital" },
          { label: "İletişim", href: "/iletisim" },
          { label: "Gizlilik", href: "/gizlilik" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "var(--dim)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--dim)"; }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
