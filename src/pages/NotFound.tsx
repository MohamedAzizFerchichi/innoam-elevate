import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <SEOHead
        title="404 | Page Introuvable - InnoAM"
        description="Cette page n'existe pas. Retournez sur InnoAM pour découvrir nos services de développement web, mobile et IA en Tunisie."
        canonical="https://innoam.tn/404"
        noIndex={true}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="relative text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-9xl font-bold text-gradient">404</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-3xl font-bold text-foreground">
          Page Not Found
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex items-center justify-center gap-4">
          <Link to="/"><Button variant="hero" size="lg"><Home size={18} /> Back to Home</Button></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
