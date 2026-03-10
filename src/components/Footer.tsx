import { useState } from 'react';
import { Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-midnight text-ivory pt-20 pb-10 border-t border-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6 group">
              {!imgError ? (
                <img 
                  src="/logo.png" 
                  alt="Elara Gems Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert mr-3"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Diamond className="h-8 w-8 text-elara-gold mr-3 group-hover:rotate-12 transition-transform duration-500" />
              )}
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-serif font-bold text-2xl tracking-wider text-ivory leading-none">ELARA</h2>
                <span className="font-serif tracking-[0.3em] text-[10px] text-aged-gold mt-1 block">GEMS</span>
              </div>
            </Link>
            <p className="text-ivory/70 font-light max-w-sm mb-8">
              Empowering every aspirational consumer to express their unique style with ethically sourced, exquisitely designed pieces that redefine modern luxury.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-elara-gold hover:text-midnight transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-elara-gold hover:text-midnight transition-colors cursor-pointer">
                <span className="text-xs">PT</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-elara-gold hover:text-midnight transition-colors cursor-pointer">
                <span className="text-xs">YT</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-elara-gold">Shop</h4>
            <ul className="space-y-4 text-sm font-light text-ivory/70">
              <li><Link to="/shop" className="hover:text-champagne transition-colors">Elara Daily</Link></li>
              <li><Link to="/shop" className="hover:text-champagne transition-colors">Elara Atelier</Link></li>
              <li><Link to="/shop" className="hover:text-champagne transition-colors">Elara Reserve</Link></li>
              <li><Link to="/shop" className="hover:text-champagne transition-colors">Elara Bundles</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-elara-gold">About</h4>
            <ul className="space-y-4 text-sm font-light text-ivory/70">
              <li><Link to="/story" className="hover:text-champagne transition-colors">Our Story</Link></li>
              <li><Link to="/story" className="hover:text-champagne transition-colors">Ethical Sourcing</Link></li>
              <li><Link to="/promise" className="hover:text-champagne transition-colors">The Buyback Promise</Link></li>
              <li><Link to="/promise" className="hover:text-champagne transition-colors">Contact Concierge</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Elara Gems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-ivory">Privacy Policy</Link>
            <Link to="/" className="hover:text-ivory">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
