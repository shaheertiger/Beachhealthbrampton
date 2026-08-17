import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Team from '../components/Team';
import TestimonialsTicker from '../components/TestimonialsTicker';

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsTicker />
      <Features />
      <About />
      <Team />
    </>
  );
}
