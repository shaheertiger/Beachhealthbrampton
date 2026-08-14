import { Activity } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      className={twMerge(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl rounded-full",
        isScrolled ? "glass-panel py-3 px-6 shadow-sm border-slate-200" : "py-4 px-6 bg-transparent border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo-transparent.png" 
            alt="BeachHealth Logo" 
            className="h-12 md:h-16 w-auto object-contain scale-110 md:scale-125 origin-left transition-transform duration-300"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-white/60 p-1 rounded-full border border-slate-200 shadow-sm backdrop-blur-md">
          {[
            { name: 'Home', path: '/' },
            { name: 'Therapies', path: '/therapies' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={twMerge(
                "relative px-5 py-2 rounded-full text-sm font-medium transition-colors",
                isActive(item.path) ? "text-white bg-brand-obsidian" : "text-slate-500 hover:text-brand-obsidian"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="bg-white text-brand-cyan px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hidden md:inline-block">
            Book Now
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
