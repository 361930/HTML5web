"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-heading font-bold text-text mb-4"
        variants={itemVariants}
      >
        We build websites to grow your business
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8"
        variants={itemVariants}
      >
        Omira web development specializes in creating fast, SEO-friendly websites using the latest technologies like Next.js and Sanity CMS. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver high-quality solutions tailored to your needs.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          href="/contact"
          className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors"
        >
          Start Project
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;