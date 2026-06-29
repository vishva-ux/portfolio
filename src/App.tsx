import React, { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Studio', href: '#studio' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Inquire', href: '#inquire' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-inter">
      {/* 1. Fullscreen Loop Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dim overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 2. Top Navigation Bar Overlay */}
      <nav className="absolute top-0 left-0 w-full z-30 px-6 sm:px-10 lg:px-16 py-5 lg:py-7 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        {/* Left Brand */}
        <div className="flex items-center">
          <a
            href="#"
            className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white select-none hover:opacity-95 transition-opacity"
          >
            VANGUARD
          </a>
        </div>

        {/* Center Links (MD+) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm text-white/80 uppercase tracking-widest hover:text-white transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action (MD+) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-[11px] lg:text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Hamburger Mobile Menu Toggle (Below MD) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex md:hidden flex-col justify-between items-end w-6 h-4 group cursor-pointer focus:outline-none"
          aria-label="Open Navigation Menu"
        >
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-4 h-0.5 bg-white transition-all duration-300 group-hover:w-6" />
        </button>
      </nav>

      {/* 3. Fullscreen Mobile Navigation Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between px-6 sm:px-10 py-6 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Overlay Header matching navbar padding */}
        <div className="flex justify-between items-center w-full">
          <span className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors text-white"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Vertical Links */}
        <div className="flex flex-col items-center gap-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors duration-300"
              style={{
                transitionDelay: `${idx * 80 + 100}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom CTA Overlay */}
        <div className="w-full flex justify-center pb-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="group w-full max-w-xs justify-center inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* 4. Hero Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-16">
        <div className="max-w-4xl flex flex-col items-start">
          
          {/* Tagline Badge */}
          <div className="animate-fade-up flex items-center gap-2 mb-6 lg:mb-8 opacity-0 [animation-fill-mode:forwards]">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="font-inter text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              World-Class Digital Collective
            </span>
          </div>

          {/* Large Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)] mb-6 lg:mb-8 opacity-0 [animation-fill-mode:forwards]">
            Design.<br />
            Disrupt.<br />
            Conquer.
          </h1>

          {/* Subtext Paragraph */}
          <p className="animate-fade-up-delay-2 font-inter text-sm sm:text-base text-white/70 leading-relaxed max-w-md opacity-0 [animation-fill-mode:forwards]">
            We build fierce brand identities<br />
            that don't just turn heads — <strong className="font-bold text-white">they lead.</strong>
          </p>

          {/* CTA Group Row */}
          <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-10 opacity-0 [animation-fill-mode:forwards]">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-colors duration-300"
            >
              SEE OUR WORK
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-6 py-1 select-none">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-widest text-white/60 font-semibold uppercase">
                  Top-Rated
                </span>
                <span className="text-[10px] tracking-widest text-white/60 font-semibold uppercase">
                  Brand Studio
                </span>
              </div>
            </div>
          </div>

          {/* Performance Stats Panel */}
          <div className="animate-fade-up-delay-4 flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-10 lg:mt-14 opacity-0 [animation-fill-mode:forwards]">
            {[
              { num: '250+', label: 'Brands Transformed' },
              { num: '95%', label: 'Client Retention' },
              { num: '10+', label: 'Years in the Game' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-start select-none">
                <span className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {stat.num}
                </span>
                <span className="font-inter text-[9px] sm:text-xs font-medium tracking-widest uppercase text-white/50 mt-1 sm:mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
