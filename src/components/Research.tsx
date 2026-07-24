import { useState, useEffect } from 'react';

interface ResearchPaper {
  key: string;
  scrollLabel: string;
  title: string;
  link: string;
  artifactType: string;
  tldr: string;
  mission: string;
  contributions: string[];
  skillsUnlocked: string[];
  hiddenGem?: string;
  takeaways: string[];
  stats: { label: string; value: string }[];
  commentary: string;
}

const papers: ResearchPaper[] = [
  {
    key: 'memory-poisoning',
    scrollLabel: 'Research Scroll I',
    title: 'Memory Poisoning Attack and Defense on Memory-Based LLM Agents',
    link: 'https://arxiv.org/abs/2601.05504',
    artifactType: 'Research Paper — arXiv:2601.05504 [cs.CR], Jan 2026',
    tldr:
      'Built evaluation frameworks and defense mechanisms that help memory-based LLM agents recognize and resist poisoned information, improving the reliability of long-term AI systems.',
    mission:
      'As LLM agents begin relying on long-term memory, they become vulnerable to memory poisoning — malicious information that can silently alter future decisions. This research investigates those attacks and develops practical defenses for safer, more trustworthy AI agents.',
    contributions: [
      'Designed adversarial evaluation benchmarks for memory-based LLM agents.',
      'Developed composite trust-scoring techniques to identify reliable versus poisoned memories.',
      'Engineered memory sanitization strategies for production-oriented agent workflows.',
      'Evaluated robustness across GPT-4o-mini, Gemini-2.0 Flash, and Llama-3.1 using clinical-domain data.',
    ],
    skillsUnlocked: [
      'LLM Security',
      'AI Safety',
      'Adversarial ML',
      'Benchmark Design',
      'Model Evaluation',
      'Prompt Engineering',
      'Python',
    ],
    hiddenGem:
      "One of the hardest challenges wasn't designing stronger attacks — it was creating evaluation metrics that could distinguish genuine robustness from models that simply became overly cautious.",
    takeaways: [
      'Designing rigorous evaluation frameworks',
      'Building production-minded AI defenses',
      'Evaluating systems across multiple frontier LLMs',
      'Thinking beyond model accuracy toward system reliability',
    ],
    stats: [
      { label: 'Publication', value: 'arXiv (2026)' },
      { label: 'Models Tested', value: '3' },
      { label: 'Research Area', value: 'AI Safety' },
      { label: 'Focus', value: 'Memory Security' },
    ],
    commentary:
      "My primary responsibility was making evaluation trustworthy. A defense isn't useful if the benchmark can't tell whether the model genuinely became more robust or simply more conservative. That challenge taught me to think critically about AI evaluation — not just model performance.",
  },
  {
    key: 'lifi-traffic',
    scrollLabel: 'Research Scroll II',
    title: 'Traffic Management System using V2V Communication employing Li-Fi and IoT',
    link: 'https://www.ijsred.com/',
    artifactType: 'Research Paper — IJSRED, Vol. 3, Issue 3, 2020',
    tldr:
      'Designed an intelligent vehicle-to-vehicle communication system combining Li-Fi and IoT to improve traffic coordination while exploring reliable low-latency communication architectures.',
    mission:
      'Explored how Li-Fi communication and IoT-connected vehicles can work together to enable faster, more reliable traffic coordination for smart transportation systems.',
    contributions: [
      'Designed the vehicle-to-vehicle communication architecture.',
      'Integrated Li-Fi messaging with IoT-enabled traffic infrastructure.',
      'Developed communication workflows for intelligent traffic coordination.',
      'Published findings demonstrating the feasibility of low-latency V2V communication.',
    ],
    skillsUnlocked: [
      'Embedded Systems',
      'IoT',
      'Wireless Communication',
      'Systems Design',
      'Communication Networks',
    ],
    hiddenGem:
      'This project sparked my interest in distributed intelligent systems — a foundation that eventually led me from embedded systems into AI agents, retrieval systems, and LLM safety research.',
    takeaways: [
      'Designing end-to-end communication systems',
      'Building reliable hardware-software integrations',
      'Applying networking concepts to real-world problems',
      'Thinking at the systems level before moving into AI',
    ],
    stats: [
      { label: 'Publication', value: 'IJSRED (2020)' },
      { label: 'Research Area', value: 'Smart Transportation' },
      { label: 'Communication', value: 'Li-Fi + IoT' },
      { label: 'Architecture', value: 'Vehicle-to-Vehicle (V2V)' },
    ],
    commentary:
      'This was my first experience designing a complete engineering system — from sensors and communication protocols to real-world applications. Looking back, it shaped how I approach large-scale AI systems today: start with reliable infrastructure, then build intelligent behavior on top.',
  },
];

interface Block {
  key: string;
  label: string;
  content: React.ReactNode;
}

function buildBlocks(paper: ResearchPaper): Block[] {
  const blocks: Block[] = [
    {
      key: 'overview',
      label: ' Overview',
      content: (
        <>
          <p className="inline-block font-bold text-sm uppercase tracking-wide text-panel bg-accent2 px-2.5 py-1 rounded-md mb-4">
            📜 ARCHIVED MANUSCRIPT
          </p>
          <h3 className="mb-1 font-heading text-lg">
            
        <a      href={paper.link}
              target="_blank"
              rel="noreferrer"
              className="text-panelBorder hover:text-textDark underline decoration-dotted"
            >
              {paper.title}
            </a>
          </h3>
          <p className="text-sm opacity-75">{paper.artifactType}</p>
        </>
      ),
    },
    {
      key: 'tldr',
      label: "Quick Quest TL;DR",
      content: <p className="italic mb-0">{paper.tldr}</p>,
    },
    {
      key: 'mission',
      label: ' Mission',
      content: <p className="mb-0">{paper.mission}</p>,
    },
    {
      key: 'contribution',
      label: '⚔ My Contribution',
      content: (
        <ul className="pl-5 list-disc">
          {paper.contributions.map((c, i) => (
            <li key={i} className="leading-relaxed mb-1.5">{c}</li>
          ))}
        </ul>
      ),
    },
    {
      key: 'skills',
      label: ' Skills Unlocked',
      content: (
        <div className="flex flex-wrap gap-2">
          {paper.skillsUnlocked.map((skill) => (
            <span key={skill} className="text-xs font-bold bg-accent text-bg px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      ),
    },
  ];

  if (paper.hiddenGem) {
    blocks.push({
      key: 'gem',
      label: '💎 Hidden Gem',
      content: <p className="italic mb-0">{paper.hiddenGem}</p>,
    });
  }

  blocks.push(
    {
      key: 'takeaways',
      label: ' What I Took Away',
      content: (
        <ul className="pl-5 list-disc">
          {paper.takeaways.map((t, i) => (
            <li key={i} className="leading-relaxed mb-1.5">{t}</li>
          ))}
        </ul>
      ),
    },
    {
      key: 'stats',
      label: ' Character Stats',
      content: (
        <div className="font-body text-lg">
          {paper.stats.map((stat) => (
            <div key={stat.label} className="flex justify-between gap-4 mb-1">
              <span className="opacity-70">{stat.label}</span>
              <span className="font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
      ),
    }
  );

  return blocks;
}

function useTypewriter(text: string, speed = 20) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function Research() {
  const [activeKey, setActiveKey] = useState(papers[0].key);
  const activePaper = papers.find((p) => p.key === activeKey) ?? papers[0];
  const blocks = buildBlocks(activePaper);
  const typedCommentary = useTypewriter(activePaper.commentary);

  return (
    <section id="research" className="relative w-screen -ml-[calc(50vw-50%)] pt-12 pb-20">
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 w-[92vw] max-w-[1400px] mx-auto">
        {/* Left column: heading, tabs, scrolling cards, scroll hint */}
        <div className="flex-1 min-w-0">
          <h2 className="text-left text-3xl md:text-4xl mb-6">📜 Research Archive</h2>

          <div className="flex gap-3 flex-wrap mb-6">
            {papers.map((paper) => (
              <button
                key={paper.key}
                onClick={() => setActiveKey(paper.key)}
                className={`font-body text-xl md:text-2xl border-[3px] px-5 md:px-6 py-3 rounded-lg cursor-pointer transition-transform hover:-translate-y-1 ${
                  activeKey === paper.key
                    ? 'bg-accent text-bg border-textLight'
                    : 'bg-[rgba(26,20,35,0.6)] text-textLight border-panelBorder'
                }`}
              >
                {paper.scrollLabel}
              </button>
            ))}
          </div>

          <div className="relative w-full">
            <div
              key={activePaper.key}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollPaddingLeft: '4px' }}
            >
              {blocks.map((block) => (
                <div
                  key={block.key}
                  className="flex-shrink-0 w-[320px] md:w-[380px] snap-center bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-6 shadow-lg"
                >
                  <p className="text-lg font-bold uppercase tracking-wide mb-2 opacity-80">
                    {block.label}
                  </p>
                  {block.content}
                </div>
              ))}
            </div>
          </div>

          <p className="inline-block text-base md:text-lg bg-[rgba(26,20,35,0.75)] border-2 border-panelBorder rounded-lg px-3 py-1.5 mt-3">
            ← scroll to explore →
          </p>
        </div>

        {/* Right column: cat + Developer Commentary, pinned top-right */}
        <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col items-center lg:items-start gap-3">
          <img
            src="/assets/image/graduate-cat.png"
            alt=""
            className="w-[90px] h-auto"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="relative bg-[#e8dcc3] border-2 border-dashed border-accent2 rounded-lg px-5 py-4 shadow-md -rotate-1 w-full">
            <p className="text-xs font-bold uppercase tracking-wide text-accent2 mb-2">
              🗨️ Developer's Commentary
            </p>
            <p className="text-textDark italic text-base mb-0 min-h-[6rem]">
              "{typedCommentary}
              <span className="animate-pulse">▌</span>"
            </p>
          </div>
        </div>
      </div>

      
       <a href="#skills"
        className="flex flex-col items-center gap-2 mt-16 mx-auto w-fit text-2xl no-underline text-textLight transition-transform hover:translate-y-1.5"
      >
        <span className="text-3xl text-accent animate-bounce">▼</span>
        <span>Go to Skills next!</span>
        <span className="text-3xl text-accent animate-bounce" style={{ animationDelay: '0.3s' }}>▼</span>
      </a>
    </section>
  );
}