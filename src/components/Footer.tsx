import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-zinc-200 pt-20 pb-10 px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Left Column: Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h4 className="text-brand-obsidian font-bold uppercase tracking-widest mb-2">Links</h4>
          <Link to="/" className="text-slate-500 hover:text-brand-obsidian transition-colors">Our Space</Link>
          <Link to="/therapies" className="text-slate-500 hover:text-brand-obsidian transition-colors">What We Offer</Link>
          <Link to="/about" className="text-slate-500 hover:text-brand-obsidian transition-colors">Who We Are</Link>
          <Link to="/contact" className="text-slate-500 hover:text-brand-obsidian transition-colors">Join The Team</Link>
          <Link to="#" className="text-slate-500 hover:text-brand-obsidian transition-colors">FAQs</Link>
          <Link to="/contact" className="text-slate-500 hover:text-brand-obsidian transition-colors">Contact</Link>
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
          <button className="text-brand-green font-bold uppercase tracking-widest hover:text-brand-obsidian transition-colors">
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
              Toronto Clinic &rarr;
            </a>
            <p className="text-slate-500 text-xs mt-1">1574 Kingston Road,<br />Toronto, ON M1N 1S2</p>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-slate-500 text-xs gap-4 pt-8 border-t border-zinc-200">
        <p>&copy; {new Date().getFullYear()} Beach Health Clinic | <Link to="/privacy-policy" className="hover:text-brand-green transition-colors">Privacy Policy</Link> | Terms of Service</p>
      </div>
    </footer>
  );
}
