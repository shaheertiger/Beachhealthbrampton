import { motion } from 'framer-motion';
import Team from '../components/Team';

export default function AboutUs() {
  return (
    <div className="pt-28 pb-0 bg-bg-base min-h-screen">

      {/* Page Header */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase tracking-widest text-brand-green font-bold text-xs block mb-3">
            Our Identity
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-obsidian mb-5 leading-tight tracking-tight">
            Dedicated to <span className="text-brand-green">Recovery.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-light leading-relaxed">
            At BeachHealth Brampton, we believe that movement is medicine. Our clinic was founded on the principle that everyone deserves to live a life free of pain and physical limitations.
          </p>
        </motion.div>
      </div>

      {/* Clinic Image */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full h-56 sm:h-72 md:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
            alt="Clinic facility"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* Stat Cards */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-col gap-4">
          {[
            { title: '15+ Years of Mastery', body: "Our extensive experience means we've seen it all and helped thousands of patients return to peak performance." },
            { title: 'Elite Practitioners', body: 'All our therapists are fully trained, licensed, and dedicated to the highest standards of care.' },
            { title: 'Bespoke Architecture', body: "We don't do cookie-cutter solutions. Your recovery plan is engineered for your physiology and goals." },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <h3 className="font-bold text-lg text-brand-obsidian uppercase tracking-wide mb-2">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <Team />
    </div>
  );
}
