import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterModal from './NewsletterModal';

export default function Footer() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <footer className="bg-bg-base border-t border-zinc-200 pt-20 pb-10 px-8 text-sm relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Left Column: Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h4 className="text-brand-obsidian font-bold uppercase tracking-widest mb-2">Links</h4>
          <Link to="/" className="text-slate-500 hover:text-brand-obsidian transition-colors">About Us</Link>
          <Link to="/about" className="text-slate-500 hover:text-brand-obsidian transition-colors">Our Team</Link>
          <Link to="/blog" className="text-slate-500 hover:text-brand-obsidian transition-colors">Blog</Link>
          <Link to="/contact" className="text-slate-500 hover:text-brand-obsidian transition-colors">Contact Us</Link>
        </div>

        {/* Center Column: Logo & Newsletter */}
        <div className="flex flex-col items-center text-center gap-6">
          <Link to="/" className="flex items-center justify-center group select-none">
            <img 
              src="/logo-transparent.png" 
              alt="Beach Health Logo" 
              className="h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </Link>
          <button 
            onClick={() => setIsNewsletterOpen(true)}
            className="text-brand-green font-bold uppercase tracking-widest hover:text-brand-obsidian transition-colors"
          >
            Join Our Newsletter
          </button>
        </div>

        {/* Right Column: Contact Info */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
          <h4 className="text-brand-obsidian font-bold uppercase tracking-widest mb-2">Locations</h4>
          
          <div className="mb-2">
            <p className="font-bold text-brand-obsidian text-sm uppercase">Brampton Clinic</p>
            <p className="text-slate-500 text-xs mt-1">Unit 7A, 155 Clark Blvd,<br />Brampton, ON L6T 4G6</p>
          </div>

          <div>
            <a 
              href="https://beachealth.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-brand-obsidian text-sm uppercase hover:text-brand-green transition-colors inline-block"
            >
              Toronto Clinic
            </a>
            <p className="text-slate-500 text-xs mt-1">350 Beech Avenue<br />Toronto, ON M4E 3T8</p>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-slate-500 text-xs gap-4 pt-8 border-t border-zinc-200">
        <p>&copy; {new Date().getFullYear()} Beach Health Clinic | <Link to="/privacy-policy" className="hover:text-brand-green transition-colors">Privacy Policy</Link> | Terms of Service</p>
      </div>

      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </footer>
  );
}
