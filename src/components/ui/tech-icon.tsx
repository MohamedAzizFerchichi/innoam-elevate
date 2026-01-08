import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechIconProps {
  name: string;
  icon: string;
  index?: number;
  className?: string;
}

export function TechIcon({ name, icon, index = 0, className }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.1 }}
      className={cn(
        "group flex flex-col items-center gap-3 p-4 rounded-xl transition-colors",
        "hover:bg-secondary/50",
        className
      )}
    >
      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
