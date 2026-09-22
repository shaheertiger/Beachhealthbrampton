import { blogs, type BlogPost } from '../data/blogs';
import { teamMembers } from '../data/team';
import { SITE_URL, brand, brampton, locations, type ClinicLocation } from '../data/site';
import { absoluteUrl, findPostByPath, normalizePath } from './meta';

// schema.org JSON-LD describing the business, both clinics and the page content. It is embedded in
// every prerendered page so search engines and AI assistants can read the facts directly.

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const BLOG_ID = `${SITE_URL}/blog#blog`;
const clinicId = (location: ClinicLocation) => `${SITE_URL}/#clinic-${location.id}`;

const formatTelephone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
};

// Details that only apply to one of the clinics.
const clinicExtras: Record<ClinicLocation['id'], JsonLd> = {
  brampton: { '@type': ['MedicalClinic', 'Physiotherapy'], email: brand.email, isAcceptingNewPatients: true },
  toronto: { '@type': 'MedicalClinic' },
};

const organization: JsonLd = {
  '@type': 'MedicalOrganization',
  '@id': ORG_ID,
  name: brand.name,
  alternateName: brand.alternateNames,
  description: `${brand.name} is a physiotherapy, chiropractic and rehabilitation clinic group with two locations in Ontario, Canada: ${locations.map((location) => location.name).join(' and ')}.`,
  url: `${SITE_URL}/`,
  logo: absoluteUrl(brand.logo),
  email: brand.email,
  sameAs: [...locations.map((location) => location.website).filter((url) => !url.startsWith(SITE_URL)), brand.facebook],
  subOrganization: locations.map((location) => ({ '@id': clinicId(location) })),
};

const website: JsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: brampton.name,
  alternateName: [brand.name, ...brampton.alternateNames],
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-CA',
};

const clinic = (location: ClinicLocation): JsonLd => ({
  '@id': clinicId(location),
  name: location.name,
  alternateName: location.alternateNames,
  description: location.summary,
  url: location.website,
  telephone: formatTelephone(location.phone),
  address: {
    '@type': 'PostalAddress',
    streetAddress: location.streetAddress,
    addressLocality: location.city,
    addressRegion: 'ON',
    postalCode: location.postalCode,
    addressCountry: 'CA',
  },
  hasMap: location.mapUrl,
  areaServed: { '@type': 'City', name: location.city },
  availableService: location.services.map((name) => ({ '@type': 'MedicalTherapy', name })),
  parentOrganization: { '@id': ORG_ID },
  potentialAction: {
    '@type': 'ReserveAction',
    name: `Book an appointment at ${location.name}`,
    target: { '@type': 'EntryPoint', urlTemplate: location.bookingUrl },
  },
  ...clinicExtras[location.id],
});

const blog: JsonLd = {
  '@type': 'Blog',
  '@id': BLOG_ID,
  url: `${SITE_URL}/blog`,
  name: 'Beachealth Health & Wellness Blog',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-CA',
  blogPost: blogs.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
  })),
};

const team: JsonLd[] = teamMembers.map((member) => ({
  '@type': 'Person',
  name: member.name,
  jobTitle: member.role,
  image: absoluteUrl(member.image),
  description: member.bio.split('\n\n')[0],
  worksFor: { '@id': clinicId(brampton) },
}));

const breadcrumbs = (items: Array<[name: string, url: string]>): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], index) => ({ '@type': 'ListItem', position: index + 1, name, item: url })),
});

const article = (post: BlogPost, url: string): JsonLd[] => {
  const nodes: JsonLd[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      image: absoluteUrl(post.imageUrl),
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: post.author, url: `${SITE_URL}/about` },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: url,
      isPartOf: { '@id': BLOG_ID },
      articleSection: post.category,
      inLanguage: 'en-CA',
    },
    breadcrumbs([['Home', `${SITE_URL}/`], ['Blog', `${SITE_URL}/blog`], [post.title, url]]),
  ];
  if (post.faqs?.length) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }
  return nodes;
};

export function getStructuredData(pathname: string): JsonLd {
  const path = normalizePath(pathname);
  const graph: JsonLd[] = [organization, website, ...locations.map(clinic)];

  if (path === '/about') graph.push(...team);
  if (path === '/blog') graph.push(blog);

  const post = findPostByPath(path);
  if (post) graph.push(...article(post, absoluteUrl(path)));

  return { '@context': 'https://schema.org', '@graph': graph };
}
