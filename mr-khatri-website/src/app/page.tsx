"use client";
import ParallaxHero from '@/components/ParallaxHero';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';
import { motion } from 'framer-motion';

const Home = () => {
  const testimonials = [
    {
      quote: "This is a placeholder testimonial. The real one will be much more impressive!",
      author: "Satisfied Client",
      company: "Tech Company Inc.",
    },
     {
      quote: "Another placeholder testimonial. The real one will be much more impressive!",
      author: "Another Happy Client",
      company: "Innovate Corp.",
    },
  ];

  const portfolioItems = [
    {
      title: "Project One",
      description: "A brief description of the first project will go here. It will highlight the technologies used and the problems solved.",
      imageUrl: "/assets/placeholder.jpg",
      projectUrl: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of the second project will go here. It will highlight the technologies used and the problems solved.",
      imageUrl: "/assets/placeholder.jpg",
      projectUrl: "#",
    },
  ];

  return (
    <div>
      <ParallaxHero />

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-soft-white mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">Web Development</h3>
            <p className="text-soft-white">
              We build beautiful, fast, and easy-to-use websites tailored to your business. Whether you need a simple site to showcase your work or a complex online store, we create a professional online presence that works perfectly on all devices, including mobile phones, to help you attract more customers.
            </p>
          </div>
          {/* Website Management */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">Website Management</h3>
            <p className="text-soft-white">
              Let us handle the technical details so you can focus on your business. Our website management service keeps your site secure, updated, and running smoothly. We take care of regular backups, performance checks, and software updates to ensure your website is always online and dependable for your visitors.
            </p>
          </div>
          {/* Security Consultancy */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">Security Consultancy</h3>
            <p className="text-soft-white">
              In today's world, protecting your business from online threats is essential. We act as your digital security guard. Our security consultancy service helps identify weak spots in your technology, protects your valuable data from hackers, and creates a clear plan to keep your business safe from cyberattacks.
            </p>
          </div>
          {/* IT Infrastructure Planning */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">IT Infrastructure Planning</h3>
            <p className="text-soft-white">
              We help you build a strong and reliable technology foundation for your business. We'll design a smart plan for your computers, software, and networks to ensure they are efficient, scalable, and ready for future growth. Think of it as creating the perfect blueprint for all your tech needs.
            </p>
          </div>
          {/* SEO Services */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">SEO Services</h3>
            <p className="text-soft-white">
              Want more customers to find you on Google? Our SEO services help your website rank higher in search results. By optimizing your site, we make it easier for people searching for your products or services to discover your business, bringing more traffic and potential leads directly to you.
            </p>
          </div>
          {/* CRM Integrations */}
          <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
            <h3 className="text-2xl font-bold text-lime-green mb-2">CRM Integrations</h3>
            <p className="text-soft-white">
              We connect your Customer Relationship Management (CRM) software with your other business tools (like email, accounting, etc.). This integration automates your workflow and ensures all your customer information is in one place, helping you manage relationships more efficiently and provide better service.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-soft-white mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-soft-white mb-12">Our Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-soft-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-gray mb-8">Let's build something amazing together.</p>
        <a
          href="mailto:your-email@example.com"
          className="bg-lime-green text-dark-gray font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-[0_0_15px_0_rgba(50,205,50,0.7)] hover:shadow-[0_0_25px_0_rgba(50,205,50,0.9)]"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default Home;