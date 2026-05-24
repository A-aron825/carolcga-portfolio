
import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.home, id: 'home' },
    { label: t.services, id: 'services' },
    { label: t.about, id: 'about' },
    { label: t.testimonials, id: 'testimonials' },
    { label: t.contact, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 border-b ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-2xl py-3 border-navy/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)]'
        : 'bg-white/70 backdrop-blur-xl py-6 border-slate-200/50 shadow-sm'
    }`}>
      <div className="w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Brand Identity */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-6 text-left relative"
        >
          <div className="absolute -inset-x-8 -inset-y-4 bg-gold/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="flex flex-col relative z-10">
            <span className="text-xl md:text-2xl font-black tracking-tight text-navy serif leading-none group-hover:text-gold transition-colors">
              Carol Liu Accounting Ltd.
            </span>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="h-0.5 w-5 bg-gold rounded-full"></span>
              <span className="text-[10px] tracking-[0.35em] text-slate-500 uppercase font-black block">
                {t.corp}
              </span>
            </div>
          </div>

          <div className="h-12 w-px bg-slate-300 hidden sm:block rotate-[15deg] opacity-50 mx-2"></div>

          <div className="relative group/badge hidden sm:block z-10">
            <div className="absolute -inset-1.5 bg-gold/20 rounded-xl blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
            <div className="relative bg-navy text-white pl-3 pr-4 py-2.5 rounded-xl flex items-center gap-3 border border-gold/30 shadow-2xl shadow-gold/10 transform group-hover/badge:scale-[1.03] transition-transform duration-300">
              <div className="bg-gold/20 p-1.5 rounded-lg">
                <ShieldCheck size={16} className="text-gold" />
              </div>
              <span className="text-[13px] tracking-[0.25em] font-black uppercase whitespace-nowrap">
                CPA • CGA
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-[11px] font-black text-slate-600 hover:text-gold transition-all uppercase tracking-[0.25em] relative group"
              >
                {item.label}
                <span className="absolute -bottom-2.5 left-0 w-0 h-[3px] bg-gold transition-all group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative flex items-center bg-slate-100 rounded-full p-1.5 border-2 border-slate-200 shadow-inner">
            <div className={`absolute h-[calc(100%-12px)] w-[calc(50%-6px)] bg-navy rounded-full transition-all duration-500 ease-out ${lang === 'en' ? 'translate-x-0' : 'translate-x-full'}`}></div>
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`relative z-10 px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-colors duration-300 ${lang === 'zh' ? 'text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              中文
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative px-10 py-5 overflow-hidden rounded-full transition-all duration-500 active:scale-95 shadow-[0_10px_30px_-10px_rgba(199,154,43,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(199,154,43,0.5)]"
          >
            <div className="absolute inset-0 bg-navy transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
            <span className="relative z-10 text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
              <Sparkles size={14} className="text-gold group-hover:rotate-12 transition-transform" />
              {t.inquire}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-5 py-3 bg-navy text-white rounded-2xl font-black text-xs shadow-lg active:scale-90 transition-transform"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className="text-navy p-3 bg-white border border-slate-200 rounded-2xl shadow-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 ease-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="py-12 px-8 space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block w-full text-left text-3xl font-black text-navy hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full py-7 bg-navy text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs"
            >
              {t.inquire}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
