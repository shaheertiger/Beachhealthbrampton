import { useEffect } from 'react';
import { FEATURABLE_GOOGLE_REVIEWS_WIDGET_ID } from '../data/site';

interface TestimonialsTickerProps {
  widgetId?: string;
}

export default function TestimonialsTicker({
  widgetId = FEATURABLE_GOOGLE_REVIEWS_WIDGET_ID,
}: TestimonialsTickerProps) {
  const activeWidgetId = widgetId?.trim();

  useEffect(() => {
    // Ensure Featurable script is loaded and executed
    const scriptSrc = 'https://cdn.featurable.com/widget/v2/embed.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      script.setAttribute('charset', 'UTF-8');
      document.body.appendChild(script);
    } else {
      // Re-trigger Featurable if already loaded across client-side page transitions
      const win = window as unknown as { featurable?: { init?: () => void; render?: () => void } };
      if (typeof win.featurable?.init === 'function') {
        win.featurable.init();
      } else if (typeof win.featurable?.render === 'function') {
        win.featurable.render();
      }
    }
  }, [activeWidgetId]);

  return (
    <section className="py-12 bg-white border-b border-slate-100 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-4 min-h-[160px]">
        {activeWidgetId && (
          <div id={activeWidgetId} data-featurable-async></div>
        )}
      </div>
    </section>
  );
}
