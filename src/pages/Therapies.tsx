import { motion } from 'framer-motion';
import { Activity, Footprints, Zap, HeartPulse, Stethoscope, HandHeart } from 'lucide-react';

const services = [
  { 
    title: 'Chiropractic', 
    desc: 'Experience spine health and relief at our chiropractic clinic.',
    Icon: Activity,
  },
  { 
    title: 'Physiotherapy', 
    desc: 'Discover pain relief and mobility solutions at our physiotherapy clinic.',
    Icon: HeartPulse,
  },
  { 
    title: 'Massage Therapy', 
    desc: 'Relax and rejuvenate with our registered massage therapy',
    Icon: HandHeart,
  },
  { 
    title: 'Pain Management', 
    desc: 'Take control of pain with our expert pain management solutions',
    Icon: Stethoscope,
  },
  { 
    title: 'Custom Orthotics', 
    desc: 'Step into comfort with custom orthotics.',
    Icon: Footprints,
  },
  { 
    title: 'Shockwave Therapy', 
    desc: 'Accelerate healing and relieve pain with advanced shockwave therapy.',
    Icon: Zap,
  },
];

const getCardStyle = (index: number) => {
  const col = index % 3;
  if (col === 0) return "rounded-tl-[5rem] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md";
  if (col === 1) return "rounded-t-[6rem] rounded-b-3xl bg-brand-green/5 border border-brand-green/10 shadow-sm hover:shadow-md";
  return "rounded-tr-[5rem] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md";
};

const getIconStyle = (index: number) => {
  const col = index % 3;
  if (col === 1) return "bg-brand-green text-white shadow-[0_4px_12px_-4px_rgba(0,144,212,0.4)]";
  return "bg-brand-green/10 text-brand-green"; 
};

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
              className={`p-10 flex flex-col items-center text-center transition-all ${getCardStyle(index)}`}
            >
              <h3 className="text-[17px] font-bold text-brand-obsidian mb-4 mt-2 tracking-wide">{item.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed text-[15px] flex-grow mb-10 px-2 max-w-[250px]">
                {item.desc}
              </p>
              <div className={`w-14 h-14 rounded-t-2xl rounded-b-xl flex items-center justify-center ${getIconStyle(index)}`}>
                <item.Icon size={24} strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
