
import React from 'react';
import { Briefcase, Calculator, TrendingUp, ShieldCheck, UserCheck, BarChart3 } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'zh';
  t: any;
}

const Services: React.FC<ServicesProps> = ({ lang, t }) => {
  const icons = [
    <Calculator className="text-indigo-600" size={24} />,
    <Briefcase className="text-indigo-600" size={24} />,
    <BarChart3 className="text-indigo-600" size={24} />,
    <TrendingUp className="text-indigo-600" size={24} />,
    <ShieldCheck className="text-indigo-600" size={24} />,
    <UserCheck className="text-indigo-600" size={24} />
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="text-center mb-24">
        <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-slate-950 mb-8 tracking-tight">{t.title}</h3>
        <p className="text-slate-500 max-w-md mx-auto text-lg leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.items.map((service: any, idx: number) => (
          <div 
            key={idx} 
            className="group p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-all duration-500">
              <div className="group-hover:text-white transition-colors">
                {icons[idx]}
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-950 mb-4 group-hover:text-indigo-600 transition-colors">
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
