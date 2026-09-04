import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Jaheed Cesar', text: 'Been going to Emily Tran for my foot issues since the beginning of this year and it’s been a fantastic experience so far. Every visit she does good work and she’s very transparent on the process. Definitely Will keep coming back!', rating: 5 },
  { name: 'Rick Goodwin', text: "I have been a type 1 diabetic for 36 years. Needless to say, I've had a few foot doctors. Without a doubt, Dr. Lee is the best one I've had. Very skilled and knowledgeable. Rather important if you have diabetes. You could do worse, don't think you could do better.", rating: 5 },
  { name: 'YURI', text: "December 2025. This is a really nice place, peaceful, uncluttered and full of light. I've only been there for osteopathy so far, and had four treatments with Jared. It was my first experience with osteopathy, and I decided to try it because I was experiencing a lot of pain from carpal tunnel syndrome at least from my elbow down to my wrist. Because the pain was mostly at night, it was hard for me to tell if the treatments were helping or not, even though I found the entire treatment during each session made me feel better overall. Now I realize they are very powerful, and also effective, in the sense that if you pay attention to each area that is being worked on and to Jared's explanations, you can actually identify very closely the best areas to treat. And now after four sessions, I find that I no longer feel any pain at night. My fingers are still numb/tingly , so there's still work to be done for that, but the arm pain is gone and I'm able to sleep. So I'm very grateful to Jared for that, and definitely recommend him for osteopathic treatment. I will be going back.", rating: 5 },
  { name: 'J.', text: 'Clean facility and welcoming staff!', rating: 5 },
  { name: 'S. N.', text: 'So glad his new location is still easily accessible by TTC.', rating: 5 },
  { name: 'A. M.', text: 'The environment is peaceful, the treatment rooms are clean and professional.', rating: 5 }
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
