import { motion } from 'framer-motion';

const SocialIcon = ({ type }: { type: 'facebook' | 'twitter' | 'instagram' }) => {
  const paths = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    twitter: "M22 4.01c-1 .49-1.98.68-3 .99-1.12-1.27-2.7-1.2-4.12-1.2-4.23 0-4.23 5.76-4.23 5.76C5.28 9.28 3.1 5.3 3.1 5.3s-2.12 3.65 2 6c-.95 0-1.84-.27-2.62-.71 0 0-.1 3.51 3 4.28-.96.26-2.11.33-3 .12.92 2.92 3.82 2.9 3.82 2.9-2.22 1.74-5.32 1.57-6 1.57 3.32 2.12 7.15 2.12 11.08 0 8.35-4.52 8.35-13.62 8.35-13.62 2.11-1.53 2.27-3.88 2.27-3.88z",
    instagram: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M6.5 2h11a5 5 0 0 1 5 5v11a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[type]}></path>
    </svg>
  );
};

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
          <h2 className="text-4xl md:text-5xl font-black text-brand-obsidian uppercase tracking-tight">
            Dedicated to <span className="text-brand-green block my-1">Your Recovery</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md p-8 flex flex-col items-center text-center bg-brand-navy border border-slate-100 shadow-xl group hover:border-brand-green/30 transition-all"
            >
              {/* Circular Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-slate-100 border-2 border-brand-green/50 group-hover:border-brand-green transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
