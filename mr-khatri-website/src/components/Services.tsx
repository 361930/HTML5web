"use client";
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites tailored to your needs.",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces.",
  },
  {
    title: "SEO Optimization",
    description: "Improving your site's visibility on search engines.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-green font-poppins mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-soft-white font-poppins mb-4">{service.title}</h3>
              <p className="text-muted-gray font-roboto">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;