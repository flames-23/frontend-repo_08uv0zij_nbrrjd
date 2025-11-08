import { motion } from 'framer-motion';
import { Send, Github, Instagram, Facebook, MessageCircle, Gamepad2, Briefcase } from 'lucide-react';

export default function Contact() {
  const socials = [
    { name: 'WhatsApp', href: 'https://wa.me/1234567890', icon: MessageCircle },
    { name: 'Discord', href: 'https://discord.com/users/your-id', icon: Gamepad2 },
    { name: 'GitHub', href: 'https://github.com/your-handle', icon: Github },
    { name: 'Fiverr', href: 'https://fiverr.com/your-handle', icon: Briefcase },
    { name: 'Instagram', href: 'https://instagram.com/your-handle', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/your-handle', icon: Facebook },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    window.location.href = `mailto:hello@example.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      data.name || 'Unknown'
    )}&body=${encodeURIComponent(data.message || '')}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let’s build something great
        </motion.h2>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-500/30 hover:bg-white/10"
                aria-label={s.name}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 blur-3xl transition-transform group-hover:scale-110" />
                <div className="relative flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="text-white" size={20} />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">Connect on</p>
                    <p className="text-base font-medium">{s.name}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="grid gap-4">
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

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/80">
              Prefer a quick chat? Use one of the social links to reach me instantly. I’m available for freelance work,
              long‑term collaborations, and exciting product missions.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
              <p><span className="text-white/50">Response time:</span> within 24h</p>
              <p><span className="text-white/50">Timezone:</span> GMT</p>
              <p><span className="text-white/50">Languages:</span> EN</p>
              <p><span className="text-white/50">Status:</span> Open to work</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Flames. All rights reserved.</p>
      </div>
    </section>
  );
}
