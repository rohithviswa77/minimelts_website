import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { theme } from '../Theme';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [product?.id]);

  if (!product) return null;

  const displayImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + displayImages.length) % displayImages.length);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name} (₹${product.price}). Could you provide more details?`
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-brand-cream w-full max-w-4xl h-auto max-h-[90vh] md:h-auto md:max-h-[85vh] rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden mx-4 md:mx-0">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[130] p-2 bg-brand-charcoal text-white rounded-full hover:bg-brand-sage transition-all shadow-lg md:bg-white/80 md:text-brand-charcoal"
        >
          <X size={18} />
        </button>

        {/* Left: Product Image / Slideshow */}
        <div className="w-full md:w-1/2 bg-brand-cream h-[28vh] md:h-auto md:aspect-square relative group overflow-hidden flex-shrink-0 border-b md:border-b-0 md:border-r border-brand-charcoal/5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <img
                src={displayImages[currentIndex]}
                className="w-full h-full object-contain bg-brand-cream"
                alt={`${product.name} view ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {displayImages.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-brand-charcoal/30 backdrop-blur-sm rounded-full text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-brand-sage shadow-md"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-brand-charcoal/30 backdrop-blur-sm rounded-full text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-brand-sage shadow-md"
                onClick={() => paginate(1)}
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Paging Dots */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {displayImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-1 h-1 rounded-full transition-all ${i === currentIndex ? 'bg-brand-sage w-3' : 'bg-brand-charcoal/20'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col overflow-y-auto bg-brand-cream scrollbar-hide">
          <div className="flex justify-between items-start mb-2 md:mb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-clay font-bold">
              {product.category}
            </p>
            {product.packSize && (
              <span className="bg-brand-sage/10 text-brand-sage text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                {product.packSize}
              </span>
            )}
          </div>

          <h2 className="text-lg md:text-3xl font-serif text-brand-charcoal mb-1 md:mb-2 leading-tight line-clamp-2 md:line-clamp-none">
            {product.name}
          </h2>

          <p className="text-base md:text-xl text-brand-charcoal font-medium mb-2 md:mb-6">
            ₹{product.price}
          </p>

          <div className="h-px w-full bg-brand-charcoal/5 mb-4 md:mb-6" />

          <div className="mb-3 md:mb-8 font-light leading-relaxed text-[11px] md:text-sm italic text-gray-500 line-clamp-2 md:line-clamp-none">
            {product.description || "Designed for premium comfort and style."}
          </div>

          {/* Quick Specs */}
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 mb-4 md:mb-6 pt-3 border-t border-brand-charcoal/5">
            {product.highlights?.map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-brand-charcoal font-bold">
                <span className="w-1 h-1 rounded-full bg-brand-sage shrink-0" />
                {highlight}
              </li>
            )) || (
                <>
                  <li className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-brand-charcoal font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-sage shrink-0" />
                    100% Cotton
                  </li>
                </>
              )}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 pt-2 md:pt-6 md:mt-auto">
            <a
              href={product.flipkartLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-brand-charcoal text-white py-2 text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-brand-sage transition-all shadow-sm group"
            >
              <ShoppingBag size={12} className="group-hover:scale-110 transition-transform" />
              <span className="truncate">Flipkart</span>
            </a>

            <a
              href={`https://wa.me/919900067976?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 border border-brand-charcoal/10 text-brand-charcoal py-2 text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-brand-cream transition-all group"
            >
              <MessageCircle size={12} className="group-hover:scale-110 transition-transform" />
              <span className="truncate">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;