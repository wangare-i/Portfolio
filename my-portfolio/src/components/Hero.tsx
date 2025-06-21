// src/components/Hero.tsx
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-accent mb-4">
            Hi, I'm Josephine
          </h1>
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            AWS Solutions Architect | DevOps & QA Engineer<br></br>

                    Hey, I’m Wangare Irungu  Josephine.
                I’m into cloud engineering, DevOps, and software Quality.
                I love clean systems, reliable deployments, and tools that make life easier.
                Welcome to my portfolio -here is a glimpse of what I’ve been working on.

            
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-2 bg-highlight hover:bg-pink-400 text-white font-medium rounded transition"
          >
            Let’s Connect
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center ">
          <img
            src="/assets/me.png"
            alt="Josephine"
            className="w-56 h-56 md:w-72 md:h-72 object-cover shadow-xl "
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
