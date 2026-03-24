import React from 'react';
import { theme } from '../Theme';

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] bg-white overflow-hidden mb-6 rounded-sm border border-brand-charcoal/5 p-4 flex items-center justify-center">
        {/* NEW: Pack Size Badge */}
        {product.packSize && (
          <div className="absolute top-3 left-3 z-10 transition-transform duration-500 group-hover:scale-105">
            <span className="bg-white/95 backdrop-blur-md text-brand-charcoal text-[8px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm border border-brand-charcoal/5">
              {product.packSize}
            </span>
          </div>
        )}

        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" 
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-brand-charcoal/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow text-left">
        <div className="flex flex-col mb-1">
          <span className="text-[9px] uppercase tracking-[0.3em] text-brand-clay font-bold mb-1">
            {product.category}
          </span>
          <h3 className="text-sm md:text-lg font-serif text-brand-charcoal leading-snug group-hover:text-brand-sage transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <p className="text-[14px] text-brand-charcoal/80 font-medium">
          ₹{product.price}
        </p>
        
        {/* NEW: Material Mention */}
        <p className="mt-2 text-[10px] text-gray-400 font-light italic tracking-wider">
          {product.material || "100% Cotton & Muslin"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;