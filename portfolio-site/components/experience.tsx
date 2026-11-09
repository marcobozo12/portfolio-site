
"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
} from "lucide-react";

const experiences = [
  {
    type: "Work Experience",
    title: "Landscape Team Member",
    organisation: "Bunnings Warehouse",
    period: "Current",
    description:
      "Working in a fast-paced retail environment, supporting customers, maintaining product knowledge and helping manage stock and daily team operations.",
    icon: BriefcaseBusiness,
  },
  {
    type: "Work Experience",
    title: "Customer Service Supervisor",
    organisation: "Coles",
    period: "September 2020 – October 2023",
    description:
      "Supervised customer service operations, supported team members and helped maintain efficient store operations. Contributed to a Store of the Year 2023 result and achieved the fastest scan rate for three consecutive months.",
    icon: BriefcaseBusiness,
  },
  {
    type: "Education",
    title: "Computer Science",
    organisation: "RMIT University",
    period: "Completed",
    description:
      "Completed a Computer Science degree, developing foundations in programming, software development, problem-solving and computer systems.",
    icon: GraduationCap,
  },
  {
    type: "Certification",
    title: "Cybersecurity Operations",
    organisation: "Cisco Networking Academy",
    period: "Completed",
    description:
      "Completed the Cybersecurity Operations course, including its learning modules and practical labs.",
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-16 bg-[#080811]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            My background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & <span className="text-purple-400">Education.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            My professional experience, education and certifications
            that have helped shape my technical and professional skills.
          </p>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-xl bg-[#151525] border border-purple-500/30 flex items-center justify-center">
                    <Icon size={22} className="text-purple-400" />
                  </div>

                  <div className="p-7 rounded-2xl bg-[#151525] border border-white/10 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-purple-400 text-sm font-medium">
                        {experience.type}
                      </span>

                      <span className="text-gray-500 text-sm">
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">
                      {experience.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {experience.organisation}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
