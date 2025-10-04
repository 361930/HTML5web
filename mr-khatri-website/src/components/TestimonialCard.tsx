type TestimonialCardProps = {
  quote: string;
  author: string;
  company: string;
};

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <div className="bg-dark-gray p-6 rounded-lg border border-muted-gray">
      <p className="text-soft-white italic">"{quote}"</p>
      <p className="text-lime-green font-bold mt-4">- {author}</p>
      <p className="text-muted-gray">{company}</p>
    </div>
  );
};

export default TestimonialCard;