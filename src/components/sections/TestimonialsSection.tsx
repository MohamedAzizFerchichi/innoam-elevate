import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      quote: language === "fr"
        ? "InnoAM a transformé notre vision en une réalité impressionnante. Leur expertise technique et attention aux détails ont dépassé nos attentes."
        : "InnoAM transformed our vision into a stunning reality. Their technical expertise and attention to detail exceeded our expectations.",
      author: "Anis Mahmoud",
      role: language === "fr" ? "CEO et Fondateur de MedOryx" : "CEO & Founder of MedOryx",
      avatar: "AM",
    },
    {
      quote: language === "fr"
        ? "La capacité de l'équipe à comprendre des exigences complexes et à fournir des solutions évolutives est remarquable. Hautement recommandé!"
        : "The team's ability to understand complex requirements and deliver scalable solutions is remarkable. Highly recommended!",
      author: "Mondher Khanfir",
      role: language === "fr" ? 'Fondateur de "DeepTech Startup Rating"' : 'Founder of "DeepTech Startup Rating"',
      avatar: "MK",
    },
    {
      quote: language === "fr"
        ? "Travailler avec InnoAM a été un tournant. Ils ont livré dans les temps, dans le budget, et avec une qualité exceptionnelle."
        : "Working with InnoAM was a game-changer. They delivered on time, within budget, and with exceptional quality.",
      author: "Ahmed Trabelsi",
      role: language === "fr" ? "Directeur Produit, ISB Immobilière" : "Product Director, ISB Immobilière",
      avatar: "AT",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          description={t("testimonials.description")}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-6 lg:p-8 rounded-2xl glass-card group"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
