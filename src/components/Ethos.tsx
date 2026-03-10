import { Diamond, ShieldCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Ethos() {
  const pillars = [
    {
      icon: <Diamond className="w-8 h-8 text-elara-gold" />,
      title: "Unmined Sparkle",
      desc: "IGI/GIA certified lab-grown diamonds. Created with intention, offering premium brilliance without the environmental toll."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-elara-gold" />,
      title: "Ethical Luxury",
      desc: "We challenge the status quo. Planet-first is our origin story, ensuring every piece touches skin with a clear conscience."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-elara-gold" />,
      title: "Redeemable Value",
      desc: "18K gold setting ensures 95% gold buyback value. We make premium feel achievable without cheapening it."
    }
  ];

  return (
    <section id="ethos" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">The Sophisticated Rebel</h2>
          <div className="w-16 h-px bg-elara-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-midnight rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl text-midnight mb-3">{pillar.title}</h3>
              <p className="text-slate leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/story" className="inline-block border border-midnight text-midnight px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-midnight hover:text-ivory transition-colors duration-300">
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
