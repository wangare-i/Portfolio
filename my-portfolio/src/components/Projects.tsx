// src/components/Blog.tsx
import { motion } from 'framer-motion';

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

function Blog() {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-highlight mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-opacity-10 backdrop-blur-md rounded-lg shadow border border-highlight hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-accent mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-200">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Blog;
