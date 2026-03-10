import { motion } from 'motion/react';

export default function Story() {
  return (
    <main className="pt-24 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-midnight mb-4">Our Story</h1>
          <div className="w-16 h-px bg-elara-gold mx-auto mb-8"></div>
          <p className="text-slate max-w-2xl mx-auto font-light leading-relaxed">
            Born from a desire to challenge the status quo of the jewelry industry, Elara Gems was founded on the belief that luxury shouldn't come at the cost of our planet or your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop" 
              alt="Jewelry making process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl text-midnight">The Origin</h2>
            <p className="text-slate font-light leading-relaxed">
              We started with a simple question: Why does fine jewelry have to be so opaque? The traditional diamond industry is fraught with ethical concerns, environmental degradation, and inflated markups.
            </p>
            <p className="text-slate font-light leading-relaxed">
              Elara Gems was created to offer an alternative. We use exclusively lab-grown diamonds, which are physically, chemically, and optically identical to mined diamonds, but without the environmental and human toll.
            </p>
            <p className="text-slate font-light leading-relaxed">
              Our name, Elara, is inspired by one of Jupiter's moons—a symbol of something beautiful, enduring, and slightly rebellious.
            </p>
          </motion.div>
        </div>

        <div className="bg-midnight text-ivory p-12 md:p-24 text-center mb-24">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">"We don't just sell jewelry. We sell a new way of thinking about luxury."</h2>
          <p className="text-champagne uppercase tracking-widest text-sm">— The Founders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-midnight">Transparency</h3>
            <p className="text-slate font-light leading-relaxed">
              From our pricing to our sourcing, we believe you have the right to know exactly what you're paying for and where it comes from.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-midnight">Craftsmanship</h3>
            <p className="text-slate font-light leading-relaxed">
              Every piece is meticulously crafted by master artisans who blend traditional techniques with modern precision.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-midnight">Sustainability</h3>
            <p className="text-slate font-light leading-relaxed">
              Our commitment to the planet goes beyond lab-grown diamonds. We use recycled gold and eco-friendly packaging for every order.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
