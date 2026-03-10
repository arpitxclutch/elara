import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, Award, Search } from 'lucide-react';

export default function Promise() {
  const promises = [
    {
      icon: <RefreshCw className="w-10 h-10 text-elara-gold" />,
      title: "95% Gold Buyback",
      desc: "We address the Indian trust in gold directly. Return your Elara jewelry at any time and receive 95% of the prevailing gold value. No questions, no drama."
    },
    {
      icon: <Award className="w-10 h-10 text-elara-gold" />,
      title: "100% Certified",
      desc: "Every diamond over 0.5 carats comes with an independent certification from IGI or GIA, ensuring its quality, cut, color, and clarity."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-elara-gold" />,
      title: "Lifetime Warranty",
      desc: "We stand by our craftsmanship. Our lifetime warranty covers any manufacturing defects, ensuring your piece remains as beautiful as the day you bought it."
    },
    {
      icon: <Search className="w-10 h-10 text-elara-gold" />,
      title: "Transparent Pricing",
      desc: "No hidden markups. We break down the cost of materials, labor, and our margin, so you know exactly what you're investing in."
    }
  ];

  return (
    <main className="pt-24 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-midnight mb-4">The Elara Promise</h1>
          <div className="w-16 h-px bg-elara-gold mx-auto mb-8"></div>
          <p className="text-slate max-w-2xl mx-auto font-light leading-relaxed">
            We believe that true luxury is built on trust. Our commitments to you are designed to provide peace of mind and ensure your investment is protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {promises.map((promise, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 shadow-sm border border-slate/10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-6 bg-slate/5 p-4 rounded-full">
                {promise.icon}
              </div>
              <h3 className="font-serif text-2xl text-midnight mb-4">{promise.title}</h3>
              <p className="text-slate font-light leading-relaxed">{promise.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-midnight text-ivory rounded-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="font-serif text-3xl mb-6 text-elara-gold">Experience It Yourself</h2>
            <p className="font-light leading-relaxed mb-8 text-ivory/80">
              Words are just words until proven. We invite you to experience the Elara difference firsthand. Book a consultation with our experts or try our AR experience to see how our pieces look on you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-elara-gold text-midnight px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-champagne transition-colors duration-300">
                Book Consultation
              </button>
              <button className="border border-ivory text-ivory px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-ivory hover:text-midnight transition-colors duration-300">
                Try AR Experience
              </button>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop" 
              alt="Jewelry consultation" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
