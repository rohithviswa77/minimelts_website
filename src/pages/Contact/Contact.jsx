import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { theme } from '../../Theme';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, MessageCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Construct WhatsApp message
    const message = `*New Enquiry from Saathvi Bliss*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/919900067976?text=${message}`;

    // Brief delay for premium feel before redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success state after a while
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-grow">
        {/* HERO / STORY SECTION */}
        <section className="bg-brand-cream/30 py-8 md:py-28 border-b border-brand-charcoal/5">
          <div className={`${theme.spacing.containerWidth} px-6 md:px-8`}>
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-clay font-bold block mb-2 md:mb-4">
                Our Heritage
              </span>
              <h1 className="text-3xl md:text-6xl font-serif text-brand-charcoal mb-4 md:mb-8 leading-tight">
                Established <span className="italic font-normal text-brand-sage">in 2015</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic">
                Saathvi Bliss was established in 2015 with a clear commitment to delivering reliable, solution-oriented garment manufacturing services.
                Our approach is simple—understand every client’s requirement and go the extra mile to deliver the best possible outcome.
                This dedication has helped us build long-term relationships and earn the trust and confidence of our clients.
              </p>
            </div>
          </div>
        </section>

        <div className={`${theme.spacing.containerWidth} py-10 md:py-20 px-6 md:px-8`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 lg:gap-32 items-start">

              {/* LEFT: CONTACT INFORMATION */}
              <div className="space-y-8 md:space-y-12">
                <div className="space-y-2 md:space-y-4 pb-6 border-b border-brand-charcoal/5">
                  <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal">Get in Touch</h2>
                  <p className="text-xs md:text-sm text-gray-400 font-light max-w-sm">We value every inquiry and aim to respond within 24 hours.</p>
                </div>

                <div className="space-y-6 md:space-y-10 pt-2 md:pt-4">
                  {/* Verified Phone */}
                  <a href="tel:+919900067976" className="flex items-start gap-4 md:gap-5 group">
                    <div className="p-2 md:p-3 bg-brand-charcoal text-white rounded-full group-hover:bg-brand-sage transition-all shadow-md">
                      <Phone size={16} md:size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-brand-clay mb-0.5 md:mb-1">Call Us</p>
                      <p className="text-xs md:text-base text-brand-charcoal font-medium">+91 99000 67976</p>
                    </div>
                  </a>

                  {/* Verified Address */}
                  <div className="flex items-start gap-4 md:gap-5 group">
                    <div className="p-2 md:p-3 bg-brand-charcoal text-white rounded-full shadow-md">
                      <MapPin size={16} md:size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-brand-clay mb-0.5 md:mb-1">Boutique Office</p>
                      <p className="text-xs md:text-base text-brand-charcoal leading-relaxed font-medium">
                        D.No. 3/78/10-A, 3rd Cross,<br />
                        Navadhi Layout, Krishnagiri District,<br />
                        Tamil Nadu - 635001
                      </p>
                    </div>
                  </div>

                  {/* Instagram Link */}
                  <a href="https://www.instagram.com/saathvi_bliss/" target="_blank" rel="noreferrer" className="flex items-start gap-4 md:gap-5 group">
                    <div className="p-2 md:p-3 bg-brand-charcoal text-white rounded-full group-hover:bg-brand-sage transition-all shadow-md">
                      <Instagram size={16} md:size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-brand-clay mb-0.5 md:mb-1">Follow Us</p>
                      <p className="text-xs md:text-base text-brand-charcoal font-medium group-hover:text-brand-sage transition-colors">@saathvi_bliss</p>
                    </div>
                  </a>
                </div>

              </div>

              {/* RIGHT: CONTACT FORM - Ultra-Compact on Mobile */}
              <div id="enquiry-form" className="bg-brand-cream/10 p-4 md:p-14 rounded-sm border border-brand-charcoal/10 shadow-inner">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-8 py-8 md:py-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-brand-sage/10 rounded-full flex items-center justify-center">
                      <CheckCircle size={28} md:size={40} className="text-brand-sage" />
                    </div>
                    <div className="space-y-1 md:space-y-3">
                      <h3 className="text-xl md:text-3xl font-serif text-brand-charcoal">Thank You</h3>
                      <p className="text-[10px] md:text-sm text-gray-500 font-light max-w-xs mx-auto">Your inquiry has been received. Our team will get back to you within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-brand-clay border-b border-brand-clay/30 pb-1 hover:text-brand-sage hover:border-brand-sage transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">
                    <div className="space-y-1 md:space-y-3">
                      <h3 className="text-xl md:text-3xl font-serif text-brand-charcoal">Enquiry Form</h3>
                      <p className="text-[10px] text-gray-400 font-light italic">Tell us about your requirements or questions.</p>
                    </div>

                    <div className="space-y-3 md:space-y-8">
                      <div className="group space-y-0 md:space-y-1">
                        <label htmlFor="name" className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-brand-clay ml-1 group-focus-within:text-brand-sage transition-colors">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          disabled={isSending}
                          className="w-full bg-white/50 border-b border-brand-charcoal/30 px-2 md:px-4 py-1.5 md:py-4 focus:outline-none focus:border-brand-sage focus:bg-white transition-all text-xs md:text-sm font-light disabled:opacity-50"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="group space-y-0 md:space-y-1">
                        <label htmlFor="email" className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-brand-clay ml-1 group-focus-within:text-brand-sage transition-colors">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          disabled={isSending}
                          className="w-full bg-white/50 border-b border-brand-charcoal/30 px-2 md:px-4 py-1.5 md:py-4 focus:outline-none focus:border-brand-sage focus:bg-white transition-all text-xs md:text-sm font-light disabled:opacity-50"
                          placeholder="hello@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="group space-y-0 md:space-y-1">
                        <label htmlFor="message" className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-brand-clay ml-1 group-focus-within:text-brand-sage transition-colors">Message</label>
                        <textarea
                          id="message"
                          required
                          disabled={isSending}
                          rows="2"
                          className="w-full bg-white/50 border-b border-brand-charcoal/30 px-2 md:px-4 py-1.5 md:py-4 focus:outline-none focus:border-brand-sage focus:bg-white transition-all text-xs md:text-sm font-light resize-none disabled:opacity-50"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-brand-charcoal text-white py-2.5 md:py-6 text-[9px] md:text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-brand-sage disabled:bg-gray-300 transition-all shadow-xl flex items-center justify-center gap-2 md:gap-4 group active:scale-[0.99]"
                    >
                      {isSending ? (
                        <>
                          <Loader2 size={12} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send size={10} md:size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>        {/* MAP SECTION - The "Perfect" Boutique Frame */}
        <section className="w-full py-16 md:py-32 bg-brand-cream flex flex-col items-center">
          <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-4 md:px-12 lg:px-0 space-y-10 md:space-y-16">
            <div className="text-center space-y-4 md:space-y-6 px-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-clay font-bold block">
                Visit our Boutique
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Location</h2>
              <div className="w-16 h-[1px] bg-brand-sage mx-auto" />
            </div>

            {/* Picture Frame Aesthetic */}
            <div className="w-full mx-auto p-1.5 md:p-3 bg-white border-2 border-brand-charcoal shadow-2xl rounded-sm">
              <div className="relative w-full aspect-[4/5] md:aspect-video lg:h-[500px] overflow-hidden rounded-sm border border-brand-charcoal/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.149879454667!2d77.81766689999999!3d12.703638900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7b001f359149%3A0xf8922193a9a55fa0!2sSAATHVI%27S%20BLISS!5e0!3m2!1sen!2sin!4v1774295352337!5m2!1sen!2sin" 
                  className="w-full h-full border-0 block" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saathvi Bliss Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
