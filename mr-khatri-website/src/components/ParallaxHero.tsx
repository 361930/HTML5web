"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/assets/placeholder.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          y,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1
          className="mb-4 text-4xl font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We build websites to grow your business
        </motion.h1>
        <motion.p
          className="mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Omira web development specializes in creating fast, SEO-friendly websites using the latest technologies like Next.js and Sanity CMS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-primary py-3 px-8 font-bold text-background transition-colors hover:bg-primary/90"
          >
            Start Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxHero;