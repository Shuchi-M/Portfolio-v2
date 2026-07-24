import { asset } from '../assetPath';

export default function Landing() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col items-center justify-center text-center gap-6 p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0d0a14 0%, #1a1423 60%, #241b33 100%)',
      }}
    >
      {/* Background forest image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{ backgroundImage: `url('${asset('assets/image/forest-silhouette.png')}')` }}
      />

      {/* Accent border frame */}
      <div className="absolute inset-3 border-[15px] border-accent pointer-events-none z-20" />

      {/* Corner accents */}
      {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-8 h-8 border-accent3 z-30 pointer-events-none`}
          style={{
            borderTopWidth: pos.includes('top') ? '10px' : 0,
            borderBottomWidth: pos.includes('bottom') ? '10px' : 0,
            borderLeftWidth: pos.includes('left') ? '10px' : 0,
            borderRightWidth: pos.includes('right') ? '10px' : 0,
          }}
        />
      ))}

      {/* Gem accents */}
      {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-8 h-8 bg-accent rotate-45 shadow-[0_0_8px_rgba(224,164,88,0.8)] z-40 pointer-events-none`}
        />
      ))}

      <div className="relative z-30 flex flex-col items-center gap-6">
        <h1 className="font-title text-2xl md:text-4xl">
          Shuchi's Developer Journey
        </h1>
        <p className="text-xl md:text-2xl font-body">
          An ongoing coding adventure documented through technology
        </p>

        <div className="relative inline-block">
          <button
            id="start-journey-btn"
            onClick={scrollToAbout}
            className="font-body text-2xl text-bg bg-accent border-[3px] border-textLight px-9 py-4 cursor-pointer shadow-[4px_4px_0px_theme(colors.border)] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_theme(colors.border)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_theme(colors.border)]"
          >
            Start Your Tour
          </button>

          <div
            className="absolute top-full left-full mt-2 ml-2"
            style={{ animation: 'gentleBob 3.5s ease-in-out infinite' }}
          >
            <div className="relative w-[280px]">
              <img
                src={asset('assets/image/Cat-guide.png')}
                alt="Guide cat"
                className="w-full h-auto block"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute -top-20 -right-8 bg-panel border-4 border-panelBorder rounded-lg px-4 py-3 w-[220px] shadow-md z-10">
                <p className="text-textDark leading-tight font-body text-xl mb-0">
                  Press the magic button to begin your tour!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}