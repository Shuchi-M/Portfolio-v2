import { asset } from '../assetPath';

interface Waypoint {
  label: string;
  href: string;
  cat: string;
  icon: string;
}

const waypoints: Waypoint[] = [
  { label: 'Education', href: '#education', cat: 'assets/image/Leraning-Cat.png', icon: '🏛️' },
  { label: 'Experience', href: '#experience', cat: 'assets/image/Adventurer-cat.png', icon: '🗺️' },
  { label: 'Projects', href: '#projects', cat: 'assets/image/Builder-Cat.png', icon: '⚔' },
  { label: 'Research Archives', href: '#research', cat: 'assets/image/Scientist-Cat.png', icon: '📜' },
  { label: 'Skills', href: '#skills', cat: 'assets/image/Wizard-Cat.png', icon: '🎒' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-screen -ml-[calc(50vw-50%)] flex flex-col items-center text-center gap-8 pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #150f1c 0%, #1a1423 100%)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 z-0"
        style={{ backgroundImage: `url('${asset('assets/image/Tavern.png')}')` }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
        <h2 className="font-title text-3xl md:text-4xl">About Me</h2>

        <div className="bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-6 shadow-lg max-w-[90%] md:max-w-[1300px] w-full text-left">
          <h2 className="font-heading text-sm text-center mb-3">Character Profile</h2>
          <p className="mb-1.5"><strong>NAME:</strong> Shuchi Mishra</p>
          <p className="mb-1.5"><strong>CLASS:</strong> Software Engineer / ML Researcher</p>
          <p className="mb-1.5">
            <strong>ORIGIN:</strong> B.E. Electrical Engineering (JSSATE) → Associate Software Engineer @ Accenture → MS in Computer Science, UMass Amherst
          </p>
          <p className="mb-1.5">
            <strong>CURRENT QUEST:</strong> Building intelligent systems that connect data with decisions — hunting for a new-grad SWE role. Currently researching multi-hop question generation with LLMs + retrieval at CIIR Lab.
          </p>
          <p className="mb-1.5">
            <strong>NOTABLE FEAT:</strong> Shipped automation at Accenture that boosted operational efficiency by 30%.
          </p>
          <p className="mb-1.5">
            <strong>INTERESTS:</strong> AI &amp; LLMs · Information Retrieval · Prompt Engineering · IoT &amp; Automation · Game Development
          </p>
        </div>

        <p className="inline-block text-2xl bg-[rgba(26,20,35,0.75)] border-2 border-panelBorder rounded-lg px-3 py-1 mt-2">
          Choose your path - explore my work, one waypoint at a time
        </p>

        <div className="flex flex-wrap justify-evenly gap-4 md:gap-6 w-full max-w-[90%] md:max-w-[1300px] mt-6">
          {waypoints.map((wp) => (
            <div key={wp.label} className="relative pt-10">
              <img
                src={asset(wp.cat)}
                alt=""
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-[130px] h-[120px] object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
              
               <a href={wp.href}
                className="inline-block font-body text-lg md:text-xl text-bg bg-accent border-[3px] border-textLight px-3.5 py-3 shadow-[4px_4px_0px_theme(colors.border)] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_theme(colors.border)]"
              >
                {wp.icon} {wp.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}