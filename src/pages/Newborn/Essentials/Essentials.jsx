import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import ProductModal from '../../../components/ProductModal';
import { products } from '../../../data/products';
import { theme } from '../../../Theme';

const Essentials = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Updated filter to match the new "Essentials" category
  const essentialsProducts = products.filter(p => p.category === "Essentials");

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header: Now left-aligned for mobile */}
        <header className={`${theme.spacing.containerWidth} py-16 px-6 md:px-8`}>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold mb-2 block">
              New Arrivals
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              The Essentials <br/>
              <span className="italic font-normal text-brand-sage">for little ones</span>
            </h1>
            <p className="mt-4 text-gray-400 font-light max-w-md">
              Discover our signature 100% Muslin nappies and pure interlock cotton shorts, 
              crafted for newborn comfort up to age five.
            </p>
          </div>
        </header>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-12 md:gap-y-16">
            {essentialsProducts.length > 0 ? (
              essentialsProducts.map(product => (
                <div 
                  key={product.id} 
                  onClick={() => setSelectedProduct(product)} 
                  className="cursor-pointer"
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">Curating your favorite essentials...</p>
            )}
          </div>
        </div>
      </main>

      {/* Added Modal so users can see Flipkart links and pack details */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      
      <Footer />
    </div>
  );
};

export default Essentials;