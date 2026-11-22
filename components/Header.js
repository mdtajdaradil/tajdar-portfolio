'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/data';
export default function Header() {
  const p = usePathname(), [o, setO] = useState(false);
  useEffect(() => setO(false), [p]);
  return (<header><div className="w nav"><Link className="logo" href="/" aria-label="Tajdar, home">Tajdar<i>.</i></Link>
    <nav id="nav" className={'links' + (o ? ' open' : '')} aria-label="Main">{NAV.map(([h, t]) => <Link key={h} href={h} aria-current={p === h ? 'page' : undefined}>{t}</Link>)}</nav>
    <button className="mb" aria-expanded={o} aria-controls="nav" onClick={() => setO(!o)}>{o ? 'Close' : 'Menu'}</button></div></header>);
}
