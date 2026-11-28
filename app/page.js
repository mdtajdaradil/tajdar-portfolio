import Link from 'next/link';
import { Chips, Head, Actions, Cta, ProjectCard } from '@/components/Bits';
import { SNAPSHOT, EXP_KPI, PILLARS, TIERS, CASES, JOURNEY } from '@/lib/data';
const K = ({ c, children }) => <b className={'k' + c}>{children}</b>;
const ABOUT = [
  <>Nice to meet you! I’m Tajdar, a <K c="g">Full Stack Developer</K> from Ranchi.</>,
  <>For nearly <K c="y">3 years</K> I have worked on <K c="b">live client projects</K>: nonprofit, e-commerce, sports and education sites.</>,
  <>Every day I work in <K c="g">Drupal 10</K>, <K c="b">PHP</K> and <K c="y">Twig</K>: custom modules, content architecture and <K c="r">Pantheon</K> releases.</>,
  <>On my own I run a <K c="g">Shopify</K> store in <K c="b">Liquid</K>, with <K c="y">Razorpay</K>, COD and speed work.</>,
  <>Now I’m looking for a <K c="g">full-time role</K> where I can <K c="r">build</K>, <K c="b">own</K> and <K c="y">grow</K>.</>,
];
const FEATURED = ['nayan', 'oxfam', 'cricpredictor'].map(id => CASES.find(c => c.id === id));
export default function Home() {
  return (<>
    <section className="hero">
      <span className="bgw" aria-hidden="true">develop</span>
      <div className="w hc">
        <span className="tag">home</span>
        <h1>Hi, I’m Tajdar, a <em>full stack</em> developer</h1>
        <p className="lead">I build and ship Drupal 10 sites and Shopify stores, from Twig and Liquid templates to custom PHP modules, payments and production support.</p>
        <Actions />
      </div>
      <div className="w"><div className="win ed" data-r>
        <div className="wh"><span>about-me.md</span><i /><i /><i /></div>
        <ol>{ABOUT.map((l, i) => <li key={i}>{l}</li>)}</ol>
      </div></div>
    </section>
    <section className="sec"><div className="w split">
      <div><Head k="snapshot" t="The 30-second version." p="Everything a recruiter usually asks first." /></div>
      <dl className="snap win">{SNAPSHOT.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
    </div></section>

    <section className="kpis"><div className="w"><ul>{EXP_KPI.map(([n, s, l]) => <li key={l}><b>{n}{s && <small> {s}</small>}</b><span>{l}</span></li>)}</ul></div></section>

    <section className="sec"><div className="w"><Head k="Why me" t="What a team gets." p="What you can expect from me from the first sprint." />
      <div className="g4">{PILLARS.map(([t, d], i) => <div key={t} className="card" data-r style={{ '--d': i }}><span className="num">0{i + 1}</span><h3>{t}</h3><p className="mu">{d}</p></div>)}</div></div></section>

    <section className="sec alt"><div className="w"><Head k="Skills" t="Tools I work with." p="Grouped by how often I use them." />
      <div className="tiers">{TIERS.map(([t, , a]) => <div key={t} className="tier" data-r><h3>{t}</h3><Chips a={a} /></div>)}</div></div></section>

    <section className="sec"><div className="w"><div className="hrow"><Head k="Selected work" t="Live projects you can open." /><Link className="lk" href="/projects">All 5 case studies →</Link></div>
      <div className="g3">{FEATURED.map((c, i) => <ProjectCard key={c.id} c={c} i={i} />)}</div></div></section>

    <section className="sec alt"><div className="w"><div className="hrow"><Head k="Experience" t="From intern to full stack developer." /><Link className="lk" href="/experience">Full experience →</Link></div>
      <ol className="tl">{JOURNEY.map(([d, t, p]) => <li key={t} data-r><time>{d}</time><div><h3>{t}</h3><p className="mu">{p}</p></div></li>)}</ol></div></section>

    <Cta />
  </>);
}
