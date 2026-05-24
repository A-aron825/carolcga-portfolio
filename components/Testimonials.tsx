
import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  lang: 'en' | 'zh';
  t: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang, t }) => {
  const testimonials = [
    {
      name: "David Henderson",
      role: lang === 'en' ? "CEO, TechFlow Solutions" : "TechFlow Solutions 首席执行官",
      quote: lang === 'en'
        ? "Carol's strategic approach to our corporate restructuring was a game-changer. Her precision saved us significant capital last year."
        : "Carol 在我们公司重组中的战略方法改变了局面。她的精准判断去年为我们节省了大量资金。",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: lang === 'en' ? "Self-Employed Professional" : "自雇专业人士",
      quote: lang === 'en'
        ? "As a sole proprietor, navigating tax felt overwhelming. Carol provided clarity and a clear roadmap — I finally feel in control of my finances."
        : "作为个体经营者，报税曾让我感到不知所措。Carol 为我提供了清晰的思路和路线图。",
      rating: 5
    },
    {
      name: "Marcus Wong",
      role: lang === 'en' ? "Small Business Owner" : "小型企业主",
      quote: lang === 'en'
        ? "Carol handles everything from bookkeeping to corporate tax. Having a CPA who truly understands small business makes all the difference."
        : "Carol 处理从账务到企业税务的一切事务。拥有一位真正了解小型企业的CPA，让一切大不相同。",
      rating: 5
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-navy mb-8 tracking-tight">{t.title}</h3>
        <p className="text-slate-500 max-w-md mx-auto text-lg leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(11,31,58,0.08)] transition-all duration-700 group relative flex flex-col"
          >
            <div className="flex gap-1.5 mb-10 text-amber-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>

            <div className="relative mb-12 flex-grow">
              <Quote className="absolute -top-10 -left-6 text-gold/10 group-hover:text-gold/20 transition-colors" size={100} />
              <p className="relative z-10 text-navy italic serif text-xl leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="pt-10 border-t border-slate-50">
              <h4 className="font-black text-navy text-sm uppercase tracking-wider">{testimonial.name}</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mt-2">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
