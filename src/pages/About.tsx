import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Code,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CTASection } from "@/components/sections/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import abstractTech from "@/assets/abstract-tech-1.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleKey: "about.mission",
      descKey: "about.missionDesc",
    },
    {
      icon: Eye,
      titleKey: "about.vision",
      descKey: "about.visionDesc",
    },
    {
      icon: Heart,
      titleKey: "about.values",
      descKey: "about.valuesDesc",
    },
  ];

  const expertise = [
    { icon: Code, titleKey: "about.fullStackDev", years: "10+" },
    { icon: Zap, titleKey: "about.cloudArch", years: "8+" },
    { icon: Users, titleKey: "about.teamCollab", years: "12+" },
  ];

  const stats = [
    { value: 150, suffix: "+", labelKey: "hero.projectsDelivered" },
    { value: 98, suffix: "%", labelKey: "hero.clientSatisfaction" },
    { value: 10, suffix: "+", labelKey: "hero.techDomains" },
    { value: 50, suffix: "+", labelKey: "about.happyClients" },
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
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              {t("about.badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              {t("about.title")}{" "}
              <span className="text-gradient">{t("about.since")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground leading-relaxed"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Visual Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glow-lg">
                <img
                  src={abstractTech}
                  alt="Innovation"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 p-6 rounded-2xl glass-card glow-sm"
              >
                <div className="text-4xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">{t("about.yearsInnovation")}</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {t("about.storyTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.storyP1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.storyP2")}
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-gradient">{item.years}</div>
                    <div className="text-xs text-muted-foreground">{t(item.titleKey)}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t("about.foundationBadge")}
            title={t("about.foundationTitle")}
            description={t("about.foundationDesc")}
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl glass-card text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-6"
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {t(value.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(value.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl lg:text-5xl font-bold text-gradient"
                />
                <div className="mt-2 text-muted-foreground">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
