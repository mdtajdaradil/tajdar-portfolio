'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/data';
export default function Header() {
  const p = usePathname(), [o, setO] = useState(false), [dark, setDark] = useState(false);
  useEffect(() => setO(false), [p]);
  useEffect(() => setDark(document.documentElement.dataset.theme === 'dark'), []);
  function flip() {
    const d = !dark; setDark(d);
    if (d) document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch (e) {}
  }
  return (<header><div className="w nav"><Link className="logo" href="/" aria-label="Tajdar, home">Tajdar<i>.</i></Link>
    <nav id="nav" className={'links' + (o ? ' open' : '')} aria-label="Main">{NAV.map(([h, t]) => <Link key={h} href={h} aria-current={p === h ? 'page' : undefined}>{t}</Link>)}</nav>
    <div className="act"><button className="tg" type="button" onClick={flip} aria-pressed={dark} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
      <svg className="su" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      <svg className="mo" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg></button>
    <button className="mb" aria-expanded={o} aria-controls="nav" onClick={() => setO(!o)}>{o ? 'Close' : 'Menu'}</button></div></div></header>);
}