import TabSection from './TabSection';
import type { TabData } from './TabSection';

const tabs: TabData[] = [
  {
    key: 'rag',
    label: 'RAG Optimization',
    tag: 'QUEST COMPLETED',
    isActive: true,
    metaLines: [
      { label: 'PROJECT', value: 'Adaptive Retrieval Depth Optimization in RAG' },
      { label: 'SKILLS USED', value: 'Python · BM25 · Flan-T5 · HuggingFace · NumPy' },
    ],
    narrative:
      'I got tired of RAG pipelines retrieving the same number of passages for every question, so I made the system decide for itself.',
    bullets: [
      'Framed retrieval depth k as a per-query optimization variable, designing a confidence-based adaptive stopping rule requiring zero fine-tuning.',
      'Evaluated on Flan-T5 Small/Base across SQuAD/TriviaQA — achieved Pareto dominance on SQuAD over fixed-k baselines.',
      'Reduced average retrieval depth to 1.19–1.60 passages vs. fixed k=5, cutting retrieval cost by up to 68% with no accuracy loss.',
    ],
  },
  {
    key: 'drone',
    label: 'Drone Control',
    tag: 'QUEST COMPLETED',
    metaLines: [
      { label: 'PROJECT', value: 'Gesture-Based UAV Drone Control' },
      { label: 'SKILLS USED', value: 'XGBoost · ESP32 · MPU9250 IMU · Python' },
    ],
    narrative:
      'Wanted to fly a drone with hand gestures instead of a joystick, so I taught sensors to read motion instead.',
    bullets: [
      'Achieved 98.8% classification accuracy with XGBoost on 430 IMU samples across 8 gesture classes.',
      'Outperformed SVM (57%) and KNN (78%) baselines by a wide margin.',
      'Enabled real-time hands-free UAV control via ESP32 + MPU9250 sensor fusion.',
    ],
  },
  {
    key: 'chordstrike',
    label: 'Chord Strike',
    tag: 'QUEST COMPLETED',
    metaLines: [
      { label: 'PROJECT', value: 'Chord Strike — Unity Rhythm Game' },
      { label: 'SKILLS USED', value: 'Unity · C# · Animator FSM · Audio Mixer' },
    ],
    narrative: 'My game dev side of things — proof that I build for fun, not just for a grade.',
    bullets: [
      'Built a fantasy-themed rhythm game with real-time pitch detection across 3 difficulty levels.',
      'Designed procedural enemy AI and state-machine-driven animations in C#.',
      'Implemented custom audio event triggers and scene management from scratch.',
    ],
  },
  {
    key: 'weather',
    label: 'Weather Monitoring',
    tag: 'QUEST COMPLETED',
    metaLines: [
      { label: 'PROJECT', value: 'Automated Weather Monitoring System' },
      { label: 'SKILLS USED', value: 'IoT · Python · Sensor Integration' },
    ],
    narrative:
      'One of my earliest builds — a small system with a real purpose: helping farmers plan around the weather.',
    bullets: [
      'Built a small-scale home automation system integrating live weather monitoring with automated household devices.',
      'Leveraged IoT weather data to generate personalized irrigation and crop insights for small-scale farmers.',
    ],
  },
];

export default function Projects() {
  return (
    <TabSection
      id="projects"
      heading="Projects / ⚔ Quest Log"
      tabs={tabs}
      nextHref="#research"
      nextLabel="Go to Research next!"
    />
  );
}
