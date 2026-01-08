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
import abstractTech from "@/assets/abstract-tech-1.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading technology partner for forward-thinking companies, known for our technical excellence and transformative solutions.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity, innovation, and client success guide everything we do. We believe in transparent partnerships and delivering exceptional value.",
  },
];

const expertise = [
  { icon: Code, title: "Full-Stack Development", years: "10+" },
  { icon: Zap, title: "Cloud Architecture", years: "8+" },
  { icon: Users, title: "Team Collaboration", years: "12+" },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Tech Domains" },
  { value: 50, suffix: "+", label: "Happy Clients" },
];

const About = () => {
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
              About InnoAM
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Crafting digital excellence{" "}
              <span className="text-gradient">since 2015</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground leading-relaxed"
            >
              We're a team of passionate technologists, designers, and strategists
              dedicated to transforming ideas into powerful digital solutions.
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
                <div className="text-sm text-muted-foreground">Years of Innovation</div>
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
                Our story of innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015, InnoAM began with a simple mission: to help businesses
                harness the power of technology. What started as a small team of three
                developers has grown into a comprehensive digital solutions agency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve clients across industries — from startups disrupting
                their markets to enterprises optimizing their operations. Our commitment
                to quality and innovation remains at the core of everything we do.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.title}
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
                    <div className="text-xs text-muted-foreground">{item.title}</div>
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
            badge="Our Foundation"
            title="What drives us forward"
            description="The principles that guide our work and define our culture."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
                key={stat.label}
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
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
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
