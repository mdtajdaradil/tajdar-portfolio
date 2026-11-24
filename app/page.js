import Link from 'next/link';
import { Chips, Case, Cta } from '@/components/Bits';
import { TECH, WORK, JOBS, TIERS, PILLARS, JOURNEY, DAILYWORK, SITE } from '@/lib/data';
const CODE = [
  [['tk', 'const '], ['', 'tajdar = {']],
  [['', '  role: '], ['ts', '"Full Stack Developer"'], ['', ',']],
  [['', '  stack: '], ['ts', '["Drupal", "Shopify", "PHP"]'], ['', ',']],
  [['', '  experience: '], ['ts', '"nearly 3 years"'], ['', ',']],
  [['', '  education: '], ['ts', '"BCA"'], ['', ',']],
  [['', '  liveSites: '], ['tk', '5'], ['', ',']],
  [['', '  location: '], ['ts', '"Ranchi, India"'], ['', ',']],
  [['', '  relocate: '], ['tk', 'true'], ['', ',']],
  [['', '  openTo: '], ['ts', '"full-time roles"'], ['', ',']],
  [['', '};']],
];
const TAGS = [['Drupal 10', 'Twig', 'PHP', 'Pantheon'], ['Shopify', 'Liquid', 'Razorpay', 'Speed'], ['HTML5', 'CSS3', 'Bootstrap', 'Git']], HUE = [215, 38, 150];
const DOTS = [[20, 190], [360, 120], [650, 80], [980, 30]], SPEED = ['44s', '52s', '36s'];
export default function Home() {
  return (<>
    <section className="hero hhome"><div className="w hh">
      <div>
        <span className="st"><i />Open to full-time roles</span>
        <h1 style={{ marginTop: 20 }}><span className="ln" style={{ '--i': 0 }}><span>Hi, I’m Tajdar.</span></span><span className="ln" style={{ '--i': 1 }}><span>Full Stack</span></span><span className="ln" style={{ '--i': 2 }}><span>Developer.</span></span></h1>
        <div className="cyc" aria-hidden="true">{['Drupal 10 and PHP', 'Shopify and Liquid', 'Twig, SCSS and JavaScript'].map((c, i) => <span key={c} style={{ '--i': i }}>{c}</span>)}</div>
        <p className="lead">Nearly 3 years of live Drupal 10 and Shopify work: custom modules, themes, payments, deployments and production support. I am looking for a team where I can build, own and grow.</p>
        <div className="row"><a className="btn p" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a><Link className="btn" href="/hire-me">Why hire me</Link><Link className="btn" href="/contact">Contact</Link></div>
        <p className="mu" style={{ marginTop: 16 }}>Need a website instead? <Link href="/services" style={{ color: 'var(--ac)' }}>See my freelance services</Link>.</p>
      </div>
      <div className="hv"><div className="cl" aria-label="Profile summary"><div><i /><i /><i /></div><pre>{CODE.map((l, i) => <span key={i} className={i === CODE.length - 1 ? 'cur' : undefined} style={{ '--c': l.reduce((n, [, t]) => n + t.length, 0), '--i': i }}>{l.map(([c, t], j) => <b key={j} className={c || undefined}>{t}</b>)}</span>)}</pre></div>
      </div>
    </div>
    <div className="mq" aria-hidden="true"><div>{[...TECH, ...TECH].map((t, i) => <span key={i}>{t}</span>)}</div></div></section>

    <section className="sec"><div className="w"><h2 data-r>What a team gets.</h2><p className="lead" data-r>Four things you can expect from me from the first sprint.</p>
      <div className="pil">{PILLARS.map(([t, d], i) => <div key={t} data-r style={{ '--d': i }}><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w" data-r><h2>My path so far.</h2><p className="lead">From frontend intern to full stack developer in under three years.</p>
      <svg className="jsv" viewBox="0 0 1000 220" role="img" aria-label="Career path from 2024 to 2026"><path className="jp" pathLength="1" d="M20 190 C190 190 210 120 360 120 S540 80 650 80 S880 30 980 30" />{DOTS.map(([x, y], k) => <circle key={k} className="jd" cx={x} cy={y} r="11" style={{ '--k': k }} />)}</svg>
      <div className="jl">{JOURNEY.map(([d, t, p]) => <div key={t}><small>{d}</small><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

    <section className="sec"><div className="w xp"><div className="xp-l" data-r><h2>Experience that shipped.</h2><p className="lead">Intern to full stack developer, plus a live freelance store, all on real client projects.</p>
      <div className="kpi"><div><b>3 yrs</b><span>building</span></div><div><b>5</b><span>live sites</span></div><div><b>3</b><span>roles held</span></div></div>
      <div className="row"><Link className="btn p" href="/experience">Full experience</Link><a className="btn" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a></div></div>
      <ol className="jobs">{JOBS.map(([r, c, d, l], i) => <li className="job" key={r} data-r style={{ '--h': HUE[i], '--d': i }}><span className="when">{d}</span><h3>{r}</h3><p className="mu">{c}</p><ul><li>{l[0]}</li><li>{l[1]}</li></ul><Chips a={TAGS[i]} /></li>)}</ol></div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w" data-r><h2>Tools I work with.</h2><p className="lead">Each lane moves at its own pace, sorted by how often I use the tools. Hover to pause.</p></div>
      <div className="w">{TIERS.map(([t, h, a], i) => <div key={t}><div className="rwl" style={{ '--h': h }}>{t}</div><div className="rw" style={{ '--h': h }}><div className={'rwt' + (i === 1 ? ' rv' : '')} style={{ '--t': SPEED[i] }}><ul>{a.concat(a, a).map((x, j) => <li key={j}>{x}</li>)}</ul><ul aria-hidden="true">{a.concat(a, a).map((x, j) => <li key={j}>{x}</li>)}</ul></div></div></div>)}</div></section>

    <section className="sec"><div className="w"><h2 data-r>Work I can walk you through.</h2><p className="lead" data-r style={{ marginBottom: 40 }}>Five live projects. Open any link and ask me how it was built.</p>{WORK.map((w, i) => <Case key={w.n} w={w} i={i} />)}</div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w" data-r><h2>What I do day to day.</h2><p className="lead">The work from my current role, as a checklist.</p>
      <ul className="ck">{DAILYWORK.map((x, k) => <li key={x} style={{ '--k': k }}><svg viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7" /></svg><span>{x}</span></li>)}</ul></div></section>

    <Cta img="/cta/home.webp" eyebrow="Open to full-time roles" kind="hire" flush={false} h="Hiring a Full Stack Developer?" p="Send me the role. I reply by email or WhatsApp." />
  </>);
}