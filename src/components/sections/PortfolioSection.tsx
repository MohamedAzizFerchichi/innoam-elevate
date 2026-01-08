import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import mockup1 from "@/assets/project-mockup-1.jpg";
import mockup2 from "@/assets/project-mockup-2.jpg";
import mockup3 from "@/assets/project-mockup-3.jpg";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive analytics dashboard for financial data visualization and reporting.",
    image: mockup1,
    technologies: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    image: mockup2,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI Research Platform",
    category: "AI & Machine Learning",
    description: "Advanced ML platform for neural network training and model deployment.",
    image: mockup3,
    technologies: ["Python", "TensorFlow", "AWS"],
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured projects"
          description="Explore some of our recent work that showcases our expertise and commitment to excellence."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden glass-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
