import { Link } from 'react-router-dom';

export default function Collections() {
  const collections = [
    {
      name: "Elara Daily",
      desc: "Everyday wear & gifting",
      price: "INR 18,000 – 28,000",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Elara Atelier",
      desc: "Signature workwear chic",
      price: "INR 28,000 – 55,000",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Elara Reserve",
      desc: "Occasion luxury & milestone gifting",
      price: "INR 55,000 – 1,20,000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Elara Bundles",
      desc: "Gifting with narrative and emotion",
      price: "INR 25,000 – 60,000",
      image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="collections" className="py-24 bg-midnight text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-elara-gold text-sm tracking-widest uppercase mb-2 block">Product Architecture</span>
            <h2 className="font-serif text-3xl md:text-4xl">Curated Collections</h2>
          </div>
          <div className="flex gap-4">
            <Link to="/shop" className="text-sm tracking-widest uppercase border-b border-elara-gold pb-1 hover:text-elara-gold transition-colors">View All</Link>
            <Link to="/shop" className="text-sm tracking-widest uppercase border-b border-elara-gold pb-1 hover:text-elara-gold transition-colors">Shop Bestsellers</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, idx) => (
            <Link to="/shop" key={idx} className="group relative overflow-hidden cursor-pointer bg-slate/20 rounded-sm block">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl mb-2">{item.name}</h3>
                <p className="text-ivory/70 font-light mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-champagne text-sm tracking-wider">{item.price}</span>
                  <button className="text-xs uppercase tracking-widest border border-ivory/30 px-6 py-3 hover:bg-ivory hover:text-midnight transition-colors font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
