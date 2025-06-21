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

            I specialize in building secure, reliable, and scalable cloud-native systems. With hands-on experience in software testing, DevOps practices, and AWS infrastructure, I blend quality assurance with automation to streamline development and delivery.

            I hold certifications in AWS Solutions Architect and Kubernetes (KCNA) and have worked with tools like Docker, Kubernetes, JMeter, Playwright, and CI/CD pipelines. I’m passionate about making technology dependable and enjoy solving real-world problems through testing, monitoring, and continuous learning.

            </p>





      </div>
    </motion.section>
  );
}

export default About;
