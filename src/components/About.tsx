import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-8 bg-bg-base text-slate-600 overflow-hidden relative border-t border-zinc-200">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div className="w-16 h-1 bg-brand-green mb-2"></div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-brand-obsidian uppercase leading-[1.1] tracking-tight break-words break-all sm:break-normal">
            From <span className="text-brand-green">Beginnings</span> <br/>
            To Modern Practice
          </h2>
          
          <p className="text-lg text-slate-500 font-light leading-relaxed mb-6 max-w-xl">
            We are dedicated to providing the highest standard of physical rehabilitation. 
            By integrating advanced clinical techniques with targeted movement therapy, 
            we empower you to take control of your health.
          </p>
          
          <div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-green/20 transition-all border border-brand-green/50"
            >
              Read More
            </motion.button>
          </div>
        </div>

        {/* Asymmetric Image */}
        <div className="relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-xl border border-slate-200 bg-white"
          >
            <img 
              src="/physio-1.jpg" 
              alt="Physiotherapy Clinic"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-brand-green/5 mix-blend-color"></div>
          </motion.div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-brand-green/30 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}
