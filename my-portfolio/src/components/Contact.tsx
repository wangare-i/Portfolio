// src/components/Contact.tsx
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-highlight mb-6">Get in Touch</h2>
        <p className="mb-4 text-lg text-gray-300">
          I’d love to connect, collaborate, or just chat tech 🚀
        </p>
        <p className="mb-6 text-lg">
          📧{" "}
          <a
            href="mailto:wangareirungu3@gmail.com"
            className="text-accent hover:underline"
          >
            wangareirungu3@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/wangare-i"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/wangare-irungu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@wangareirungu3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
