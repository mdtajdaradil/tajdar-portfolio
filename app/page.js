import Link from 'next/link';
import { Chips, Cta, Process, Case } from '@/components/Bits';
import { TECH, TYPES, PLATFORMS, WORK, JOBS } from '@/lib/data';
const TAGS = [['Drupal 10', 'Twig', 'PHP', 'Pantheon'], ['Shopify', 'Liquid', 'Razorpay', 'Speed'], ['HTML5', 'CSS3', 'Bootstrap', 'Git']], HUE = [215, 38, 150];
export default function Home() {
  return (<>
    <section className="hero"><div className="w">
      <h1><span className="ln" style={{ '--i': 0 }}><span>I build websites</span></span><span className="ln" style={{ '--i': 1 }}><span>that bring you</span></span><span className="ln" style={{ '--i': 2 }}><span>customers.</span></span></h1>
      <p className="lead" style={{ fontSize: '1.3rem' }}>Hi, I’m Tajdar, a Full Stack Web Developer in Ranchi. Online stores, NGO sites, school and hospital sites, business sites and web apps, on the platform your project needs.</p>
      <div className="row"><Link className="btn p" href="/contact">Start a project</Link><Link className="btn" href="/hire-me">Hire me full-time</Link><a className="btn" href="/Tajdar_Adil_Resume.pdf" download>Download CV</a></div>
      <div className="big" aria-hidden="true">Tajdar</div></div>
      <div className="mq" aria-hidden="true"><div>{[...TECH, ...TECH].map((t, i) => <span key={i}>{t}</span>)}</div></div></section>

    <section className="sec"><div className="w"><div data-r><h2>Every kind of website, built for its audience.</h2><p className="lead">Hover or focus a card. If your type of site is not listed, I can still build it.</p></div>
      <div className="types" data-r>{TYPES.map(([t, d]) => <div className="ty" tabIndex="0" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>Selected work</h2><p className="lead" data-r style={{ marginBottom: 40 }}>Five live projects across Drupal and Shopify.</p>{WORK.map((w, i) => <Case key={w.n} w={w} i={i} />)}</div></section>

    <section className="sec"><div className="w" style={{ textAlign: 'center' }}><h2 data-r>Your platform, your choice.</h2><p className="lead" data-r style={{ margin: '18px auto 0' }}>Drupal, Shopify, WordPress, React, Next.js, Laravel or another CMS. I match the technology to your requirement.</p>
      <div className="orbw" data-r><div className="orb" role="img" aria-label={'Platforms: ' + PLATFORMS.join(', ')}><b>Any<br />stack</b>{PLATFORMS.map((p, i) => <span key={p} style={{ '--a': `${(360 / PLATFORMS.length) * i}deg` }}><i style={{ '--h': i * 50 + 20 }}>{p}</i></span>)}</div></div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w g2" style={{ alignItems: 'start' }}><div data-r><h2>How a project runs</h2><p className="lead">Six steps, the same for a landing page or a full store.</p></div><Process /></div></section>

    <section className="sec"><div className="w xp"><div className="xp-l" data-r><h2>Experience that shipped.</h2><p className="lead">Intern to full stack developer, plus a live freelance store, all on real client projects.</p>
      <div className="kpi"><div><b>3 yrs</b><span>building</span></div><div><b>5</b><span>live sites</span></div><div><b>15</b><span>services</span></div></div>
      <div className="row"><Link className="btn p" href="/experience">Full experience</Link><a className="btn" href="/Tajdar_Adil_Resume.pdf" download>Download CV</a></div></div>
      <ol className="jobs">{JOBS.map(([r, c, d, l], i) => <li className="job" key={r} data-r style={{ '--h': HUE[i], '--d': i }}><span className="when">{d}</span><h3>{r}</h3><p className="mu">{c}</p><ul><li>{l[0]}</li><li>{l[1]}</li></ul><Chips a={TAGS[i]} /></li>)}</ol></div></section>
    <Cta /></>);
}
