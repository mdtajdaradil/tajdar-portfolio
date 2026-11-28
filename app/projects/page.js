import { Chips, Cta, PageHead } from '@/components/Bits';
import { CASES, WORK_KPI, WORK_FILTERS } from '@/lib/data';
export const metadata = { title: 'Projects and Case Studies', description: 'Five live Drupal and Shopify projects with the problem, my role, the build, tools and outcome: Nayan Sukh Exclusive, Oxfam Pacific, Cricket Discounts, Cric Predictor and Maltalingua.', alternates: { canonical: '/projects' } };
const ext = { target: '_blank', rel: 'noopener noreferrer' };
export default function Projects() {
  return (<>
    <PageHead k="All five sites are live" t="Work you can open and click." p="Each case study covers the problem, my role, what I built, the tools and the outcome. Every link goes to the real site.">
      <ul className="kpil">{WORK_KPI.map(([n, , l]) => <li key={l}><b>{n}</b> {l}</li>)}</ul>
    </PageHead>

    <section className="sec" style={{ paddingTop: 24 }}><div className="w wf">
      {WORK_FILTERS.map(([v], i) => <input key={v} type="radio" name="wf" id={'f-' + v} defaultChecked={i === 0} />)}
      <div className="fbar" role="group" aria-label="Filter projects">{WORK_FILTERS.map(([v, t]) => <label key={v} htmlFor={'f-' + v}>{t}</label>)}</div>
      <div className="cases">{CASES.map((c, i) => (
        <article className="cs card" id={c.id} data-p={c.p} key={c.id}>
          <div className="csh"><div><small className="eb">{c.k} · {c.yr}</small><h2>{c.n}</h2><p className="mu">{c.role}</p></div><a className="btn sm" href={'https://' + c.u} {...ext}>Visit {c.u} ↗</a></div>
          {c.shot ? <a className="shot" href={'https://' + c.u} {...ext} tabIndex={-1} aria-hidden="true"><img src={c.shot} alt="" decoding="async" loading={i < 1 ? 'eager' : 'lazy'} /></a> : null}
          <div className="cg">
            <div><h3>Context</h3><p className="mu">{c.ctx}</p><h3>Challenges</h3><ul className="bl">{c.ch.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><h3>What I built</h3><ul className="bl">{c.sol.map(x => <li key={x}>{x}</li>)}</ul><h3>Outcome</h3><ul className="bl">{c.out.map(x => <li key={x}>{x}</li>)}</ul>{c.metric && <p className="mtr">{c.metric}</p>}</div>
          </div>
          <div className="csf"><Chips a={c.stack} /><p className="shw"><b>What it shows:</b> {c.shows}</p></div>
        </article>))}</div>
    </div></section>
    <Cta h="Want to know how any of these was built?" p="Open the live site, then send me your questions." />
  </>);
}
