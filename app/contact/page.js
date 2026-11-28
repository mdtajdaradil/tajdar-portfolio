import ContactForm from '@/components/ContactForm';
import { PageHead } from '@/components/Bits';
import { SITE, CV } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Hiring a Full Stack Developer? Contact Md. Tajdar Adil by email, phone, WhatsApp or LinkedIn, or download the CV.', alternates: { canonical: '/contact' } };
const ext = { target: '_blank', rel: 'noopener noreferrer' };
const ROWS = [['Email', SITE.email, 'mailto:' + SITE.email], ['Phone and WhatsApp', SITE.phone, SITE.wa], ['LinkedIn', 'linkedin.com/in/tajdaradil', SITE.li], ['GitHub', 'github.com/mdtajdaradil', SITE.gh], ['CV', 'Download PDF', CV], ['Location', 'Ranchi, India · open to relocate or remote']];
export default function Contact() {
  return (<><PageHead k="Usually replies within a day" t="Let’s talk about the role." p="Send the job description or a short message, or reach me directly." />
    <section className="sec" style={{ paddingTop: 24 }}><div className="w split">
      <dl className="snap card">{ROWS.map(([k, v, h]) => <div key={k}><dt>{k}</dt><dd>{h ? <a href={h} {...(h.startsWith('mailto') ? {} : ext)}>{v}</a> : v}</dd></div>)}</dl>
      <div className="card"><ContactForm /></div>
    </div></section></>);
}
