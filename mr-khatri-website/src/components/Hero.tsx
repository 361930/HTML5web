"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen bg-dark-gray text-soft-white text-center flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="relative z-10">
        <h1
          className="text-5xl font-bold text-lime-green font-poppins mb-4"
        >
          Welcome to My Digital Playground
        </h1>
        <p
          className="text-lg text-muted-gray font-roboto"
        >
          Crafting beautiful and functional websites.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;