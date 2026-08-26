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
            className="relative flex items-center justify-center z-10 w-full max-w-[600px] aspect-square"
          >
            {/* Wavy Blob Background - Perfectly centered and scaled */}
            <div className="absolute inset-0 w-full h-full text-[#F0F6FA] drop-shadow-2xl flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full fill-current" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.7,-40.4C86.3,-25.5,93.4,-9.7,92.2,5.7C91,21.1,81.5,36,70.1,47.4C58.7,58.8,45.4,66.7,30.8,72.6C16.2,78.5,0.3,82.4,-15.1,80.1C-30.5,77.8,-45.4,69.3,-57.4,57.7C-69.4,46.1,-78.5,31.4,-82.9,15.2C-87.3,-1,-87,-18.7,-79.8,-33.5C-72.6,-48.3,-58.5,-60.2,-43.3,-66.8C-28.1,-73.4,-14.1,-74.7,1.4,-76.8C16.9,-78.9,32.5,-83.3,45.7,-76.3Z" 
                  transform="translate(100 100) scale(1.05)" 
                />
              </svg>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-[12%] right-[12%] text-slate-400 hover:text-brand-obsidian transition-colors z-20 bg-white/60 backdrop-blur-md rounded-full p-2 hover:bg-white shadow-sm"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Modal Content - Constrained to inner safe area of the blob */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[340px] mt-4">
              
              {/* Logo Area */}
              <div className="mb-6 h-10 flex items-center justify-center w-full">
                 <img 
                   src="/logo-transparent.png" 
                   alt="Beach Health Logo" 
                   className="h-full w-auto object-contain"
                 />
              </div>

              <p className="text-center text-slate-600 text-[14px] font-medium leading-relaxed mb-6">
                Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
              </p>

              <form className="w-full flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full bg-white border border-slate-100 px-5 py-3.5 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-shadow hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-brand-green/20"
                />
                
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-white border border-slate-100 px-5 py-3.5 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-shadow hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-brand-green/20"
                />
                
                <div className="flex bg-white border border-slate-100 rounded-full shadow-sm focus-within:border-brand-green focus-within:shadow-md focus-within:ring-2 focus-within:ring-brand-green/20 overflow-hidden transition-shadow hover:shadow-md">
                  <select className="bg-transparent pl-5 pr-2 py-3.5 text-[14px] text-slate-500 border-r border-slate-100 outline-none cursor-pointer appearance-none font-medium">
                    <option value="US">US +1 ⌄</option>
                    <option value="CA">CA +1 ⌄</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="w-full bg-transparent px-4 py-3.5 outline-none text-brand-obsidian placeholder:text-slate-400 text-[14px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-brand-green-hover transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-0.5 active:translate-y-0"
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
