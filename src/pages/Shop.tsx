import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: "Solitaire Pendant", price: "INR 22,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Eternity Band", price: "INR 35,000", category: "Rings", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Classic Studs", price: "INR 18,000", category: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Tennis Bracelet", price: "INR 85,000", category: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Halo Engagement Ring", price: "INR 1,20,000", category: "Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Drop Earrings", price: "INR 42,000", category: "Earrings", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Layered Chain", price: "INR 28,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Vintage Cocktail Ring", price: "INR 65,000", category: "Rings", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Hoop Earrings", price: "INR 25,000", category: "Earrings", image: "https://images.unsplash.com/photo-1635982292733-d9788e388149?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Diamond Bangle", price: "INR 95,000", category: "Bracelets", image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfdf83?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Pearl & Diamond Drop", price: "INR 38,000", category: "Earrings", image: "https://images.unsplash.com/photo-1602751584146-dc8bfc27d102?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Three-Stone Ring", price: "INR 88,000", category: "Rings", image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop" },
  { id: 13, name: "Lariat Necklace", price: "INR 45,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1610633325079-b15118b1215c?q=80&w=800&auto=format&fit=crop" },
  { id: 14, name: "Cuff Bracelet", price: "INR 55,000", category: "Bracelets", image: "https://images.unsplash.com/photo-1574245345437-14e300d1e57a?q=80&w=800&auto=format&fit=crop" },
  { id: 15, name: "Chandelier Earrings", price: "INR 72,000", category: "Earrings", image: "https://images.unsplash.com/photo-1588444837495-c6bccce1c7d4?q=80&w=800&auto=format&fit=crop" },
  { id: 16, name: "Minimalist Band", price: "INR 15,000", category: "Rings", image: "https://images.unsplash.com/photo-1566954979172-e5aa75a9a0f0?q=80&w=800&auto=format&fit=crop" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-midnight mb-4">The Collection</h1>
          <div className="w-16 h-px bg-elara-gold mx-auto mb-8"></div>
          <p className="text-slate max-w-2xl mx-auto font-light">
            Discover our curated selection of ethical, lab-grown diamond jewelry. Each piece is crafted with precision and designed for everyday elegance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate/20 pb-6">
          <div className="flex space-x-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 hide-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-widest uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? "text-midnight font-semibold border-b-2 border-midnight pb-1" 
                    : "text-slate hover:text-midnight"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 mt-6 md:mt-0 w-full md:w-auto justify-end">
            <button className="flex items-center space-x-2 text-sm uppercase tracking-widest text-slate hover:text-midnight transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-sm uppercase tracking-widest text-slate hover:text-midnight transition-colors">
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-slate/5 mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-ivory text-midnight px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-midnight hover:text-ivory transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-midnight mb-1">{product.name}</h3>
                <p className="text-sm text-slate mb-2">{product.category}</p>
                <p className="text-sm text-midnight font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
