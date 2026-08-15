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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-bg-base/90 backdrop-blur-md py-4 shadow-md border-b border-zinc-200" : "py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo matching the reference vibe */}
        <Link to="/" className="flex items-center group">
          <img src="/logo.png" alt="BeachHealth Logo" className="h-16 md:h-24 object-contain" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Our Services', path: '/therapies' },
            { name: 'The Team', path: '/about' },
            { name: 'Careers', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={twMerge(
                "relative text-sm font-medium transition-colors tracking-wide",
                isActive(item.path) ? "text-brand-obsidian font-bold" : "text-zinc-500 hover:text-brand-obsidian"
              )}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green" />
              )}
            </Link>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-brand-green/20 transition-all hidden md:inline-block">
            Book An Appointment
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
