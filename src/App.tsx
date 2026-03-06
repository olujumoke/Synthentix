/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Video, 
  Image as ImageIcon, 
  PenTool, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Menu, 
  X,
  Send,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Stack', href: '#stack' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-black tracking-tighter text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-violet rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          SYNTHETIX
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-neon-violet transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-neon-violet hover:bg-electric-lilac text-white text-sm font-bold rounded-full transition-all purple-glow-hover"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-neon-violet"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-neon-violet text-center text-white font-bold rounded-xl"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-royal-purple/30 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-mono text-electric-lilac mb-6 tracking-widest uppercase">
            Prompt Engineer & AI Creator
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-8">
            SYNTHESIZING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-lilac">FUTURE OF CONTENT</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-sans leading-relaxed">
            Expert AI Content Creation, Prompt Engineering, and Generative Workflows. 
            Transforming abstract ideas into high-fidelity digital reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#work" 
              className="group px-8 py-4 bg-neon-violet hover:bg-electric-lilac text-white font-bold rounded-xl transition-all flex items-center gap-2 purple-glow-hover"
            >
              VIEW MY WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </motion.div>
      </div>

      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-neon-violet)_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Neural Cinema",
      category: "AI Video",
      image: "https://picsum.photos/seed/cinema/800/1000",
      description: "Full cinematic trailer generated using Sora and Runway Gen-3.",
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "Abstract Realities",
      category: "Generative Imagery",
      image: "https://picsum.photos/seed/abstract/800/600",
      description: "High-fidelity architectural concepts created with Midjourney v6.",
      icon: <ImageIcon className="w-5 h-5" />
    },
    {
      title: "Digital Ghostwriter",
      category: "AI Copywriting",
      image: "https://picsum.photos/seed/writing/800/800",
      description: "Strategic brand narratives powered by custom GPT models.",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      title: "Sonic Landscapes",
      category: "AI Audio",
      image: "https://picsum.photos/seed/audio/800/900",
      description: "Immersive soundscapes synthesized via ElevenLabs and Udio.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Prompt Architecture",
      category: "Technical",
      image: "https://picsum.photos/seed/tech/800/700",
      description: "Complex workflow automation for enterprise content teams.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Future Fashion",
      category: "Generative Imagery",
      image: "https://picsum.photos/seed/fashion/800/1100",
      description: "AI-driven apparel design and virtual lookbooks.",
      icon: <ImageIcon className="w-5 h-5" />
    }
  ];

  return (
    <section id="work" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4">SELECTED WORKS</h2>
            <p className="text-white/50 font-mono text-sm uppercase tracking-widest">A glimpse into the generative frontier</p>
          </div>
          <div className="flex gap-2">
            {['All', 'Video', 'Imagery', 'Copywriting'].map(cat => (
              <button key={cat} className="px-4 py-2 glass rounded-full text-xs font-bold hover:bg-neon-violet transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden glass border-white/5 purple-glow-hover transition-all duration-500"
            >
              <div className="relative aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 text-neon-violet mb-2">
                    {project.icon}
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-white/70">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIStack = () => {
  const tools = [
    { name: "Midjourney", role: "Imagery", color: "from-blue-500 to-purple-500" },
    { name: "Sora", role: "Video", color: "from-orange-500 to-red-500" },
    { name: "ChatGPT", role: "Logic", color: "from-emerald-500 to-teal-500" },
    { name: "ElevenLabs", role: "Audio", color: "from-yellow-500 to-orange-500" },
    { name: "Runway Gen-3", role: "Motion", color: "from-pink-500 to-violet-500" },
    { name: "Luma Dream Machine", role: "3D", color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <section id="stack" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4">THE AI STACK</h2>
          <p className="text-white/50 font-mono text-sm uppercase tracking-widest">Tools of the trade</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} mb-4 flex items-center justify-center shadow-lg`}>
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest">{tool.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Conceptualization",
      desc: "Defining the core narrative and visual direction through iterative prompt engineering.",
      number: "01"
    },
    {
      title: "Generation",
      desc: "Synthesizing raw assets across multiple AI models to create a cohesive library of content.",
      number: "02"
    },
    {
      title: "Refinement",
      desc: "Upscaling, color grading, and manual touch-ups to ensure professional-grade quality.",
      number: "03"
    },
    {
      title: "Production",
      desc: "Final assembly and delivery of high-fidelity media ready for global distribution.",
      number: "04"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-violet/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-4">PROMPT TO PRODUCTION</h2>
          <p className="text-white/50 font-mono text-sm uppercase tracking-widest">My generative workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-neon-violet flex items-center justify-center text-white font-display font-black text-xl mb-8 shadow-[0_0_20px_rgba(157,0,255,0.4)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8">LET'S BUILD THE FUTURE</h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Ready to elevate your brand with cutting-edge AI content? 
              Whether it's a cinematic trailer or a generative brand identity, 
              I'm here to synthesize your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-violet">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Response Time</p>
                  <p className="font-bold">Under 24 Hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-violet">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Availability</p>
                  <p className="font-bold">Open for Q2 Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors appearance-none">
                    <option className="bg-charcoal">AI Video Production</option>
                    <option className="bg-charcoal">Generative Branding</option>
                    <option className="bg-charcoal">Prompt Engineering</option>
                    <option className="bg-charcoal">Full AI Workflow</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Budget Range</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors appearance-none">
                    <option className="bg-charcoal">$2k - $5k</option>
                    <option className="bg-charcoal">$5k - $15k</option>
                    <option className="bg-charcoal">$15k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-violet transition-colors" placeholder="Tell me about your vision..." />
              </div>

              <button className="w-full py-4 bg-neon-violet hover:bg-electric-lilac text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 purple-glow-hover">
                SEND MESSAGE
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-display font-black tracking-tighter text-white flex items-center gap-2 justify-center md:justify-start mb-2">
            SYNTHETIX
          </a>
          <p className="text-white/40 text-sm font-mono">© 2024 AI CONTENT CREATOR. ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-violet transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-violet transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-violet transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-neon-violet transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neon-violet/30">
      <Navbar />
      <Hero />
      <Portfolio />
      <AIStack />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
