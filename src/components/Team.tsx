import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const dragStartY = useRef(0);

  // Lock background body scroll completely on mobile & desktop when modal is open
  useEffect(() => {
    if (!selectedMember) return;

    const scrollY = window.scrollY;
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      window.scrollTo(0, scrollY);
    };
  }, [selectedMember]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-16 px-4 bg-bg-base border-t border-zinc-200">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-brand-green mb-4 mx-auto"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-obsidian uppercase tracking-tight">
            Dedicated to <span className="text-brand-green">Your Recovery</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              className="group flex flex-col items-center text-center bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:border-brand-green/30 cursor-pointer transition-all select-none"
            >
              {/* Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-green/40 group-hover:border-brand-green group-hover:scale-105 transition-all mb-4 bg-slate-100 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.imageClassName || 'object-center'}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://ui-avatars.com/api/?background=e0f2fe&color=0284c7&bold=true&name=' +
                      encodeURIComponent(member.name);
                  }}
                />
              </div>
              <div className="text-base font-bold text-brand-obsidian tracking-wide leading-tight mb-1 group-hover:text-brand-green transition-colors">
                {member.name}
              </div>
              <p className="text-brand-green text-xs font-semibold uppercase tracking-widest mb-4">
                {member.role}
              </p>
              
              {/* Read More Button */}
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}
                className="mt-auto bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
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
            transition={{ duration: 0.2 }}
            onPointerDown={(e) => {
              dragStartY.current = e.clientY;
            }}
            onClick={(e) => {
              // Only close if it was a tap/click, not a scroll drag
              if (Math.abs(e.clientY - dragStartY.current) < 8) {
                setSelectedMember(null);
              }
            }}
            className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-black/65 backdrop-blur-sm touch-pan-y"
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-modal-title"
          >
            {/* Scrollable alignment wrapper ensuring full-height coverage and centering */}
            <div className="min-h-full flex items-center justify-center p-3 sm:p-6 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative my-auto border border-slate-100"
              >
                <button 
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close bio"
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-brand-obsidian bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors z-10"
                >
                  <X size={20} />
                </button>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-brand-green/40 bg-slate-100 flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className={`w-full h-full object-cover ${selectedMember.imageClassName || 'object-center'}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://ui-avatars.com/api/?background=e0f2fe&color=0284c7&bold=true&name=' +
                          encodeURIComponent(selectedMember.name);
                      }}
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div id="member-modal-title" className="text-xl sm:text-2xl font-black text-brand-obsidian tracking-wide leading-tight mb-1">
                      {selectedMember.name}
                    </div>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
