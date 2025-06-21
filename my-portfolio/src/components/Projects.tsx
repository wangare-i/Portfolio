// src/components/Projects.tsx
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    title: 'Tracking Suspicious DNS in AWS',
    description:
      'Built a hands-on DNS logging setup using VPC Flow Logs, CloudWatch, and Lambda for alerting.',
  },
  {
    title: 'Web App on EKS (PoC)',
    description:
      'Deployed a full-stack containerized app using Amazon EKS + Fargate for orchestration and scalability.',
  },
  {
    title: 'Telemedicine Backend',
    description:
      'Node.js + MySQL backend with patient registration, doctor scheduling, and appointment booking features.',
  },
];

const blogPosts = [
  {
    title: 'Tracking Suspicious DNS Activity in AWS',
    link: 'https://medium.com/@wangareirungu3/tracking-suspicious-dns-activity-in-aws-a-hands-on-guide-52ccef249302',
    date: 'May 9, 2025',
    summary:
      'Set up DNS logging with VPC Flow Logs, Lambda, and CloudWatch to identify suspicious lookups in AWS environments.',
  },
  {
    title: 'Deploying a Serverless 2048 GAME App with AWS EKS and Fargate',
    link: 'https://medium.com/@wangareirungu3/kubernetes-configmaps-secrets-why-mounting-is-better-than-environment-variables-454287a55fe5',
    date: 'Apr 8, 2025',
    summary:
      'Used Fargate to deploy a containerized game on AWS EKS with scalable architecture and minimal infrastructure management.',
  },
  {
    title: 'Kubernetes ConfigMaps & Secrets: Why Mounting is Better',
    link: 'https://medium.com/@wangareirungu3/kubernetes-configmaps-secrets-why-mounting-is-better-than-environment-variables-454287a55fe5',
    date: 'Mar 25, 2025',
    summary:
      'Explains why mounting secrets as files in Kubernetes improves security and flexibility over environment variables.',
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-highlight mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Portfolio Projects */}
          <div className="space-y-6">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md border border-highlight bg-opacity-10 backdrop-blur-md"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg shadow-md border border-highlight bg-opacity-10 backdrop-blur-md hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <p className="text-gray-200">{post.summary}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
