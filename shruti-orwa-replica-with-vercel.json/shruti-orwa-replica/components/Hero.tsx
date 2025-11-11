"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <header className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {siteConfig.name} — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">{siteConfig.title}</span>
          </h1>
          <p className="mt-4 text-neutral-600 max-w-xl">{siteConfig.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-full border border-neutral-200 font-medium hover:shadow-lg transition-shadow">Selected work</a>
            <a href="#projects" className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-300 text-neutral-900 font-semibold hover:scale-105 transition-transform">Projects</a>
            <a href={siteConfig.resumePath} className="px-5 py-3 rounded-full ring-1 ring-neutral-100 font-medium hover:bg-neutral-100 transition-colors">Resume (PDF)</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.08 }} className="relative">
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-100">
            <div className="h-72 w-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200" />
          </div>
          <div className="mt-4 text-center text-sm text-neutral-500">Based in {siteConfig.location} · Open to remote</div>
        </motion.div>
      </div>
    </header>
  );
}
