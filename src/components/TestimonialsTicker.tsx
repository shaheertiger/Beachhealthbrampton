import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sarah Jenkins', text: 'Incredible physiotherapy experience. The team in Brampton genuinely cares about your recovery.', rating: 5 },
  { name: 'David Chen', text: 'Fixed my shoulder pain in just 4 sessions. Highly recommend Beach Health to anyone.', rating: 5 },
  { name: 'Emma Thompson', text: 'Professional, clean clinic and top-tier therapists. The best biomechanical assessment I have had.', rating: 5 },
  { name: 'Michael R.', text: 'After my sports injury, I thought I was done for the season. They got me back on the field in weeks.', rating: 5 },
  { name: 'Jessica L.', text: 'Friendly staff and very knowledgeable. The new Brampton location is beautiful and modern.', rating: 5 },
  { name: 'Ahmed S.', text: 'Detailed, personalized care. They take the time to actually explain what is going wrong.', rating: 5 }
];

export default function TestimonialsTicker() {
  // Duplicate array to ensure seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="py-12 bg-white overflow-hidden border-b border-slate-100 flex flex-col items-center">
      <div className="mb-6 flex flex-col items-center text-center px-4">
        <h2 className="text-xl md:text-2xl font-black text-brand-obsidian uppercase tracking-wider mb-2">
          Trusted by Patients
        </h2>
        <div className="flex items-center gap-2">
          <p className="text-brand-obsidian font-bold">5.0</p>
          <div className="flex items-center text-yellow-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <p className="text-slate-500 text-sm">on Google Reviews</p>
        </div>
      </div>

      <div className="relative w-full flex">
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Ticker */}
        <motion.div 
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[350px] shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
                <p className="font-bold text-xs text-brand-obsidian uppercase tracking-wide">{review.name}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 ml-auto" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
