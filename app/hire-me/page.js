import { Chips } from '@/components/Bits';
import { SITE, HIRE_EXTRA, ROLES, PROBLEMS, TIERS, PLAN, HIRE_FAQ, WORK } from '@/lib/data';
export const metadata = {
  title: 'Hire Me | Full Stack Developer (Drupal, Shopify, PHP)',
  description: 'Hiring a Full Stack Web Developer? Md. Tajdar Adil has nearly 3 years of live Drupal 10 and Shopify experience. See roles, skills, proof of work and how to reach me.',
  alternates: { canonical: '/hire-me' },
};
const BARS = [['Frontend Developer Intern', 0, 17, 'Jan – Jun 2024', 150], ['Full Stack Developer', 17, 80, 'Jul 2024 – Oct 2026', 215], ['Freelance Shopify Developer', 60, 37, 'Oct 2025 – Oct 2026', 38]];
const SQ = Array.from({ length: 15 }, (_, i) => i), NAMES = WORK.map(w => w.n);
const CYC = ['Full Stack Developer', 'Drupal Developer', 'Shopify Developer'];
const rows = [['Location', 'Ranchi, India'], ['Experience', 'Nearly 3 years'], ['Education', 'BCA, 2021 – 2024'], ['Focus', 'Drupal, Shopify, PHP'], ...Object.entries(HIRE_EXTRA).filter(([, v]) => v)];
export default function HireMe() {
  return (<>
    <section className="hero"><div className="w hh">
      <div>
        <h1><span className="ln" style={{ '--i': 0 }}><span>Looking for a</span></span><span className="ln" style={{ '--i': 1 }}><span>developer who</span></span><span className="ln" style={{ '--i': 2 }}><span>ships?</span></span></h1>
        <div className="cyc" aria-hidden="true">{CYC.map((c, i) => <span key={c} style={{ '--i': i }}>{c}</span>)}</div>
        <p className="lead" style={{ fontSize: '1.2rem' }}>I’m Tajdar. I build and maintain live Drupal 10 websites and Shopify stores, from Twig and Liquid templates to custom modules, payments and production support.</p>
        <div className="row"><a className="btn p" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a><a className="btn" href={'mailto:' + SITE.email + '?subject=Job opportunity'}>Email me</a><a className="btn" href={SITE.li}>LinkedIn</a></div>
      </div>
      <aside className="idc" aria-label="Quick profile"><span className="st"><i />Open to full-time roles</span><h2>Md. Tajdar Adil</h2><p className="mu">Full Stack Web Developer</p>
        <dl>{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></aside>
    </div></section>

    <section className="sec nm"><div className="w"><div data-r><h2>The short version.</h2><p className="lead">Three numbers and a timeline, all from live work.</p></div><div className="bento" style={{ marginTop: 36 }}>
      <div className="bt xl gl" data-r><div><span className="sr">Nearly 3 years of experience</span><span className="cnt" aria-hidden="true" data-s="" style={{ '--to': 3 }} /><p className="mu" style={{ marginTop: 6 }}>years building Drupal 10 and Shopify sites, nearly, since Jan 2024.</p></div>
        <div className="lanes">{BARS.map(([r, l, w, d, h], i) => <div key={r} className="lane" style={{ '--h': h, '--k': i }}><div className="lt"><b>{r}</b><span>{d}</span></div><div className="trk"><i className="bar" style={{ left: l + '%', width: w + '%' }} /></div></div>)}<div className="ax"><span>Jan 2024</span><span>Now</span></div></div></div>
      <div className="bt" data-r style={{ '--d': 1 }}><div><span className="sr">5 live projects</span><span className="cnt" aria-hidden="true" data-s="" style={{ '--to': 5 }} /><p className="mu">live websites</p></div><ul className="sites">{WORK.map((w, i) => <li key={w.u} style={{ '--k': i }}><i />{w.u}</li>)}</ul></div>
      <div className="bt" data-r style={{ '--d': 2 }}><div><span className="sr">15 services</span><span className="cnt" aria-hidden="true" data-s="" style={{ '--to': 15 }} /><p className="mu">services I deliver</p></div><div className="sq" aria-hidden="true">{SQ.map(k => <i key={k} style={{ '--k': k }} />)}</div></div>
      <div className="bt wide" data-r style={{ '--d': 3 }}><span className="sr">Live projects: {NAMES.join(', ')}</span><p className="mu" style={{ marginBottom: 14 }}>In production right now</p><div className="mq2" aria-hidden="true"><div>{[...NAMES, ...NAMES, ...NAMES, ...NAMES].map((n, i) => <span key={i}>{n}</span>)}</div></div></div>
    </div></div></section>

    <section className="sec" style={{ background: 'var(--sf)', paddingInline: 0 }}><div className="w" data-r><h2>Roles I fit</h2><p className="lead">Swipe or scroll sideways. Each card shows what I would own on day one.</p></div>
      <div className="snap" tabIndex="0" role="region" aria-label="Roles I fit">{ROLES.map(([t, s, h, l, why]) => <article key={t} style={{ '--h': h }}><small>{s}</small><h3>{t}</h3><ul>{l.map(x => <li key={x}>{x}</li>)}</ul><p className="why">{why}</p></article>)}</div></section>

    <section className="sec"><div className="w"><h2 data-r>Problems I have already solved</h2><p className="lead" data-r>Hover or tap a card to see what I did. Every one comes from live work.</p>
      <div className="fl">{PROBLEMS.map(([p, s], i) => <div className="flip" tabIndex="0" key={p} data-r style={{ '--d': i % 3 }}><div className="fi"><div className="ff"><small>Problem</small><h3>{p}</h3><span className="hint">Hover or tap to see the fix</span></div><div className="fb"><small>What I did</small><p>{s}</p></div></div></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>My stack, honestly</h2><p className="lead" data-r style={{ marginBottom: 30 }}>Sorted by how often I use each tool, so you know what to expect.</p>
      {TIERS.map(([t, h, a], i) => <div className="tier" key={t} data-r style={{ '--h': h, '--d': i }}><h3>{t}</h3><Chips a={a} /></div>)}</div></section>

    <section className="sec"><div className="w"><h2 data-r>How I would start</h2><p className="lead" data-r>A plan for my first 90 days in a team.</p>
      <div className="plan">{PLAN.map(([p, t, h, l], i) => <div className="pc" key={t} data-r style={{ '--to': p, '--d': i }}><div className="ring"><b>{p}</b></div><small className="mu">{t}</small><h3>{h}</h3><ul>{l.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w g2" style={{ alignItems: 'start', marginTop: 0 }}><div data-r><h2>Questions HR asks</h2><p className="lead">Short answers before the first call.</p></div><div data-r>{HIRE_FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="sec"><div className="w" data-r><div className="glow"><div><h2>Let’s talk about the role.</h2><p className="lead">Send the job description or a short message. I reply by email or WhatsApp.</p>
      <div className="row"><a className="btn p" href={'mailto:' + SITE.email + '?subject=Job opportunity'}>Email me</a><a className="btn" href={SITE.wa}>WhatsApp</a><a className="btn" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></div></div></div></div></section>
  </>);
}