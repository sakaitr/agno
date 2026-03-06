import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agno.com.tr";

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/hizmetler`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/web-gelistirme`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/erp-cozumleri`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/crm-sistemleri`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/dijital-donusum`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/mobil-uygulama`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hizmetler/yazilim-danismanligi`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/agno-design`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/agno-design/urunler`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/agno-design/ozel-tasarim`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/referanslar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/hakkimizda`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/iletisim`, priority: 0.9, changeFrequency: "yearly" as const },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
