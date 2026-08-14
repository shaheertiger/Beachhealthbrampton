import { motion } from 'framer-motion';
import { Bone, HeartPulse } from 'lucide-react';

const services = [
  { icon: <HeartPulse size={40} className="text-brand-cyan" />, title: 'Physiotherapy', desc: 'Evidence-based practice dedicated to restoring optimal movement and functional capacity. We analyze the kinetic chain to fix the root cause, not just the symptom.' },
  { icon: <Bone size={40} className="text-brand-amber" />, title: 'Chiropractic', desc: 'Helps restore movement where the body has become tight, guarded, stiff, or stuck. Precision alignments engineered for longevity.' },
];

export default function Therapies() {
  return (
    <div className="pt-40 pb-32 px-8 min-h-screen bg-bg-base relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-widest text-brand-cyan font-bold text-sm block mb-4">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-navy mt-4 mb-6 leading-tight tracking-tight">
            Comprehensive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-amber">Therapies.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We offer a curated range of specialized clinical treatments to address your unique biomechanical needs, engineering a faster and more permanent recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-12 rounded-[2.5rem] flex flex-col items-start gap-8 transition-all group border border-slate-200 shadow-sm"
            >
              <div className="bg-slate-100 p-5 rounded-2xl group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300 border border-slate-200 group-hover:border-transparent">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
              <button className="mt-4 px-8 py-4 rounded-full border border-slate-300 text-brand-navy font-medium hover:bg-brand-navy hover:text-white transition-colors w-full sm:w-auto">
                Book Session
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
