import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Values from '../../components/Values';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import BackToTop from '../../components/BackToTop';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { theme } from '../../Theme';
import { motion } from 'framer-motion';

const lifestyleImg = '/assets/pages/Home/image-1.png';

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Filter products by category for a unified specialized marquee
  const combinedNewbornProducts = products.filter(p => 
    p.category === 'Essentials' || p.category === 'Bath & Care'
  );

  const handleProductClick = (product) => {
    if (product.category === 'Essentials') {
      navigate('/newborn/essentials');
    } else if (product.category === 'Bath & Care') {
      navigate('/newborn/bath-and-care');
    } else {
      setSelectedProduct(product); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-sage selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Values />
        </motion.div>

        {/* 3. Unified Newborn Collection Marquee (The "Train" Slideshow) */}
        <section className="py-12 md:py-32 bg-brand-cream overflow-hidden border-b border-brand-charcoal/5">
          <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-clay font-bold block">
                The Newborn Collection
              </span>
              <h2 className="text-2xl md:text-6xl font-serif text-brand-charcoal leading-tight">
                Essentials <span className="text-brand-sage md:mx-4 font-normal italic">&</span> Bath & Care
              </h2>
              <div className="flex justify-center gap-8 pt-4">
                <Link 
                  to="/newborn/essentials" 
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-charcoal/20 pb-1 hover:text-brand-sage hover:border-brand-sage transition-all"
                >
                  Shop Essentials
                </Link>
                <Link 
                  to="/newborn/bath-and-care" 
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-charcoal/20 pb-1 hover:text-brand-sage hover:border-brand-sage transition-all"
                >
                  Shop Bath & Care
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Perfect Infinite Marquee */}
          <div className="relative flex overflow-hidden group">
            <motion.div 
              className="flex w-fit"
              animate={{ 
                x: ["0%", "-50%"] 
              }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {/* Double the products for a seamless loop */}
              {[...combinedNewbornProducts, ...combinedNewbornProducts].map((product, idx) => (
                <div 
                  key={`${product.id}-${idx}`} 
                  onClick={() => handleProductClick(product)} 
                  className="w-[200px] md:w-[400px] flex-shrink-0 px-3 md:px-8 cursor-pointer"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>
          {/* 3b. Secondary Flipkart Ticker - Left to Right */}
          <div className="mt-8 md:mt-12 py-3 bg-brand-cream/20 border-y border-brand-charcoal/5 overflow-hidden">
            <motion.div 
              className="flex w-fit whitespace-nowrap"
              animate={{ 
                x: ["-50%", "0%"] 
              }}
              transition={{ 
                duration: 60, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 px-12">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-brand-charcoal/40">Available on Flipkart</span>
                  <div className="w-1 h-1 bg-brand-sage rounded-full opacity-40" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 1. Lifestyle / Introduction Section */}
        <section className="py-12 md:py-24 bg-brand-cream/40 border-t border-brand-charcoal/5">
          <div className={`${theme.spacing.containerWidth} px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
            <div className="bg-brand-cream p-3 shadow-lg rounded-sm overflow-hidden border border-brand-charcoal/5">
               <img 
                 src={lifestyleImg} 
                 alt="Saathvi Bliss Manufacturing" 
                 className="w-full h-auto grayscale-[15%] brightness-[102%] hover:scale-105 transition-transform duration-1000"
               />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold block">
                Welcome to Saathvi Bliss
              </span>
              <h3 className="text-xl md:text-5xl font-serif text-brand-charcoal leading-[1.2]">
                Your Trusted Partner in <span className="text-brand-sage italic">Garment Manufacturing.</span>
              </h3>
              <div className="space-y-4 md:space-y-6 prose prose-sm md:prose-lg text-gray-500 font-light leading-relaxed text-sm md:text-lg">
                <p>
                  Located in Hosur, Tamil Nadu, India, we specialize in crafting comfortable, durable, and stylish clothing with a strong focus on quality, precision, and customer satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-4 text-[11px] uppercase tracking-widest font-bold text-brand-charcoal/60">
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> Kids Wear</div>
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> Company Uniforms</div>
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> Corporate T-Shirts</div>
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> School & College</div>
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> Sports Wear</div>
                  <div className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-sage" /> Hospital Uniforms</div>
                </div>
                <p className="italic text-brand-clay/80 border-l-2 border-brand-sage/20 pl-4">
                  Our infrastructure and skilled workforce ensure that every product meets the highest standards of fabric quality, design, and stitching.
                </p>
              </div>
              <div className="flex gap-6 pt-2 md:pt-4">
                <Link 
                  to="/contact" 
                  className="inline-block bg-brand-charcoal text-white px-8 md:px-12 py-3 md:py-4 text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:bg-brand-sage transition-all shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Home;