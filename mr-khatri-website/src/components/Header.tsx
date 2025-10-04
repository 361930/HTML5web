"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-primary font-bold text-2xl">
            Mr. Khatri
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <Link href="/" className="text-text hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-text hover:text-primary transition-colors">Services</Link>
          <Link href="/portfolio" className="text-text hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-muted/20">Home</Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-muted/20">Services</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-muted/20">Portfolio</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-muted/20">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;