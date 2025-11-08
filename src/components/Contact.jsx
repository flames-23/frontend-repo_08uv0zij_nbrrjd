import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // Simple mailto fallback; backend integration can be added later
    window.location.href = `mailto:hello@example.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      data.name || 'Unknown'
    )}&body=${encodeURIComponent(data.message || '')}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let’s build something great
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input id="name" name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-500/50" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input id="email" type="email" name="email" required placeholder="you@example.com" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-500/50" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-cyan-500/50" />
          </div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(72,211,255,0.35)] hover:brightness-110 transition">
            <Send size={16} /> Send Message
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Flames. All rights reserved.</p>
      </div>
    </section>
  );
}
