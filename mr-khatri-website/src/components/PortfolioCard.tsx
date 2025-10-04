import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="bg-muted/10 rounded-lg overflow-hidden group">
      <div className="relative h-60">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-text mb-2">{title}</h3>
        <p className="text-muted mb-4">{description}</p>
        <Link href={projectUrl} className="text-primary hover:underline">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;