import { Link } from 'react-router-dom';

export default function PromiseSection() {
  return (
    <section id="promise" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-t-full shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop" 
                alt="Jewelry crafting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-midnight text-ivory p-8 max-w-xs shadow-2xl">
              <h4 className="font-serif text-xl mb-2 text-elara-gold">95% Gold Buyback</h4>
              <p className="text-sm font-light leading-relaxed">No questions, no drama. We address Indian trust in gold directly, offering redeemable luxury.</p>
            </div>
          </div>
          
          <div className="lg:pl-12 mt-16 lg:mt-0">
            <h2 className="font-serif text-4xl text-midnight mb-6">The Elara Experience</h2>
            <p className="text-slate mb-8 leading-relaxed font-light">
              We believe in transparency and innovation. From our AR Try-On that lets you see pieces on your wrist before purchase, to our QR-coded certification linking directly to live IGI/GIA certificates.
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-elara-gold mt-2"></div>
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-midnight">AR Try-On</h4>
                  <p className="text-sm text-slate font-light">Experience our jewelry virtually to find your perfect match.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-elara-gold mt-2"></div>
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-midnight">The Elara Edit</h4>
                  <p className="text-sm text-slate font-light">Monthly curated drops with named-piece storytelling.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-elara-gold mt-2"></div>
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-midnight">WhatsApp Concierge</h4>
                  <p className="text-sm text-slate font-light">At-home consultations for customers needing discretion.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/promise" className="bg-midnight text-ivory px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-elara-gold hover:text-midnight transition-colors duration-300 inline-block text-center">
                Try AR Experience
              </Link>
              <Link to="/promise" className="border border-midnight text-midnight px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-slate/5 transition-colors duration-300 inline-block text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
