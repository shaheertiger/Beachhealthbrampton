import { blogs } from '../data/blogs';
import { SITE_URL } from '../data/site';

export interface PageMeta {
  path: string;
  url: string;
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
}

// Every static route in App.tsx. Each one is prerendered to static HTML at build time,
// together with every blog post.
const staticPages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Beachealth Brampton | Pain, Mobility, and Beyond',
    description: 'Beachealth Brampton provides comprehensive physiotherapy, chiropractic care, and rehabilitation services to help you restore movement, build strength, and manage pain.',
  },
  '/therapies': {
    title: 'Physiotherapy & Chiropractic Services | Beachealth Brampton',
    description: 'Physiotherapy, chiropractic care, pain management, custom orthotics and shockwave therapy at Beachealth Brampton, 155 Clark Blvd, Unit 7A, Brampton, ON.',
  },
  '/about': {
    title: 'Our Team | Beachealth Brampton',
    description: 'Meet the physiotherapists and chiropractor at Beachealth Brampton: Shreya Parekh, Akanksha Bhadane and Dr. Guramritpal (GP) Aujla.',
  },
  '/blog': {
    title: 'Health & Wellness Blog | Beachealth Brampton',
    description: 'Articles from the Beachealth team on physiotherapy, chiropractic care, injury recovery, pain relief and making the most of your treatment.',
  },
  '/locations': {
    title: 'Our Locations: Brampton & Toronto | Beachealth',
    description: 'Beachealth has two clinics: Beachealth Brampton at 155 Clark Blvd, Unit 7A, Brampton, and Beachealth Toronto at 350 Beech Ave in The Beaches. Addresses, phone numbers, services and online booking.',
  },
  '/contact': {
    title: 'Contact Us | Beachealth Brampton',
    description: 'Contact Beachealth Brampton: call (437) 524-5161, email info@beachealth.com, or visit us at 155 Clark Blvd, Unit 7A, Brampton, ON L6T 4G6.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Beachealth Brampton',
    description: 'How Beachealth collects, uses and protects your personal information, including SMS communications.',
  },
};

const DEFAULT_IMAGE = `${SITE_URL}/hero-new.jpg`;

export const normalizePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

export const absoluteUrl = (pathOrUrl: string) => (/^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl}`);

export const findPostByPath = (pathname: string) => {
  const path = normalizePath(pathname);
  return blogs.find((post) => `/blog/${post.slug}` === path);
};

export function getPageMeta(pathname: string): PageMeta | undefined {
  const path = normalizePath(pathname);
  const page = staticPages[path];
  if (page) {
    return { path, url: absoluteUrl(path === '/' ? '/' : path), ...page, image: DEFAULT_IMAGE, type: 'website' };
  }

  const post = findPostByPath(path);
  if (post) {
    return {
      path,
      url: absoluteUrl(path),
      title: `${post.title} | Beachealth`,
      description: post.excerpt,
      image: absoluteUrl(post.imageUrl),
      type: 'article',
    };
  }

  return undefined;
}

export const getPrerenderPaths = () => [...Object.keys(staticPages), ...blogs.map((post) => `/blog/${post.slug}`)];
