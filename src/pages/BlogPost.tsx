import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

// Base de données d'articles (à remplacer par une vraie API)
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}> = {
  "intelligence-artificielle-tunisie-2024": {
    title: "L'Intelligence Artificielle en Tunisie : Tendances 2024",
    excerpt: "Découvrez comment l'IA transforme le paysage technologique tunisien et les opportunités pour les entreprises locales.",
    content: `
      <p>L'intelligence artificielle connaît une croissance exponentielle en Tunisie. Les startups locales adoptent massivement les technologies d'IA pour résoudre des problèmes complexes.</p>
      
      <h2>Les secteurs en pleine transformation</h2>
      <p>Le secteur de la santé, avec des solutions comme MedOryx, utilise l'IA pour optimiser la gestion des cabinets médicaux. L'analyse prédictive permet d'anticiper les besoins des patients.</p>
      
      <h2>Opportunités pour les entreprises</h2>
      <p>Les entreprises tunisiennes peuvent tirer parti de l'IA pour automatiser leurs processus, améliorer l'expérience client et prendre des décisions basées sur les données.</p>
      
      <h2>L'avenir de l'IA en Tunisie</h2>
      <p>Avec l'émergence de talents locaux et l'investissement croissant dans la R&D, la Tunisie se positionne comme un hub régional pour l'intelligence artificielle.</p>
    `,
    date: "2024-03-15",
    readTime: "5 min",
    category: "Intelligence Artificielle",
    image: "/assets/abstract-tech-1.jpg",
    author: "InnoAM Team",
  },
  "react-nextjs-performance-web": {
    title: "React vs Next.js : Optimiser les Performances Web",
    excerpt: "Guide complet pour choisir entre React et Next.js selon vos besoins de performance et SEO.",
    content: `
      <p>Le choix entre React et Next.js dépend de vos besoins spécifiques en termes de performance, SEO et expérience développeur.</p>
      
      <h2>React : Flexibilité maximale</h2>
      <p>React offre une liberté totale dans l'architecture de votre application. Idéal pour les SPAs complexes et les applications nécessitant un contrôle fin.</p>
      
      <h2>Next.js : Performance et SEO</h2>
      <p>Next.js apporte le Server-Side Rendering (SSR) et la génération statique (SSG) pour un SEO optimal et des performances accrues.</p>
      
      <h2>Notre recommandation</h2>
      <p>Chez InnoAM, nous utilisons Next.js pour les sites vitrines et e-commerce, et React pour les applications web complexes nécessitant une interactivité avancée.</p>
    `,
    date: "2024-03-10",
    readTime: "8 min",
    category: "Développement Web",
    image: "/assets/project-mockup-1.jpg",
    author: "InnoAM Team",
  },
  "saas-startup-tunisie-guide": {
    title: "Lancer un SaaS en Tunisie : Guide Complet 2024",
    excerpt: "De l'idée au lancement : tout ce qu'il faut savoir pour créer votre startup SaaS en Tunisie.",
    content: `
      <p>Créer un SaaS en Tunisie présente des opportunités uniques. Voici notre guide basé sur notre expérience avec MedOryx et d'autres projets.</p>
      
      <h2>1. Validation de l'idée</h2>
      <p>Avant de coder, validez votre idée auprès de clients potentiels. Créez un MVP (Minimum Viable Product) pour tester le marché.</p>
      
      <h2>2. Stack technologique</h2>
      <p>Choisissez des technologies éprouvées : React/Next.js pour le frontend, Node.js ou Python pour le backend, PostgreSQL pour la base de données.</p>
      
      <h2>3. Modèle économique</h2>
      <p>Définissez votre pricing : freemium, abonnement mensuel, ou tarification à l'usage. Adaptez-le au marché tunisien.</p>
      
      <h2>4. Infrastructure et déploiement</h2>
      <p>Utilisez des services cloud comme AWS ou Vercel pour un déploiement rapide et scalable.</p>
    `,
    date: "2024-03-05",
    readTime: "10 min",
    category: "Entrepreneuriat",
    image: "/assets/project-mockup-2.jpg",
    author: "InnoAM Team",
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const post = slug ? blogPostsData[slug] : null;

  // Rediriger vers 404 si l'article n'existe pas
  useEffect(() => {
    if (!post) {
      navigate("/404", { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | Blog InnoAM`}
        description={post.excerpt}
        canonical={`https://innoam.tn/blog/${slug}`}
        ogType="article"
        ogImage={`https://innoam.tn${post.image}`}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-6 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {language === "fr" ? "Retour au blog" : "Back to blog"}
              </Button>
            </Link>

            <div className="mb-6">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{language === "fr" ? "Par" : "By"} {post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl glass-card text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === "fr" 
                ? "Besoin d'aide pour votre projet?"
                : "Need help with your project?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "fr"
                ? "Notre équipe d'experts est prête à transformer vos idées en réalité."
                : "Our team of experts is ready to turn your ideas into reality."}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                {language === "fr" ? "Contactez-nous" : "Contact us"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
