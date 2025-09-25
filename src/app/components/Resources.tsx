"use client";

import { motion, Variants } from "framer-motion";

interface Resource {
  id: string;
  name: string;
  format?: string;
  description?: string;
  url: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Resources({ resources }: { resources: Resource[] }) {
  return (
    <section id="resources" className="max-w-5xl mx-auto px-6 py-16 mt-10">
      <h2 className="text-2xl font-semibold mx-auto w-full text-center mb-16">
        Available Resources
      </h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {resources.map((r) => (
          <motion.div
            key={r.id}
            variants={itemVariants}
            className="flex flex-col rounded-lg shadow-md border border-gray-200 p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{r.name}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Format:</strong> {r.format || "—"}
            </p>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              <strong>Description: </strong>
              {r.description || "No description"}
            </p>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-xs text-black rounded-full border-2 border-transparent hover:border-gray-300 w-max"
              style={{ backgroundColor: "#B6F334", cursor: "pointer" }}
            >
              Download
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
