import { motion } from "framer-motion";

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
        <h2 className="text-3xl font-bold text-highlight mb-10">Projects</h2>
        <div className="space-y-10">

          {/* Project 1 */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">Tracking Suspicious DNS Activity in AWS</h3>
            <p className="text-sm text-gray-300 mb-2">May 9, 2025</p>
            <p className="text-gray-300 mb-3">
              Built a DNS monitoring solution using VPC Flow Logs, Lambda, and CloudWatch to flag suspicious domain lookups and improve security visibility.
            </p>
            <a
              href="https://medium.com/@wangareirungu3/tracking-suspicious-dns-activity-in-aws-a-hands-on-guide-52ccef249302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Read Full Article →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">Deploying a Serverless 2048 Game App on AWS EKS</h3>
            <p className="text-sm text-gray-300 mb-2">April 8, 2025</p>
            <p className="text-gray-300 mb-3">
              Containerized and deployed a 2048 game frontend on Amazon EKS using Fargate, with load balancing, monitoring,.
            </p>
            <a
              href="https://medium.com/@wangareirungu3/deploying-a-serverless-2048-game-app-with-aws-eks-and-fargate-59d0da0c276b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Read Full Article →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-opacity-5 border border-highlight p-6 rounded-md shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-accent">Kubernetes ConfigMaps & Secrets: Best Practices</h3>
            <p className="text-sm text-gray-300 mb-2">March 25, 2025</p>
            <p className="text-gray-300 mb-3">
              Explained why mounting secrets as volumes is safer and more flexible than environment variables when managing sensitive data in Kubernetes.
            </p>
            <a
              href="https://medium.com/@wangareirungu3/kubernetes-configmaps-secrets-why-mounting-is-better-than-environment-variables-454287a55fe5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Read Full Article →
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
