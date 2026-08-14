import { motion } from 'framer-motion';
import Team from '../components/Team';

export default function AboutUs() {
  return (
    <div className="pt-40 pb-12 bg-bg-base min-h-screen relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-widest text-brand-amber font-bold text-sm block mb-4">Our Identity</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-navy mt-4 mb-6 leading-tight tracking-tight">
            Dedicated to <span className="text-brand-cyan">Recovery.</span>
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            At BeachHealth Brampton, we believe that movement is medicine. Our clinic was founded on the principle that everyone deserves to live a life free of pain and physical limitations. Our multidisciplinary team collaborates to provide comprehensive care tailored to your unique biomechanics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-brand-cyan/5 mix-blend-overlay z-10 pointer-events-none rounded-[3rem]"></div>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic facility"
              className="rounded-[3rem] border border-slate-200 object-cover h-full w-full filter grayscale hover:grayscale-0 transition-all duration-700 shadow-xl shadow-slate-200/50 opacity-90"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <h3 className="font-display font-bold text-3xl mb-3 text-brand-navy">15+ Years of Mastery</h3>
              <p className="text-slate-500 font-light leading-relaxed text-lg">Our extensive experience means we've seen it all and helped thousands of patients return to their peak performance.</p>
            </div>
            <div className="glass-panel p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <h3 className="font-display font-bold text-3xl mb-3 text-brand-navy">Elite Practitioners</h3>
              <p className="text-slate-500 font-light leading-relaxed text-lg">All our therapists are fully trained, licensed, and dedicated to the highest standards of care. We constantly update our methods.</p>
            </div>
            <div className="glass-panel p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <h3 className="font-display font-bold text-3xl mb-3 text-brand-navy">Bespoke Architecture</h3>
              <p className="text-slate-500 font-light leading-relaxed text-lg">We don't do cookie-cutter solutions. Your recovery plan is meticulously engineered for your physiology and goals.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Reusing the existing Team section here */}
      <div className="relative z-10 border-t-0">
        <Team />
      </div>
    </div>
  );
}
