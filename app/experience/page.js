import { PageHead, Cta } from '@/components/Bits';
import { JOBS } from '@/lib/data';
export const metadata = { title: 'Experience', description: 'Full Stack Developer at Next Geeks, freelance Shopify developer and frontend intern. Nearly 3 years of Drupal and Shopify work.', alternates: { canonical: '/experience' } };
export default function Experience() {
  return (<><PageHead t="Nearly three years of real projects." p="Full-time, freelance and intern work." /><section className="sec"><div className="w"><div className="tl">{JOBS.map(([r, c, d, l]) => <div key={r} data-r><h2 style={{ fontSize: '2rem' }}>{r}</h2><p className="mu">{c} · {d}</p><ul>{l.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div>
    <p className="lead" data-r>Education: Bachelor of Computer Applications (BCA), Radha Govind University, Ranchi, 2021 – 2024.</p><div className="row"><a className="btn p" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></div></div></section><Cta h="Looking to hire a Full Stack Developer?" p="Send me the role details." /></>);
}