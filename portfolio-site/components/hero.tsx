
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 pt-36 pb-20"
    >
      {/* Background effects */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:35px_35px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles size={15} className="text-purple-400" />
            <span className="text-purple-300 text-sm">
              Computer Science Graduate · Melbourne
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Turning ideas into
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              digital reality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
          >
            Hi, I'm Marco. A Computer Science graduate from RMIT
            University with a passion for software engineering,
            full-stack development and cybersecurity.
            I enjoy building useful technology, solving problems
            and continuously pushing my technical skills further.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 py-4 rounded-xl font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-600/30 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-purple-400/60 bg-white/5 text-white px-7 py-4 rounded-xl transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-5 text-gray-500 text-sm"
          >
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-purple-400" />
              Always building
            </span>

            <span className="w-1 h-1 rounded-full bg-gray-600" />

            <span>Always learning</span>
          </motion.div>
        </div>

        {/* Right side developer card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-md">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl rounded-full" />

            <div className="relative bg-[#11111f]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <span className="text-gray-500 text-xs font-mono">
                  developer.ts
                </span>
              </div>

              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center">
                  <Terminal size={25} className="text-purple-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Developer Profile
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Personal information
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                </p>

                <div className="pl-6 space-y-4">
                  <p>
                    <span className="text-gray-400">name:</span>{" "}
                    <span className="text-green-400">"Marco"</span>,
                  </p>

                  <p>
                    <span className="text-gray-400">degree:</span>{" "}
                    <span className="text-green-400">"Computer Science"</span>,
                  </p>

                  <p>
                    <span className="text-gray-400">university:</span>{" "}
                    <span className="text-green-400">"RMIT"</span>,
                  </p>

                  <p>
                    <span className="text-gray-400">location:</span>{" "}
                    <span className="text-green-400">"Melbourne, AU"</span>,
                  </p>

                  <p>
                    <span className="text-gray-400">interests:</span> [
                  </p>

                  <div className="pl-5 space-y-2">
                    <p className="text-green-400">"Software Engineering",</p>
                    <p className="text-green-400">"Full-stack Development",</p>
                    <p className="text-green-400">"Cybersecurity"</p>
                  </div>

                  <p>],</p>

                  <p>
                    <span className="text-gray-400">mindset:</span>{" "}
                    <span className="text-green-400">"Always learning"</span>
                  </p>
                </div>

                <p className="text-white">{"}"}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-gray-500 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Available for opportunities
                </span>

                <Sparkles size={16} className="text-purple-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
