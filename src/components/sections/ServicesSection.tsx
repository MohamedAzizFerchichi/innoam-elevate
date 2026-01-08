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

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Server,
    title: "Full-Stack & SaaS",
    description:
      "End-to-end solutions with scalable backends, APIs, and cloud infrastructure for your SaaS products.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by machine learning, natural language processing, and computer vision.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights with custom dashboards and business intelligence solutions.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Strategic technology guidance to optimize your digital transformation and drive innovation.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Solutions tailored to your needs"
          description="We offer comprehensive digital services to help you build, scale, and transform your business with technology."
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
              Explore All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
