import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const teamMembers = [
  { 
    name: 'Shreyakumari Parekh', 
    role: 'Physiotherapist', 
    image: '/shreyakumari-parekh.jpeg',
    bio: `Shreyakumari Parekh is a Registered Physiotherapist. she is passionate about providing thoughtful, evidence-informed care that helps patients restore movement, build strength, manage pain, and return to the activities that matter most to them. Shreyakumari has a broad clinical interest in musculoskeletal rehabilitation, chronic pain management, neurological rehabilitation, and post-surgical recovery.

Her approach to care is individualized, compassionate, and goal-oriented. Shreyakumari believes that effective physiotherapy begins with listening. She takes the time to understand each patient’s concerns, lifestyle, challenges, and personal goals, while ensuring they have a clear understanding of their condition and treatment plan. She works collaboratively with her patients to develop treatment strategies that are tailored to their specific needs and designed to support meaningful, lasting progress.

For Shreyakumari, physiotherapy is about more than treating an injury—it is about helping people get back to living their lives with greater comfort, confidence, and freedom of movement.

Outside the clinic, Shreyakumari enjoys travelling, exploring art, and spending time socializing with friends, family, and the people around her. Her genuine empathy, patience, and commitment to her patients are reflected in the personalized care she provides to every individual she works with.` 
  },
  { name: 'Akansha Bhadane', role: 'Physiotherapist', image: '', bio: '' },
  { name: 'Dr. Guramritpal Aujla', role: 'Chiropractor', image: '', bio: '' },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section className="py-16 px-4 bg-bg-base border-t border-zinc-200">
      <div className="w-full max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-brand-green mb-4 mx-auto"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-obsidian uppercase tracking-tight">
            Dedicated to <span className="text-brand-green">Your Recovery</span>
          </h2>
        </div>

        {/* Team Grid — single column on mobile, 3 on md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center bg-white rounded-3xl p-6 border border-slate-100 shadow-md"
            >
              {/* Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-green/40 mb-4 bg-slate-100 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://ui-avatars.com/api/?background=e0f2fe&color=0284c7&bold=true&name=' +
                      encodeURIComponent(member.name);
                  }}
                />
              </div>
              <h3 className="text-base font-bold text-brand-obsidian uppercase tracking-wide leading-tight mb-1">
                {member.name}
              </h3>
              <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              
              {/* Read More Button (only shown if bio exists or for all if you want placeholder) */}
              <button 
                onClick={() => setSelectedMember(member)}
                className="mt-auto bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-colors px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-brand-obsidian bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brand-green/40 bg-slate-100 flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://ui-avatars.com/api/?background=e0f2fe&color=0284c7&bold=true&name=' +
                        encodeURIComponent(selectedMember.name);
                    }}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-obsidian uppercase tracking-wide leading-tight mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-brand-green text-sm font-semibold uppercase tracking-widest mb-6">
                    {selectedMember.role}
                  </p>
                  
                  <div className="space-y-4 text-zinc-600 text-sm leading-relaxed text-left">
                    {selectedMember.bio ? selectedMember.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    )) : (
                      <p>Biography coming soon.</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
