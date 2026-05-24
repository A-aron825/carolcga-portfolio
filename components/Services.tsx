
import React from 'react';
import { Calculator, Briefcase, Building2, BookOpen, TrendingUp, FileCheck } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'zh';
  t: any;
}

const Services: React.FC<ServicesProps> = ({ lang, t }) => {
  const icons = [
    <Calculator size={24} />,
    <Briefcase size={24} />,
    <Building2 size={24} />,
    <BookOpen size={24} />,
    <TrendingUp size={24} />,
    <FileCheck size={24} />
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="text-center mb-24">
        <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-navy mb-8 tracking-tight">{t.title}</h3>
        <p className="text-slate-500 max-w-md mx-auto text-lg leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.items.map((service: any, idx: number) => (
          <div
            key={idx}
            className="group p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-[0_40px_80px_-20px_rgba(11,31,58,0.1)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-[#F5F7FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy transition-all duration-500 text-gold group-hover:text-white">
              {icons[idx]}
            </div>
            <h4 className="text-lg font-bold text-navy mb-4 group-hover:text-gold transition-colors">
              {service.title}
            </h4>
            <p className="text-slate-500 leading-relaxed text-[13px] font-medium opacity-80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
