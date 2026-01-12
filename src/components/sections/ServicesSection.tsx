import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Brain,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("services.webDev"),
      description: t("services.webDevDesc"),
    },
    {
      icon: Smartphone,
      title: t("services.mobileDev"),
      description: t("services.mobileDevDesc"),
    },
    {
      icon: Server,
      title: t("services.fullStack"),
      description: t("services.fullStackDesc"),
    },
    {
      icon: Brain,
      title: t("services.ai"),
      description: t("services.aiDesc"),
    },
    {
      icon: BarChart3,
      title: t("services.dataAnalytics"),
      description: t("services.dataAnalyticsDesc"),
    },
    {
      icon: Lightbulb,
      title: t("services.consulting"),
      description: t("services.consultingDesc"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("services.badge")}
          title={t("services.title")}
          description={t("services.description")}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              {t("services.exploreAll")}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
