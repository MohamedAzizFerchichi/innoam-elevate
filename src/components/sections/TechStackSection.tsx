import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🔵" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⚙️" },
  { name: "TensorFlow", icon: "🧠" },
];

export function TechStackSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Stack"
          title="Built with modern technologies"
          description="We use the latest tools and frameworks to build scalable, performant, and maintainable solutions."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <TechIcon key={tech.name} {...tech} index={index} />
          ))}
        </motion.div>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}
