"use client";

export default function ContactForm() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0",
        border: "1px solid var(--line)",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      {[
        { id: "name", label: "Ad Soyad", type: "text", placeholder: "Adınız Soyadınız" },
        { id: "company", label: "Firma", type: "text", placeholder: "Firma Adı" },
        { id: "email", label: "E-posta", type: "email", placeholder: "ornek@firma.com" },
        { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 5xx xxx xx xx" },
      ].map((field) => (
        <div
          key={field.id}
          style={{ borderBottom: "1px solid var(--line)", padding: "1.5rem 1.75rem" }}
        >
          <label
            htmlFor={field.id}
            style={{
              display: "block",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.5rem",
            }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.95rem",
              color: "var(--fg)",
              cursor: "none",
            }}
          />
        </div>
      ))}

      <div style={{ borderBottom: "1px solid var(--line)", padding: "1.5rem 1.75rem" }}>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--dim)",
            marginBottom: "0.5rem",
          }}
        >
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Projenizi kısaca anlatın..."
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.95rem",
            color: "var(--fg)",
            cursor: "none",
          }}
        />
      </div>

      <div style={{ padding: "1.5rem 1.75rem" }}>
        <button
          type="submit"
          className="btn-main"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Gönder
        </button>
      </div>
    </form>
  );
}
