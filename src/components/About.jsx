import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-cyan-500/10" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-white/80"
        >
          I’m a front‑end engineer and creative developer specializing in premium, motion‑first interfaces.
          My craft blends design systems, accessibility and WebGL—delivering experiences that feel alive.
        </motion.p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { k: 'Experience', v: '5+ years' },
            { k: 'Focus', v: '3D & Motion UI' },
            { k: 'Location', v: 'Remote / Worldwide' },
          ].map((i) => (
            <motion.div
              key={i.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm text-white/60">{i.k}</p>
              <p className="mt-1 text-lg font-medium">{i.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
