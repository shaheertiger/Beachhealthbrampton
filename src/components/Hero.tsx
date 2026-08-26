import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-[calc(100svh-110px)] md:min-h-[calc(100dvh-50px)] flex flex-col pt-28 md:pt-0 pb-8 md:pb-24 px-6 md:px-8 overflow-hidden">
      
      {/* Background Image with Light Mask */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero-new.jpg" />
          <img 
            src="/hero-mobile.jpg"
            alt="Rehab Background"
            className="w-full h-full object-cover object-top md:object-center"
            style={{ filter: "grayscale(20%)" }} // Slight desaturation
          />
        </picture>
        {/* Very subtle mask, no blur, gradient removed as requested */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col flex-grow justify-start md:justify-end">
        
        {/* Text Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mt-4 md:mt-0"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-[1.1] mb-3 max-w-xs md:max-w-sm" style={{ color: '#0090d4' }}>
            Restore Your<br/>Mobility.
          </h1>
          <p className="text-xl md:text-2xl text-brand-obsidian font-medium mb-2 max-w-xs">
            Personalized care for a <br/> pain-free life.
          </p>
        </motion.div>

        {/* Button Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-auto self-start mt-auto md:mt-4 lg:mt-6 flex justify-center md:justify-start"
        >
          <Link to="/contact" className="w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-green/20 transition-all border border-brand-green/50 w-full md:w-auto"
            >
              Book An Appointment
            </motion.button>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
