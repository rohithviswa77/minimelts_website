import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { theme } from '../Theme';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream px-6 md:px-12 py-8 md:py-14 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-8 md:mb-12">
          
          {/* Column 1: Brand Story */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl md:text-3xl font-serif tracking-tight leading-none">
                Saathvi's Bliss <span className="text-accent/40 italic font-light px-2">×</span> Minimelts
              </h2>
              <div className="w-12 h-px bg-accent/30" />
            </div>
            <p className="hidden md:block text-[13px] md:text-sm text-brand-cream/60 font-light leading-relaxed max-w-sm">
              Crafting delicate 120 GSM Muslin and pure Interlock Cotton essentials. 
              A boutique approach to newborn comfort, from the first breath up to five years.
            </p>
            {/* Mobile-only 2 lines */}
            <p className="md:hidden text-[11px] text-brand-cream/50 font-light leading-relaxed tracking-wide">
              Delicate muslin essentials for newborns.<br />
              Boutique comfort up to five years.
            </p>
            {/* Boutique Location */}
            <div className="hidden md:block flex items-start gap-4 text-brand-cream/40 group cursor-default">
              <MapPin size={18} strokeWidth={1} className="mt-0.5 shrink-0 group-hover:text-accent transition-colors duration-500" />
              <p className="text-[11px] md:text-[12px] leading-loose font-serif italic">
                D.No. 3/78/10-A, 3rd Cross,<br />
                Navadhi Layout, Hosur,<br />
                Tamil Nadu - 635109
              </p>
            </div>
          </div>

          {/* Column 2: Navigation (Visual Only for now) */}
          <div className="hidden md:block space-y-6">
            <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-accent/80">Collections</h3>
            <ul className="space-y-3">
              {['Newborn Essentials', 'Bath & Care', 'Moms Collection', 'Custom T-Shirts'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[12px] text-brand-cream/50 hover:text-accent transition-colors duration-300 font-light tracking-wide">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-accent/80">Connect</h3>
              <div className="flex flex-row md:flex-col gap-6 md:gap-5">
                <a
                  href="https://wa.me/919900067976"
                  className="group flex items-center gap-3 md:gap-4 text-brand-cream/60 hover:text-white transition-all duration-500"
                >
                  <div className="p-1.5 md:p-2 border border-brand-cream/10 rounded-full group-hover:border-accent/40 transition-colors">
                    <MessageCircle size={16} md:size={20} strokeWidth={1.2} className="group-hover:text-accent" />
                  </div>
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-medium">WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/saathvi_bliss/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 md:gap-4 text-brand-cream/60 hover:text-white transition-all duration-500"
                >
                  <div className="p-1.5 md:p-2 border border-brand-cream/10 rounded-full group-hover:border-accent/40 transition-colors">
                    <Instagram size={16} md:size={20} strokeWidth={1.2} className="group-hover:text-accent" />
                  </div>
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Ethics & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-cream/5 pt-10 gap-8">
          <div className="flex items-center gap-8">
            <span className="text-[9px] uppercase tracking-[0.5em] text-brand-cream/30">Ethically Made</span>
            <div className="w-1 h-1 bg-accent/20 rounded-full" />
            <span className="text-[9px] uppercase tracking-[0.5em] text-brand-cream/30">120 GSM Pure</span>
          </div>

          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-brand-cream/20 font-light">
            © {new Date().getFullYear()} Saathvi's Bliss & Minimelts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;