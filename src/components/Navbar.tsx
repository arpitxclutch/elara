import { ShoppingBag, User, Menu, Search, Diamond } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [imgError, setImgError] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-elara-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-slate lg:hidden cursor-pointer" />
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Shop</Link>
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Collections</Link>
              <Link to="/story" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Our Story</Link>
              <Link to="/promise" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">The Promise</Link>
              <Link to="/story" className="text-sm tracking-widest uppercase hover:text-elara-gold transition-colors">Sustainability</Link>
            </div>
          </div>
          
          <Link to="/" className="flex-shrink-0 flex items-center justify-center cursor-pointer group">
            {!imgError ? (
              <img 
                src="/logo.png" 
                alt="Elara Gems Logo" 
                className="h-12 w-auto object-contain mr-3"
                onError={() => setImgError(true)}
              />
            ) : (
              <Diamond className="h-8 w-8 text-elara-gold mr-3 group-hover:rotate-12 transition-transform duration-500" />
            )}
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-serif font-bold text-2xl tracking-wider text-midnight leading-none">ELARA</h1>
              <span className="font-serif tracking-[0.3em] text-[10px] text-aged-gold mt-1">GEMS</span>
            </div>
          </Link>

          <div className="flex items-center space-x-5 xl:space-x-6">
            <Search className="h-5 w-5 text-slate hover:text-elara-gold cursor-pointer transition-colors hidden sm:block" />
            <User className="h-5 w-5 text-slate hover:text-elara-gold cursor-pointer transition-colors" />
            <ShoppingBag className="h-5 w-5 text-slate hover:text-elara-gold cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
}
