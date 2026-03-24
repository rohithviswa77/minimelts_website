import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import ProductModal from '../../../components/ProductModal';
import { products } from '../../../data/products';
import { theme } from '../../../Theme';

const BathAndCare = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters products for the new "Bath & Care" category
  const bathProducts = products.filter(p => p.category === "Bath & Care");

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Left-aligned header to match the Essentials look */}
        <header className={`${theme.spacing.containerWidth} py-16 px-6 md:px-8`}>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold mb-2 block">
              Self Care
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              Bath & Care <br/>
              <span className="italic font-normal text-brand-sage">gentle essentials</span>
            </h1>
            <p className="mt-4 text-gray-400 font-light max-w-md">
              Discover our 120 GSM pure cotton bath towels and wash cloths, designed for the softest touch.
            </p>
          </div>
        </header>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-12 md:gap-y-16">
            {bathProducts.length > 0 ? (
              bathProducts.map(product => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">Our Bath collection is being curated...</p>
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

export default BathAndCare;