import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

// Articles de blog (à remplacer par une vraie source de données)
const blogPosts = [
  {
    slug: "intelligence-artificielle-tunisie-2024",
    title: "L'Intelligence Artificielle en Tunisie : Tendances 2024",
    excerpt: "Découvrez comment l'IA transforme le paysage technologique tunisien et les opportunités pour les entreprises locales.",
    date: "2024-03-15",
    readTime: "5 min",
    category: "Intelligence Artificielle",
    image: "/assets/abstract-tech-1.jpg",
  },
  {
    slug: "react-nextjs-performance-web",
    title: "React vs Next.js : Optimiser les Performances Web",
    excerpt: "Guide complet pour choisir entre React et Next.js selon vos besoins de performance et SEO.",
    date: "2024-03-10",
    readTime: "8 min",
    category: "Développement Web",
    image: "/assets/project-mockup-1.jpg",
  },
  {
    slug: "saas-startup-tunisie-guide",
    title: "Lancer un SaaS en Tunisie : Guide Complet 2024",
    excerpt: "De l'idée au lancement : tout ce qu'il faut savoir pour créer votre startup SaaS en Tunisie.",
    date: "2024-03-05",
    readTime: "10 min",
    category: "Entrepreneuriat",
    image: "/assets/project-mockup-2.jpg",
  },
];

const Blog = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <SEOHead
        title="Blog InnoAM | Actualités Tech, IA et Développement Web"
        description="Découvrez nos articles sur l'intelligence artificielle, le développement web, React, Node.js et les tendances tech en Tunisie."
        canonical="https://innoam.tn/blog"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            {language === "fr" ? "Blog Tech" : "Tech Blog"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto"
          >
            {language === "fr" ? "Actualités & " : "News & "}
            <span className="text-gradient">
              {language === "fr" ? "Insights Tech" : "Tech Insights"}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {language === "fr"
              ? "Explorez nos articles sur l'IA, le développement web et les tendances technologiques"
              : "Explore our articles on AI, web development and tech trends"}
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="rounded-2xl overflow-hidden glass-card hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        {language === "fr" ? "Lire l'article" : "Read article"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
