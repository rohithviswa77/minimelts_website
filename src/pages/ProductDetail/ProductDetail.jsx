import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { theme } from '../../Theme'; 
import { ShoppingBag, MessageCircle, Check, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  // Use either the images array or fallback to a single image array
  const displayImages = product?.images && product.images.length > 0 
    ? product.images 
    : [product?.image];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Sync index when product changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center font-serif text-brand-charcoal italic">
        Product not found.
      </div>
    );
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + displayImages.length) % displayImages.length);
  };

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Could you provide more details?`);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className={`${theme.spacing.containerWidth} py-12 md:py-20 px-6`}>
          
          <button 
            onClick={() => navigate(-1)}
            className={`text-[10px] uppercase ${theme.values.textTracking} text-brand-clay hover:text-brand-charcoal mb-8 inline-block transition-colors font-bold flex items-center gap-2`}
          >
            <ArrowLeft size={14} /> Back
          </button>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left: Product Gallery with Slideshow */}
            <div className="space-y-6">
              <div className="relative aspect-[4/5] bg-brand-cream flex items-center justify-center overflow-hidden rounded-sm border border-gray-50 group">
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
                      className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                      alt={`${product.name} view ${currentIndex + 1}`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {displayImages.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 z-10 p-2 bg-brand-cream/80 backdrop-blur-md rounded-full text-brand-charcoal opacity-0 group-hover:opacity-100 transition-opacity hover:text-brand-sage"
                      onClick={() => paginate(-1)}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-brand-charcoal opacity-0 group-hover:opacity-100 transition-opacity hover:text-brand-sage"
                      onClick={() => paginate(1)}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Paging Indicator Dots */}
                {displayImages.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {displayImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > currentIndex ? 1 : -1);
                          setCurrentIndex(i);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-brand-sage w-4' : 'bg-brand-charcoal/20'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Thumbnails for Multi-packs */}
              {displayImages.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {displayImages.map((img, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`aspect-square border-2 transition-all rounded-sm overflow-hidden ${currentIndex === index ? 'border-brand-sage scale-95 shadow-inner' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right: Product Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <p className={`text-[11px] uppercase ${theme.values.textTracking} text-brand-clay font-bold`}>
                    {product.category}
                  </p>
                  {product.packSize && (
                    <span className="bg-brand-sage/10 text-brand-sage text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {product.packSize}
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
                  {product.name}
                </h1>
                
                {product.price && product.price !== "Not Available" && (
                   <p className="text-2xl text-brand-charcoal font-medium">
                    ₹{product.price}
                  </p>
                )}
              </div>

              <div className="h-px w-full bg-brand-charcoal/10" />
              
              <div className="space-y-6">
                <p className="text-gray-500 leading-relaxed text-lg font-light italic">
                  {product.description}
                </p>
                
                {/* Product Specific Highlights */}
                <ul className="grid grid-cols-1 gap-3 pt-2">
                  {product.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-brand-charcoal font-semibold">
                      <Check size={14} className="text-brand-sage" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-2 md:pt-4">
                <div className="flex flex-row gap-2 mb-4">
                  <a 
                    href={product.flipkartLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-charcoal text-white py-2.5 text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all text-center shadow-md"
                  >
                    <ShoppingBag size={14} />
                    <span className="truncate">Flipkart</span>
                  </a>

                  <a 
                    href={`https://wa.me/919900067976?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-brand-charcoal/20 text-brand-charcoal py-2.5 text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-brand-cream transition-all text-center"
                  >
                    <MessageCircle size={14} />
                    <span className="truncate">WhatsApp</span>
                  </a>
                </div>

                <p className="text-[9px] text-gray-400 uppercase tracking-widest text-center">
                  Ethically Made in India • {product.material}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;


