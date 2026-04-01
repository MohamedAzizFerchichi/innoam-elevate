import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="InnoAM | Agence de Développement Web & solutions IA en Tunisie"
        description="InnoAM crée des solutions digitales sur mesure : applications web (React/Next.js), SaaS et systèmes d'IA intelligents pour transformer votre entreprise."
        canonical="https://innoamsoftware.tn"
      />
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
