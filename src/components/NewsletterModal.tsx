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
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md bg-[#F4F4F0] rounded-[2.5rem] p-8 md:p-12 shadow-2xl z-10 flex flex-col items-center"
            style={{ backgroundImage: "radial-gradient(circle at center, #fbfbf9 0%, #f4f4f0 100%)" }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-brand-obsidian transition-colors"
            >
              <X size={24} />
            </button>

            {/* Logo Area */}
            <div className="mb-6 h-12 flex items-center justify-center">
               <img 
                 src="/logo-transparent.png" 
                 alt="Beach Health Logo" 
                 className="h-full w-auto object-contain"
               />
            </div>

            <p className="text-center text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
              Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
            </p>

            <form className="w-full flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-full outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm shadow-sm"
              />
              
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-full outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-brand-obsidian placeholder:text-slate-400 text-sm shadow-sm"
              />
              
              <div className="flex bg-white border border-slate-200 rounded-full shadow-sm focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green overflow-hidden">
                <select className="bg-transparent pl-5 pr-2 py-3.5 text-sm text-slate-600 border-r border-slate-200 outline-none cursor-pointer">
                  <option value="US">US +1</option>
                  <option value="CA">CA +1</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full bg-transparent px-4 py-3.5 outline-none text-brand-obsidian placeholder:text-slate-400 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-obsidian transition-colors shadow-lg shadow-brand-green/20"
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
