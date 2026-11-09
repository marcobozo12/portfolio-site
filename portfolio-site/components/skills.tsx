"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    description: "Languages I use to build applications.",
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "Python"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    description: "Building responsive and modern interfaces.",
    skills: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing application logic and APIs.",
    skills: ["Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Working with structured data.",
    skills: ["MySQL", "H2"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Tools used throughout development.",
    skills: ["Docker", "AWS ECR", "Unity"],
  },
  {
    title: "Cybersecurity & Networking",
    icon: ShieldCheck,
    description: "Building knowledge in security and networking.",
    skills: ["Cybersecurity Operations", "Network Fundamentals"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            What I work with
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A collection of technologies and tools I've worked with
            through my studies, projects and personal development.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-purple-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                  <Icon size={23} />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mb-6 text-sm text-gray-400">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition-colors duration-200 group-hover:border-purple-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}