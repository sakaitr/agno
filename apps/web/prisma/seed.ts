import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seed başlıyor...");

  // Admin kullanıcı
  const adminPassword = await bcrypt.hash("agno2024!", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@agno.com.tr" },
    update: {},
    create: {
      name: "AGNO Admin",
      email: "admin@agno.com.tr",
      passwordHash: adminPassword,
      role: "SUPER_ADMIN",
    },
  });
  console.log("✓ Admin kullanıcı oluşturuldu:", admin.email);

  // Hizmetler
  const services = [
    { slug: "web-gelistirme", title: "Web Geliştirme", shortDesc: "Modern web uygulamaları", description: "Next.js ve React ile modern web uygulamaları.", icon: "Code2", order: 1 },
    { slug: "erp-cozumleri", title: "ERP Çözümleri", shortDesc: "Kurumsal kaynak planlaması", description: "İş süreçlerinizi entegre edin.", icon: "Database", order: 2 },
    { slug: "crm-sistemleri", title: "CRM Sistemleri", shortDesc: "Müşteri ilişkileri yönetimi", description: "Satış ve müşteri süreçlerini optimize edin.", icon: "Users", order: 3 },
    { slug: "dijital-donusum", title: "Dijital Dönüşüm", shortDesc: "Dijital dönüşüm danışmanlığı", description: "Şirketinizi geleceğe taşıyın.", icon: "TrendingUp", order: 4 },
    { slug: "mobil-uygulama", title: "Mobil Uygulama", shortDesc: "iOS & Android uygulamalar", description: "React Native ile cross-platform uygulamalar.", icon: "Smartphone", order: 5 },
    { slug: "yazilim-danismanligi", title: "Yazılım Danışmanlığı", shortDesc: "Teknik danışmanlık", description: "Mimari tasarım ve teknik liderlik.", icon: "Lightbulb", order: 6 },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }
  console.log("✓ Hizmetler oluşturuldu");

  // Site ayarları
  const settings = [
    { key: "site_name", value: "AGNO", group: "general" },
    { key: "site_tagline", value: "Dijital Dönüşümde Güvenilir Ortağınız", group: "general" },
    { key: "contact_phone", value: "+90 500 000 00 00", group: "contact" },
    { key: "contact_email", value: "info@agno.com.tr", group: "contact" },
    { key: "contact_address", value: "İstanbul, Türkiye", group: "contact" },
    { key: "whatsapp_number", value: "+905000000000", group: "contact" },
    { key: "social_linkedin", value: "https://linkedin.com/company/agno", group: "social" },
    { key: "social_instagram", value: "https://instagram.com/agno", group: "social" },
  ];

  for (const setting of settings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }
  console.log("✓ Site ayarları oluşturuldu");

  // Örnek testimonials
  const testimonials = [
    { authorName: "Ahmet Yılmaz", authorTitle: "Genel Müdür", company: "Metaş Üretim A.Ş.", content: "AGNO ile çalışmak bir dönüm noktasıydı. ERP sistemimizi entegre ettikten sonra operasyonel verimliliğimiz %35 arttı.", rating: 5, order: 1 },
    { authorName: "Fatma Kaya", authorTitle: "Pazarlama Direktörü", company: "Nova Ticaret Ltd.", content: "Web sitemizi ve CRM sistemimizi birlikte yenilettik. Müşteri dönüşüm oranlarımız 2 katına çıktı.", rating: 5, order: 2 },
    { authorName: "Mehmet Demir", authorTitle: "CEO", company: "TechPlus Digital", content: "React Native ile geliştirilen mobil uygulamamız App Store'da 4.8 puan aldı.", rating: 5, order: 3 },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({ data: t }).catch(() => {});
  }
  console.log("✓ Testimonial'lar oluşturuldu");

  console.log("✅ Seed tamamlandı!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
