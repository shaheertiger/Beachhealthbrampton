import { useState } from 'react';
import Therapies from './Therapies';

const FONTS = [
  // Original 10
  { name: 'Inter', family: '"Inter", sans-serif' },
  { name: 'Space Grotesk', family: '"Space Grotesk", sans-serif' },
  { name: 'Syne', family: '"Syne", sans-serif' },
  { name: 'Outfit', family: '"Outfit", sans-serif' },
  { name: 'Playfair Display', family: '"Playfair Display", serif' },
  { name: 'Roboto Mono', family: '"Roboto Mono", monospace' },
  { name: 'Montserrat', family: '"Montserrat", sans-serif' },
  { name: 'Lora', family: '"Lora", serif' },
  { name: 'Oswald', family: '"Oswald", sans-serif' },
  { name: 'Poppins', family: '"Poppins", sans-serif' },
  // Next 10
  { name: 'Merriweather', family: '"Merriweather", serif' },
  { name: 'Nunito', family: '"Nunito", sans-serif' },
  { name: 'Work Sans', family: '"Work Sans", sans-serif' },
  { name: 'DM Sans', family: '"DM Sans", sans-serif' },
  { name: 'Cinzel', family: '"Cinzel", serif' },
  { name: 'Bebas Neue', family: '"Bebas Neue", sans-serif' },
  { name: 'Cormorant', family: '"Cormorant Garamond", serif' },
  { name: 'Josefin Sans', family: '"Josefin Sans", sans-serif' },
  { name: 'Manrope', family: '"Manrope", sans-serif' },
  { name: 'Rubik', family: '"Rubik", sans-serif' },
  // 10 Brand New Fonts
  { name: 'Roboto', family: '"Roboto", sans-serif' },
  { name: 'Open Sans', family: '"Open Sans", sans-serif' },
  { name: 'Lato', family: '"Lato", sans-serif' },
  { name: 'Raleway', family: '"Raleway", sans-serif' },
  { name: 'PT Serif', family: '"PT Serif", serif' },
  { name: 'Ubuntu', family: '"Ubuntu", sans-serif' },
  { name: 'Noto Sans', family: '"Noto Sans", sans-serif' },
  { name: 'Source Sans 3', family: '"Source Sans 3", sans-serif' },
  { name: 'Zilla Slab', family: '"Zilla Slab", serif' },
  { name: 'Bitter', family: '"Bitter", serif' },
];

export default function ServicesFontPreview() {
  const [selectedFont, setSelectedFont] = useState(FONTS[0]);

  return (
    <div 
      className="min-h-screen bg-bg-base transition-all duration-300 relative flex flex-col font-preview-container" 
    >
      <style>{`
        .font-preview-container * {
          font-family: ${selectedFont.family} !important;
        }
      `}</style>

      {/* Font Switcher Panel - Fixed at top */}
      <div className="pt-28 pb-6 px-4 border-b border-slate-200 bg-white shadow-sm z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wider text-brand-obsidian">Typography Preview Mode (Services)</h2>
          <div className="flex flex-wrap justify-center gap-2 max-h-[300px] overflow-y-auto">
            {FONTS.map((font) => (
              <button
                key={font.name}
                onClick={() => setSelectedFont(font)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFont.name === font.name
                    ? 'bg-brand-green text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                style={{ fontFamily: font.family }}
              >
                {font.name}
              </button>
            ))}
          </div>
          <p className="mt-4 text-slate-500 text-sm">
            Currently viewing with: <strong className="text-brand-obsidian">{selectedFont.name}</strong>
          </p>
        </div>
      </div>

      {/* Preview Area - overriding font-family inline */}
      <div className="flex-grow">
         <Therapies />
      </div>
      
    </div>
  );
}
