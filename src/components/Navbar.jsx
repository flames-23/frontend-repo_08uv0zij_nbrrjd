import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight text-white">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Flames</span>
          .Portfolio
        </a>
        <div className="hidden gap-8 md:flex">
          <a href="#work" className="text-sm text-white/80 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <Mail size={18} className="text-white" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <Github size={18} className="text-white" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <Linkedin size={18} className="text-white" />
          </a>
        </div>
      </nav>
    </header>
  );
}
