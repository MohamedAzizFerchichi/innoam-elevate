import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Database,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import mockup3 from "@/assets/project-mockup-3.jpg";
import SEOHead from "@/components/SEOHead";

const DeepTech = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: language === "fr" ? "Analyse IA par GPT" : "GPT-Powered AI Analysis",
      desc: language === "fr" 
        ? "Évaluation intelligente des startups utilisant les modèles GPT pour une analyse approfondie"
        : "Intelligent startup evaluation using GPT models for in-depth analysis",
    },
    {
      icon: Database,
      title: language === "fr" ? "Analyse de Données" : "Data Analysis",
      desc: language === "fr"
        ? "Traitement et analyse de grandes quantités de données pour des insights précis"
        : "Processing and analysis of large data volumes for accurate insights",
    },
    {
      icon: TrendingUp,
      title: language === "fr" ? "Scoring Prédictif" : "Predictive Scoring",
      desc: language === "fr"
        ? "Algorithmes de machine learning pour prédire le potentiel de croissance"
        : "Machine learning algorithms to predict growth potential",
    },
    {
      icon: BarChart3,
      title: language === "fr" ? "Tableaux de Bord" : "Dashboards",
      desc: language === "fr"
        ? "Visualisation interactive des métriques clés et KPIs en temps réel"
        : "Interactive visualization of key metrics and real-time KPIs",
    },
    {
      icon: Target,
      title: language === "fr" ? "Recommandations" : "Recommendations",
      desc: language === "fr"
        ? "Suggestions personnalisées basées sur l'analyse des données historiques"
        : "Personalized suggestions based on historical data analysis",
    },
    {
      icon: Zap,
      title: language === "fr" ? "Traitement Rapide" : "Fast Processing",
      desc: language === "fr"
        ? "Évaluation en quelques secondes grâce à l'infrastructure cloud optimisée"
        : "Evaluation in seconds thanks to optimized cloud infrastructure",
    },
  ];

  const technologies = ["Python", "GPT-4", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS"];

  const benefits = [
    language === "fr" ? "Réduction du temps d'évaluation de 90%" : "90% reduction in evaluation time",
    language === "fr" ? "Analyse objective basée sur des données" : "Objective data-driven analysis",
    language === "fr" ? "Identification des startups à fort potentiel" : "Identification of high-potential startups",
    language === "fr" ? "Rapports détaillés et actionnables" : "Detailed and actionable reports",
    language === "fr" ? "Intégration avec les outils existants" : "Integration with existing tools",
  ];

  return (
    <Layout>
      <SEOHead
        title="DeepTech Startup Rating | Évaluation IA de Startups par GPT"
        description="Plateforme d'évaluation IA de startups avec analyse de données par GPT. Scoring prédictif et insights actionnables développés avec Python et TensorFlow."
        canonical="https://innoamsoftware.tn/deeptech"
        ogImage="https://innoamsoftware.tn/og-deeptech.jpg"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
              >
                {language === "fr" ? "Intelligence Artificielle" : "Artificial Intelligence"}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                <span className="text-gradient">DeepTech Startup Rating</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground leading-relaxed"
              >
                {language === "fr"
                  ? "Plateforme d'évaluation IA de startups utilisant GPT et l'analyse de données avancée pour identifier les opportunités à fort potentiel."
                  : "AI-powered startup evaluation platform using GPT and advanced data analysis to identify high-potential opportunities."}
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
                  src={mockup3}
                  alt="DeepTech Platform"
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
              {language === "fr" ? "Fonctionnalités Avancées" : "Advanced Features"}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une solution complète d'évaluation alimentée par l'intelligence artificielle"
                : "A complete evaluation solution powered by artificial intelligence"}
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                {language === "fr" ? "Avantages Clés" : "Key Benefits"}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl glass-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {language === "fr" ? "Propulsé par GPT-4" : "Powered by GPT-4"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "fr" ? "Intelligence artificielle de pointe" : "Cutting-edge artificial intelligence"}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "fr" 
                    ? "DeepTech utilise les derniers modèles GPT pour analyser des milliers de points de données et fournir des évaluations précises et objectives des startups."
                    : "DeepTech uses the latest GPT models to analyze thousands of data points and provide accurate and objective startup evaluations."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {language === "fr" ? "Stack Technologique" : "Technology Stack"}
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
      <section className="py-16 lg:py-24">
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
                  ? "Besoin d'une solution d'évaluation IA?"
                  : "Need an AI evaluation solution?"}
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                {language === "fr"
                  ? "Contactez-nous pour développer votre plateforme d'analyse alimentée par l'intelligence artificielle."
                  : "Contact us to develop your AI-powered analysis platform."}
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

export default DeepTech;
