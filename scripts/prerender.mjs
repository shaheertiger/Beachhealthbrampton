// Renders every route to static HTML and writes the crawler files (sitemap.xml, llms.txt,
// llms-full.txt and a Markdown copy of each blog post) into dist/. Search engines and AI crawlers
// that don't run JavaScript would otherwise only see an empty <div id="root">.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const server = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href);

const HEAD_MARKERS = /<!--route-head[\s\S]*?<!--\/route-head-->/;
const ROOT_ELEMENT = '<div id="root"></div>';

const template = await readFile(join(distDir, 'index.html'), 'utf8');
if (!HEAD_MARKERS.test(template) || !template.includes(ROOT_ELEMENT)) {
  throw new Error('dist/index.html is missing the route-head markers or the empty root element. Run `vite build` first.');
}

async function write(relativePath, contents) {
  const file = join(distDir, relativePath);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents);
}

const paths = server.getPrerenderPaths();
for (const path of paths) {
  const { appHtml, headHtml } = server.renderPage(path);
  // Function replacements so "$" sequences in the content are inserted literally.
  const html = template
    .replace(HEAD_MARKERS, () => headHtml)
    .replace(ROOT_ELEMENT, () => `<div id="root" data-prerendered-path="${path}">${appHtml}</div>`);
  await write(path === '/' ? 'index.html' : `${path.slice(1)}/index.html`, html);
}

for (const post of server.blogs) {
  await write(`blog/${post.slug}.md`, server.buildPostMarkdown(post));
}
await write('llms.txt', server.buildLlmsTxt());
await write('llms-full.txt', server.buildLlmsFullTxt());
await write('sitemap.xml', server.buildSitemap());

console.log(`Prerendered ${paths.length} pages, ${server.blogs.length} Markdown posts, llms.txt, llms-full.txt and sitemap.xml`);
