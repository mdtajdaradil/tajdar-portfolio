import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import { Chips } from '@/components/Bits';
import { PLATFORMS, TYPES2, ALSO, FIT, CATALOG, MODELS, INCLUDED, STEPS2, CFAQ, SITE, HERO_SHOTS, SVC_SLUGS } from '@/lib/data';
const hasThumb = (slug) => { try { return fs.existsSync(path.join(process.cwd(), 'public', 'services', 'thumbs', slug + '.webp')); } catch { return false; } };
export const metadata = { title: 'Web Development Services | Drupal, Shopify, React, E-commerce', description: 'Freelance web development: business sites, online stores, NGO, education and hospital websites, Drupal, Shopify, React and Next.js, migration, speed, SEO and support.', alternates: { canonical: '/services' } };
export default function Services() {
  return (<>
    <section className="hero"><div className="w hh">
      <div><h1><span className="ln" style={{ '--i': 0 }}><span>Websites that</span></span><span className="ln" style={{ '--i': 1 }}><span>win customers.</span></span></h1>
        <div className="cyc" aria-hidden="true">{['Online stores', 'NGO and school sites', 'Clinic and business sites'].map((c, i) => <span key={c} style={{ '--i': i }}>{c}</span>)}</div>
        <p className="lead" style={{ fontSize: '1.2rem' }}>I design, build and maintain websites on Drupal, Shopify, React and Next.js, and on other platforms when your project needs them. From first idea to launch and support.</p>
        <div className="row"><Link className="btn p" href="/contact">Get a free quote</Link><a className="btn" href={SITE.wa}>WhatsApp me</a><Link className="btn" href="/work">See live projects</Link></div></div>
      <div className="hm" aria-hidden="true">
        <div className="bw"><div className="bb"><i /><i /><i /><span className="hu">{HERO_SHOTS.map(([id, n, k, u], q) => <em key={id} style={{ '--i': q }}>{u}</em>)}</span></div>
          <div className="hms">{HERO_SHOTS.map(([id], q) => <img key={id} className="hmi" style={{ '--i': q }} src={'/work/' + id + '-t.webp'} alt="" width="800" height="383" decoding="async" loading={q === 0 ? 'eager' : 'lazy'} />)}</div>
          <div className="hmc">{HERO_SHOTS.map(([id, n, k], q) => <span key={id} style={{ '--i': q }}><b>{n}</b><small>{k}</small></span>)}<u className="live">Live site</u></div></div>
        <div className="hmp"><div className="hmps">{HERO_SHOTS.map(([id], q) => <img key={id} className="hmi" style={{ '--i': q }} src={'/work/' + id + '-m.webp'} alt="" width="267" height="581" decoding="async" loading="lazy" />)}</div></div>
        {['Fast', 'Mobile-ready', 'SEO-ready'].map((b, k) => <span key={b} className="bdg" style={{ '--k': k, ...[{ top: -6, right: -10 }, { top: '38%', left: -26 }, { bottom: -30, left: 30 }][k] }}>{b}</span>)}
      </div>
    </div></section>

    <section className="sec"><div className="w"><div data-r><h2>Every kind of website.</h2><p className="lead">Hover or focus a card to see what is usually included.</p></div>
      <div className="types xl2" data-r>{TYPES2.map(([t, d, l, im]) => <div className="ty" tabIndex="0" key={t}><img className="tyi" src={'/services/' + im + '.webp'} alt="" width="720" height="940" loading="lazy" decoding="async" /><h3>{t}</h3><p>{d}</p><Chips a={l} /></div>)}</div>
      <p className="mu" data-r style={{ marginTop: 26 }}>Also built: {ALSO.join(', ')}. If your idea is not listed, ask.</p></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w" style={{ textAlign: 'center' }}><h2 data-r>Your platform, your choice.</h2><p className="lead" data-r style={{ margin: '18px auto 0' }}>I use the platform that fits your goal, your team and your budget. Here is how I choose.</p>
      <div className="orbw" data-r><div className="orb" role="img" aria-label={'Platforms: ' + PLATFORMS.join(', ')}><b>Any<br />stack</b>{PLATFORMS.map((p, i) => <span key={p} style={{ '--a': `${(360 / PLATFORMS.length) * i}deg` }}><i style={{ '--h': i * 50 + 20 }}>{p}</i></span>)}</div></div>
      <div className="fit" style={{ textAlign: 'left' }}>{FIT.map(([t, tag, h, l], i) => <div key={t} data-r style={{ '--h': h, '--d': i }}><small>{tag}</small><h3>{t}</h3><ul>{l.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div></div></section>

    <section className="sec"><div className="w"><h2 data-r>What I can do for you.</h2><p className="lead" data-r style={{ marginBottom: 30 }}>Twelve services, each with what you actually get.</p>
      {CATALOG.map(([t, who, d, l], i) => { const sl = SVC_SLUGS[i]; const th = sl && hasThumb(sl); const n = String(i + 1).padStart(2, '0'); return (<article className={'svc' + (th ? ' has-t' : '')} key={t} data-r tabIndex="0">{th ? <div className="svt"><img src={'/services/thumbs/' + sl + '.webp'} alt="" width="240" height="240" loading="lazy" decoding="async" /><b>{n}</b></div> : <b>{n}</b>}<div><h3>{t}</h3><small>For {who.toLowerCase()}</small><p className="mu" style={{ marginTop: 8 }}>{d}</p></div><Chips a={l} /></article>); })}</div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w"><h2 data-r>How we can work together.</h2><p className="lead" data-r>Scope and timeline are agreed before work starts. Ask for a quote for the right fit.</p>
      <div className="mdl">{MODELS.map(([t, d, b], i) => <div key={t} data-r style={{ '--d': i }}><small>{b}</small><h3 style={{ margin: '8px 0' }}>{t}</h3><p className="mu">{d}</p></div>)}</div></div></section>

    <section className="sec"><div className="w g2" style={{ alignItems: 'start', marginTop: 0 }}><div data-r><h2>From idea to live site.</h2><p className="lead">Six steps. At each one you know what I am doing and what you will receive.</p></div>
      <div className="tl">{STEPS2.map(([t, d, y], i) => <div key={t} data-r style={{ '--d': i % 3 }}><h3>{t}</h3><p className="mu">{d}</p><span className="yg">You get: {y}</span></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w" data-r><h2>Included in every project.</h2><p className="lead">The basics are never an extra.</p><div className="stp">{INCLUDED.map((x, k) => <div key={x} style={{ '--k': k }}>{x}</div>)}</div></div></section>

    <section className="sec"><div className="w g2" style={{ alignItems: 'start', marginTop: 0 }}><div data-r><h2>Client questions.</h2><p className="lead">Short answers before we talk.</p></div><div data-r>{CFAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="sec" style={{ paddingTop: 0 }}><div className="w" data-r><div className="glow pic"><div><img className="ctab" src="/services/cta.webp" alt="" width="2000" height="851" loading="lazy" decoding="async" /><h2>Tell me about your website.</h2><p className="lead">Share your idea, platform and timeline. I reply with questions and a clear proposal.</p>
      <div className="row"><Link className="btn p" href="/contact">Get a free quote</Link><a className="btn" href={SITE.wa}>WhatsApp</a><a className="btn" href={'mailto:' + SITE.email}>Email</a></div></div></div></div></section>
  </>);
}