"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem clamp(1.5rem, 5vw, 3.5rem)",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.4rem",
            fontWeight: 300,
            letterSpacing: "0.14em",
            color: "var(--fg)",
            textDecoration: "none",
          }}
        >
          agno
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--fg)" : "var(--dim)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  pathname === link.href ? "var(--fg)" : "var(--dim)")
              }
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/iletisim"
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.6rem 1.4rem",
              border: "1px solid var(--line)",
              color: "var(--fg)",
              textDecoration: "none",
              transition: "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--gold)";
              el.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--line)";
              el.style.color = "var(--fg)";
            }}
          >
            İletişim
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
            zIndex: 600,
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "var(--fg)",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              transition: "transform 0.3s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "var(--fg)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "var(--fg)",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </header>

      {/* Mobile Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg)",
          zIndex: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(2rem, 8vw, 4rem)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {[...navLinks, { href: "/iletisim", label: "İletişim" }].map(
            (link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  color: pathname === link.href ? "var(--gold)" : "var(--fg)",
                  textDecoration: "none",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s, color 0.3s ease`,
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div
          style={{
            marginTop: "3rem",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            color: "var(--dim)",
            textTransform: "uppercase",
          }}
        >
          agno dijital — agno.com.tr
        </div>
      </div>
    </>
  );
}
