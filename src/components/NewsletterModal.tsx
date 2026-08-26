import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-obsidian/60 backdrop-blur-md"
          />

          {/* Premium Modal Content - 2 Column Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_30px_100px_-15px_rgba(0,144,212,0.3)] z-10 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-brand-obsidian transition-colors z-20 bg-slate-100/50 backdrop-blur-sm hover:bg-slate-200 rounded-full p-2"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Left Image Section */}
            <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden bg-brand-green">
              <div className="absolute inset-0 bg-brand-obsidian/20 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-transparent to-transparent z-10"></div>
              
              <img 
                src="/physio-1.jpg" 
                alt="Health Insights" 
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 hidden md:block">
                <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-2">
                  Stay <br/><span className="text-brand-green">Informed.</span>
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed max-w-[250px]">
                  Expert rehab guidance and wellness tips delivered straight to your inbox.
                </p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center md:items-start"
                  >
                    {/* Logo Area */}
                    <div className="mb-8 h-8 flex items-center justify-center md:justify-start w-full">
                       <img 
                         src="/logo-transparent.png" 
                         alt="Beach Health Logo" 
                         className="h-full w-auto object-contain"
                       />
                    </div>

                    <p className="text-center md:text-left text-slate-500 text-[15px] leading-relaxed mb-8">
                      Join our newsletter for health insights, rehab guidance, and wellness tips — plus, be entered into our monthly draw.
                    </p>

                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                      
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-brand-green focus:bg-white text-brand-obsidian placeholder:text-slate-400 text-[15px] shadow-sm transition-all"
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email address"
                          required
                          className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-brand-green focus:bg-white text-brand-obsidian placeholder:text-slate-400 text-[15px] shadow-sm transition-all"
                        />
                      </div>
                      
                      <div className="flex bg-slate-50 border border-slate-200 rounded-2xl shadow-sm focus-within:border-brand-green focus-within:bg-white overflow-hidden transition-all">
                        <select className="bg-transparent pl-6 pr-2 py-4 text-[15px] text-slate-500 border-r border-slate-200 outline-none cursor-pointer appearance-none font-medium">
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
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-brand-green text-white py-4 rounded-2xl font-bold uppercase tracking-[0.1em] text-[13px] hover:bg-[#0284c7] transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
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
                    className="flex flex-col items-center justify-center text-center py-10 h-full"
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
