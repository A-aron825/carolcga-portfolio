
import React from 'react';
import { Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'zh';
  t: any;
  navT: any;
}

const Footer: React.FC<FooterProps> = ({ lang, t, navT }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
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
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const legalItems = [
    { label: lang === 'en' ? 'Privacy' : '隐私政策', id: 'privacy-policy' },
    { label: lang === 'en' ? 'Compliance' : '合规说明', id: 'compliance' },
    { label: lang === 'en' ? 'Terms' : '服务条款', id: 'terms' }
  ];

  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <button onClick={(e) => scrollToSection(e, 'home')} className="inline-block mb-10 text-left group">
              <span className="text-2xl font-black tracking-tight serif group-hover:text-gold transition-colors">Carol Liu Accounting Ltd.</span>
              <span className="block text-[9px] tracking-[0.4em] text-slate-400 uppercase font-black mt-2 group-hover:text-slate-300 transition-colors">{navT.corp}</span>
            </button>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-12 font-medium opacity-80">
              {t.desc}
            </p>

            <div className="space-y-4 mb-10 text-xs font-black tracking-widest text-slate-500 uppercase">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <a href="tel:6047205690" className="hover:text-white transition-colors">604.720.5690</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <a href="mailto:cLiu@carolcga.ca" className="hover:text-white transition-colors">cLiu@carolcga.ca</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gold" />
                <span>21471 90 Ave Langley BC. Canada V1M 1Z2</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://ca.linkedin.com/in/carol-liu-cpa-cga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Carol Liu LinkedIn"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-500"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:cLiu@carolcga.ca" aria-label="Send email to Carol Liu" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-500">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.4em] text-[9px] mb-12 text-gold">{t.directory}</h4>
            <ul className="space-y-6">
              {[
                { label: navT.home, id: 'home' },
                { label: navT.services, id: 'services' },
                { label: navT.about, id: 'about' },
                { label: navT.testimonials, id: 'testimonials' },
                { label: navT.contact, id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="group flex items-center text-slate-400 hover:text-white transition-all text-[11px] font-black uppercase tracking-widest"
                  >
                    <span className="h-0.5 w-0 bg-gold transition-all group-hover:w-4 mr-0 group-hover:mr-3 rounded-full"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.4em] text-[9px] mb-12 text-gold">{t.legal}</h4>
            <ul className="space-y-6">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-slate-400 text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors flex items-center group text-left"
                  >
                    <span className="h-px w-0 bg-slate-400 transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[9px] uppercase tracking-[0.5em] font-black">
            {t.copy}
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-slate-400 hover:text-white transition-colors"
          >
            {t.ascend}
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
