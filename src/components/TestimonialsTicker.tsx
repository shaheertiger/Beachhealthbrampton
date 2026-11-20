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
    // Function to initialize/re-render Featurable widget
    const triggerFeaturable = () => {
      const win = window as unknown as { featurable_embed?: () => void };
      if (typeof win.featurable_embed === 'function') {
        try {
          win.featurable_embed();
        } catch {
          // ignore
        }
      }
    };

    // Ensure Featurable loader script exists
    const scriptSrc = 'https://cdn.featurable.com/widget/v2/embed.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      script.setAttribute('charset', 'UTF-8');
      script.onload = () => {
        setTimeout(triggerFeaturable, 100);
      };
      document.body.appendChild(script);
    } else {
      triggerFeaturable();
    }

    // Interval checks in case the external script was still downloading or page transitioned
    const t1 = setTimeout(triggerFeaturable, 200);
    const t2 = setTimeout(triggerFeaturable, 600);
    const t3 = setTimeout(triggerFeaturable, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeWidgetId]);

  return (
    <section className="py-12 bg-white border-b border-slate-100 flex flex-col items-center">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center text-center px-4">
        <div className="w-16 h-1 bg-brand-green mb-4 mx-auto"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-obsidian uppercase tracking-wider">
          Trusted by <span className="text-brand-green">Our Patients</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 min-h-[160px]">
        {activeWidgetId && (
          <div id={activeWidgetId} data-featurable-async></div>
        )}
      </div>
    </section>
  );
}
