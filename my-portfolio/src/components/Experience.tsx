// src/components/Experience.tsx
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-highlight mb-10">Experience</h2>
        <div className="space-y-10">

          {/* Techno Brain */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">Software Test Engineer – Microsoft Engineering Center</h3>
            <p className="text-sm text-gray-300 mb-1">Techno Brain Group · Full-time · Sep 2023 – Present · Nairobi (Hybrid)</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Executed test cases and scenarios to identify defects and ensure software functionality.</li>
              <li>Collaborated with developers to resolve issues using Azure DevOps.</li>
              <li>Maintained automated test scripts with Selenium, JMeter, and Playwright.</li>
              <li>Performed regression testing for stability after code changes.</li>
              <li>Contributed to SSIRP Hopechest project: led validations and defect tracking.</li>
            </ul>
          </div>

          {/* Amotech */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">IT System Support Intern</h3>
            <p className="text-sm text-gray-300 mb-1">Amotech Africa · Jul 2023 – Sep 2023 · Nairobi</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Handled technical troubleshooting and hardware/software maintenance.</li>
              <li>Worked with remote desktop tools, PowerApps-based ticketing, and ERP deployment.</li>
              <li>Collaborated using Microsoft Teams and monitored networks with CLI tools.</li>
            </ul>
          </div>

          {/* Devlan */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">Software Developer & QA Engineer</h3>
            <p className="text-sm text-gray-300 mb-1">Devlan Solutions · Jan 2022 – May 2023 · Machakos</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Led development and QA for scalable solutions in Python, Java, and JavaScript.</li>
              <li>Worked across full SDLC and ensured best practices in cross-functional teams.</li>
              <li>Performed early-stage unit and integration testing to ensure code reliability.</li>
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
