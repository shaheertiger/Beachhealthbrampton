import { motion } from 'framer-motion';

const services = [
  { image: '/physio-2.jpg', title: 'Physiotherapy', desc: 'Evidence-based practice dedicated to restoring optimal movement and functional capacity. We analyze the kinetic chain to fix the root cause, not just the symptom.' },
  { image: '/chiro-1.jpg', title: 'Chiropractic', desc: 'Helps restore movement where the body has become tight, guarded, stiff, or stuck. Precision alignments engineered for longevity.' },
];

export default function Therapies() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 min-h-screen bg-bg-base relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-widest text-brand-green font-bold text-sm block mb-4">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-obsidian mt-4 mb-6 leading-tight tracking-tight">
            Comprehensive <br/> <span className="text-brand-green">Therapies.</span>
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
              className="bg-white rounded-[2.5rem] flex flex-col items-start transition-all group border border-slate-200 shadow-xl overflow-hidden"
            >
              {/* Card Image Header */}
              <div className="w-full h-72 overflow-hidden relative">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col flex-1 w-full gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-display font-black text-brand-obsidian mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
                <button className="mt-4 px-8 py-4 rounded-full border-2 border-slate-200 text-brand-obsidian font-bold uppercase tracking-wider hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors w-full sm:w-auto text-sm">
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
