import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import ProductModal from '../../../components/ProductModal';
import { products } from '../../../data/products';
import { theme } from '../../../Theme';
import { motion } from 'framer-motion';

const Moms = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters products specifically for the "Moms" category
  const momProducts = products.filter(p => p.category === "Moms");

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Left-aligned header for a premium boutique look */}
        <header className={`${theme.spacing.containerWidth} py-16 px-6 md:px-8`}>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold mb-2 block">
              Maternity Bliss
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              For Mommies <br/>
              <span className="italic font-normal text-brand-sage">happy pregnancy</span>
            </h1>
            <p className="mt-4 text-gray-400 font-light max-w-md">
              Thoughtfully designed lounge wear and essentials crafted for comfort throughout your most precious journey.
            </p>
          </div>
        </header>
        
        <section className={`${theme.spacing.containerWidth} px-6 md:px-8 mb-24`}>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-xl border border-brand-charcoal/5 group">
            <img 
              src="/assets/pages/Newborn/Moms/moms-hero-bw.png" 
              alt="Maternity Bliss" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110" 
            />
            {/* Elegant Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start pt-12 md:pt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <span className="text-white text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-bold block mb-4 opacity-70">Collection</span>
                <h2 className="text-white text-3xl md:text-6xl font-serif tracking-[0.2em] uppercase drop-shadow-2xl">
                  Coming Soon
                </h2>
                <div className="w-12 h-[1px] bg-white/30 mx-auto mt-8" />
              </motion.div>
            </div>
          </div>
        </section>

        
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {momProducts.length > 0 ? (
              momProducts.map(product => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">Our Maternity collection is arriving soon...</p>
            )}
          </div>
        </div>
      </main>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      <Footer />
    </div>
  );
};

export default Moms;