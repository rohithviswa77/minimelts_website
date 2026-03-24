import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { theme } from '../../Theme';
import { motion } from 'framer-motion';

const uniformHero = '/assets/pages/Uniforms/uniform-hero-bw.png';


const Uniforms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-grow">
        <header className={`${theme.spacing.containerWidth} py-16 px-6 md:px-8`}>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold mb-2 block">
              Professional Wear
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
              Premium Uniforms <br/>
              <span className="italic font-normal text-brand-sage">designed for excellence</span>
            </h1>
            <p className="mt-4 text-gray-400 font-light max-w-md">
              High-quality uniforms for various sectors, built for durability and comfort.
            </p>
          </div>
        </header>

        <section className={`${theme.spacing.containerWidth} px-6 md:px-8 mb-24`}>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm shadow-xl border border-brand-charcoal/5 group">
            <img 
              src={uniformHero} 
              alt="Uniforms" 
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
      </main>
      <Footer />
    </div>
  );
};

export default Uniforms;
