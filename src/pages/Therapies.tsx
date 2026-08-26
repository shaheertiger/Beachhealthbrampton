import { motion } from 'framer-motion';
import { Activity, Footprints, Shield, HeartPulse, Stethoscope, HandHeart } from 'lucide-react';

const services = [
  { 
    title: 'Chiropractic', 
    desc: 'Experience spine health and relief at our chiropractic clinic.',
    Icon: Activity,
    color: 'text-brand-green',
    bg: 'bg-green-50'
  },
  { 
    title: 'Physiotherapy', 
    desc: 'Discover pain relief and mobility solutions at our physiotherapy clinic.',
    Icon: HeartPulse,
    color: 'text-orange-400',
    bg: 'bg-orange-50'
  },
  { 
    title: 'Massage Therapy', 
    desc: 'Relax and rejuvenate with our registered massage therapy',
    Icon: HandHeart,
    color: 'text-brand-green',
    bg: 'bg-green-50'
  },
  { 
    title: 'Pain Management', 
    desc: 'Take control of pain with our expert pain management solutions',
    Icon: Stethoscope,
    color: 'text-orange-400',
    bg: 'bg-orange-50'
  },
  { 
    title: 'Custom Orthotics', 
    desc: 'Step into comfort with custom orthotics.',
    Icon: Footprints,
    color: 'text-brand-green',
    bg: 'bg-green-50'
  },
  { 
    title: 'Custom Bracing', 
    desc: 'Find support and stability with custom bracing solutions.',
    Icon: Shield,
    color: 'text-orange-400',
    bg: 'bg-orange-50'
  },
];

export default function Therapies() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 min-h-screen bg-bg-base relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-brand-obsidian mb-6 leading-tight tracking-tight">
            Comprehensive <br/> <span className="text-brand-green">Therapies.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We offer a curated range of specialized clinical treatments to address your unique biomechanical needs, engineering a faster and more permanent recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-10 flex flex-col items-center text-center transition-all border border-slate-200 shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-black text-brand-obsidian mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm flex-grow mb-8 px-2">
                {item.desc}
              </p>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}>
                <item.Icon className={item.color} size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
