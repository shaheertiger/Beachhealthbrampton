import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Therapies from './pages/Therapies';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Locations from './pages/Locations';
import FloatingTextButton from './components/FloatingTextButton';
import { getPageMeta } from './seo/meta';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Keeps the tab title and SEO tags current during client-side navigation. Each page's initial
// values are written into its static HTML at build time (scripts/prerender.mjs).
function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getPageMeta(pathname);
    if (!meta) return;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', meta.url);
  }, [pathname]);
  return null;
}

// Rendered inside <BrowserRouter> in the browser (main.tsx) and <StaticRouter> at build time
// (entry-server.tsx).
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <main className="min-h-screen bg-bg-base font-sans relative overflow-x-hidden selection:bg-brand-green selection:text-white flex flex-col">
        <TopBar />
        <div className="relative flex-grow w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
        <FloatingTextButton />
      </main>
    </>
  );
}

export default App;
