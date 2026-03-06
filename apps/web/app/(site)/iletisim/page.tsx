"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Ad soyad giriniz."),
  email: z.string().email("Geçerli e-posta giriniz."),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Konu giriniz."),
  message: z.string().min(10, "Mesajınız çok kısa."),
});

type FormData = z.infer<typeof schema>;

const SERIF = "var(--font-cormorant), Georgia, serif";
const MONO = "var(--font-geist-mono), monospace";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--line)",
  padding: "12px 0",
  fontSize: "0.95rem",
  color: "var(--fg)",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.3s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.55rem",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "var(--dim)",
  fontFamily: MONO,
  marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  color: "rgba(255,100,80,0.8)",
  marginTop: "6px",
  fontFamily: MONO,
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="page-hero">
        <p className="section-num">İletişim</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "40px" }}>
          Projeniz{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>hazır mı?</em>
        </h1>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--dim)", maxWidth: "460px" }}>
          İlk görüşme ücretsizdir. 24 saat içinde geri dönüyoruz.
        </p>
      </div>

      <div className="page-body">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(48px,8vw,120px)", alignItems: "start" }}>

          {/* Left: info */}
          <div>
            <div style={{ borderTop: "1px solid var(--line)" }}>
              {[
                { label: "E-posta", value: "info@agno.com.tr", href: "mailto:info@agno.com.tr" },
                { label: "Telefon", value: "+90 500 000 00 00", href: "tel:+905000000000" },
                { label: "Adres", value: "İstanbul, Türkiye", href: null },
                { label: "Çalışma Saatleri", value: "Pzt–Cum  09:00–18:00", href: null },
              ].map((item) => (
                <div key={item.label} style={{ padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--dim)", fontFamily: MONO, marginBottom: "8px" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 300, color: "var(--fg)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg)"; }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 300, color: "var(--fg)" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "48px" }}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--dim)", fontFamily: MONO, marginBottom: "20px" }}>Neden AGNO?</p>
              {["Ücretsiz ilk danışmanlık", "24 saatte geri dönüş", "NDA ile gizlilik", "Sözleşmeli hizmet", "Aktif teknik destek"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "0.6rem", color: "var(--gold)", opacity: 0.8 }}>→</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--dim)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p style={{ fontSize: "4rem", marginBottom: "24px" }}>✓</p>
                <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, marginBottom: "16px" }}>Mesajınız Alındı</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--dim)", marginBottom: "40px" }}>En kısa sürede size geri döneceğiz.</p>
                <button onClick={() => setStatus("idle")} className="btn-ghost" style={{ background: "none", border: "none", borderBottom: "1px solid rgba(240,237,232,0.2)" }}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0 clamp(16px,3vw,40px)" }}>
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>Ad Soyad *</label>
                    <input style={inputStyle} placeholder="Ahmet Yılmaz" {...register("fullName")}
                      onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }} />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                  </div>
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>E-posta *</label>
                    <input style={inputStyle} type="email" placeholder="ahmet@sirket.com" {...register("email")}
                      onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }} />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0 clamp(16px,3vw,40px)" }}>
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>Telefon</label>
                    <input style={inputStyle} type="tel" placeholder="+90 500 000 00 00" {...register("phone")}
                      onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }} />
                  </div>
                  <div style={{ marginBottom: "32px" }}>
                    <label style={labelStyle}>Şirket</label>
                    <input style={inputStyle} placeholder="Şirket Adı" {...register("company")}
                      onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }} />
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label style={labelStyle}>Konu *</label>
                  <input style={inputStyle} placeholder="örn: Web sitesi yaptırmak istiyorum" {...register("subject")}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }} />
                  {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
                </div>

                <div style={{ marginBottom: "48px" }}>
                  <label style={labelStyle}>Mesajınız *</label>
                  <textarea
                    style={{ ...inputStyle, resize: "none", height: "140px", paddingTop: "12px" }}
                    placeholder="Projenizden, ihtiyaçlarınızdan ve beklentilerinizden bahsedin..."
                    rows={5}
                    {...register("message")}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }}
                  />
                  {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                </div>

                {status === "error" && (
                  <p style={{ ...errorStyle, marginBottom: "20px" }}>Bir hata oluştu. Lütfen tekrar deneyin.</p>
                )}

                <button type="submit" disabled={status === "loading"} className="btn-main" style={{ alignSelf: "flex-start", opacity: status === "loading" ? 0.6 : 1 }}>
                  {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
