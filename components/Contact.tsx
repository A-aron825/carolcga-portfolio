import React, { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, Copy } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'zh';
  t: any;
}

const Contact: React.FC<ContactProps> = ({ lang, t }) => {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('cLiu@carolcga.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = `Inquiry from ${name} via carolcga.ca`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:cLiu@carolcga.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-gold font-black uppercase tracking-[0.4em] text-[9px] mb-6">{t.tag}</h2>
          <h3 className="text-5xl font-bold text-navy mb-10 leading-none tracking-tighter">{t.title}</h3>
          <p className="text-slate-500 text-lg mb-16 leading-relaxed font-medium max-w-sm">
            {t.subtitle}
          </p>

          <div className="space-y-12">
            <div className="flex items-center gap-8 group/item">
              <div className="w-12 h-12 bg-[#F5F7FA] group-hover/item:bg-navy group-hover/item:text-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <Mail size={20} className="text-gold group-hover/item:text-white" />
              </div>
              <div className="flex-grow">
                <h4 className="font-black text-slate-400 mb-1 uppercase tracking-[0.3em] text-[8px]">{t.labels.email}</h4>
                <div className="flex items-center gap-3">
                  <a href="mailto:cLiu@carolcga.ca" className="text-navy font-black text-sm tracking-tight hover:text-gold transition-colors">cLiu@carolcga.ca</a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-gold transition-all flex items-center gap-2"
                    title="Copy Email"
                  >
                    <Copy size={12} />
                    {copied && <span className="text-[8px] font-black uppercase tracking-widest text-green-600 animate-in fade-in slide-in-from-left-2">{lang === 'en' ? 'Copied' : '已复制'}</span>}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 group/item">
              <div className="w-12 h-12 bg-[#F5F7FA] group-hover/item:bg-navy group-hover/item:text-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <Phone size={20} className="text-gold group-hover/item:text-white" />
              </div>
              <div>
                <h4 className="font-black text-slate-400 mb-1 uppercase tracking-[0.3em] text-[8px]">{t.labels.phone}</h4>
                <a href="tel:6047205690" className="text-navy font-black text-sm tracking-tight hover:text-gold transition-colors">604.720.5690</a>
              </div>
            </div>

            <div className="flex items-center gap-8 group/item">
              <div className="w-12 h-12 bg-[#F5F7FA] group-hover/item:bg-navy group-hover/item:text-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-all duration-300">
                <MapPin size={20} className="text-gold group-hover/item:text-white" />
              </div>
              <div>
                <h4 className="font-black text-slate-400 mb-1 uppercase tracking-[0.3em] text-[8px]">{t.labels.hq}</h4>
                <p className="text-navy font-black text-sm tracking-tight leading-tight max-w-[200px]">21471 90 Ave Langley BC. Canada V1M 1Z2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-10 lg:p-16 rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(11,31,58,0.1)] border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">{t.form.identity}</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full bg-[#F5F7FA] border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:bg-white transition-all font-bold text-navy text-sm placeholder:text-slate-300"
                  placeholder={t.form.namePlace}
                />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">{t.form.contact}</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full bg-[#F5F7FA] border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:bg-white transition-all font-bold text-navy text-sm placeholder:text-slate-300"
                  placeholder={t.form.emailPlace}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">{t.form.context}</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-[#F5F7FA] border border-slate-100 rounded-3xl px-8 py-6 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:bg-white transition-all resize-none font-bold text-navy text-sm placeholder:text-slate-300"
                placeholder={t.form.msgPlace}
              ></textarea>
            </div>

            <button
              disabled={status === 'loading'}
              type="submit"
              className={`w-full py-7 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-2xl ${
                status === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-navy text-white hover:bg-gold'
              }`}
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={14} />
                  {t.form.success}
                </>
              ) : (
                <>
                  <Send size={14} />
                  {t.form.submit}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
