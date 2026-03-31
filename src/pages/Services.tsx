import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Brain,
  BarChart3,
  Lightbulb,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies and best practices.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Custom web portals",
      "API development & integration",
    ],
    technologies: ["React", "Next.js", "Vue", "TypeScript", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Server,
    title: "Full-Stack & SaaS",
    description:
      "End-to-end solutions with scalable backends and cloud infrastructure for SaaS products.",
    features: [
      "Microservices architecture",
      "Database design & optimization",
      "Cloud infrastructure (AWS, GCP)",
      "CI/CD pipelines",
      "Multi-tenant systems",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by machine learning, NLP, and computer vision.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision systems",
      "Recommendation engines",
      "Chatbots & virtual assistants",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights with custom dashboards and BI solutions.",
    features: [
      "Data visualization",
      "Real-time dashboards",
      "ETL pipelines",
      "Data warehousing",
      "Custom reporting",
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "Apache Spark"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Strategic technology guidance to optimize your digital transformation and drive innovation.",
    features: [
      "Architecture review",
      "Technology audits",
      "Digital transformation strategy",
      "Team augmentation",
      "Technical training",
    ],
    technologies: ["Agile", "DevOps", "Cloud", "Security", "Best Practices"],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services Tech : Développement Full-Stack, Mobile & IA | InnoAM"
        description="Développement d'applications web modernes, mobiles natives et intégration de Machine Learning. Expertise en Node.js, Go et architectures Cloud."
        canonical="https://innoam.tn/services"
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

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto"
          >
            Comprehensive <span className="text-gradient">digital solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to deployment, we offer a full spectrum of technology
            services to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center shadow-lg shadow-primary/30 mb-6"
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-secondary rounded-lg text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="hero" className="group">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative p-8 lg:p-12 rounded-3xl glass-card overflow-hidden group ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 mx-auto rounded-full border border-primary/20 flex items-center justify-center"
                    >
                      <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                        <service.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </motion.div>
                    <h3 className="mt-8 text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm">
                      Expert solutions tailored to your needs
                    </p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
