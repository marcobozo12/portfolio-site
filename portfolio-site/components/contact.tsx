
"use client";

import { motion } from "framer-motion";
import { Mail, Code2, ArrowUpRight } from "lucide-react";

// Add your real contact details here when you're ready.
const contactDetails = {
  email: "",
  linkedin: "",
  github: "",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 bg-[#0c0c18] overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            What's next?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's work <span className="text-purple-400">together.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            I'm always interested in connecting with people,
            discussing opportunities and exploring new ideas.
            If you'd like to get in touch, feel free to reach out.
          </p>

          {contactDetails.email ? (
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-medium transition-all"
            >
              <Mail size={19} />
              Get in touch
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <p className="inline-flex items-center gap-3 border border-purple-500/30 bg-purple-500/10 text-purple-300 px-8 py-4 rounded-xl">
              <Mail size={19} />
              Email address coming soon
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {contactDetails.linkedin && (
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#151525] border border-white/10 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            >
              <ArrowUpRight size={16} />
            </a>
          )}

          {contactDetails.github && (
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#151525] border border-white/10 text-gray-300 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            >
              <Code2 size={20} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
          )}
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Marco. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
