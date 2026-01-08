import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "InnoAM transformed our vision into a stunning reality. Their technical expertise and attention to detail exceeded our expectations.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "SC",
  },
  {
    quote:
      "The team's ability to understand complex requirements and deliver scalable solutions is remarkable. Highly recommended!",
    author: "Michael Roberts",
    role: "CTO, FinanceFlow",
    avatar: "MR",
  },
  {
    quote:
      "Working with InnoAM was a game-changer. They delivered on time, within budget, and with exceptional quality.",
    author: "Emily Watson",
    role: "Product Director, DataVerse",
    avatar: "EW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What our clients say"
          description="Don't just take our word for it — hear from the companies we've helped succeed."
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
