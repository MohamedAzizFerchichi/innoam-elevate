import { motion } from "framer-motion";
import { Zap, Shield, Users, Rocket, Award, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseUsSection() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: language === "fr" ? "Développement Rapide" : "Rapid Development",
      description: language === "fr" 
        ? "Cycles d'itération rapides et méthodologies agiles assurent une livraison ponctuelle sans compromettre la qualité."
        : "Fast iteration cycles and agile methodologies ensure timely delivery without compromising quality.",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Sécurité Enterprise" : "Enterprise Security",
      description: language === "fr"
        ? "Pratiques de sécurité de niveau bancaire et approche axée sur la conformité pour protéger vos données."
        : "Bank-grade security practices and compliance-first approach to protect your data.",
    },
    {
      icon: Users,
      title: language === "fr" ? "Équipes Dédiées" : "Dedicated Teams",
      description: language === "fr"
        ? "Développeurs et designers experts engagés dans le succès de votre projet du début à la fin."
        : "Expert developers and designers committed to your project's success from start to finish.",
    },
    {
      icon: Rocket,
      title: language === "fr" ? "Solutions Évolutives" : "Scalable Solutions",
      description: language === "fr"
        ? "Architecture conçue pour évoluer avec votre entreprise, de la startup à l'échelle entreprise."
        : "Architecture designed to grow with your business, from startup to enterprise scale.",
    },
    {
      icon: Award,
      title: language === "fr" ? "Assurance Qualité" : "Quality Assurance",
      description: language === "fr"
        ? "Tests rigoureux et processus de revue de code garantissent une qualité exceptionnelle du produit."
        : "Rigorous testing and code review processes guarantee exceptional product quality.",
    },
    {
      icon: Clock,
      title: language === "fr" ? "Support 24/7" : "24/7 Support",
      description: language === "fr"
        ? "Support et maintenance 24h/24 pour garder vos applications fonctionnelles en permanence."
        : "Round-the-clock support and maintenance to keep your applications running smoothly.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("why.badge")}
          title={language === "fr" ? "L'avantage InnoAM" : "The InnoAM advantage"}
          description={language === "fr" 
            ? "Nous combinons excellence technique et approche centrée client pour des solutions qui font la différence."
            : "We combine technical excellence with a client-first approach to deliver solutions that make a difference."}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
