import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Chips } from '@/components/Bits';
import { SKILLS, TIERS, CHAPTERS, PRINCIPLES, MILES, LOOKING, SITE } from '@/lib/data';
export const metadata = { title: 'About Tajdar Adil | Full Stack Developer from Ranchi', description: 'Md. Tajdar Adil is a Full Stack Developer from Ranchi with nearly 3 years of Drupal 10 and Shopify experience. Read his story, skills, way of working and what he is looking for.', alternates: { canonical: '/about' } };
const PHOTO = ['jpg', 'jpeg', 'png', 'webp'].map(e => 'tajdar.' + e).find(f => fs.existsSync(path.join(process.cwd(), 'public', f)));
const TABS = [...SKILLS, ['Growing', TIERS[2][2]]];
export default function About() {
  return (<>
    <section className="hero"><div className="w hh">
      <div><h1><span className="ln" style={{ '--i': 0 }}><span>A developer who</span></span><span className="ln" style={{ '--i': 1 }}><span>ships, fixes and</span></span><span className="ln" style={{ '--i': 2 }}><span>keeps learning.</span></span></h1>
        <p className="lead" style={{ fontSize: '1.2rem' }}>I’m Md. Tajdar Adil, a Full Stack Developer from Ranchi. For nearly three years I have built and maintained live Drupal 10 websites and a Shopify store, from Twig and Liquid templates to custom modules, payments and production support.</p>
        <div className="facts" style={{ marginTop: 26 }}><div><span>Location</span>Ranchi, India</div><div><span>Experience</span>Nearly 3 years</div><div><span>Education</span>BCA, Radha Govind University</div><div><span>Focus</span>Drupal, Shopify, PHP, Next.js</div></div>
        <div className="row"><a className="btn p" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a><Link className="btn" href="/contact">Get in touch</Link></div></div>
      <div style={{ position: 'relative', padding: 18 }}><div className="avt"><div>{PHOTO ? <Image src={'/' + PHOTO} alt="Md. Tajdar Adil" width={380} height={380} priority /> : <span aria-label="Tajdar Adil initials">TA</span>}</div></div>
        {['Drupal', 'Shopify', 'PHP', 'Next.js'].map((t, k) => <span key={t} className="fch" aria-hidden="true" style={{ '--k': k, top: ['6%', '18%', 'auto', 'auto'][k], bottom: ['auto', 'auto', '14%', '2%'][k], left: [0, 'auto', -6, 'auto'][k], right: ['auto', -6, 'auto', 22][k] }}>{t}</span>)}</div>
    </div></section>

    <section className="sec"><div className="w chs"><div className="chs-l" data-r><h2>My story.</h2><p className="lead">From a college course to live client projects, in five chapters.</p></div>
      <div>{CHAPTERS.map(([d, t, p], i) => <div className="chp" key={t} data-r><b>{i + 1}</b><small>{d}</small><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>How I work.</h2><p className="lead" data-r>Six habits that show up in every project.</p>
      <div className="prc">{PRINCIPLES.map(([t, d], i) => <div key={t} data-r style={{ '--d': i % 3 }} tabIndex="0"><div><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

    <section className="sec"><div className="w" data-r><h2>Skills in depth.</h2><p className="lead">Pick a group.</p>
      <div className="tabs" role="group" aria-label="Skill groups">{TABS.map(([t], i) => <input key={t} type="radio" name="skills" id={'sk' + i} defaultChecked={i === 0} aria-label={t} />)}
        <div className="tl2">{TABS.map(([t], i) => <label key={t} htmlFor={'sk' + i}>{t}</label>)}</div>
        <div className="pn">{TABS.map(([t, a]) => <div key={t}><ul>{a.map((x, k) => <li key={x} style={{ '--k': k }}>{x}</li>)}</ul></div>)}</div></div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>Milestones.</h2><p className="lead" data-r>The dots light up as you scroll.</p>
      <div className="zz">{MILES.map(([d, t, p]) => <div className="zi" key={t} data-r><small>{d}</small><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

    <section className="sec"><div className="w"><h2 data-r>Two ways to work with me.</h2>
      <div className="spl">{[LOOKING.hire, LOOKING.client].map(([k, t, l], i) => <div key={k} data-r><small>{k}</small><h3>{t}</h3><ul>{l.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="row">{i === 0 ? <><Link className="btn p" href="/hire-me">Why hire me</Link><a className="btn" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></> : <><Link className="btn p" href="/services">See services</Link><Link className="btn" href="/contact">Get a quote</Link></>}</div></div>)}<span className="or" aria-hidden="true">or</span></div></div></section>

    <section className="sec" style={{ paddingTop: 0 }}><div className="w" data-r><div className="glow"><div><h2>Let’s build something good.</h2><p className="lead">Send me a role, a project or just a question. I reply by email or WhatsApp.</p>
      <div className="row"><a className="btn p" href={'mailto:' + SITE.email}>Email me</a><a className="btn" href={SITE.wa}>WhatsApp</a><a className="btn" href={SITE.li}>LinkedIn</a></div></div></div></div></section>
  </>);
}