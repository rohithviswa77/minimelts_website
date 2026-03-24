import React from 'react';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import { theme } from '../Theme'; // Import your control panel

const Values = () => {
  const items = [
    { 
      icon: <Leaf size={theme.values.iconSize} strokeWidth={theme.values.iconStroke} />, 
      title: "100% Cotton & Muslin",
      subtitle: "Pure, breathable natural fibers"
    },
    { 
      icon: <Sparkles size={theme.values.iconSize} strokeWidth={theme.values.iconStroke} />, 
      title: "Newborn to 5 Years",
      subtitle: "Growing with your little ones"
    },
    { 
      icon: <Heart size={theme.values.iconSize} strokeWidth={theme.values.iconStroke} />, 
      title: "Maternity Bliss",
      subtitle: "Comfort for every mommy" 
    }
  ];

  return (
    <section className="bg-white">
      <div className={`${theme.spacing.containerWidth} py-6 md:py-16 border-b border-brand-charcoal/5 px-4 md:px-8`}>
        <div className="grid grid-cols-3 gap-2 md:gap-12">
          {items.map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center group space-y-2 md:space-y-4">
              <div className="text-brand-sage transition-transform duration-500 group-hover:scale-110">
                <div className="scale-90 md:scale-100">
                  {v.icon}
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] md:text-sm uppercase tracking-widest font-bold text-brand-charcoal mb-0 line-height-tight">
                  {v.title}
                </h4>
                <p className="text-[9px] md:text-[18px] text-gray-400 font-light italic tracking-tight leading-tight">
                  {v.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;