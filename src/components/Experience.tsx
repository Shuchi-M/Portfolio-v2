import TabSection from './TabSection';
import type { TabData } from './TabSection';

const tabs: TabData[] = [
  {
    key: 'current',
    label: 'Current Role',
    tag: 'ACTIVE ROLE',
    isActive: true,
    metaLines: [
      { label: 'ROLE', value: 'LLM Research Engineer' },
      { label: 'GUILD', value: 'CIIR Lab, UMass Amherst' },
      { label: 'DURATION', value: 'Jun 2025 – Present' },
    ],
    narrative:
      "I spend my days figuring out why LLMs say things they shouldn't, then building systems to stop it.",
    bullets: [
      'Designed and iterated multi-hop prompts that integrate evidence across document pairs, improving factual integration scores by 42%.',
      'Introduced phrasing constraints to cut hallucinations and yes/no leakage, raising the evaluation pass rate from 58% to 81%.',
      'Built a five-dimension evaluation rubric and an automated Python batch-scoring pipeline covering objectivity, fluency, evidence integration, phrasing, and structure.',
      'Streamlined dataset-level evaluation with batched LLM API calls, tripling question-generation throughput across growing benchmark sets.',
    ],
  },
  {
    key: 'last',
    label: 'Last Role',
    tag: 'COMPLETED ROLE',
    metaLines: [
      { label: 'ROLE', value: 'Application Development Associate' },
      { label: 'GUILD', value: 'Accenture' },
      { label: 'DURATION', value: 'Dec 2020 – Sep 2022' },
    ],
    narrative:
      "Two years learning that most production issues aren't glamorous — they're a slow query and a missed edge case, found the hard way.",
    bullets: [
      'Analyzed application performance using SQL queries and SAP transaction monitoring logs to isolate the top 5 bottlenecks, improving response time by ~30%.',
      'Led two SAP delivery projects end to end — integrations, client requirements, and cross-functional issue resolution.',
      'Resolved 15 critical UAT bugs before launch, cutting monthly downtime by ~10 hours.',
      'Introduced JIRA sprint workflows that reduced delivery time by 15%.',
    ],
  },
  {
    key: 'intern1',
    label: 'Internship 1',
    tag: 'QUEST ROLE',
    metaLines: [
      { label: 'ROLE', value: 'Software Engineer Intern' },
      { label: 'GUILD', value: 'Experts Hub' },
      { label: 'DURATION', value: 'Jan 2019 – Mar 2019' },
    ],
    narrative: 'My first real taste of shipping something people actually used.',
    bullets: [
      'Developed a Python-SQL data pipeline processing 50K+ records daily with 95% accuracy.',
      'Built a React Native weather-tracking app used by 100+ users — won "Most Intuitive Design."',
    ],
  },
  {
    key: 'intern2',
    label: 'Internship 2',
    tag: 'QUEST ROLE',
    metaLines: [
      { label: 'ROLE', value: 'Software Engineer Intern' },
      { label: 'GUILD', value: 'Digital Shark, with Texas Instruments' },
      { label: 'DURATION', value: 'Jun 2019 – Aug 2019' },
    ],
    narrative:
      'Where I learned that IoT and machine learning are more useful outside a lab — helping actual farmers plan actual harvests.',
    bullets: [
      'Collected and processed real-time sensor data (temperature, humidity, rainfall) via IoT hardware deployed across local farms and pastures.',
      'Built a Python pipeline to parse and store readings in a structured database.',
      'Generated personalized irrigation and crop recommendations for small-scale farmers based on real-world field sensor data.',
    ],
  },
];

export default function Experience() {
  return (
    <TabSection
      id="experience"
      heading="Experience / 🗺️ Adventures"
      tabs={tabs}
      nextHref="#projects"
      nextLabel="Go to Projects next!"
    />
  );
}
