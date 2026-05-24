import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'zh';
  t: any;
}

const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-mesh overflow-hidden pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5F7FA]/40 to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm border border-slate-100 rounded-full mb-10 transform hover:scale-105 transition-transform cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
                {t.onboarding}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 leading-[1.05] tracking-tight">
              {t.title1} <br />
              <span className="text-gold italic serif font-normal">{t.title2}</span> <br />
              {t.title3}
            </h1>

            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-20">
              <button
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group relative px-10 py-5 overflow-hidden rounded-2xl transition-all duration-300 active:scale-95 bg-navy shadow-2xl shadow-navy/20"
              >
                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-white font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center">
                  {t.start}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                </span>
              </button>
              <button
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-10 py-5 bg-white text-navy border border-slate-200 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center hover:border-gold transition-all hover:text-gold"
              >
                {t.services}
              </button>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-slate-100">
              {t.checks.map((text: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 bg-gold/10 rounded-md">
                    <CheckCircle2 className="text-gold" size={14} />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block perspective-1000">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(11,31,58,0.2)] transform rotate-3 hover:rotate-0 transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Accounting and Tax Services"
                className="w-full object-cover aspect-[4/5] scale-110 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-overlay"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] shadow-2xl z-20 max-w-[240px] animate-bounce-slow">
              <div className="text-gold font-black text-5xl mb-2 tracking-tighter italic serif">15+</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-tight">
                Years of Experience <br /> in BC Accounting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
