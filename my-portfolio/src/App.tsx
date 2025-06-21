import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import ShootingStars from './components/ShootingStars';
import TwinklingStars from './components/TwinklingStars';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-accent to-highlight font-sans text-white scroll-smooth overflow-hidden">
      <ShootingStars />
      <TwinklingStars />

      <Header />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
