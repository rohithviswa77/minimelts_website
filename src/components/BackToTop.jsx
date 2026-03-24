import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-3 bg-white border border-brand-charcoal/10 rounded-full shadow-lg z-40 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <ArrowUp size={20} className="text-brand-charcoal" />
    </button>
  );
};

export default BackToTop;