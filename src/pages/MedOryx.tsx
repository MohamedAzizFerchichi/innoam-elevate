import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Shield,
  Check,
  ExternalLink,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import mockup1 from "@/assets/project-mockup-1.jpg";

const MedOryx = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: Calendar, titleKey: "medoryx.feature1Title", descKey: "medoryx.feature1Desc" },
    { icon: FileText, titleKey: "medoryx.feature2Title", descKey: "medoryx.feature2Desc" },
    { icon: BarChart3, titleKey: "medoryx.feature3Title", descKey: "medoryx.feature3Desc" },
    { icon: Stethoscope, titleKey: "medoryx.feature4Title", descKey: "medoryx.feature4Desc" },
    { icon: MessageSquare, titleKey: "medoryx.feature5Title", descKey: "medoryx.feature5Desc" },
    { icon: Users, titleKey: "medoryx.feature6Title", descKey: "medoryx.feature6Desc" },
  ];

  const benefits = [
    "medoryx.benefit1",
    "medoryx.benefit2",
    "medoryx.benefit3",
    "medoryx.benefit4",
    "medoryx.benefit5",
  ];

  const pricingPlans = [
    {
      nameKey: "medoryx.starter",
      descKey: "medoryx.starterDesc",
      price: "99",
      users: "1-2",
      features: ["medoryx.basicFeatures", "medoryx.patientRecords", "medoryx.smsReminders"],
      popular: false,
    },
    {
      nameKey: "medoryx.professional",
      descKey: "medoryx.professionalDesc",
      price: "199",
      users: "3-5",
      features: ["medoryx.basicFeatures", "medoryx.patientRecords", "medoryx.smsReminders", "medoryx.advancedReports", "medoryx.prioritySupport"],
      popular: true,
    },
    {
      nameKey: "medoryx.enterprise",
      descKey: "medoryx.enterpriseDesc",
      price: null,
      users: language === "fr" ? "Illimité" : "Unlimited",
      features: ["medoryx.basicFeatures", "medoryx.patientRecords", "medoryx.smsReminders", "medoryx.advancedReports", "medoryx.prioritySupport", "medoryx.customIntegrations", "medoryx.dedicatedManager"],
      popular: false,
    },
  ];

  return (
    <Layout>
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
                {t("medoryx.badge")}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                <span className="text-gradient">{t("medoryx.title")}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground leading-relaxed"
              >
                {t("medoryx.subtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a href="https://medoryx.tn" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="group">
                    {t("medoryx.visitSite")}
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    {t("medoryx.requestDemo")}
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
                  src={mockup1}
                  alt="MedOryx Dashboard"
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
              {t("medoryx.featuresTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
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
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
                {t("medoryx.whyTitle")}
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
                    <p className="text-muted-foreground">{t(benefit)}</p>
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
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {language === "fr" ? "Sécurité Garantie" : "Security Guaranteed"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "fr" ? "Données cryptées et sécurisées" : "Encrypted and secured data"}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "fr" 
                    ? "MedOryx utilise les dernières technologies de sécurité pour protéger les données sensibles de vos patients. Conforme aux normes de sécurité des données de santé."
                    : "MedOryx uses the latest security technologies to protect your patients' sensitive data. Compliant with health data security standards."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t("medoryx.pricingTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-8 rounded-2xl glass-card ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {language === "fr" ? "Populaire" : "Popular"}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {t(plan.nameKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(plan.descKey)}
                  </p>
                  <div className="mb-2">
                    {plan.price ? (
                      <span className="text-4xl font-bold text-gradient">{plan.price} TND</span>
                    ) : (
                      <span className="text-2xl font-bold text-gradient">{t("medoryx.customPricing")}</span>
                    )}
                    {plan.price && (
                      <span className="text-muted-foreground text-sm">{t("medoryx.perMonth")}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.users} {t("medoryx.users")}
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{t(feature)}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    {plan.price ? t("medoryx.getStarted") : t("medoryx.contactSales")}
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
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
                  ? "Prêt à moderniser votre cabinet médical?"
                  : "Ready to modernize your medical practice?"}
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                {language === "fr"
                  ? "Contactez-nous pour une démonstration gratuite de MedOryx et découvrez comment nous pouvons simplifier la gestion de votre cabinet."
                  : "Contact us for a free demo of MedOryx and discover how we can simplify your practice management."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://medoryx.tn" target="_blank" rel="noopener noreferrer">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                    {t("medoryx.visitSite")}
                    <ExternalLink size={18} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    {t("medoryx.requestDemo")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MedOryx;
