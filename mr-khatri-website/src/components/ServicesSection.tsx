"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Next.js Development',
    description: 'Fast, SEO-friendly websites built with the React and Next.js framework.',
    link: '/services/nextjs-development',
  },
  {
    title: 'Sanity CMS Integration',
    description: 'Flexible content management with the powerful Sanity headless CMS.',
    link: '/services/sanity-cms',
  },
  {
    title: 'E-commerce Development',
    description: 'Custom online stores with secure payment processing and inventory management.',
    link: '/services/ecommerce',
  },
    {
    title: 'Website Optimization',
    description: 'Performance tuning for lightning-fast load times and better user experience.',
    link: '/services/website-optimization',
  },
];

const ServicesSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="bg-background py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">Our Services</h2>
          <p className="text-lg text-muted mt-2">We offer a comprehensive range of web development services.</p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-muted/10 p-8 rounded-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-heading font-bold text-text mb-2">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;