import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { findPostByPath, getPageMeta, type PageMeta } from './seo/meta';
import { getStructuredData } from './seo/structuredData';

// Build-time entry used by scripts/prerender.mjs to turn every route into static HTML, so crawlers
// and AI assistants that don't run JavaScript still see each page's full content.

export { blogs } from './data/blogs';
export { getPrerenderPaths } from './seo/meta';
export { buildLlmsTxt, buildLlmsFullTxt, buildPostMarkdown, buildSitemap } from './seo/crawlerFiles';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderHead(meta: PageMeta) {
  const post = findPostByPath(meta.path);
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(meta.url)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    '<meta property="og:site_name" content="Beachealth Brampton" />',
    '<meta property="og:locale" content="en_CA" />',
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(meta.url)}" />`,
    `<meta property="og:image" content="${escapeHtml(meta.image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
  ];
  if (post) {
    tags.push(
      `<meta property="article:published_time" content="${post.date}" />`,
      `<link rel="alternate" type="text/markdown" href="${escapeHtml(meta.url)}.md" />`,
    );
  }
  // Escape "<" so article text can never close the script tag early.
  const jsonLd = JSON.stringify(getStructuredData(meta.path)).replace(/</g, '\\u003c');
  tags.push(`<script type="application/ld+json">${jsonLd}</script>`);
  return tags.join('\n    ');
}

export function renderPage(path: string) {
  const meta = getPageMeta(path);
  if (!meta) throw new Error(`No page metadata for ${path}`);

  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { appHtml, headHtml: renderHead(meta) };
}
