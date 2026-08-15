import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Gloria R. Pruitt', role: 'Physiotherapist', image: '/team-1.png' },
  { name: 'Gracie M. Rush', role: 'Chiropractor', image: '/team-2.png' },
  { name: 'Andrea J. Cook', role: 'Massage Therapist', image: '/team-3.png' },
  { name: 'Sarah T. Morse', role: 'Sports Specialist', image: '/team-4.png' },
];

export default function Team() {
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

        {/* Team Grid — single column on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-brand-cyan text-xs font-semibold uppercase tracking-widest">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
