"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          y,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-soft-white mb-4"
        >
          Building Digital Solutions for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-gray mb-8"
        >
          From stunning websites to robust IT infrastructure, we bring your vision to life.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px 0 rgba(50, 205, 50, 0.9)",
          }}
          className="bg-lime-green text-dark-gray font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_0_rgba(50,205,50,0.7)]"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
};

export default ParallaxHero;