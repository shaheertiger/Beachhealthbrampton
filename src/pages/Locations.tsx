import { motion } from 'framer-motion';
import { MapPin, Phone, Globe } from 'lucide-react';
import { SITE_URL, brand, locations, formatAddress, telHref } from '../data/site';

export default function Locations() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 min-h-screen bg-bg-base">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="w-16 h-1 bg-brand-green mx-auto mb-6"></div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-obsidian tracking-tight mb-6">
            Our <span className="text-brand-green">Locations</span>
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Beachealth has two clinics in Ontario: Beachealth Brampton and Beachealth Toronto, in The Beaches. Book at whichever location is closer to you.
          </p>
        </motion.div>

        {/* Clinic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => {
            const isExternalSite = !location.website.startsWith(SITE_URL);

            return (
              <motion.section
                key={location.id}
                id={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">{location.area}</p>
                <h2 className="text-2xl md:text-3xl font-black text-brand-obsidian mb-3">{location.name}</h2>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{location.summary}</p>

                <address className="not-italic flex flex-col gap-4 text-slate-600 mb-8">
                  <a href={location.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-brand-green transition-colors">
                    <MapPin size={20} className="text-brand-green shrink-0 mt-0.5" />
                    <span>{formatAddress(location)}</span>
                  </a>
                  <a href={telHref(location.phone)} className="flex items-center gap-3 hover:text-brand-green transition-colors">
                    <Phone size={20} className="text-brand-green shrink-0" />
                    <span>{location.phone}</span>
                  </a>
                  <a
                    href={location.website}
                    {...(isExternalSite ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-center gap-3 hover:text-brand-green transition-colors"
                  >
                    <Globe size={20} className="text-brand-green shrink-0" />
                    <span>{location.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
                  </a>
                </address>

                {location.highlights.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {location.highlights.map((highlight) => (
                      <li key={highlight} className="px-3 py-1.5 rounded-full bg-brand-green text-white text-xs font-bold uppercase tracking-wider">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <h3 className="text-sm font-bold text-brand-obsidian uppercase tracking-widest mb-4">Services</h3>
                <ul className="flex flex-wrap gap-2 mb-10">
                  {location.services.map((service) => (
                    <li key={service} className="px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold">
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <a
                    href={location.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-brand-green text-white px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-green/20 hover:bg-brand-green-hover transition-colors"
                  >
                    Book in {location.city}
                  </a>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-brand-obsidian border border-slate-200 px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-brand-green hover:text-brand-green transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </motion.section>
            );
          })}
        </div>

        <p className="text-center text-slate-500 mt-12">
          Questions about either clinic? Email{' '}
          <a href={`mailto:${brand.email}`} className="text-brand-green font-semibold hover:underline">{brand.email}</a>.
        </p>

      </div>
    </div>
  );
}
