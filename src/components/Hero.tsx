import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-end md:justify-center pb-12 md:pb-0 px-8 overflow-hidden">
      
      {/* Background Image with Light Mask */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero-new.jpg" />
          <img 
            src="/hero-mobile.jpg"
            alt="Rehab Background"
            className="w-full h-full object-cover object-bottom md:object-center"
            style={{ filter: "grayscale(20%)" }} // Slight desaturation
          />
        </picture>
        {/* Very subtle mask, no blur, gradient removed as requested */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[clamp(4rem,13vw,10rem)] font-black text-brand-obsidian tracking-tighter uppercase leading-[0.9] mb-6">
            Restore Your<br/>Mobility.
          </h1>
          <p className="text-xl md:text-2xl text-brand-obsidian/80 font-light mb-8">
            Personalized care for a<br/>pain-free life.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-green/20 transition-all border border-brand-green/50"
            >
              Book An Appointment
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
