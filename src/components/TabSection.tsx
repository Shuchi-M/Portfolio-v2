import { useState } from 'react';

export interface TabData {
  key: string;
  label: string;
  tag: string;
  isActive?: boolean;
  metaLines: { label: string; value: string }[];
  narrative: string;
  bullets: string[];
}

interface TabSectionProps {
  id: string;
  heading: string;
  tabs: TabData[];
  nextHref: string;
  nextLabel: string;
}

export default function TabSection({ id, heading, tabs, nextHref, nextLabel }: TabSectionProps) {
  const [activeKey, setActiveKey] = useState(tabs[0]?.key);
  const activeTab = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  return (
    <section id={id} className="w-full min-h-screen relative flex flex-col items-center pt-8">
      <h2 className="text-center text-3xl md:text-4xl mb-6">{heading}</h2>

      <div className="flex justify-center gap-3 flex-wrap mb-8 w-[90%] md:w-[1100px] max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveKey(tab.key)}
            className={`font-body text-lg md:text-xl border-[3px] px-4 md:px-5 py-2.5 rounded-lg cursor-pointer transition-transform hover:-translate-y-1 ${
              activeKey === tab.key
                ? 'bg-accent text-bg border-textLight'
                : 'bg-[rgba(26,20,35,0.6)] text-textLight border-panelBorder'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-[90%] md:w-[1100px] max-w-full mx-auto">
        <div
          key={activeTab.key}
          className="bg-panel text-textDark border-[3px] border-panelBorder rounded-2xl p-8 shadow-lg animate-[fadeIn_300ms_ease]"
        >
          <p
            className={`inline-block font-bold text-sm uppercase tracking-wide px-2.5 py-1 rounded-md mb-4 text-panel ${
              activeTab.isActive ? 'bg-accent' : 'bg-accent2'
            }`}
          >
            {activeTab.tag}
          </p>
          {activeTab.metaLines.map((line) => (
            <p className="mb-1.5" key={line.label}>
              <strong>{line.label}:</strong> {line.value}
            </p>
          ))}
          <p className="italic mb-0 mt-2">{activeTab.narrative}</p>
          <ul className="mt-4 pl-6 list-disc">
            {activeTab.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed mb-2.5">{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={nextHref}
        className="flex flex-col items-center gap-2 mt-10 w-fit text-2xl no-underline text-textLight transition-transform hover:translate-y-1.5 mb-16"
      >
        <span className="text-3xl text-accent animate-bounce">▼</span>
        <span>{nextLabel}</span>
        <span className="text-3xl text-accent animate-bounce" style={{ animationDelay: '0.3s' }}>▼</span>
      </a>
    </section>
  );
}
