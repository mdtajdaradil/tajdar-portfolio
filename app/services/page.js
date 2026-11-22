import { PageHead, Cta, Process } from '@/components/Bits';
import { SERVICES } from '@/lib/data';
export const metadata = { title: 'Web Development Services', description: 'Drupal, Shopify, WordPress, React, Next.js and Laravel websites, e-commerce, API integration, migration, maintenance, SEO and speed work.', alternates: { canonical: '/services' } };
export default function Services() {
  return (<><PageHead t="Services for every website you need." p="From a landing page to a full online store or custom web app." />
    {SERVICES.map(([g, items], gi) => <section className="sec" key={g} style={{ paddingBlock: 60, background: gi % 2 ? 'var(--sf)' : undefined }}><div className="w"><h2 data-r style={{ fontSize: '2rem' }}>{g}</h2><div className="g g2" style={{ marginTop: 24 }}>{items.map(([t, d], i) => <div className="card" key={t} data-r style={{ '--h': gi * 70 + i * 12, '--d': i }}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>)}
    <section className="sec"><div className="w g2" style={{ alignItems: 'start' }}><div><h2>How it works</h2></div><Process /></div></section><Cta h="Not sure which service fits?" p="Describe your idea and I will suggest the right platform and approach." /></>);
}
