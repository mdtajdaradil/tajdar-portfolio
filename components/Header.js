'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, CV } from '@/lib/data';
// One stroke icon per NAV entry, in NAV order.
const ICONS = {
  '/': <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />,
  '/experience': <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" /></>,
  '/projects': <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /></>,
  '/contact': <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
};
export default function Header() {
  const p = usePathname(), [o, setO] = useState(false), [dark, setDark] = useState(true);
  useEffect(() => setO(false), [p]);
  useEffect(() => setDark(document.documentElement.dataset.theme !== 'light'), []);
  function flip() {
    const d = !dark; setDark(d);
    document.documentElement.dataset.theme = d ? 'dark' : 'light';
    try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch (e) {}
  }
  return (<>
    <header className="tb">
      <Link className="mono" href="/" aria-label="Tajdar Adil, home">TA</Link>
      <Link className="ttl" href="/">tajdar <b>&lt;adil&gt;</b></Link>
      <div className="act">
        <button className="tg" type="button" onClick={flip} aria-pressed={dark} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
          <svg className="su" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <svg className="mo" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg></button>
        <a className="rs" href={CV} target="_blank" rel="noopener noreferrer">resume.pdf</a>
        <button className="mb" aria-expanded={o} aria-controls="nav" onClick={() => setO(!o)}>{o ? 'close' : 'menu'}</button>
      </div>
    </header>
    <nav id="nav" className={'sb' + (o ? ' open' : '')} aria-label="Main">{NAV.map(([h, t]) => <Link key={h} href={h} aria-current={p === h ? 'page' : undefined} title={t}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[h]}</svg><span>{t}</span></Link>)}</nav>
  </>);
}
