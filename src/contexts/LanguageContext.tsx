import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.requestQuote": { en: "Request a Quote", fr: "Demander un devis" },

  // Hero Section
  "hero.badge": { en: "Transforming Ideas into Reality", fr: "Transformer les idées en réalité" },
  "hero.title1": { en: "We craft digital solutions", fr: "Nous créons des solutions digitales" },
  "hero.title2": { en: "with precision", fr: "avec précision" },
  "hero.title3": { en: "and", fr: "et" },
  "hero.title4": { en: "innovation", fr: "innovation" },
  "hero.subtitle": { 
    en: "From cutting-edge web applications to intelligent AI solutions, we deliver technology that drives growth and transforms businesses.", 
    fr: "Des applications web de pointe aux solutions d'IA intelligentes, nous fournissons une technologie qui stimule la croissance et transforme les entreprises." 
  },
  "hero.contactUs": { en: "Contact Us", fr: "Contactez-nous" },
  "hero.projectsDelivered": { en: "Projects Delivered", fr: "Projets Livrés" },
  "hero.clientSatisfaction": { en: "Client Satisfaction", fr: "Satisfaction Client" },
  "hero.techDomains": { en: "Tech Domains", fr: "Domaines Tech" },

  // Services Section
  "services.badge": { en: "Services", fr: "Services" },
  "services.title": { en: "What we do best", fr: "Ce que nous faisons le mieux" },
  "services.description": { 
    en: "We offer a comprehensive range of tech services tailored to your business needs.", 
    fr: "Nous offrons une gamme complète de services technologiques adaptés à vos besoins." 
  },
  "services.exploreAll": { en: "Explore All Services", fr: "Explorer Tous les Services" },
  "services.webDev": { en: "Web Development", fr: "Développement Web" },
  "services.webDevDesc": { 
    en: "Custom web applications built with modern frameworks and best practices.", 
    fr: "Applications web personnalisées construites avec des frameworks modernes." 
  },
  "services.mobileDev": { en: "Mobile Development", fr: "Développement Mobile" },
  "services.mobileDevDesc": { 
    en: "Native and cross-platform mobile apps that deliver exceptional user experiences.", 
    fr: "Applications mobiles natives et cross-platform offrant des expériences exceptionnelles." 
  },
  "services.fullStack": { en: "Full-Stack & SaaS", fr: "Full-Stack & SaaS" },
  "services.fullStackDesc": { 
    en: "End-to-end SaaS solutions with scalable architecture and cloud integration.", 
    fr: "Solutions SaaS complètes avec architecture évolutive et intégration cloud." 
  },
  "services.ai": { en: "AI & Machine Learning", fr: "IA & Machine Learning" },
  "services.aiDesc": { 
    en: "Intelligent systems powered by cutting-edge AI and ML technologies.", 
    fr: "Systèmes intelligents alimentés par les technologies d'IA et ML de pointe." 
  },
  "services.dataAnalytics": { en: "Data Analytics & BI", fr: "Analyse de Données & BI" },
  "services.dataAnalyticsDesc": { 
    en: "Transform your data into actionable insights with powerful analytics.", 
    fr: "Transformez vos données en insights exploitables avec des analyses puissantes." 
  },
  "services.consulting": { en: "Technical Consulting", fr: "Conseil Technique" },
  "services.consultingDesc": { 
    en: "Expert guidance on technology strategy, architecture, and implementation.", 
    fr: "Conseil expert en stratégie technologique, architecture et implémentation." 
  },

  // Tech Stack Section
  "tech.badge": { en: "Technology Stack", fr: "Stack Technologique" },
  "tech.title": { en: "Built with modern technologies", fr: "Construit avec des technologies modernes" },
  "tech.description": { 
    en: "We leverage the latest tools and frameworks to deliver high-quality solutions.", 
    fr: "Nous utilisons les derniers outils et frameworks pour fournir des solutions de haute qualité." 
  },

  // Portfolio Section
  "portfolio.badge": { en: "Portfolio", fr: "Portfolio" },
  "portfolio.title": { en: "Featured projects", fr: "Projets en vedette" },
  "portfolio.description": { 
    en: "Explore some of our recent work that showcases our expertise and commitment to excellence.", 
    fr: "Découvrez nos travaux récents qui démontrent notre expertise et notre engagement envers l'excellence." 
  },
  "portfolio.medoryx.title": { en: "MedOryx", fr: "MedOryx" },
  "portfolio.medoryx.category": { en: "Medical Software", fr: "Logiciel Médical" },
  "portfolio.medoryx.description": { 
    en: "Medical practice management software in Tunisia for appointments, organization, and patient follow-up.", 
    fr: "Logiciel médical en Tunisie pour la gestion de cabinet : rendez-vous, organisation et suivi." 
  },

  // Why Choose Us Section
  "why.badge": { en: "Why Choose Us", fr: "Pourquoi Nous Choisir" },
  "why.title": { en: "Built for success", fr: "Construit pour le succès" },
  "why.description": { 
    en: "We combine technical expertise with a commitment to delivering exceptional results.", 
    fr: "Nous combinons expertise technique et engagement à fournir des résultats exceptionnels." 
  },

  // Testimonials Section
  "testimonials.badge": { en: "Testimonials", fr: "Témoignages" },
  "testimonials.title": { en: "What our clients say", fr: "Ce que disent nos clients" },
  "testimonials.description": { 
    en: "Don't just take our word for it — hear from some of our satisfied clients.", 
    fr: "Ne nous croyez pas sur parole — écoutez nos clients satisfaits." 
  },

  // CTA Section
  "cta.title": { en: "Ready to transform your business?", fr: "Prêt à transformer votre entreprise?" },
  "cta.description": { 
    en: "Let's discuss how we can help you achieve your goals with innovative technology solutions.", 
    fr: "Discutons de comment nous pouvons vous aider à atteindre vos objectifs avec des solutions technologiques innovantes." 
  },
  "cta.startProject": { en: "Start Your Project", fr: "Démarrer Votre Projet" },
  "cta.scheduleCall": { en: "Schedule a Call", fr: "Planifier un Appel" },

  // Footer
  "footer.company": { en: "Company", fr: "Entreprise" },
  "footer.services": { en: "Services", fr: "Services" },
  "footer.contact": { en: "Contact", fr: "Contact" },
  "footer.description": { 
    en: "We craft digital solutions with precision and innovation. Building the future of technology, one project at a time.", 
    fr: "Nous créons des solutions digitales avec précision et innovation. Construire l'avenir de la technologie, un projet à la fois." 
  },
  "footer.privacyPolicy": { en: "Privacy Policy", fr: "Politique de Confidentialité" },
  "footer.terms": { en: "Terms of Service", fr: "Conditions d'Utilisation" },
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés." },
  "footer.crafted": { en: "Crafted with precision and innovation", fr: "Conçu avec précision et innovation" },

  // About Page
  "about.badge": { en: "About Us", fr: "À Propos" },
  "about.title": { en: "Our Story", fr: "Notre Histoire" },

  // Contact Page
  "contact.badge": { en: "Contact", fr: "Contact" },
  "contact.title": { en: "Get in Touch", fr: "Contactez-nous" },
  "contact.description": { 
    en: "Ready to start your project? We'd love to hear from you.", 
    fr: "Prêt à démarrer votre projet? Nous serions ravis de vous entendre." 
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return saved || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
