import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { theme } from '../../Theme';
import { motion } from 'framer-motion';

const Clients = () => {
  const partners = [
    { name: 'Babyhug', logo: '/assets/pages/Clients/Babyhug.png' },
    { name: 'Delta CNC', logo: '/assets/pages/Clients/DeltaCNC.png' },
    { name: 'Firstcry', logo: '/assets/pages/Clients/Firstcry.png' },
  ];

  const clientsStyles = "transition-all duration-500 max-h-16 md:max-h-20 w-auto object-contain md:grayscale md:opacity-70 md:hover:grayscale-0 md:hover:opacity-100";

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-grow">
        <header className={`${theme.spacing.containerWidth} py-8 md:py-24 px-6 md:px-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-4 md:space-y-6"
            >
              <div className="space-y-1">
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-brand-clay font-bold block">
                  Trusted Partners
                </span>
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-brand-charcoal leading-tight">
                  Our Clients <br className="hidden md:block" />
                  <span className="italic font-normal text-brand-sage">growing together</span>
                </h1>
              </div>
              <p className="text-gray-400 font-light max-w-md text-sm md:text-lg leading-relaxed italic">
                We take pride in serving a diverse range of clients with our premium manufactured products and dedicated service.
              </p>
              <div className="w-8 md:w-12 h-[1px] bg-brand-sage/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Boutique Image Frame - Landscape */}
              <div className="relative max-w-lg lg:max-w-xl mx-auto">
                <div className="bg-brand-cream p-2 md:p-6 shadow-2xl border border-brand-charcoal/5 rounded-sm relative z-10">
                  <div className="aspect-[3/2] overflow-hidden rounded-sm">
                    <img 
                      src="/assets/pages/Home/image-2.png" 
                      alt="Manufacturing Excellence" 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/5 pointer-events-none" />
                  </div>
                  
                  {/* Heritage Badge - Smaller on Mobile */}
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-brand-cream p-2 md:p-5 shadow-xl border border-brand-charcoal/5 z-20">
                    <p className="text-[6px] md:text-[9px] uppercase tracking-widest font-bold text-brand-clay mb-0">Status</p>
                    <p className="text-xs md:text-lg font-serif italic text-brand-sage">Trusted Member</p>
                  </div>
                </div>

                {/* Decorative Elements - Subtle on Mobile */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-brand-cream/30 -z-0 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-32 md:w-40 h-32 md:h-40 border border-brand-sage/10 rounded-full" />
              </div>
            </motion.div>
          </div>
        </header>

        <section className={`${theme.spacing.containerWidth} px-6 md:px-8 pb-12 md:pb-32`}>
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl md:text-2xl font-serif text-brand-charcoal mb-4 italic underline decoration-brand-sage decoration-2 underline-offset-8">Featured Clients</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 lg:gap-24 items-center justify-items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="group relative flex flex-col items-center">
                <div className="p-2 md:p-8">
                  <img src={partner.logo} alt={partner.name} className={clientsStyles} />
                </div>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 group-hover:text-brand-sage transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Tightened */}
        <section className="bg-brand-cream/20 py-12 md:py-24 border-t border-brand-charcoal/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal mb-4 md:mb-6 underline decoration-brand-sage/30 line-height-tight">Become a Partner</h2>
            <p className="text-gray-500 font-light mb-6 md:mb-10 max-w-lg mx-auto italic text-sm md:text-base">
              Join our growing network of prestigious retailers and corporations who trust Minimelts for quality and excellence.
            </p>
            <a href="/contact" className="inline-block bg-brand-charcoal text-white px-8 md:px-12 py-3 md:py-4 text-[9px] md:text-[11px] uppercase tracking-widest font-bold hover:bg-brand-sage transition-all shadow-sm">
              Inquire Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;

