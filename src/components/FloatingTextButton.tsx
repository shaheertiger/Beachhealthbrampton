import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingTextButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: 'spring', bounce: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-brand-green text-white px-5 py-3.5 rounded-full shadow-xl shadow-brand-green/30 border border-brand-green/50 hover:bg-brand-green-hover transition-colors group cursor-pointer"
      onClick={() => {
        navigate('/contact');
      }}
    >
      <MessageSquareText size={20} className="text-white group-hover:animate-pulse" />
      <span className="font-bold text-sm md:text-base tracking-wide">Text us</span>
    </motion.button>
  );
}
