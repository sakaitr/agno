"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(20px, 4vw, 36px) clamp(24px, 5vw, 56px)",
          mixBlendMode: scrolled ? "normal" : "difference",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "var(--fg)",
            textDecoration: "none",
            textTransform: "lowercase" as const,
          }}
        >
          agno
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: "48px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: pathname === link.href ? "var(--fg)" : "var(--dim)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = pathname === link.href ? "var(--fg)" : "var(--dim)"; }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "none", padding: "4px" }}
          aria-label="Menü"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ display: "block", width: "22px", height: "1px", background: "var(--fg)", transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: "var(--fg)", transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: "var(--fg)", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 450,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 8vw, 3rem)",
                fontWeight: 300,
                color: "var(--fg)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg)"; }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:info@agno.com.tr"
            style={{
              marginTop: "20px",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--dim)",
              textDecoration: "none",
            }}
          >
            info@agno.com.tr
          </a>
        </div>
      )}
    </>
  );
}
