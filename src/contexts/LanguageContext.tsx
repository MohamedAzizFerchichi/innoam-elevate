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
  "nav.products": { en: "Products", fr: "Produits" },

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
  "about.badge": { en: "About InnoAM", fr: "À Propos d'InnoAM" },
  "about.title": { en: "Crafting digital excellence", fr: "Créer l'excellence digitale" },
  "about.since": { en: "since 2015", fr: "depuis 2015" },
  "about.subtitle": { 
    en: "We're a team of passionate technologists, designers, and strategists dedicated to transforming ideas into powerful digital solutions.", 
    fr: "Nous sommes une équipe de technologues, designers et stratèges passionnés, dédiés à transformer les idées en solutions digitales puissantes." 
  },
  "about.storyTitle": { en: "Our story of innovation", fr: "Notre histoire d'innovation" },
  "about.storyP1": { 
    en: "Founded in 2015, InnoAM began with a simple mission: to help businesses harness the power of technology. What started as a small team of three developers has grown into a comprehensive digital solutions agency.", 
    fr: "Fondée en 2015, InnoAM a débuté avec une mission simple : aider les entreprises à exploiter le pouvoir de la technologie. Ce qui a commencé comme une petite équipe de trois développeurs est devenu une agence de solutions digitales complète." 
  },
  "about.storyP2": { 
    en: "Today, we serve clients across industries — from startups disrupting their markets to enterprises optimizing their operations. Our commitment to quality and innovation remains at the core of everything we do.", 
    fr: "Aujourd'hui, nous servons des clients dans tous les secteurs — des startups qui bouleversent leurs marchés aux entreprises qui optimisent leurs opérations. Notre engagement envers la qualité et l'innovation reste au cœur de tout ce que nous faisons." 
  },
  "about.yearsInnovation": { en: "Years of Innovation", fr: "Années d'Innovation" },
  "about.foundationBadge": { en: "Our Foundation", fr: "Notre Fondation" },
  "about.foundationTitle": { en: "What drives us forward", fr: "Ce qui nous fait avancer" },
  "about.foundationDesc": { en: "The principles that guide our work and define our culture.", fr: "Les principes qui guident notre travail et définissent notre culture." },
  "about.mission": { en: "Mission", fr: "Mission" },
  "about.missionDesc": { 
    en: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.", 
    fr: "Permettre aux entreprises de se développer grâce à des solutions technologiques innovantes qui stimulent la croissance, l'efficacité et l'avantage concurrentiel à l'ère numérique." 
  },
  "about.vision": { en: "Vision", fr: "Vision" },
  "about.visionDesc": { 
    en: "To be the leading technology partner for forward-thinking companies, known for our technical excellence and transformative solutions.", 
    fr: "Être le partenaire technologique de référence pour les entreprises visionnaires, reconnu pour notre excellence technique et nos solutions transformatrices." 
  },
  "about.values": { en: "Values", fr: "Valeurs" },
  "about.valuesDesc": { 
    en: "Integrity, innovation, and client success guide everything we do. We believe in transparent partnerships and delivering exceptional value.", 
    fr: "L'intégrité, l'innovation et le succès client guident tout ce que nous faisons. Nous croyons en des partenariats transparents et en la création de valeur exceptionnelle." 
  },
  "about.fullStackDev": { en: "Full-Stack Development", fr: "Développement Full-Stack" },
  "about.cloudArch": { en: "Cloud Architecture", fr: "Architecture Cloud" },
  "about.teamCollab": { en: "Team Collaboration", fr: "Collaboration d'Équipe" },
  "about.happyClients": { en: "Happy Clients", fr: "Clients Satisfaits" },

  // Contact Page
  "contact.badge": { en: "Get in Touch", fr: "Contactez-nous" },
  "contact.title": { en: "Let's", fr: "Commençons" },
  "contact.titleHighlight": { en: "start a conversation", fr: "une conversation" },
  "contact.subtitle": { 
    en: "Ready to transform your ideas into reality? We'd love to hear about your project.", 
    fr: "Prêt à transformer vos idées en réalité? Nous serions ravis d'en savoir plus sur votre projet." 
  },
  "contact.infoTitle": { en: "Contact Information", fr: "Informations de Contact" },
  "contact.email": { en: "Email", fr: "Email" },
  "contact.phone": { en: "Phone", fr: "Téléphone" },
  "contact.location": { en: "Location", fr: "Localisation" },
  "contact.followUs": { en: "Follow Us", fr: "Suivez-nous" },
  "contact.formName": { en: "Name", fr: "Nom" },
  "contact.formCompany": { en: "Company", fr: "Entreprise" },
  "contact.formEmail": { en: "Email", fr: "Email" },
  "contact.formPhone": { en: "Phone (Optional)", fr: "Téléphone (Optionnel)" },
  "contact.formProjectType": { en: "Project Type", fr: "Type de Projet" },
  "contact.formBudget": { en: "Budget Range (Optional)", fr: "Budget (Optionnel)" },
  "contact.formMessage": { en: "Message", fr: "Message" },
  "contact.formMessagePlaceholder": { en: "Tell us about your project...", fr: "Parlez-nous de votre projet..." },
  "contact.formSelectType": { en: "Select a type", fr: "Sélectionner un type" },
  "contact.formSelectRange": { en: "Select a range", fr: "Sélectionner une fourchette" },
  "contact.sendMessage": { en: "Send Message", fr: "Envoyer le Message" },
  "contact.messageSent": { en: "Message Sent!", fr: "Message Envoyé!" },
  "contact.messageSuccess": { en: "Thank you for reaching out. We'll get back to you within 24 hours.", fr: "Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures." },
  "contact.sendAnother": { en: "Send Another Message", fr: "Envoyer un Autre Message" },
  "contact.other": { en: "Other", fr: "Autre" },

  // MedOryx Page
  "medoryx.badge": { en: "Medical Software", fr: "Logiciel Médical" },
  "medoryx.title": { en: "MedOryx", fr: "MedOryx" },
  "medoryx.subtitle": { 
    en: "Medical practice management software in Tunisia that simplifies appointments, organization, and patient follow-up.", 
    fr: "Logiciel médical en Tunisie pour la gestion de cabinet qui simplifie les rendez-vous, l'organisation et le suivi des patients." 
  },
  "medoryx.visitSite": { en: "Visit Website", fr: "Visiter le Site" },
  "medoryx.requestDemo": { en: "Request Demo", fr: "Demander une Démo" },
  "medoryx.featuresTitle": { en: "Features", fr: "Fonctionnalités" },
  "medoryx.feature1Title": { en: "Appointment Management", fr: "Gestion des Rendez-vous" },
  "medoryx.feature1Desc": { en: "Easily schedule and manage patient appointments with an intuitive calendar interface.", fr: "Planifiez et gérez facilement les rendez-vous des patients avec une interface calendrier intuitive." },
  "medoryx.feature2Title": { en: "Patient Records", fr: "Dossiers Patients" },
  "medoryx.feature2Desc": { en: "Secure digital patient records with complete medical history and documentation.", fr: "Dossiers patients numériques sécurisés avec historique médical complet et documentation." },
  "medoryx.feature3Title": { en: "Billing & Invoicing", fr: "Facturation" },
  "medoryx.feature3Desc": { en: "Streamlined billing process with automatic invoice generation and payment tracking.", fr: "Processus de facturation simplifié avec génération automatique de factures et suivi des paiements." },
  "medoryx.feature4Title": { en: "Reports & Analytics", fr: "Rapports & Analyses" },
  "medoryx.feature4Desc": { en: "Comprehensive reports and analytics to track practice performance.", fr: "Rapports complets et analyses pour suivre les performances du cabinet." },
  "medoryx.feature5Title": { en: "SMS Reminders", fr: "Rappels SMS" },
  "medoryx.feature5Desc": { en: "Automated SMS reminders to reduce no-shows and improve patient communication.", fr: "Rappels SMS automatiques pour réduire les absences et améliorer la communication patient." },
  "medoryx.feature6Title": { en: "Multi-User Access", fr: "Accès Multi-Utilisateurs" },
  "medoryx.feature6Desc": { en: "Role-based access for doctors, assistants, and administrative staff.", fr: "Accès basé sur les rôles pour médecins, assistants et personnel administratif." },
  "medoryx.whyTitle": { en: "Why Choose MedOryx?", fr: "Pourquoi Choisir MedOryx?" },
  "medoryx.benefit1": { en: "Designed specifically for Tunisian medical practices", fr: "Conçu spécifiquement pour les cabinets médicaux tunisiens" },
  "medoryx.benefit2": { en: "Compliant with local healthcare regulations", fr: "Conforme aux réglementations sanitaires locales" },
  "medoryx.benefit3": { en: "French and Arabic language support", fr: "Support des langues française et arabe" },
  "medoryx.benefit4": { en: "Local customer support team", fr: "Équipe de support client locale" },
  "medoryx.benefit5": { en: "Affordable pricing for all practice sizes", fr: "Tarification abordable pour tous les cabinets" },
  "medoryx.pricingTitle": { en: "Pricing Plans", fr: "Plans Tarifaires" },
  "medoryx.starter": { en: "Starter", fr: "Débutant" },
  "medoryx.starterDesc": { en: "Perfect for small practices", fr: "Parfait pour les petits cabinets" },
  "medoryx.professional": { en: "Professional", fr: "Professionnel" },
  "medoryx.professionalDesc": { en: "For growing practices", fr: "Pour les cabinets en croissance" },
  "medoryx.enterprise": { en: "Enterprise", fr: "Entreprise" },
  "medoryx.enterpriseDesc": { en: "For large medical centers", fr: "Pour les grands centres médicaux" },
  "medoryx.perMonth": { en: "/month", fr: "/mois" },
  "medoryx.getStarted": { en: "Get Started", fr: "Commencer" },
  "medoryx.contactSales": { en: "Contact Sales", fr: "Contacter les Ventes" },
  "medoryx.users": { en: "users", fr: "utilisateurs" },
  "medoryx.unlimited": { en: "Unlimited", fr: "Illimité" },
  "medoryx.basicFeatures": { en: "Basic appointment management", fr: "Gestion des rendez-vous basique" },
  "medoryx.patientRecords": { en: "Patient records", fr: "Dossiers patients" },
  "medoryx.smsReminders": { en: "SMS reminders", fr: "Rappels SMS" },
  "medoryx.advancedReports": { en: "Advanced reports", fr: "Rapports avancés" },
  "medoryx.prioritySupport": { en: "Priority support", fr: "Support prioritaire" },
  "medoryx.customIntegrations": { en: "Custom integrations", fr: "Intégrations personnalisées" },
  "medoryx.dedicatedManager": { en: "Dedicated account manager", fr: "Gestionnaire de compte dédié" },
  "medoryx.customPricing": { en: "Custom pricing", fr: "Tarification personnalisée" },
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
