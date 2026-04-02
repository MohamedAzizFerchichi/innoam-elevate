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
        title="InnoAM | Développement Web & IA - 10 ans d'expertise Tunisie"
        description="Agence digitale tunisienne avec 10 ans d'expérience. Développement web React/Next.js, applications SaaS et solutions IA sur mesure. Transformez votre business dès aujourd'hui."
        canonical="https://innoamsoftware.tn"
        keywords="développement web tunisie, agence ia tunisie, react nextjs, saas tunisie, développement application mobile, innoam"
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
