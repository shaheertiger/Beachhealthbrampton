import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Almz Quiambao', text: 'Shreya is good,gentle in massage and very nice.', rating: 5 },
  { name: 'Abhishek Jain', text: 'I am so pleased to see a Beachealth location in Brampton, bringing the care and professionalism you only get to see in Toronto (they have another location in Scarborough). The staff is welcoming and went the extra mile to make me feel comfortable.', rating: 5 },
  { name: 'Aarna Kapadia', text: 'Really great experience, everyone was super friendly, and the care was amazing!!', rating: 5 },
  { name: 'Nandika Bas', text: 'I had a really great experience at this rehabilitation clinic. Everything was so easy to navigate, from booking appointments to communicating with the staff. Everyone was always friendly, helpful, and welcoming!', rating: 5 }
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
          <p className="text-slate-500 text-sm">Patient Reviews</p>
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
              className="w-[300px] md:w-[350px] shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-4 line-clamp-4">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-xs shrink-0">
                  {review.name.charAt(0)}
                </div>
                <p className="font-bold text-xs text-brand-obsidian uppercase tracking-wide">{review.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
