
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/therapies' },
    { name: 'The Team', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={twMerge(
        "w-full z-40 transition-all duration-500",
        isScrolled 
          ? "fixed top-0 left-0 bg-bg-base/90 backdrop-blur-md py-4 shadow-md border-b border-zinc-200" 
          : "absolute top-0 left-0 py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Image Logo */}
        <Link to="/" className="flex items-center group select-none">
          <img 
            src="/logo-transparent.png" 
            alt="Beach Health Logo" 
            className="h-12 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
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

        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-brand-green/20 transition-all hidden md:flex items-center justify-center">
            Book An Appointment
          </Link>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-brand-obsidian p-2 -mr-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 w-full h-[100dvh] bg-bg-base/95 backdrop-blur-2xl z-50 flex flex-col"
          >
            {/* Mobile Menu Header (Matches Navbar) */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
              <Link to="/" className="flex items-center group select-none" onClick={() => setIsMobileMenuOpen(false)}>
                <img 
                  src="/logo-transparent.png" 
                  alt="Beach Health Logo" 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button className="text-brand-obsidian p-2 -mr-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center flex-1 px-8 pb-12 gap-8 overflow-y-auto">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={twMerge(
                    "text-2xl font-bold tracking-widest uppercase transition-colors drop-shadow-sm",
                    isActive(item.path) ? "text-brand-green" : "text-brand-obsidian hover:text-brand-green"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-brand-obsidian/10 w-24 my-2"></div>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-green text-white px-8 py-4 rounded-full text-center font-black uppercase tracking-widest shadow-xl shadow-brand-green/30 text-lg w-full max-w-[280px]"
              >
                Book An Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
