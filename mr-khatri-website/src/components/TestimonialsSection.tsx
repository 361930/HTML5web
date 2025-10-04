"use client";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aditya Singhal',
    company: 'Founder Maihuna.in',
    testimonial: "When we started working together, I wasn't very sure of the details about what all I wanted in my website. But you were there at each step... 1. You helped me figure out What best suits my website 2. You were Flexible to all my midway changes 3. You provided me the services On Time And you were always very cooperative... While most freelancers I've worked with in the past were adamant, you had a client-focused approach. This is why you'll always be my top choice for any new digital project I take up! Glad to have found you for Maihuna.in Great work bro! 💯👏🫂",
  },
  {
    name: 'Eric Mansur',
    company: 'Spark Punch LLC | USA',
    testimonial: 'Working with Faiz has been a remarkable experience. He truly EXCEEDS expectations with his code expertise and professionalism, seamlessly migrating my website from Storyblok to Sanity and even creating a custom walkthrough video of the admin section in Sanity for me to refer to. Faiz stands out among developers for his polite, fluent communication and consistent follow-ups. This will surely be the first of many projects we collaborate on! 😊',
  },
   {
    name: 'Mike Wilen',
    company: 'Mike Wilen Group | USA',
    testimonial: 'Faiz is the real deal, he pushed through a hard project, with all kinds of unforeseen issues - Very nice.',
  },
];

const TestimonialsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">Client Testimonials</h2>
          <p className="text-lg text-muted mt-2">Don't just take our word for it. Here's what our clients have to say.</p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="bg-muted/10 p-8 rounded-lg"
              variants={itemVariants}
            >
              <p className="text-muted mb-4">"{testimonial.testimonial}"</p>
              <h4 className="font-heading font-bold text-text">{testimonial.name}</h4>
              <p className="text-sm text-muted">{testimonial.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;