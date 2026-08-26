import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-obsidian/40 backdrop-blur-md"
          />

          {/* Animated Glow Behind Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-[120%] max-w-[600px] h-[120%] max-h-[600px] bg-gradient-to-tr from-brand-green/30 via-white/10 to-sky-300/30 blur-[80px] rounded-full pointer-events-none"
          />

          {/* Premium Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,144,212,0.15)] border border-white/50 z-10 flex flex-col items-center overflow-hidden"
          >
            {/* Soft decorative accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-80" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-brand-obsidian transition-colors z-20 bg-slate-50 hover:bg-slate-100 rounded-full p-2"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Logo Area */}
            <div className="mb-8 mt-2 h-9 flex items-center justify-center w-full">
               <img 
                 src="/logo-transparent.png" 
                 alt="Beach Health Logo" 
                 className="h-full w-auto object-contain"
               />
            </div>

            <p className="text-center text-slate-600 text-[15px] leading-relaxed mb-8 max-w-[300px]">
              Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
            </p>

            <form className="w-full flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-full outline-none focus:border-brand-green focus:bg-white text-brand-obsidian placeholder:text-slate-400 text-[15px] shadow-sm transition-all"
              />
              
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-slate-50/50 border border-slate-100 px-6 py-4 rounded-full outline-none focus:border-brand-green focus:bg-white text-brand-obsidian placeholder:text-slate-400 text-[15px] shadow-sm transition-all"
              />
              
              <div className="flex bg-slate-50/50 border border-slate-100 rounded-full shadow-sm focus-within:border-brand-green focus-within:bg-white overflow-hidden transition-all">
                <select className="bg-transparent pl-6 pr-2 py-4 text-[15px] text-slate-500 border-r border-slate-100 outline-none cursor-pointer appearance-none">
                  <option value="US">US +1 ⌄</option>
                  <option value="CA">CA +1 ⌄</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full bg-transparent px-4 py-4 outline-none text-brand-obsidian placeholder:text-slate-400 text-[15px]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-[0.1em] text-[13px] hover:bg-[#0284c7] transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 active:scale-[0.98]"
              >
                Continue
              </button>
            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
