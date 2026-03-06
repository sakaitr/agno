"use client";

import Link from "next/link";

const footerLinks = [
  { href: "https://agno.com.tr", label: "agno.com.tr", external: true },
  { href: "https://agno.digital", label: "agno.digital", external: true },
  { href: "/iletisim", label: "İletişim" },
  { href: "/gizlilik", label: "Gizlilik" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "2rem clamp(1.5rem, 5vw, 3.5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.1rem",
          fontWeight: 300,
          letterSpacing: "0.14em",
          color: "var(--fg)",
          textDecoration: "none",
        }}
      >
        agno
      </Link>

      <p
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.12em",
          color: "var(--dim)",
          textTransform: "uppercase",
        }}
      >
        © {year} Agno Dijital
      </p>

      <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--fg)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--dim)")
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
