import { siteConfig } from "@/lib/siteConfig";

export function About() {
  return (
    <section id="about" className="bg-white p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-neutral-600 max-w-3xl">{siteConfig.about}</p>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold">Selected Work</h2>
        <div className="mt-4 space-y-4">
          {siteConfig.work.map((w) => (
            <div key={w.title} className="p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="font-semibold">{w.title}</div>
              <div className="text-sm text-neutral-500">{w.meta}</div>
            </div>
          ))}
        </div>
      </div>
      <aside className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold">Skills & Tools</h3>
        <ul className="mt-3 text-sm space-y-2">
          {siteConfig.skills.map(s => <li key={s}>{s}</li>)}
        </ul>
      </aside>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-white p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {siteConfig.projects.map((p) => (
          <div key={p.title} className="p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-neutral-500 mt-1">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-indigo-50 to-pink-50 p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold">Say hi</h2>
      <p className="mt-3 text-neutral-600">Interested in a collaboration or a role? Drop a short message.</p>
      {/* Replace action with your Formspree endpoint when ready */}
      <form method="POST" action="https://formspree.io/f/your_form_id" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" className="p-3 rounded-lg border border-neutral-100" placeholder="Your name" required />
        <input name="email" type="email" className="p-3 rounded-lg border border-neutral-100" placeholder="Email" required />
        <textarea name="message" className="p-3 rounded-lg border border-neutral-100 sm:col-span-2" rows={4} placeholder="Message" required></textarea>
        <button className="sm:col-span-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold">Send</button>
      </form>
      <p className="text-xs text-neutral-500 mt-2">Or email directly: <a href={"mailto:"+siteConfig.email} className="underline">{siteConfig.email}</a></p>
    </section>
  );
}
