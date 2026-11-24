import { Chips, Cta } from '@/components/Bits';
import { Tilt, WorkIndex } from '@/components/Fx';
import { CASES, WORK_KPI, WORK_FILTERS } from '@/lib/data';
export const metadata = { title: 'Projects and Case Studies', description: 'Five live Drupal and Shopify projects with the problem, my role, the build steps, tools and outcome: Nayan Sukh Exclusive, Oxfam Pacific, Cricket Discounts, Cric Predictor and Maltalingua.', alternates: { canonical: '/work' } };
const IDX = CASES.map(({ id, n, p, h }) => ({ id, n, p, h }));
export default function Work() {
  return (<>
    <section className="ph"><div className="w">
      <span className="st"><i />All five sites are live</span>
      <h1 style={{ marginTop: 20, maxWidth: '15ch' }}><span className="ln" style={{ '--i': 0 }}><span>Work you can</span></span><span className="ln" style={{ '--i': 1 }}><span>open and click.</span></span></h1>
      <p className="lead">Each case study shows the problem, my role, how it was built, the tools and what it proves. Every link goes to the real site.</p>
      <div className="xk" data-r style={{ marginTop: 36 }}>{WORK_KPI.map(([n, s, l]) => <div key={l}><span className="sr">{n} {l}</span><span className="cnt" aria-hidden="true" data-s={s} style={{ '--to': n }} /><p className="mu">{l}</p></div>)}</div>
    </div></section>

    <section className="sec" style={{ paddingTop: 50 }}><div className="w wf">
      {WORK_FILTERS.map(([v], i) => <input key={v} type="radio" name="wf" id={'f-' + v} defaultChecked={i === 0} />)}
      <div className="fbar" role="group" aria-label="Filter projects">{WORK_FILTERS.map(([v, t]) => <label key={v} htmlFor={'f-' + v}>{t}</label>)}</div>
      <div className="wk">
        <aside><WorkIndex items={IDX} /></aside>
        <div>{CASES.map((c, i) => (
          <article className="cs" id={c.id} data-p={c.p} key={c.id} style={{ '--h': c.h }}>
            <div className="csh" data-r><span className="num" aria-hidden="true">0{i + 1}</span><div><small>{c.k} · {c.yr}</small><h2>{c.n}</h2><p className="mu">{c.role}</p></div></div>
            <Tilt className="bf" data-r max={4}>
              <div className="bb"><i /><i /><i /><span>{c.u}</span></div>
              <div className={'scr' + (!c.shot && c.shotM ? ' po' : '')}>{c.shot ? <img src={c.shot} alt={c.n + ' homepage on desktop'} decoding="async" loading={i < 2 ? 'eager' : 'lazy'} /> : !c.shotM && <div className="bs mk" aria-hidden="true"><span className="sk h" /><span className="sk w" /><span className="sk s" /><div className="bg3"><span className="sk" /><span className="sk" /><span className="sk" /></div></div>}
                {c.shotM && <div className="phn"><img src={c.shotM} alt={c.n + ' homepage on mobile'} decoding="async" loading={i < 2 ? 'eager' : 'lazy'} /></div>}
                <a className="vis" href={'https://' + c.u} target="_blank" rel="noopener noreferrer">Visit live site<span className="sr"> {c.n}</span></a></div>
            </Tilt>
            <div className="cg" data-r>
              <div><h3>The context</h3><p className="mu">{c.ctx}</p><h3 style={{ marginTop: 22 }}>The challenges</h3><ul className="chl">{c.ch.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>What I built</h3><ul className="bl">{c.sol.map(x => <li key={x}>{x}</li>)}</ul></div>
            </div>
            <ol className="fw" data-r aria-label="How it was built">{c.flow.map((f, k) => <li key={f} style={{ '--k': k }}><b>{k + 1}</b><span>{f}</span></li>)}</ol>
            <div className="cg" data-r>
              <div><h3>Tools</h3><Chips a={c.stack} /></div>
              <div><h3>Outcome</h3><ul className="bl">{c.out.map(x => <li key={x}>{x}</li>)}</ul>{c.metric && <p className="mtr">{c.metric}</p>}</div>
            </div>
            <p className="shw" data-r><small>What this project shows</small>{c.shows}</p>
          </article>))}</div>
      </div>
    </div></section>
    <Cta img="/cta/work.webp" eyebrow="Live projects" h="Want to see how any of these was built?" p="Open the live site, then send me your questions." />
  </>);
}