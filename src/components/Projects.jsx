import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Veelora SMP',
    desc: 'A thriving survival multiplayer community fostering creativity, events, and collaborative builds.',
    tags: ['Minecraft', 'SMP', 'Community'],
    link: '#',
  },
  {
    title: 'endwe shop bd',
    desc: 'Community-driven shop in BD supporting creators and gamers with curated gear and services.',
    tags: ['E-commerce', 'Community', 'Bangladesh'],
    link: '#',
  },
  {
    title: 'Dev.World',
    desc: 'A global hub for developers to collaborate, learn, and launch open-source initiatives.',
    tags: ['Developers', 'Open Source', 'Collab'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="community" className="relative scroll-mt-24 bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-fuchsia-500/10" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Community
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 blur-3xl transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
