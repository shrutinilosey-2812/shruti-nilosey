import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Work, Projects, Contact } from "@/components/Sections";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 sm:px-12 space-y-20 pb-24">
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Shruti Nilosey — built with ❤️ · Orwa-style replica
      </footer>
    </div>
  );
}
