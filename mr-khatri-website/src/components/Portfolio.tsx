"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  {
    title: "Project One",
    description: "A description of the first project.",
    imageUrl: "/portfolio1.jpg",
  },
  {
    title: "Project Two",
    description: "A description of the second project.",
    imageUrl: "/portfolio2.jpg",
  },
  {
    title: "Project Three",
    description: "A description of the third project.",
    imageUrl: "/portfolio3.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-green font-poppins mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image src={item.imageUrl} alt={item.title} width={500} height={300} className="w-full h-auto rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-soft-white">
                  <h3 className="text-2xl font-bold font-poppins">{item.title}</h3>
                  <p className="font-roboto">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;