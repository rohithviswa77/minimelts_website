import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../Theme';
import { ChevronRight } from 'lucide-react';

const homeHeroImage = '/assets/pages/Home/image-3.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center bg-white overflow-hidden">

      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-brand-cream/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cream/5 hidden lg:block" />

      <div className={`${theme.spacing.containerWidth} relative z-10 px-6 py-6 md:py-24`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 md:space-y-10 order-1"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-brand-clay font-bold block">
                Saathvi's Bliss Boutique
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-brand-charcoal leading-[1.1] tracking-tight">
                Precision Crafted <br />
                <span className="italic font-normal text-brand-sage">Garment Excellence.</span>
              </h1>
              <div className="w-16 h-[2px] bg-brand-sage/30 mt-4" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-500 text-lg md:text-xl max-w-xl font-light leading-relaxed italic">
              Specializing in premium uniforms, corporate wear, and kids essentials.
              Delivering durability and style since 2015.
            </motion.p>

            {/* Category Specs Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <span className="px-4 py-2 bg-brand-cream/30 text-brand-charcoal/70 text-[10px] uppercase tracking-widest font-bold border border-brand-charcoal/5 rounded-full">
                120 GSM Muslin
              </span>
              <span className="px-4 py-2 bg-brand-cream/30 text-brand-charcoal/70 text-[10px] uppercase tracking-widest font-bold border border-brand-charcoal/5 rounded-full">
                Interlock Cotton
              </span>
              <span className="px-4 py-2 bg-brand-cream/30 text-brand-charcoal/70 text-[10px] uppercase tracking-widest font-bold border border-brand-charcoal/5 rounded-full">
                Newborn - 5 Years
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center sm:flex-row sm:items-center gap-6 pt-4">
              <Link
                to="/newborn/essentials"
                className="group relative inline-flex items-center justify-center bg-brand-charcoal text-white px-8 sm:px-10 py-3 sm:py-5 text-[9px] sm:text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-sage transition-all duration-500 shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Shop Essentials</span>
                <motion.div className="absolute inset-0 bg-brand-sage mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 text-brand-charcoal border-b border-brand-charcoal/10 pb-1 text-[9px] sm:text-[11px] uppercase tracking-[0.3em] font-bold hover:text-brand-sage hover:border-brand-sage transition-all duration-300"
              >
                Our Story <ChevronRight size={14} className="mt-[-2px]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-2"
          >
            <div className="relative aspect-[3/2] lg:aspect-[4/5] max-w-xl mx-auto overflow-visible group">
              {/* Image Wrapper with clipping */}
              <div className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl border border-brand-charcoal/5">
                <motion.img
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={homeHeroImage}
                  alt="Saathvi Bliss Excellence"
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-charcoal/[0.02] pointer-events-none" />
                
                {/* Boutique Accent */}
                <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/20 hidden md:block" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/40 hidden md:block" />
              </div>

              {/* Floating Detail Label - Half in half out */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-white p-2 md:p-6 shadow-xl border border-brand-cream z-20"
              >
                <p className="text-[7px] md:text-[10px] uppercase tracking-widest font-bold text-brand-clay mb-0.5 md:mb-1">Established</p>
                <p className="text-sm md:text-xl font-serif italic text-brand-sage leading-none md:leading-normal">Since 2015</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(${theme.colors.charcoal} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}
      />
    </section>
  );
};

export default Hero;
