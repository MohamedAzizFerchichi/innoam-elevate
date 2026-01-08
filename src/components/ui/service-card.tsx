import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative p-6 lg:p-8 rounded-2xl glass-card overflow-hidden transition-all duration-300",
        "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20"
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="relative text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
