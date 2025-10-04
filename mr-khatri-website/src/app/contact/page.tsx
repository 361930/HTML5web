"use client";
import { motion } from 'framer-motion';

const ContactPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text">Contact Us</h1>
          <p className="text-lg text-muted mt-2">Have questions or ready to start your project? Fill out the form, and we'll get back to you as soon as possible.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text">Full Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full bg-muted/20 border border-muted/50 rounded-md py-2 px-3 text-text focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text">Email Address</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full bg-muted/20 border border-muted/50 rounded-md py-2 px-3 text-text focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-muted/20 border border-muted/50 rounded-md py-2 px-3 text-text focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;