import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-primary opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-10" />
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
          />

          {/* Content */}
          <div className="relative px-6 py-16 lg:px-16 lg:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              Ready to Start?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto"
            >
              Let's build something amazing together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-white/80 max-w-xl mx-auto"
            >
              Get in touch to discuss your project and discover how we can help
              turn your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg group"
                >
                  Request a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Schedule a Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
