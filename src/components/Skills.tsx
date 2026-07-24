interface SkillGroup {
  title: string;
  skills: { name: string; stars: string }[];
  marginLeft: string;
  marginTop: string;
}

const groups: SkillGroup[] = [
  {
    title: 'Languages',
    marginLeft: '0',
    marginTop: '0',
    skills: [
      { name: 'Python', stars: '★★★★★' },
      { name: 'SQL', stars: '★★★★★' },
      { name: 'Java', stars: '★★★★☆' },
      { name: 'C / C++', stars: '★★★★☆' },
    ],
  },
  {
    title: 'ML / AI & NLP',
    marginLeft: '260px',
    marginTop: '40px',
    skills: [
      { name: 'PyTorch', stars: '★★★★★' },
      { name: 'Hugging Face', stars: '★★★★☆' },
      { name: 'RAG & LLM Evaluation', stars: '★★★★★' },
      { name: 'scikit-learn', stars: '★★★★★' },
    ],
  },
  {
    title: 'Data & Systems',
    marginLeft: '520px',
    marginTop: '40px',
    skills: [
      { name: 'Docker', stars: '★★★★☆' },
      { name: 'Git', stars: '★★★★☆' },
      { name: 'API / Systems Integration', stars: '★★★★☆' },
    ],
  },
  {
    title: 'Additional',
    marginLeft: '780px',
    marginTop: '40px',
    skills: [
      { name: 'Unity / C#', stars: '★★★★☆' },
      { name: 'Edge AI / Embedded Systems', stars: '★★★★★' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-screen -ml-[calc(50vw-50%)] px-6 py-20">
      <h2 className="text-center text-3xl md:text-4xl mb-10">🎒 Inventory</h2>
      <div
  className="hidden lg:block absolute top-56 right-[3%] z-10"
  style={{ animation: 'gentleBob 3.5s ease-in-out infinite' }}
>
  <div className="flex flex-col items-center">
    <div className="relative bg-panel border-4 border-panelBorder rounded-lg px-4 py-3 shadow-md mb-2 w-[220px] text-center">
      <p className="text-textDark text-lg mb-0">Scroll down to discover my skill set!</p>
    </div>
    <img
      src="/assets/image/Wizard-Cat.png"
      alt=""
      className="w-[130px] h-auto"
      style={{ imageRendering: 'pixelated' }}
    />
  </div>
</div>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col items-start" style={{ perspective: '1000px' }}>
          {groups.map((group, i) => (
            <div
              key={group.title}
              className={`bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-6 shadow-lg w-full md:w-[500px] mb-6 md:ml-[var(--stair-ml)] transition-transform duration-200 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ${
                i > 0 ? 'md:mt-10' : ''
              }`}
              style={{ '--stair-ml': group.marginLeft, transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              <h3 className="mb-2.5 font-heading">{group.title}</h3>
              {group.skills.map((skill) => (
                <p key={skill.name} className="mb-1.5">
                  {skill.name}{' '}
                  <span className="text-[#b5651d] text-2xl tracking-widest">{skill.stars}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      
       <a href="#contact"
        className="flex flex-col items-center gap-2 mt-20 mx-auto w-fit text-2xl no-underline text-textLight transition-transform hover:translate-y-1.5"
      >
        <span className="text-3xl text-accent animate-bounce">▼</span>
        <span>Go to Contact next!</span>
        <span className="text-3xl text-accent animate-bounce" style={{ animationDelay: '0.3s' }}>▼</span>
      </a>
    </section>
  );
}