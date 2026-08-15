import { motion } from 'framer-motion';



const teamMembers = [
  {
    name: 'Gloria R. Pruitt',
    role: 'Physiotherapist',
    image: '/team-1.png',
  },
  {
    name: 'Gracie M. Rush',
    role: 'Chiropractor',
    image: '/team-2.png',
  },
  {
    name: 'Andrea J. Cook',
    role: 'Massage Therapist',
    image: '/team-3.png',
  },
  {
    name: 'Sarah T. Morse',
    role: 'Sports Specialist',
    image: '/team-4.png',
  }
];

export default function Team() {
  return (
    <section className="py-24 px-8 bg-bg-base border-t border-zinc-200 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-1 bg-brand-green mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-obsidian uppercase tracking-tight break-words break-all sm:break-normal">
            Dedicated to <span className="text-brand-green block my-1">Your Recovery</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="w-full max-w-sm mx-auto rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md p-8 flex flex-col items-center justify-center text-center bg-white border border-slate-100 shadow-xl group hover:border-brand-green/30 transition-all"
            >
              {/* Circular Avatar */}
              <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden mb-6 mx-auto bg-slate-100 border-2 border-brand-green/50 group-hover:border-brand-green transition-colors flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?background=f4f4f5&color=111&name=' + member.name.replace(' ', '+');
                  }}
                />
              </div>
              
              {/* Text Info */}
              <h3 className="text-lg font-bold text-brand-obsidian uppercase tracking-wide mb-1 mt-auto">{member.name}</h3>
              <p className="text-brand-green text-sm font-medium uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
