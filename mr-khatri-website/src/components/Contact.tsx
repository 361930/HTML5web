"use client";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-green font-poppins mb-10">Contact Me</h2>
        <motion.form
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-soft-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-green" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 text-soft-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-green" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-800 text-soft-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-green"></textarea>
          </div>
          <button type="submit" className="bg-lime-green text-dark-gray font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;