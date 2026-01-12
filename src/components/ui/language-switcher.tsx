import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("fr")}
        className={cn(
          "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
          language === "fr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        FR
      </motion.button>
    </div>
  );
}
