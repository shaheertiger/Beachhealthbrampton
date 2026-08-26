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
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-square flex flex-col items-center justify-center z-10"
          >
            {/* Wavy Blob Background */}
            <div className="absolute inset-0 w-full h-full text-[#F6FAFD] drop-shadow-2xl">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current" preserveAspectRatio="none">
                <path d="M49.9,-71.3C64.6,-61.8,76.5,-47.9,83.9,-31.6C91.3,-15.3,94.2,3.4,89.5,20.1C84.8,36.8,72.5,51.5,57.5,61.9C42.5,72.3,24.8,78.4,6.4,79.5C-12,80.6,-31.1,76.7,-46.5,67.2C-61.9,57.7,-73.6,42.6,-80.4,25.6C-87.2,8.6,-89.1,-10.3,-82.7,-26.1C-76.3,-41.9,-61.6,-54.6,-46.1,-63.7C-30.6,-72.8,-14.3,-78.3,1.6,-80.5C17.5,-82.7,35.2,-80.8,49.9,-71.3Z" transform="translate(100 100) scale(1.15)" />
              </svg>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-[10%] right-[10%] text-slate-400 hover:text-brand-obsidian transition-colors z-20 bg-white/50 rounded-full p-2 hover:bg-white"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Modal Content */}
            <div className="relative z-20 flex flex-col items-center px-10 sm:px-14 pb-8 pt-4 w-full h-full justify-center">
              {/* Logo Area */}
              <div className="mb-6 h-10 sm:h-12 flex items-center justify-center w-full">
                 <img 
                   src="/logo-transparent.png" 
                   alt="Beach Health Logo" 
                   className="h-full w-auto object-contain"
                 />
              </div>

              <p className="text-center text-slate-600 text-[14px] sm:text-[15px] font-medium leading-relaxed mb-6 sm:mb-8 max-w-[320px]">
                Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
              </p>

              <form className="w-full flex flex-col gap-3 sm:gap-4 max-w-[340px]" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full bg-white border border-slate-100 px-5 py-3.5 sm:py-4 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-shadow hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-brand-green/20"
                />
                
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-white border border-slate-100 px-5 py-3.5 sm:py-4 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-shadow hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-brand-green/20"
                />
                
                <div className="flex bg-white border border-slate-100 rounded-full shadow-sm focus-within:border-brand-green focus-within:shadow-md focus-within:ring-2 focus-within:ring-brand-green/20 overflow-hidden transition-shadow hover:shadow-md">
                  <select className="bg-transparent pl-5 pr-2 py-3.5 sm:py-4 text-[14px] text-slate-500 border-r border-slate-100 outline-none cursor-pointer appearance-none font-medium">
                    <option value="US">US +1 ⌄</option>
                    <option value="CA">CA +1 ⌄</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="w-full bg-transparent px-4 py-3.5 sm:py-4 outline-none text-brand-obsidian placeholder:text-slate-400 text-[14px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 sm:mt-4 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-brand-green-hover transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Continue
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
