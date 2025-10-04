"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-green font-poppins mb-10">About Me</h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-soft-white font-roboto mb-4">
            I am a passionate web developer with a knack for creating dynamic and user-friendly websites. With a strong background in front-end technologies, I specialize in building modern web applications using the latest frameworks and tools.
          </p>
          <p className="text-lg text-soft-white font-roboto">
            My goal is to combine aesthetics with functionality to deliver an exceptional user experience. I am always eager to learn new things and take on challenging projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;