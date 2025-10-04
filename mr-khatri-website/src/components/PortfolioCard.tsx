import Image from 'next/image';

type PortfolioCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const PortfolioCard = ({ title, description, imageUrl, projectUrl }: PortfolioCardProps) => {
  return (
    <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
      <Image src={imageUrl} alt={title} width={400} height={250} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-bold text-lime-green mb-2">{title}</h3>
      <p className="text-soft-white mb-4">{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-lime-green hover:underline">
        View Project
      </a>
    </div>
  );
};

export default PortfolioCard;