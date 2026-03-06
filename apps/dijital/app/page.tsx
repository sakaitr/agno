import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyAgnoSection from "@/components/sections/WhyAgnoSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AgnoDesignBanner from "@/components/sections/AgnoDesignBanner";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <MetricsSection />
        <ServicesSection />
        <WhyAgnoSection />
        <ProcessSection />
        <IndustriesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AgnoDesignBanner />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
