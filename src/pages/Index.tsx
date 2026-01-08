import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
