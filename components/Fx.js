'use client';
import { useEffect, useRef, useState } from 'react';

// 3D tilt + cursor spotlight. Extra props (data-r, id, style) go to the outer wrapper so scroll-reveal keeps working.
export function Tilt({ children, max = 5, className = '', ...r }) {
  const el = useRef(null);
  const raf = useRef(0);
  const move = e => {
    const n = el.current; if (!n || e.pointerType === 'touch' || raf.current) return;
    const cx = e.clientX, cy = e.clientY;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const b = n.getBoundingClientRect(), x = (cx - b.left) / b.width, y = (cy - b.top) / b.height;
      n.style.setProperty('--mx', x * 100 + '%'); n.style.setProperty('--my', y * 100 + '%');
      n.style.setProperty('--rx', (0.5 - y) * max + 'deg'); n.style.setProperty('--ry', (x - 0.5) * max + 'deg');
    });
  };
  const leave = () => { const n = el.current; if (n) { n.style.setProperty('--rx', '0deg'); n.style.setProperty('--ry', '0deg'); } };
  return <div ref={el} className={'tilt ' + className} onPointerMove={move} onPointerLeave={leave} {...r}><div className="ti">{children}</div></div>;
}

// Sticky project index with scroll-spy. It never hides content, it only marks the project in view.
export function WorkIndex({ items }) {
  const [on, setOn] = useState(items[0].id);
  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setOn(e.target.id); }), { rootMargin: '-30% 0px -60% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (<nav className="wi" aria-label="Projects on this page">{items.map((c, i) => <a key={c.id} href={'#' + c.id} data-p={c.p} aria-current={on === c.id ? 'true' : undefined} style={{ '--h': c.h }}><b>0{i + 1}</b><span>{c.n}</span></a>)}</nav>);
}