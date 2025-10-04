import PortfolioCard from '@/components/PortfolioCard';

const portfolioItems = [
  {
    title: "Project One",
    description: "A brief description of the first project will go here. It will highlight the technologies used and the problems solved.",
    imageUrl: "/assets/placeholder.jpg",
    projectUrl: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of the second project will go here. It will highlight the technologies used and the problems solved.",
    imageUrl: "/assets/placeholder.jpg",
    projectUrl: "#",
  },
    {
    title: "Project Three",
    description: "A brief description of the third project will go here. It will highlight the technologies used and the problems solved.",
    imageUrl: "/assets/placeholder.jpg",
    projectUrl: "#",
  },
];

const PortfolioPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text">Our Work</h1>
          <p className="text-lg text-muted mt-2">A selection of our featured projects.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;