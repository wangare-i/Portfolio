// src/components/About.tsx
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-6 border-b-2 border-highlight inline-block pb-1">
          About Me
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl text-gray-300">
          AWS Solutions Architect | DevOps & QA Engineer<br />


        Hey, I’m Wangare Irungu  Josephine.
        I’m into cloud engineering, DevOps, and software Quality.
        I love clean systems, reliable deployments, and tools that make life easier.
        Welcome to my portfolio -here is a glimpse of what I’ve been working on.

            </p>





      </div>
    </motion.section>
  );
}

export default About;
