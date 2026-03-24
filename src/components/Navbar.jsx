import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { theme } from '../Theme';
import { motion, AnimatePresence } from 'framer-motion';

const saathviLogo = '/assets/pages/Global/SaathvisBliss.png'; 
const minimeltsLogo = '/assets/pages/Global/Minimelts.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Newborn', 
      dropdown: [
        { name: 'Essentials', path: '/newborn/essentials' },
        { name: 'Bath & Care', path: '/newborn/bath-and-care' },
        { name: 'Moms', path: '/newborn/moms' },
      ]
    },
    { 
      name: 'T-shirts', 
      dropdown: [
        { name: 'T-shirts', path: '/t-shirts' },
        { name: 'Uniforms', path: '/uniforms' },
      ]
    },
    { name: 'Hospital Wear', path: '/hospital-wear' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdownClick = (name) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <>
      <nav 
        className={`w-full sticky top-0 z-[60] px-4 transition-all duration-500 border-b border-brand-charcoal/5 ${
          scrolled ? 'bg-brand-cream-dark/95 backdrop-blur-md py-1 shadow-sm' : 'bg-brand-cream/80 backdrop-blur-sm py-2'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center h-16 md:h-24 relative">
          
          {/* MOBILE: Hamburger */}
          <div className="flex-1 flex justify-start items-center lg:hidden relative z-20">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 text-brand-charcoal hover:text-brand-sage transition-colors active:scale-95"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* MOBILE ONLY: Centered Logo */}
          <Link 
            to="/" 
            className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <img 
              src={saathviLogo} 
              alt="Logo" 
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-8' : 'h-10'}`} 
            />
          </Link>

          {/* DESKTOP: Left Logo */}
          <div className="hidden lg:flex flex-1 justify-start items-center">
            <Link to="/" className="group flex items-center gap-4 transition-all">
              <img 
                src={saathviLogo} 
                alt="Saathvi's Bliss" 
                className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-14' : 'h-20'}`} 
              />
            </Link>
          </div>

          {/* CENTER: Desktop Links */}
          <div className="flex-[3] hidden lg:flex justify-center items-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative h-full py-4"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button 
                      className={`flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                        activeDropdown === link.name ? 'text-brand-sage' : 'text-brand-charcoal'
                      }`}
                    >
                      {link.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>
                  ) : (
                    <Link 
                      to={link.path}
                      className={`text-[11px] font-sans font-bold uppercase tracking-[0.2em] transition-colors relative group/link ${
                        location.pathname === link.path ? 'text-brand-sage' : 'text-brand-charcoal hover:text-brand-sage'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-sage transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                    </Link>
                  )}

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-52 bg-brand-cream-dark backdrop-blur-xl shadow-2xl rounded-sm border border-brand-charcoal/5 py-4 z-[70] overflow-hidden"
                      >
                        
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-8 py-3 text-[10px] font-bold text-brand-charcoal hover:bg-brand-cream/60 hover:text-brand-sage uppercase tracking-[0.15em] transition-all group/sub"
                          >
                            <span className="relative flex items-center gap-2">
                              <span className="w-0 h-[1px] bg-brand-sage transition-all duration-300 group-hover/sub:w-3" />
                              {subItem.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center relative z-20">
            <div className={`transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <img src={minimeltsLogo} alt="Minimelts" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-md z-[100]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 w-[70%] h-full bg-brand-cream z-[110] shadow-[10px_0_40px_-10px_rgba(0,0,0,0.3)] flex flex-col"
            >
              <div className="p-6 flex flex-col h-full overflow-y-auto">
                <div className="flex justify-end items-center mb-6">
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="p-2 text-brand-charcoal hover:bg-white/50 rounded-full transition-all active:scale-90"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex flex-col gap-0">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      {link.dropdown ? (
                        <>
                          <button 
                            onClick={() => handleDropdownClick(link.name)}
                            className={`flex justify-between items-center text-[12px] font-bold uppercase tracking-[0.2em] py-4 border-b border-brand-charcoal/5 transition-colors ${
                              activeDropdown === link.name ? 'text-brand-sage' : 'text-brand-charcoal'
                            }`}
                          >
                            {link.name}
                            <motion.div
                              animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="flex flex-col overflow-hidden bg-white/30 rounded-sm"
                              >
                                {link.dropdown.map((subItem) => (
                                  <Link 
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-6 py-4 hover:text-brand-sage border-l-2 border-transparent hover:border-brand-sage bg-white/5 transition-all"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link 
                          to={link.path}
                          className={`text-[12px] font-bold uppercase tracking-[0.2em] py-4 border-b border-brand-charcoal/5 transition-colors ${
                            location.pathname === link.path ? 'text-brand-sage' : 'text-brand-charcoal'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-16 text-center">
                  <p className="text-[9px] uppercase tracking-[0.5em] text-brand-clay font-bold mb-3">
                    Saathvi Bliss
                  </p>
                  <div className="w-8 h-[1px] bg-brand-sage mx-auto mb-3 opacity-30" />
                  <p className="text-[10px] text-gray-400 italic font-light tracking-wide">Sustainable Manufacturing Excellence</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
