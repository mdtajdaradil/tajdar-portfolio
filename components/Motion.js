'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Reveals every [data-r] element once it is near/above the bottom of the screen.
// No IntersectionObserver: clipped, transformed, tall or already-scrolled-past elements can never stay hidden.
// It re-scans on route change and on any DOM change inside <main>.
export default function Motion() {
  const p = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    window.__rv = 1;
    let raf = 0;
    const check = () => {
      raf = 0;
      const lim = innerHeight * 1.12;      // reveal just before the element enters the screen
      document.querySelectorAll('[data-r]:not(.in)').forEach(n => { if (n.getBoundingClientRect().top < lim) n.classList.add('in'); });
    };
    check();                               // everything already on screen is marked BEFORE hiding is switched on, so it never flashes
    root.classList.add('js');
    const ask = () => { if (!raf) raf = requestAnimationFrame(check); };
    const focus = e => { const n = e.target.closest && e.target.closest('[data-r]'); if (n) n.classList.add('in'); };
    const mo = new MutationObserver(ask), main = document.getElementById('main');
    if (main) mo.observe(main, { childList: true, subtree: true });
    addEventListener('scroll', ask, { passive: true }); addEventListener('resize', ask); addEventListener('load', ask); addEventListener('hashchange', ask);
    document.addEventListener('focusin', focus);
    const ts = [0, 120, 400, 900, 1600, 2800].map(ms => setTimeout(ask, ms));
    ask();
    return () => { cancelAnimationFrame(raf); mo.disconnect(); ts.forEach(clearTimeout); removeEventListener('scroll', ask); removeEventListener('resize', ask); removeEventListener('load', ask); removeEventListener('hashchange', ask); document.removeEventListener('focusin', focus); };
  }, [p]);
  useEffect(() => {
    if (CSS.supports('animation-timeline: scroll()') && !matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = document.documentElement, f = () => r.style.setProperty('--sp', Math.min(1, scrollY / Math.max(1, r.scrollHeight - innerHeight)));
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    return () => { removeEventListener('scroll', f); removeEventListener('resize', f); };
  }, [p]);
  return null;
}