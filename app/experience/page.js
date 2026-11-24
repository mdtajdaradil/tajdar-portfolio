import Link from 'next/link';
import { Chips, Cta } from '@/components/Bits';
import { Tilt } from '@/components/Fx';
import { SITE, SNAPSHOT, EXP_KPI, TLDR, JOBS2, GANTT, EDU, VERIFY } from '@/lib/data';
export const metadata = { title: 'Experience', description: 'Full Stack Developer at Next Geeks, freelance Shopify developer and frontend intern. 34 months of live Drupal 10 and Shopify work, with responsibilities, results and tools for every role.', alternates: { canonical: '/experience' } };
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const mo = i => MON[i % 12] + ' ' + (2024 + Math.floor(i / 12));
const N = 34; // months from Jan 2024 to Oct 2026
export default function Experience() {
  return (<>
    <section className="ph xh"><div className="w xhg">
      <div>
        <span className="st"><i />Open to full-time roles</span>
        <h1 style={{ marginTop: 20, maxWidth: '14ch' }}><span className="ln" style={{ '--i': 0 }}><span>Nearly three</span></span><span className="ln" style={{ '--i': 1 }}><span>years. Three</span></span><span className="ln" style={{ '--i': 2 }}><span>roles. Shipped.</span></span></h1>
        <p className="lead" style={{ fontSize: '1.2rem' }}>Every role below lists what I owned, the problems I solved and the tools I used, so you can judge fit in minutes.</p>
        <ul className="tld">{TLDR.map((t, i) => <li key={t} style={{ '--k': i }}>{t}</li>)}</ul>
        <div className="row"><a className="btn p" href="/Tajdar_Adil_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a><a className="btn" href="#roles">Jump to roles</a></div>
      </div>
      <Tilt className="snp" max={4}>
        <small>Recruiter snapshot</small><h2>Md. Tajdar Adil</h2>
        <dl>{SNAPSHOT.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
        <div className="row" style={{ marginTop: 20 }}><a className="btn p" href={'mailto:' + SITE.email + '?subject=Job opportunity'}>Email</a><a className="btn" href={SITE.wa}>WhatsApp</a><a className="btn" href={SITE.li}>LinkedIn</a></div>
      </Tilt>
    </div></section>

    <section className="sec" style={{ paddingTop: 40 }}><div className="w"><div className="xk" data-r>{EXP_KPI.map(([n, s, l], i) => <div key={l}><span className="sr">{n} {s} {l}</span><span className="cnt" aria-hidden="true" data-s={s ? ' ' + s : ''} style={{ '--to': n }} /><p className="mu">{l}</p></div>)}</div></div></section>

    <section className="sec" id="roles" style={{ paddingTop: 20 }}><div className="w">
      <h2 data-r>Role by role.</h2><p className="lead" data-r>Newest first. Each card shows ownership, selected wins and tools.</p>
      <div className="ct">{JOBS2.map(j => (
        <Tilt key={j.role + j.when} className="jb" data-r style={{ '--h': j.h }} max={3}>
          <div className="jbh"><span className="when">{j.when}</span><span className="pl2">{j.len}</span><span className="pl2">{j.type}</span></div>
          <h2>{j.role}</h2><p className="mu"><b style={{ color: 'var(--tx)' }}>{j.org}</b> · {j.place}</p>
          <p className="jsum">{j.sum}</p>
          <div className="jg">
            <div><h3>What I owned</h3><dl className="own">{j.own.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></div>
            <div><h3>Selected wins</h3><ol className="wn">{j.wins.map(([p, a, r]) => <li key={p}><b>{p}</b><span><i>Did</i>{a}</span><span><i>Result</i>{r}</span></li>)}</ol></div>
          </div>
          {j.metric && <p className="mtr">{j.metric}</p>}
          <div className="jf"><div><small>Tools used</small><Chips a={j.stack} /></div><div><small>What I learned</small><Chips a={j.learned} /></div></div>
          {j.proof.length > 0 && <p className="prf"><small>Live proof</small>{j.proof.map(u => <a key={u} className="lk" href={'https://' + u} target="_blank" rel="noopener noreferrer">{u}</a>)}</p>}
        </Tilt>))}</div>
    </div></section>

    <section className="sec" style={{ background: 'var(--sf)' }}><div className="w">
      <h2 data-r>When I used what.</h2><p className="lead" data-r>Each bar is a stretch of real project work, from Jan 2024 to Oct 2026.</p>
      <div className="gt" data-r>
        <div className="gax" aria-hidden="true">{[['2024', 0], ['2025', 12], ['2026', 24]].map(([y, m]) => <span key={y} style={{ left: m / N * 100 + '%' }}>{y}</span>)}</div>
        <div className="lanes">{GANTT.map(([n, s, e, h], k) => <div key={n}><div className="lt"><b>{n}</b><span>{mo(s)} – {mo(e)}</span></div><div className="trk"><i className="bar" style={{ '--h': h, '--k': k, left: s / N * 100 + '%', width: (e - s + 1) / N * 100 + '%' }} /></div></div>)}</div>
      </div>
    </div></section>

    <section className="sec"><div className="w"><div className="eg">
      <div className="ec" data-r><small>Education</small><h3>{EDU.deg}</h3><p className="mu">{EDU.uni} · {EDU.yrs}</p><p style={{ marginTop: 10 }}>{EDU.note}</p></div>
      <div className="ec" data-r style={{ '--d': 1 }}><small>Easy to verify</small><h3>Nothing here is hard to check.</h3><ul className="vf">{VERIFY.items.map(x => <li key={x}>{x}</li>)}</ul>{VERIFY.note && <p className="mu">{VERIFY.note}</p>}</div>
    </div>
    <div className="row" data-r><Link className="btn p" href="/work">See the five live projects</Link><Link className="btn" href="/hire-me">Why hire me</Link></div></div></section>
    <Cta h="Looking to hire a Full Stack Developer?" p="Send me the role details. I reply by email or WhatsApp." />
  </>);
}