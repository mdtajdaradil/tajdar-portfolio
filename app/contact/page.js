import ContactForm from '@/components/ContactForm';
import { PageHead } from '@/components/Bits';
import { FAQ, SITE } from '@/lib/data';
export const metadata = { title: 'Contact and Hire Me', description: 'Start a website project or hire Tajdar Adil as a Full Stack Web Developer. Reply by email or WhatsApp.', alternates: { canonical: '/contact' } };
export default function Contact() {
  return (<><PageHead t="Let’s talk about your project or role." p="Fill in the form or reach me directly." />
    <section className="sec"><div className="w g2" style={{ alignItems: 'start' }}><div className="facts" style={{ gridTemplateColumns: '1fr' }}><div><span>Email</span><a href={'mailto:' + SITE.email}>{SITE.email}</a></div><div><span>Phone and WhatsApp</span><a href={SITE.wa}>{SITE.phone}</a></div><div><span>Location</span>Ranchi, India · open to relocate</div><div><span>LinkedIn</span><a href={SITE.li}>linkedin.com/in/tajdaradil</a></div><div><span>GitHub</span><a href={SITE.gh}>github.com/mdtajdaradil</a></div></div><ContactForm /></div></section>
    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w g2" style={{ alignItems: 'start' }}><h2>Questions before you write</h2><div>{FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section></>);
}