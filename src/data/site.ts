// Business facts shared by the UI, the structured data (JSON-LD) and the generated
// llms.txt / sitemap files. Keep these in sync with both Google Business Profiles.

export const SITE_URL = 'https://www.beachealthbrampton.com';

export const brand = {
  name: 'Beachealth',
  alternateNames: ['Beach Health'],
  email: 'info@beachealth.com',
  logo: '/logo.png',
  facebook: 'https://www.facebook.com/share/1FaBF1warM/',
};

export interface ClinicLocation {
  id: 'brampton' | 'toronto';
  name: string;
  alternateNames: string[];
  city: string;
  area: string;
  streetAddress: string;
  postalCode: string;
  phone: string;
  website: string;
  bookingUrl: string;
  mapUrl: string;
  summary: string;
  services: string[];
  highlights: string[];
}

export const brampton: ClinicLocation = {
  id: 'brampton',
  name: 'Beachealth Brampton',
  alternateNames: ['Beach Health Brampton'],
  city: 'Brampton',
  area: 'Brampton, Peel Region',
  streetAddress: '155 Clark Blvd, Unit 7A',
  postalCode: 'L6T 4G6',
  phone: '(437) 524-5161',
  website: `${SITE_URL}/`,
  bookingUrl: 'https://beachealthbr.janeapp.com/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beachealth+Brampton+155+Clark+Blvd+Unit+7A+Brampton+ON+L6T+4G6',
  summary: 'Physiotherapy and chiropractic care under one roof, with physiotherapists and a chiropractor who coordinate your treatment.',
  services: [
    'Physiotherapy',
    'Chiropractic care',
    'Shockwave therapy',
    'Therapeutic ultrasound',
    'Electrotherapy',
    'Pain management',
    'Custom orthotics',
    'Active Release Techniques (ART)',
    'Cold laser therapy',
    'Sports injury rehabilitation',
    'Post-surgical rehabilitation',
  ],
  highlights: ['New patients welcome', 'No referral needed', 'Direct billing available'],
};

export const toronto: ClinicLocation = {
  id: 'toronto',
  name: 'Beachealth Toronto',
  alternateNames: ['Beachealth', 'Beach Health Toronto'],
  city: 'Toronto',
  area: 'The Beaches, East Toronto',
  streetAddress: '350 Beech Ave',
  postalCode: 'M4E 3T8',
  phone: '(416) 546-4887',
  website: 'https://beachealth.com/',
  bookingUrl: 'https://beachealth.janeapp.com/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beachealth+350+Beech+Ave+Toronto+ON+M4E+3T8',
  summary: 'A multidisciplinary rehabilitation clinic in The Beaches neighbourhood of East Toronto.',
  services: [
    'Osteopathy',
    'Physiotherapy',
    'Chiropractic care',
    'Massage therapy',
    'Chiropody (foot care)',
    'Physio Pilates',
    'Running analysis',
    'Shockwave therapy',
    'Dry needling',
    'Medical pedicure',
    'TMJ massage',
  ],
  highlights: [],
};

export const locations: ClinicLocation[] = [brampton, toronto];

export const formatAddress = (location: ClinicLocation) =>
  `${location.streetAddress}, ${location.city}, ON ${location.postalCode}`;

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`;
