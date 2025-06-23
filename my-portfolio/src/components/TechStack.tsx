import { motion } from "framer-motion";
import {
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiPostman,
  SiLinux,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";

const tools = [
  { name: "AWS", icon: <SiAmazon className="text-yellow-300" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-200" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-400" /> },
  { name: "Linux", icon: <SiLinux className="text-gray-300" /> },
  { name: "Grafana", icon: <SiGrafana className="text-orange-300" /> },
  { name: "Prometheus", icon: <SiPrometheus className="text-red-300" /> },
  { name: "Terraform", icon: <SiTerraform className="text-indigo-300" /> },
];

function TechStack() {
  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-highlight mb-10">Tools & Technology Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-opacity-5 border border-highlight rounded shadow-md hover:shadow-lg backdrop-blur-sm transition"
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <p className="text-sm text-gray-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;
