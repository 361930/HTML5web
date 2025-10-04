"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-gray/50 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4 flex justify-between items-center text-soft-white">
        <div className="text-2xl font-bold text-lime-green">
          <Link href="/">MR. KHATRI</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/services" className="hover:text-lime-green transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-lime-green transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-lime-green transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-lime-green transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;