import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Futuristic Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-white/80"
        >
          I craft premium web experiences with a focus on immersive 3D, performance and delightful micro-interactions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#community"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(72,211,255,0.35)] hover:brightness-110 transition"
          >
            Explore Community
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
