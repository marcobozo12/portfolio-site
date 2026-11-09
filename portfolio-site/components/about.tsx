
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Lightbulb,
  Target,
  MapPin,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Computer Science graduate from RMIT University, with a foundation in software development and computing.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Interested in creating modern applications and exploring full-stack technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Enjoy breaking down complex problems, learning new concepts and finding practical solutions.",
  },
  {
    icon: Target,
    title: "Career Goals",
    description:
      "Continuously developing my skills in software engineering, networking and cybersecurity.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-16 bg-[#0c0c18] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-widest mb-5">
            <Sparkles size={16} />
            Get to know me
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            More than just
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              writing code.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
            A little about my background, interests and what drives
            me to keep learning and building.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Introduction card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/10 blur-3xl rounded-full" />

            <div className="relative p-8 md:p-10 rounded-3xl bg-[#151525]/90 backdrop-blur-xl border border-white/10 shadow-2xl">

              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-2">
                    A little introduction
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Hi, I'm Marco.
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Code2 size={26} className="text-purple-400" />
                </div>
              </div>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  I'm a Computer Science graduate from RMIT University
                  based in Melbourne, Australia. My interest in technology
                  comes from enjoying the process of understanding how
                  things work and finding ways to make them better.
                </p>

                <p>
                  I'm particularly interested in software engineering,
                  full-stack development and cybersecurity. I enjoy
                  exploring new technologies and challenging myself
                  to build things independently.
                </p>

                <p>
                  Currently, I'm focused on expanding my technical
                  experience through personal projects, developing
                  practical skills and continuing to grow as a developer.
                </p>
              </div>

              <div className="mt-10 pt-7 border-t border-white/10 flex flex-wrap gap-3">
                {["Curious", "Problem Solver", "Always Learning"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={15} className="text-purple-400" />
                Melbourne, Australia
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-7 rounded-2xl bg-[#151525]/80 border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <Icon
                      className="text-purple-400"
                      size={24}
                    />
                  </div>

                  <h4 className="text-white font-semibold text-lg mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
