import { PageHead, Cta, Chips } from '@/components/Bits';
import { SKILLS } from '@/lib/data';
export const metadata = { title: 'About', description: 'Md. Tajdar Adil, Full Stack Web Developer from Ranchi with nearly 3 years of experience in Drupal 10, Shopify, PHP and frontend development.', alternates: { canonical: '/about' } };
export default function About() {
  return (<><PageHead t="A developer who ships, fixes and keeps learning." p="I build Drupal websites and Shopify stores end to end, from templates to modules to deployment." />
    <section className="sec"><div className="w g2" style={{ alignItems: 'start' }}><div data-r><p className="lead" style={{ marginTop: 0 }}>I started as a Frontend Developer Intern at Next Geeks in January 2024, learning Drupal and Git with senior developers. I moved to a full stack role in July 2024, and since October 2025 I also run a freelance Shopify project for a designer-eyewear store.</p><p className="lead">I pick up new tools quickly and apply them on live projects, such as Drupal 7 to 10 migration and Drupal Commerce.</p></div>
      <div className="facts" data-r><div><span>Location</span>Ranchi, India</div><div><span>Experience</span>Nearly 3 years</div><div><span>Education</span>BCA, Radha Govind University, 2021 – 2024</div><div><span>Focus</span>Drupal, Shopify, PHP, React</div></div></div></section>
    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>Skills and tools</h2><div className="g g3">{SKILLS.map(([t, a], i) => <div className="card" key={t} data-r style={{ '--h': i * 90 + 30 }}><h3>{t}</h3><Chips a={a} /></div>)}</div></div></section><Cta /></>);
}
