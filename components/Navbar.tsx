"use client";
import { siteConfig } from "../lib/siteConfig";

export default function Navbar() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
  ];
  return (
    <nav className="fixed w-full z-30 top-4 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur rounded-2xl px-4 py-2 border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-neutral-200 bg-gradient-to-tr from-indigo-200 to-pink-200" />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">{siteConfig.name}</div>
            <div className="text-xs text-neutral-500">{siteConfig.location}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {items.map(i => (
            <a key={i.href} href={i.href} className="text-sm px-3 py-1 rounded-full hover:scale-105 transition-transform border border-neutral-200">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="ml-1 inline-block px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
