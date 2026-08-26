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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md bg-[#F8F9F8] rounded-[3rem] p-8 md:p-10 shadow-2xl z-10 flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-brand-obsidian transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Logo Area */}
            <div className="mb-8 mt-2 h-8 flex items-center justify-center w-full">
               <img 
                 src="/logo-transparent.png" 
                 alt="Beach Health Logo" 
                 className="h-full w-auto object-contain"
               />
            </div>

            <p className="text-center text-[#5C6B7A] text-[15px] leading-relaxed mb-8 max-w-[280px]">
              Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
            </p>

            <form className="w-full flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-white border border-slate-100 px-6 py-4 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-[#8E9CA8] text-[15px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] focus:shadow-[0_4px_12px_-4px_rgba(0,144,212,0.15)]"
              />
              
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-white border border-slate-100 px-6 py-4 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-[#8E9CA8] text-[15px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] focus:shadow-[0_4px_12px_-4px_rgba(0,144,212,0.15)]"
              />
              
              <div className="flex bg-white border border-slate-100 rounded-full shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] focus-within:border-brand-green focus-within:shadow-[0_4px_12px_-4px_rgba(0,144,212,0.15)] overflow-hidden transition-shadow hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]">
                <select className="bg-transparent pl-6 pr-2 py-4 text-[15px] text-[#475569] border-r border-slate-100 outline-none cursor-pointer appearance-none">
                  <option value="US">US +1 ⌄</option>
                  <option value="CA">CA +1 ⌄</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full bg-transparent px-4 py-4 outline-none text-brand-obsidian placeholder:text-[#8E9CA8] text-[15px]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-[0.1em] text-[13px] hover:bg-brand-green-hover transition-all shadow-[0_8px_20px_-6px_rgba(0,144,212,0.4)] hover:shadow-[0_10px_25px_-6px_rgba(0,144,212,0.5)] active:scale-[0.98]"
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
