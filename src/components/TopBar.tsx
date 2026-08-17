import { Mail, MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-100 text-brand-obsidian py-2 px-4 text-xs md:text-sm font-medium border-b border-slate-200 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4 text-center md:text-left">
        
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 w-full">
          <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
            <MapPin size={16} className="text-brand-green" />
            <span>Unit 7A, 155 Clark Blvd Brampton</span>
          </div>
          <span className="hidden md:inline text-slate-300">|</span>
          <a href="tel:+19055550123" className="flex items-center gap-2 hover:text-brand-green transition-colors">
            <Phone size={16} className="text-brand-green" />
            <span>(905) 555-0123</span>
          </a>
          <span className="hidden md:inline text-slate-300">|</span>
          <a href="mailto:hello@beachhealth.com" className="flex items-center gap-1.5 hover:text-brand-green transition-colors">
            <Mail size={14} className="text-brand-green" />
            <span>hello@beachhealth.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
