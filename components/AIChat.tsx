import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User, Bot, Loader2, MessageSquare } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

interface AIChatProps {
  lang: 'en' | 'zh';
}

const AIChat: React.FC<AIChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show tooltip greeting after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { 
          role: 'model', 
          text: lang === 'en' 
            ? "Welcome to Carol Liu's Professional Corp. I am your AI concierge. How may I assist you with your tax planning or corporate advisory needs today?" 
            : "欢迎来到 Carol Liu 专业会计师事务所。我是您的智能助理。请问今天有什么可以帮您的？我们可以讨论税务规划或企业咨询需求。" 
        }
      ]);
    }
  }, [lang, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const responseText = await getGeminiResponse(userMessage, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <>
      {/* Visibility Tooltip */}
      <div 
        className={`fixed bottom-28 right-8 z-40 transition-all duration-500 transform ${
          showTooltip && !isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white px-6 py-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 relative max-w-[200px]">
          <p className="text-[11px] font-black text-slate-900 leading-tight uppercase tracking-wider">
            {lang === 'en' ? "Need help with Canadian tax? Ask me!" : "需要加拿大税务帮助吗？问我吧！"}
          </p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 rotate-45"></div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors"
          >
            <X size={10} />
          </button>
        </div>
      </div>

      {/* Pulsing Floating Button */}
      <button 
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-600 transition-all z-40 transform hover:scale-110 active:scale-95 group ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-ai-pulse'
        }`}
      >
        <Sparkles className="group-hover:rotate-12 transition-transform" size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 w-[420px] max-w-[calc(100vw-2rem)] h-[680px] max-h-[calc(100vh-6rem)] bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] flex flex-col border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-50 origin-bottom-right ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-8 bg-slate-900 text-white rounded-t-[2.5rem] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase">
                {lang === 'en' ? 'AI Concierge' : '智能礼宾'}
              </h4>
              <p className="text-[10px] text-indigo-300 font-black uppercase tracking-[0.2em]">Carol Liu CPA</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-slate-50/30 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-100 text-slate-400'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] px-6 py-4 rounded-3xl text-[14px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-white border border-slate-100 text-slate-400 flex items-center justify-center">
                <Loader2 className="animate-spin" size={16} />
              </div>
              <div className="bg-white border border-slate-100 px-6 py-4 rounded-3xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 border-t border-slate-100 bg-white rounded-b-[2.5rem]">
          <div className="relative group">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'en' ? "How can we help?" : "有什么可以帮您？"}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 pr-14 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-all disabled:opacity-30 active:scale-90"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;