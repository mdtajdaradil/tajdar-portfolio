'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
export default function Motion() {
  const p = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('[data-r]').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, [p]);
  useEffect(() => {
    if (CSS.supports('animation-timeline: scroll()') && !matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = document.documentElement, f = () => r.style.setProperty('--sp', Math.min(1, scrollY / Math.max(1, r.scrollHeight - innerHeight)));
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    return () => { removeEventListener('scroll', f); removeEventListener('resize', f); };
  }, [p]);
  return null;
}
