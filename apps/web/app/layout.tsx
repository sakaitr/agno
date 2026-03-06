import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agno.com.tr"),
  title: {
    default: "AGNO | Web Hizmetleri, ERP/CRM Cozumleri & Dijital Donusum",
    template: "%s | AGNO",
  },
  description:
    "AGNO; web gelistirme, ERP/CRM entegrasyonu, dijital donusum ve yazilim danismanligi hizmetleriyle isletmenizi geleceğe tasir.",
  keywords: [
    "web gelistirme",
    "ERP cozumleri",
    "CRM entegrasyonu",
    "dijital donusum",
    "yazilim danismanligi",
    "Next.js",
    "React",
    "kurumsal yazilim",
    "agno",
    "agno digital",
  ],
  authors: [{ name: "AGNO", url: "https://agno.com.tr" }],
  creator: "AGNO",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://agno.com.tr",
    siteName: "AGNO",
    title: "AGNO | Web Hizmetleri & Dijital Donusum",
    description:
      "Web yazilimi, ERP/CRM cozumleri ve dijital donusumde guvenilir teknoloji ortaginiz.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGNO - Dijital Donusum Partneri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGNO | Web Hizmetleri & Dijital Donusum",
    description:
      "Web yazilimi, ERP/CRM cozumleri ve dijital donusumde guvenilir teknoloji ortaginiz.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#080808" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}