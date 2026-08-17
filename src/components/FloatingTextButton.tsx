import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FloatingTextButton() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 2 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-36 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3">
      {/* Speech Bubble Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            {/* Inner div for continuous floating animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-4 shadow-2xl shadow-black/10 border border-slate-100 flex items-center gap-3 relative max-w-[260px]"
            >
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-slate-100 text-slate-400 hover:text-brand-obsidian transition-colors z-10"
              >
                <X size={14} />
              </button>
              
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&auto=format&fit=crop" 
                alt="Support Agent" 
                className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-white shadow-sm"
              />
              
              <p className="text-sm font-medium text-brand-obsidian leading-tight">
                Hi there, any questions? <br/> <span className="text-brand-green font-bold cursor-pointer hover:underline" onClick={() => navigate('/contact')}>Text us here!</span>
              </p>
              
              {/* Tail pointing down to the button */}
              <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, type: 'spring', bounce: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-brand-green text-white px-5 py-3.5 rounded-full shadow-xl shadow-brand-green/30 border border-brand-green/50 hover:bg-brand-green-hover transition-colors group cursor-pointer relative"
        onClick={() => {
          navigate('/contact');
        }}
      >
        <MessageSquareText size={20} className="text-white group-hover:animate-pulse" />
        <span className="font-bold text-sm md:text-base tracking-wide">Text us</span>
      </motion.button>
    </div>
  );
}
