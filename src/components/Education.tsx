import { asset } from '../assetPath';

interface Degree {
  program: string;
  academy: string;
  duration: string;
  rank: string;
  studies: string;
  uniqueSkill: string;
}

const degrees: Degree[] = [
  {
    program: "Master's in Computer Science",
    academy: 'University of Massachusetts Amherst',
    duration: 'Aug 2024 – May 2026',
    rank: 'GPA 4.0 / 4.0',
    studies:
      'Machine Learning · Applied Information Retrieval · Mobile & Ubiquitous Computing · Optimization in Computer Science · Probability & Statistics',
    uniqueSkill:
      "Learned how to make an AI agent question its own memories : literally researched how to poison and defend LLM memory systems.",
  },
  {
    program: 'Bachelor of Engineering, Electronics & Communications',
    academy: 'JSS Academy of Technical Education',
    duration: 'Aug 2016 – Aug 2020',
    rank: 'GPA 3.8 / 4.0',
    studies:
      'Operating Systems · Python · Information Theory · Communication Networks · Microprocessors · IoT & Embedded Systems · C++ (OOP)',
    uniqueSkill:
      'Discovered you can send data over light itself : built a traffic system using Li-Fi communication.',
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full pt-12 pb-20">
      <h2 className="text-center text-3xl md:text-4xl mb-24">Education / 🏛️ Academy Records</h2>

      <div
        className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-20 max-w-[90%] md:max-w-[1400px] mx-auto px-5"
        style={{ perspective: '1000px' }}
      >
        {degrees.map((deg) => (
          <div
            key={deg.program}
            className="relative bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-8 shadow-lg w-full md:flex-none md:w-[600px] transition-transform duration-200 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={asset('assets/image/graduate-cat.png')}
              alt=""
              className="absolute -top-14 -right-6 w-[110px] h-auto pointer-events-none"
              style={{ imageRendering: 'pixelated' }}
            />
            <p className="inline-block font-bold text-sm uppercase tracking-wide text-panel bg-accent2 px-2.5 py-1 rounded-md mb-4">
              🎓 DEGREE EARNED
            </p>
            <p className="mb-1.5"><strong>PROGRAM:</strong> {deg.program}</p>
            <p className="mb-1.5"><strong>ACADEMY:</strong> {deg.academy}</p>
            <p className="mb-1.5"><strong>DURATION:</strong> {deg.duration}</p>
            <p className="mb-1.5"><strong>RANK:</strong> {deg.rank}</p>
            <p className="mb-1.5"><strong>Studies:</strong> {deg.studies}</p>
            <p className="mt-4 pt-4 border-t-2 border-dashed border-panelBorder italic">
              <strong>UNIQUE SKILL UNLOCKED:</strong> {deg.uniqueSkill}
            </p>
          </div>
        ))}
      </div>

      
      <a  href="#experience"
        className="flex flex-col items-center gap-2 mt-16 mx-auto w-fit text-2xl no-underline text-textLight transition-transform hover:translate-y-1.5"
      >
        <span className="text-3xl text-accent animate-bounce">▼</span>
        <span>Go to Experience next!</span>
        <span className="text-3xl text-accent animate-bounce" style={{ animationDelay: '0.3s' }}>▼</span>
      </a>
    </section>
  );
}