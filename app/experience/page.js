import { Chips, Head, Actions, Cta, PageHead } from '@/components/Bits';
import { CASES, SNAPSHOT, TLDR, JOBS2, CHAPTERS, EDU, VERIFY, ROLES, PROBLEMS, PLAN, HIRE_FAQ, HIRE_EXTRA } from '@/lib/data';
export const metadata = { title: 'Experience and About', description: 'Full Stack Developer at Next Geeks, freelance Shopify developer and frontend intern. 34 months of live Drupal 10 and Shopify work, with responsibilities, results, tools, education and the roles I am looking for.', alternates: { canonical: '/experience' } };
const FACTS = [...SNAPSHOT, ...Object.entries(HIRE_EXTRA).filter(([, v]) => v)];
const ext = { target: '_blank', rel: 'noopener noreferrer' };
export default function Experience() {
  return (<>
    <PageHead k="Open to full-time roles" t="Nearly three years. Three roles. All shipped." p="What I owned in each role, the problems I solved and the tools I used, so you can judge fit in minutes.">
      <ul className="tld">{TLDR.map(t => <li key={t}>{t}</li>)}</ul><Actions />
    </PageHead>

    <section className="sec" id="about"><div className="w split">
      <div><Head k="About" t="The short story." />
        <div className="story" data-r>{CHAPTERS.map(([d, t, p]) => <p key={t}><b>{t}.</b> {p} <span className="mu">({d})</span></p>)}</div></div>
      <aside><dl className="snap card" data-r>{FACTS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></aside>
    </div></section>

    <section className="sec alt" id="roles"><div className="w"><Head k="Experience" t="Role by role." p="Newest first." />
      <div className="jobs">{JOBS2.map(j => (
        <article key={j.role + j.when} className="job card" data-r>
          <header className="jh"><div><h3>{j.role}</h3><p className="mu"><b>{j.org}</b> · {j.place} · {j.type}</p></div><p className="when">{j.when}<small>{j.len}</small></p></header>
          <p>{j.sum}</p>
          <div className="jg">
            <div><h4>What I owned</h4><dl className="own">{j.own.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></div>
            <div><h4>Selected wins</h4><ul className="wins">{j.wins.map(([p, a, r]) => <li key={p}><b>{p}</b><span>{a}</span><span className="res">→ {r}</span></li>)}</ul></div>
          </div>
          <div className="jf"><div><h4>Tools</h4><Chips a={j.stack} /></div>{j.proof.length > 0 && <div><h4>Live proof</h4><p className="pl">{j.proof.map(u => { const c = CASES.find(x => x.u === u); return c ? <a key={u} className="lk" href={'/projects#' + c.id}>{c.n}</a> : <a key={u} className="lk" href={'https://' + u} {...ext}>{u}</a>; })}</p></div>}</div>
        </article>))}</div>
    </div></section>

    <section className="sec"><div className="w"><Head k="Proof" t="Problems I have already solved." p="Every one comes from live work." />
      <div className="g3">{PROBLEMS.map(([p, s], i) => <div key={p} className="card" data-r style={{ '--d': i % 3 }}><h3>{p}</h3><p className="mu">{s}</p></div>)}</div></div></section>

    <section className="sec alt"><div className="w"><Head k="Fit" t="Roles I am looking for." />
      <div className="g3">{ROLES.map(([t, s, , l, why], i) => <div key={t} className="card" data-r style={{ '--d': i }}><small className="eb">{s}</small><h3>{t}</h3><ul className="bl">{l.map(x => <li key={x}>{x}</li>)}</ul><p className="mu why">{why}</p></div>)}</div></div></section>

    <section className="sec"><div className="w"><Head k="Onboarding" t="My first 90 days." />
      <ol className="g3 plan">{PLAN.map(([, t, h, l], i) => <li key={t} className="card" data-r style={{ '--d': i }}><small className="eb">{t}</small><h3>{h}</h3><ul className="bl">{l.map(x => <li key={x}>{x}</li>)}</ul></li>)}</ol></div></section>

    <section className="sec alt"><div className="w split">
      <div><Head k="Education" t={EDU.deg} p={EDU.uni + ' · ' + EDU.yrs} /><p className="mu" data-r>{EDU.note}</p>
        <h3 style={{ marginTop: 32 }}>Easy to verify</h3><ul className="bl">{VERIFY.items.map(x => <li key={x}>{x}</li>)}</ul></div>
      <div><Head k="FAQ" t="Questions HR asks." /><div className="faq" data-r>{HIRE_FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
    </div></section>

    <Cta h="Looking to hire a Full Stack Developer?" p="Send me the role details. I reply by email or WhatsApp." />
  </>);
}
