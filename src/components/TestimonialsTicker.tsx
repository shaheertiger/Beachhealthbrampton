import { useEffect } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID } from '../data/site';

interface TestimonialsTickerProps {
  widgetId?: string;
}

export default function TestimonialsTicker({
  widgetId = ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID,
}: TestimonialsTickerProps) {
  const activeWidgetId = widgetId?.trim();

  useEffect(() => {
    // Ensure Elfsight platform script is loaded
    const scriptSrc = 'https://elfsightcdn.com/platform.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-initialize Elfsight if script is already present (e.g. client route transitions)
      const win = window as unknown as { elfsightPlatform?: { init?: () => void } };
      if (typeof win.elfsightPlatform?.init === 'function') {
        win.elfsightPlatform.init();
      }
    }
  }, [activeWidgetId]);

  return (
    <section className="py-12 bg-white border-b border-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        {activeWidgetId ? (
          <div className={`elfsight-app-${activeWidgetId}`} data-elfsight-app-lazy></div>
        ) : (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <MessageSquare size={28} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-2">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                Live Google Maps &amp; GMB Reviews
              </div>
              <h3 className="text-xl md:text-2xl font-black text-brand-obsidian uppercase tracking-tight">
                Elfsight Google Reviews Ready
              </h3>
              <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
                The generic hardcoded reviews have been removed. Provide your Elfsight Google Reviews widget ID to start displaying live reviews from your Google Business Profile.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
