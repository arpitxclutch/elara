import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2560&auto=format&fit=crop" 
          alt="Elegant woman wearing jewelry" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-champagne text-sm tracking-[0.2em] uppercase mb-6 font-medium"
        >
          Unmined · Ethical · Redeemable
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-8 leading-tight drop-shadow-lg"
        >
          Choose Beauty. <br/><span className="italic text-champagne">Not Investment.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-ivory/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light drop-shadow-md"
        >
          Ethical unmined sparkle in gold — redeemable luxury for everyday elegance, workwear chic, and gifting with love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/shop" className="w-full sm:w-auto inline-block bg-elara-gold text-midnight px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-champagne transition-colors duration-300 shadow-xl">
            Explore Collections
          </Link>
          <Link to="/story" className="w-full sm:w-auto inline-block bg-transparent border border-ivory text-ivory px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-ivory hover:text-midnight transition-colors duration-300 shadow-xl">
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
