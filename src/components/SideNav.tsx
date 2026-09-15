import { useEffect, useRef, useState } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: '#landing', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '🧭' },
  { href: '#education', label: 'Education', icon: '🏛️' },
  { href: '#experience', label: 'Experience', icon: '🗺️' },
  { href: '#projects', label: 'Projects', icon: '⚔' },
  { href: '#research', label: 'Research', icon: '📜' },
  { href: '#skills', label: 'Skills', icon: '🎒' },
  { href: '#contact', label: 'Contact', icon: '📨' },
];

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const interactedRef = useRef(false);

  // First-visit reveal: pop the panel open briefly so people see the section
  // list without needing to find/hover the tab. Cancelled if the user acts first.
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!interactedRef.current) setOpen(true);
    }, 700);
    const hideTimer = setTimeout(() => {
      if (!interactedRef.current) setOpen(false);
    }, 2900);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const markInteracted = () => {
    interactedRef.current = true;
    setHasInteracted(true);
  };

  const handleSelect = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    markInteracted();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 select-none">
      <div
        className="relative"
        onMouseEnter={() => {
          markInteracted();
          setOpen(true);
        }}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Always-visible edge tab; tap toggles for touch devices, hover expands on desktop.
            This is the only element that sizes the fixed wrapper, so the flyout panel
            below can never stretch or push it. */}
        <button
          type="button"
          onClick={() => {
            markInteracted();
            setOpen((o) => !o);
          }}
          aria-label={open ? 'Close site navigation' : 'Open site navigation'}
          aria-expanded={open}
          className={`relative z-10 flex flex-col items-center justify-center gap-1 w-11 py-6 bg-accent3 text-bg border-[3px] border-l-0 border-textLight rounded-r-lg shadow-[4px_0px_0px_theme(colors.border)] cursor-pointer ${
            !open && !hasInteracted ? 'animate-[navPulse_2.2s_ease-in-out_infinite]' : ''
          }`}
        >
          <span className="text-2xl leading-none">🧭</span>
          <span className="text-sm leading-none font-bold">{open ? '‹' : '›'}</span>
        </button>

        {/* Flyout panel of section links — absolutely positioned so its own height
            never affects the tab button or the fixed wrapper's layout. */}
        <nav
          aria-hidden={!open}
          className={`absolute left-full top-1/2 -translate-y-1/2 bg-panel border-[3px] border-l-0 border-panelBorder rounded-r-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out ${
            open ? 'max-w-[220px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-3 pr-3 pl-2 min-w-[190px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleSelect(e, item.href)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center gap-2.5 py-2 px-2 rounded-lg font-body text-lg text-textDark whitespace-nowrap hover:bg-accent/30 transition-colors"
                >
                  <span className="text-xl leading-none">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

