
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A personal developer portfolio showcasing my background, technical skills and projects. Built with a focus on modern design and responsive layouts.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    github: "",
    demo: "",
  },
  {
    title: "Network Monitoring Dashboard",
    category: "Networking",
    description:
      "A planned application for monitoring network devices, tracking connectivity and displaying useful network statistics.",
    technologies: ["Python", "FastAPI", "React", "SQL"],
    status: "Planned",
    github: "",
    demo: "",
  },
  {
    title: "Cybersecurity Log Analyser",
    category: "Cybersecurity",
    description:
      "A planned tool for analysing system logs, identifying suspicious activity and presenting security insights.",
    technologies: ["Python", "FastAPI", "SQL"],
    status: "Planned",
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 bg-[#0c0c18]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            What I've been building
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-purple-400">Projects.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            A collection of projects that demonstrate my interests
            and growing technical experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-7 rounded-2xl bg-[#151525] border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Code2 size={24} className="text-purple-400" />
                </div>

                <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-purple-400 text-sm mb-2">
                {project.category}
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-5 border-t border-white/10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    <Code2 size={17} /> GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-gray-600 text-sm">
                    <Code2 size={17} /> GitHub coming soon
                  </span>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    <ExternalLink size={17} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
