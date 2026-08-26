import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Generates a perfectly smooth scalloped circular badge (rosette)
const generateRosettePath = (cx: number, cy: number, r: number, scallops: number, depth: number) => {
  let path = '';
  // Use 360 points for perfect smoothness
  for (let i = 0; i <= 360; i += 1) {
    const angle = (i * Math.PI) / 180;
    // Math.cos creates the wavy/scalloped effect
    const radius = r + depth * Math.cos(scallops * angle);
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    if (i === 0) path += `M ${x} ${y}`;
    else path += ` L ${x} ${y}`;
  }
  return path + ' Z';
};

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1200);
  };

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
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Premium Scalloped Circular Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.7, bounce: 0.4 }}
            className="relative flex items-center justify-center z-10 w-[115vw] sm:w-[95vw] max-w-[550px] aspect-square flex-shrink-0"
          >
            {/* Scalloped Background SVG (Rosette Badge) */}
            <div className="absolute inset-0 w-full h-full text-[#FDFBF7] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center justify-center pointer-events-none -z-10">
              <svg 
                viewBox="0 0 500 500" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full fill-current"
              >
                {/* cx=250, cy=250, radius=225, scallops=14, depth=16 */}
                <path d={generateRosettePath(250, 250, 225, 14, 16)} />
              </svg>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-[12%] right-[12%] sm:top-[14%] sm:right-[14%] text-slate-400 hover:text-brand-obsidian transition-colors z-[100] bg-white hover:bg-slate-50 rounded-full p-2.5 shadow-md border border-slate-100 cursor-pointer"
            >
              <X size={22} strokeWidth={2.5} />
            </button>

            {/* Modal Content - Centered firmly inside the circular area */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[280px] sm:max-w-[320px] scale-[0.9] sm:scale-100 mt-2">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center w-full"
                  >
                    {/* Logo Area */}
                    <div className="mb-4 sm:mb-6 h-8 sm:h-10 flex items-center justify-center w-full">
                       <img 
                         src="/logo-transparent.png" 
                         alt="Beach Health Logo" 
                         className="h-full w-auto object-contain"
                       />
                    </div>

                    <p className="text-center text-slate-600 text-[14px] font-medium leading-relaxed mb-6">
                      Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
                    </p>

                    <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                      
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email address"
                          required
                          className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-all focus:ring-2 focus:ring-brand-green/20"
                        />
                      </div>
                      
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-full outline-none focus:border-brand-green text-brand-obsidian placeholder:text-slate-400 text-[14px] shadow-sm transition-all focus:ring-2 focus:ring-brand-green/20"
                        />
                      </div>
                      
                      <div className="flex bg-white border border-slate-200 rounded-full shadow-sm focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/20 overflow-hidden transition-all">
                        <select className="bg-transparent pl-5 pr-2 py-3.5 text-[14px] text-slate-500 border-r border-slate-200 outline-none cursor-pointer appearance-none font-medium">
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
                        disabled={isSubmitting}
                        className="w-full mt-2 bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-[#0284c7] transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 active:translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          "Continue"
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-50 text-brand-green rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-brand-obsidian mb-2 uppercase tracking-tight">You're on the list!</h3>
                    <p className="text-slate-500">Keep an eye on your inbox for our latest health insights and updates.</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
