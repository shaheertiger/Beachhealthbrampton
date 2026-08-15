
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
    { name: 'Careers', path: '/contact' }
  ];

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
        
        {/* Coded Logo - no image dependency */}
        <Link to="/" className="flex items-center group select-none">
          <span
            className="font-display font-black uppercase tracking-tight leading-none"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            <span className="text-brand-obsidian">BEAC</span><span className="text-brand-cyan" style={{ fontWeight: 900 }}>+</span><span className="text-brand-obsidian">EALTH</span>
          </span>
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-bg-base/80 backdrop-blur-xl border-t border-white/20 z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 py-12 gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={twMerge(
                    "text-2xl font-bold tracking-widest uppercase transition-colors text-brand-obsidian drop-shadow-sm",
                    isActive(item.path) ? "text-brand-green" : "hover:text-brand-green"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-brand-obsidian/10 w-24 my-4"></div>
              <Link 
                to="/contact" 
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
