import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().max(100).optional(),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().max(20).optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const projectTypes = [
  "Web Development",
  "Mobile Development",
  "Full-Stack & SaaS",
  "AI & Machine Learning",
  "Data Analytics & BI",
  "Technical Consulting",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<ContactForm>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto"
          >
            Let's <span className="text-gradient">start a conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? We'd love to hear about
            your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a
                        href="mailto:hello@innoam.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@innoam.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        San Francisco, CA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="p-8 lg:p-12 rounded-3xl glass-card">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                      >
                        <CheckCircle className="w-10 h-10 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({});
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name || ""}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Acme Inc."
                            value={formData.company || ""}
                            onChange={(e) => handleChange("company", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email || ""}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            placeholder="+1 (234) 567-890"
                            value={formData.phone || ""}
                            onChange={(e) => handleChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Project Type *</Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleChange("projectType", value)}
                          >
                            <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select a type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.projectType && (
                            <p className="text-sm text-destructive">{errors.projectType}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>Budget Range (Optional)</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => handleChange("budget", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project..."
                          rows={5}
                          value={formData.message || ""}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                        ) : (
                          <>
                            Send Message
                            <Send size={16} />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
