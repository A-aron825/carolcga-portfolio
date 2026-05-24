import React from 'react';
import { Linkedin } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'zh';
  t: any;
}

const About: React.FC<AboutProps> = ({ lang, t }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 border-8 border-white bg-slate-100 group">
             <img
               src="/carol-portrait.jpg"
               alt="Carol Liu, CPA Professional Headshot"
               className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-out"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
               }}
             />
             <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem] md:rounded-[4rem]"></div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 p-8 md:p-12 bg-navy text-white rounded-[2.5rem] shadow-2xl hidden sm:block border-8 border-white transform hover:rotate-3 transition-transform cursor-default">
            <div className="text-4xl md:text-5xl font-black mb-1 tracking-tighter text-gold">15+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-black opacity-90 leading-tight">
              {lang === 'en' ? 'Years of' : '多年'} <br /> {lang === 'en' ? 'Experience' : '专业经验'}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
          <h3 className="text-5xl lg:text-7xl font-bold text-navy mb-10 leading-none tracking-tighter">
            {t.title} <br />
            <span className="serif italic font-normal text-gold">{t.titleItalic}</span>
          </h3>
          <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium max-w-2xl">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          <div className="mt-14 flex flex-wrap gap-12">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mb-3">{t.edu}</span>
              <span className="font-black text-navy text-xs tracking-wider">B.COMM, ACCOUNTING</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mb-3">{t.cert}</span>
              <span className="font-black text-navy text-xs tracking-wider">CPA • CGA (CAN)</span>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <a
              href="https://ca.linkedin.com/in/carol-liu-cpa-cga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#0077b5] text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-navy transition-all hover:shadow-2xl active:scale-95 shadow-lg"
            >
              <Linkedin size={18} />
              {t.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
