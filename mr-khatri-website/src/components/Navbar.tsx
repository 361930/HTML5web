import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark-gray p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-soft-white font-bold text-xl">
          <Link href="/">MR Khatri</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-soft-white hover:text-lime-green">Home</Link>
          <Link href="/#services" className="text-soft-white hover:text-lime-green">Services</Link>
          <Link href="/#testimonials" className="text-soft-white hover:text-lime-green">Testimonials</Link>
          <Link href="/#portfolio" className="text-soft-white hover:text-lime-green">Portfolio</Link>
          <Link href="/#contact" className="text-soft-white hover:text-lime-green">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;