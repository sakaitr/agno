import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "agno dijital — ERP, CRM & Dijital Dönüşüm",
    template: "%s | agno dijital",
  },
  description:
    "Sektörünüzde öncü olmak için: ERP, CRM, sektöre özel yazılım ve dijital dönüşüm çözümleri. KOBİ'lerden holding yapılarına, özelleştirilmiş dijital sistemler.",
  keywords: [
    "ERP",
    "CRM",
    "dijital dönüşüm",
    "web sitesi",
    "yazılım",
    "sektöre özel yazılım",
    "Türkiye",
  ],
  authors: [{ name: "agno dijital" }],
  openGraph: {
    title: "agno dijital — ERP, CRM & Dijital Dönüşüm",
    description:
      "Sektörünüzde öncü olmak için dijital çözümler.",
    url: "https://agno.com.tr",
    siteName: "agno dijital",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable} min-h-screen bg-[#080808] text-[#f0ede8] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
