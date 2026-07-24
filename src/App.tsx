import Landing from './components/Landing';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
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
