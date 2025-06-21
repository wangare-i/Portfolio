import { motion } from "framer-motion";

function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#1e293b] shadow-xl border-l-4 border-highlight">
            <h3 className="text-xl font-semibold text-highlight mb-2">AWS Solutions Architect – Associate</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Designed secure, resilient AWS architectures with networking, IAM, compute, and cost-optimized best practices.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-[#1e293b] shadow-xl border-l-4 border-highlight">
            <h3 className="text-xl font-semibold text-highlight mb-2">KCNA – Kubernetes and Cloud Native Associate</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Validated knowledge in container orchestration, cloud-native tooling, and managing Kubernetes workloads.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Certifications;
