import { motion } from 'framer-motion';
import { Bone, HeartPulse, ArrowRight } from 'lucide-react';

const services = [
  { 
    icon: <HeartPulse size={40} className="text-brand-cyan" />, 
    title: 'Physiotherapy', 
    desc: 'Evidence-based practice dedicated to restoring optimal movement and functional capacity. We analyze the kinetic chain to fix the root cause, not just the symptom.',
    colSpan: 'md:col-span-2'
  },
  { 
    icon: <Bone size={40} className="text-brand-amber" />, 
    title: 'Chiropractic', 
    desc: 'Helps restore movement where the body has become tight, guarded, stiff, or stuck. Precision alignments engineered for longevity.',
    colSpan: 'md:col-span-2'
  },
];

export default function Features() {
  return (
    <section className="py-32 px-8 bg-bg-base relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-cyan font-bold tracking-widest text-xs uppercase mb-3 block">Disciplines</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy max-w-lg leading-tight">
              Clinical mastery for <br/> <span className="text-slate-400">elite recovery.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg font-light">
            Our personalized treatments address the root cause of your pain, providing long-lasting relief and optimized biomechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-panel p-10 rounded-[2rem] flex flex-col justify-between gap-12 group cursor-pointer ${item.colSpan}`}
            >
              <div className="flex justify-between items-start">
                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 group-hover:bg-white transition-colors shadow-sm">
                  {item.icon}
                </div>
                <motion.div 
                  initial={{ rotate: -45, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy transition-all duration-300"
                >
                  <ArrowRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </div>
              
              <div>
                <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
