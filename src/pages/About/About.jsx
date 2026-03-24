import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { theme } from '../../Theme';
import { Target, Eye, Award, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const aboutHero = '/assets/pages/Home/image-4.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <header className={`${theme.spacing.containerWidth} py-12 md:py-16 px-6 md:px-8`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-clay font-bold mb-3 block">
              The Saathvi Bliss Heritage
            </span>
            <h1 className="text-2xl md:text-6xl font-serif text-brand-charcoal leading-tight">
              Our Journey <br/>
              <span className="italic font-normal text-brand-sage text-xl md:text-5xl">since 2015</span>
            </h1>
            <div className="w-12 h-[2px] bg-brand-sage/30 mt-6 md:mt-8 mb-4 md:mb-6 mx-auto md:ml-0" />
            <p className="text-gray-400 font-light max-w-lg italic text-sm md:text-lg mx-auto md:ml-0">
              Building trust through reliable, solution-oriented garment manufacturing.
            </p>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className={`${theme.spacing.containerWidth} px-6 md:px-8 mb-12 md:mb-18`}>
          <div className="max-w-sm md:max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative p-3 md:p-8 bg-brand-cream shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-brand-charcoal/5 group"
            >
              <div className="relative overflow-hidden rounded-sm">
                <motion.img 
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={aboutHero} 
                  alt="Our Story" 
                  className="w-full h-auto transition-transform duration-[3000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-charcoal/[0.02] pointer-events-none" />
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-brand-sage/20 hidden md:block" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-brand-sage/20 hidden md:block" />
              
              {/* Premium Badge - Ultra-Mini & Responsive */}
              <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 bg-brand-charcoal text-white px-2 md:px-4 py-1 md:py-2 shadow-lg z-20">
                <p className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">Premium</p>
                <p className="text-xs md:text-base font-serif">Quality</p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* About Content Section */}
        <section className={`${theme.spacing.containerWidth} px-6 md:px-8 pb-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-xl md:text-3xl font-serif text-brand-charcoal border-b border-brand-sage/20 pb-4 inline-block tracking-tight">About Us</h2>
              <div className="prose prose-sm md:prose-lg text-gray-500 font-light leading-relaxed space-y-6 text-sm md:text-lg">
                <p>
                  Saathvi Bliss was established in 2015 with a clear commitment to delivering reliable, solution-oriented garment manufacturing services. 
                  Our approach is simple—understand every client’s requirement and go the extra mile to deliver the best possible outcome.
                </p>
                <p>
                  This dedication has helped us build long-term relationships and earn the trust and confidence of our clients. 
                  We specialize in supplying high-quality uniforms to educational institutions, corporate organizations, and various industries.
                </p>
                <div className="py-2 flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-[1px] bg-brand-sage group-hover:w-16 transition-all duration-500" />
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-sage">Quality Craftsmanship</span>
                </div>
                <p>
                  By using premium materials and following industry best practices, we ensure that every garment we produce reflects superior quality 
                  and craftsmanship worthy of the Saathvi Bliss name.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Target Audience / Specs */}
              <div className="bg-brand-cream/10 p-6 md:p-10 rounded-sm border border-brand-charcoal/5 space-y-6 shadow-inner">
                <p className="text-brand-charcoal leading-relaxed font-light italic text-base md:text-lg">
                  We cater to image-conscious companies, colleges, sports teams, and organizations that understand the importance 
                  of professional appearance and brand identity.
                </p>
                <div className="flex items-center gap-4 md:gap-6 text-brand-charcoal pt-4">
                  <div className="p-3 md:p-4 bg-brand-cream rounded-full shadow-md border border-brand-charcoal/5">
                    <Clock size={20} className="text-brand-sage" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-clay mb-1">Material Excellence</p>
                    <p className="text-base md:text-lg font-serif italic text-brand-sage">120 GSM Muslin & Interlock Cotton</p>
                  </div>
                </div>
              </div>

              {/* Vision & Mission Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group p-6 md:p-8 bg-brand-cream border border-brand-charcoal/5 hover:border-brand-sage/30 transition-all shadow-sm rounded-sm"
                >
                  <Eye size={28} md:size={36} strokeWidth={1} className="text-brand-sage mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-brand-charcoal mb-4">Vision</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    To be a trusted leader in delivering high-quality, comfortable, and stylish garments for every segment.
                  </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group p-6 md:p-8 bg-brand-cream border border-brand-charcoal/5 hover:border-brand-sage/30 transition-all shadow-sm rounded-sm"
                >
                  <Target size={28} md:size={36} strokeWidth={1} className="text-brand-sage mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-brand-charcoal mb-4">Mission</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    To deliver high-quality, durable, and customized garments through efficient production and skilled craftsmanship while ensuring complete customer satisfaction.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
