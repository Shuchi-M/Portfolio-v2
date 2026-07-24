import { useEffect } from 'react';
import { asset } from './assetPath';
import Landing from './components/Landing';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(rgba(26, 20, 35, 0.7), rgba(26, 20, 35, 0.8)), url('${asset('assets/image/journey-bg-tile.png')}')`;
    document.body.style.backgroundRepeat = 'repeat-y';
    document.body.style.backgroundSize = '100% auto';
    document.body.style.backgroundPosition = 'top center';
  }, []);

  return (
    <>
      <Landing />
      <main className="max-w-[900px] mx-auto px-6">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Research />
        <Skills />
      </main>
      <Contact />
    </>
  );
}

export default App;