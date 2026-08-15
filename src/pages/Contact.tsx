import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-8 min-h-screen bg-bg-base relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-widest text-brand-amber font-bold text-sm block mb-4">Connect With Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-obsidian mt-4 mb-6 leading-tight tracking-tight">
            Initiate <span className="text-brand-green">Recovery.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Ready to start your journey? Reach out to our Brampton clinic to book a comprehensive biomechanical assessment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="glass-panel p-10 lg:p-14 rounded-[2.5rem] border border-slate-200 relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl uppercase font-display font-bold text-brand-obsidian mb-8 relative z-10 break-words hyphens-auto">Direct Inquiry</h3>
            <form className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-white/60 border border-slate-200 px-6 py-4 rounded-full outline-none focus:border-brand-green focus:bg-white transition-all text-brand-obsidian placeholder:text-slate-400 font-light"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-white/60 border border-slate-200 px-6 py-4 rounded-full outline-none focus:border-brand-green focus:bg-white transition-all text-brand-obsidian placeholder:text-slate-400 font-light"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="bg-white/60 border border-slate-200 px-6 py-4 rounded-[2rem] outline-none focus:border-brand-green focus:bg-white transition-all text-brand-obsidian placeholder:text-slate-400 font-light resize-none"
                />
              </div>
              <button 
                type="button"
                className="bg-brand-obsidian text-white mt-4 px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-colors"
              >
                Transmit Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="flex flex-col gap-8"
          >
            <div className="bg-gradient-to-br from-slate-100 to-white p-10 lg:p-14 rounded-[2.5rem] text-brand-obsidian border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl uppercase font-display font-bold mb-10 text-brand-obsidian break-words hyphens-auto">Coordinates</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white border border-slate-200 p-4 rounded-full group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                      <MapPin size={24} className="text-brand-green group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-brand-obsidian mb-1">Headquarters</p>
                      <p className="text-slate-500 font-light">123 Health Ave, Brampton, ON</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white border border-slate-200 p-4 rounded-full group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                      <Phone size={24} className="text-brand-green group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-brand-obsidian mb-1">Direct Line</p>
                      <p className="text-slate-500 font-light">(905) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white border border-slate-200 p-4 rounded-full group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-colors shadow-sm">
                      <Mail size={24} className="text-brand-green group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-brand-obsidian mb-1">Electronic Mail</p>
                      <p className="text-slate-500 font-light">hello@beachhealth.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center flex-1 border border-slate-200 shadow-sm">
              <h3 className="text-2xl md:text-3xl uppercase font-display font-bold text-brand-obsidian mb-3 break-words hyphens-auto">Priority Booking</h3>
              <p className="text-slate-500 font-light mb-8">Skip the queue. Secure your assessment online instantly.</p>
              <button className="bg-transparent text-brand-obsidian px-8 py-4 rounded-full font-medium border border-slate-300 hover:bg-brand-obsidian hover:text-white hover:border-brand-obsidian transition-all w-full">
                Access Booking Portal
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
