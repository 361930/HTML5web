import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold text-xl mb-4">Mr. Khatri</h3>
            <p className="text-muted">
              Creating beautiful, high-performance websites using Next.js.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-text mb-4">Services</h4>
            <ul className="space-y-2">
              <li><p className="text-muted">Next.js Development</p></li>
              <li><p className="text-muted">Sanity CMS Integration</p></li>
              <li><p className="text-muted">E-commerce Development</p></li>
              <li><p className="text-muted">Website Optimization</p></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-text mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><p className="text-muted">+91 81400 47035</p></li>
              <li><p className="text-muted">omirawebdev@gmail.com</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted/20 text-center text-muted">
          <p>© 2025 Mr. Khatri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;