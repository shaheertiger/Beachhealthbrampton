import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-32 pb-24 px-8 overflow-hidden bg-brand-cyan">
      
      {/* Reference Image Style Dotted Grid Top Left */}
      <div className="absolute top-32 left-16 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2, 3].map(row => (
            [0, 1, 2, 3].map(col => (
              <circle key={`${row}-${col}`} cx={col * 15 + 5} cy={row * 15 + 5} r="2" fill="white" />
            ))
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content (Matches the left side of the slide) */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 pl-0 md:pl-16"
        >
          {/* Logo element matching the Chirofit circle logo */}
          <div className="mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Activity className="text-white" size={32} />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-2">
              BeachHealth
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light tracking-wide">
              Pain, Mobility, and Beyond
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5 mt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-brand-cyan px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-colors shadow-lg"
            >
              Book Session
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Graphics (Matches the cut-out image on the right) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full flex justify-center items-end"
        >
          {/* Using a placeholder representation of a cutout image. The image hero-physio.png should ideally be a transparent PNG cut out. */}
          <div className="relative w-full max-w-md h-[120%] flex items-end">
             <img 
              src="/hero-physio.png" 
              alt="Physiotherapy Treatment"
              className="w-full h-auto object-contain z-10 drop-shadow-2xl"
              style={{ mixBlendMode: "luminosity" }} // Fallback styling
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
