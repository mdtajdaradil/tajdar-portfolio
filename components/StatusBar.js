'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/data';
const ext = { target: '_blank', rel: 'noopener noreferrer' };
const fmt = () => new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date());
export default function StatusBar() {
  const [t, setT] = useState('');
  useEffect(() => { setT(fmt()); const id = setInterval(() => setT(fmt()), 30000); return () => clearInterval(id); }, []);
  return (<div className="stb">
    <span className="on"><i />open to work</span>
    <span className="mid">Based in Ranchi, India<span className="hide-s">Local time {t || '--:--'} IST</span></span>
    <span className="soc"><a href={SITE.li} {...ext}>linkedin</a><a href={SITE.gh} {...ext}>github</a><a href={SITE.wa} {...ext}>whatsapp</a><Link className="go" href="/contact">let’s-talk →</Link></span>
  </div>);
}
