import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-8 bg-bg-base text-brand-navy overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Top curved image area */}
        <div className="relative mb-24 h-[400px] w-full rounded-[3rem] overflow-hidden">
          {/* Curved mask using clip-path */}
          <div 
            className="absolute inset-0 bg-slate-200"
            style={{
              clipPath: "ellipse(150% 100% at 50% 0%)",
            }}
          >
            <img 
              src="/clinic.jpg" 
              alt="Physiotherapy Clinic"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-brand-cyan mix-blend-color opacity-20"></div>
          </div>
          
          {/* Overlapping floating boxes on the bottom right (as seen in template) */}
          <div className="absolute bottom-[-10px] right-10 flex gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-64 p-8 bg-brand-cyan text-white rounded-[2rem] shadow-xl"
            >
              <h3 className="text-xl font-bold font-display mb-3">Modern Approach</h3>
              <p className="text-sm font-light opacity-90 leading-relaxed">
                Evidence-based treatments that focus on root cause analysis.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="w-64 p-8 bg-white border border-slate-100 text-brand-navy rounded-[2rem] shadow-xl"
            >
              <h3 className="text-xl font-bold font-display mb-3">Proven Results</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">
                Dedicated to helping you move pain-free and optimize performance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Text Content Below */}
        <div className="max-w-2xl mt-16">
          <span className="text-brand-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4 block">About Us</span>
          <h2 className="text-5xl md:text-6xl font-black text-brand-obsidian leading-[1.1] mb-8">
            From <span className="text-brand-cyan">Beginnings</span> to <br/>
            <span className="text-brand-cyan">Modern Practice</span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-xl">
            We are dedicated to providing the highest standard of physical rehabilitation. 
            By integrating advanced chiropractic techniques with targeted physiotherapy, 
            we empower you to take control of your health.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-cyan text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-brand-cyan/20 uppercase tracking-wide text-sm"
          >
            Read More
          </motion.button>
        </div>

      </div>
    </section>
  );
}
