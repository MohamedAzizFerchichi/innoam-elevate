import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  MapPin,
  Search,
  Heart,
  Calendar,
  Shield,
  Check,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import mockup2 from "@/assets/project-mockup-2.jpg";
import SEOHead from "@/components/SEOHead";

const TheLifeResidence = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Search,
      title: language === "fr" ? "Recherche Avancée" : "Advanced Search",
      desc: language === "fr" 
        ? "Filtres intelligents pour trouver la propriété idéale selon vos critères"
        : "Smart filters to find your ideal property based on your criteria",
    },
    {
      icon: MapPin,
      title: language === "fr" ? "Géolocalisation" : "Geolocation",
      desc: language === "fr"
        ? "Carte interactive avec localisation précise des biens immobiliers"
        : "Interactive map with precise property locations",
    },
    {
      icon: Heart,
      title: language === "fr" ? "Favoris & Alertes" : "Favorites & Alerts",
      desc: language === "fr"
        ? "Sauvegardez vos coups de cœur et recevez des notifications personnalisées"
        : "Save your favorites and receive personalized notifications",
    },
    {
      icon: Calendar,
      title: language === "fr" ? "Visites Virtuelles" : "Virtual Tours",
      desc: language === "fr"
        ? "Explorez les propriétés en 3D depuis chez vous"
        : "Explore properties in 3D from home",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Transactions Sécurisées" : "Secure Transactions",
      desc: language === "fr"
        ? "Processus de réservation et paiement 100% sécurisé"
        : "100% secure booking and payment process",
    },
    {
      icon: Sparkles,
      title: language === "fr" ? "Expérience Premium" : "Premium Experience",
      desc: language === "fr"
        ? "Interface élégante et intuitive pour une navigation fluide"
        : "Elegant and intuitive interface for smooth navigation",
    },
  ];

  const technologies = ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "Stripe"];

  return (
    <Layout>
      <SEOHead
        title="The Life Residence | Plateforme Immobilière Haut de Gamme"
        description="Plateforme immobilière haut de gamme avec expérience utilisateur (UX) exceptionnelle. Développée avec React et Node.js pour une navigation fluide."
        canonical="https://innoamsoftware.tn/the-life-residence"
        ogImage="https://innoamsoftware.tn/og-life-residence.jpg"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
              >
                {language === "fr" ? "Immobilier de Luxe" : "Luxury Real Estate"}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                <span className="text-gradient">The Life Residence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground leading-relaxed"
              >
                {language === "fr"
                  ? "Plateforme immobilière haut de gamme offrant une expérience utilisateur exceptionnelle pour découvrir et acquérir des propriétés d'exception."
                  : "High-end real estate platform offering an exceptional user experience to discover and acquire exceptional properties."}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    {language === "fr" ? "Demander une Démo" : "Request Demo"}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glow-lg">
                <img
                  src={mockup2}
                  alt="The Life Residence Platform"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {language === "fr" ? "Fonctionnalités Clés" : "Key Features"}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une expérience utilisateur pensée pour simplifier la recherche immobilière"
                : "A user experience designed to simplify real estate search"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-card group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-4"
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {language === "fr" ? "Technologies Utilisées" : "Technologies Used"}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-secondary rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center"
          >
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {language === "fr" 
                  ? "Besoin d'une plateforme immobilière sur mesure?"
                  : "Need a custom real estate platform?"}
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                {language === "fr"
                  ? "Contactez-nous pour créer votre solution immobilière avec une expérience utilisateur exceptionnelle."
                  : "Contact us to create your real estate solution with an exceptional user experience."}
              </p>
              <Link to="/contact">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                  {language === "fr" ? "Démarrer Votre Projet" : "Start Your Project"}
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TheLifeResidence;
