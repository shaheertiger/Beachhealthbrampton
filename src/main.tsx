import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered to static HTML at build time (scripts/prerender.mjs). Hydrate
// that markup when it was rendered for exactly this URL; otherwise (dev server, SPA fallback for
// other URLs, trailing-slash variants) render from scratch.
if (container.dataset.prerenderedPath === window.location.pathname) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
