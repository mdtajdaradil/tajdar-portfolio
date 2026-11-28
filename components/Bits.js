import Link from 'next/link';
import { SITE, CV } from '@/lib/data';
const ext = { target: '_blank', rel: 'noopener noreferrer' };
export const Chips = ({ a }) => <ul className="chips">{a.map(x => <li key={x}>{x}</li>)}</ul>;
export const Head = ({ k, t, p }) => (<div className="hd" data-r>{k && <span className="eb">{k}</span>}<h2>{t}</h2>{p && <p className="lead">{p}</p>}</div>);
export const PageHead = ({ k, t, p, children }) => (<section className="ph"><div className="w">{k && <span className="st"><i />{k}</span>}<h1>{t}</h1>{p && <p className="lead">{p}</p>}{children}</div></section>);
export const Actions = ({ more = true }) => (<div className="row">
  <a className="btn p" href={CV} {...ext}>Download CV</a>
  <a className="btn" href={'mailto:' + SITE.email + '?subject=Job opportunity'}>Email me</a>
  {more && <a className="btn" href={SITE.li} {...ext}>LinkedIn</a>}
</div>);
export const Cta = ({ h = 'Hiring a Full Stack Developer?', p = 'Send me the role. I reply within a day by email or WhatsApp.' }) => (
  <section className="sec"><div className="w"><div className="cta" data-r>
    <div><h2>{h}</h2><p className="lead">{p}</p><p className="cmt">Ranchi, India · Open to relocate or remote · Available for full-time roles</p></div>
    <div className="row"><a className="btn p" href={'mailto:' + SITE.email + '?subject=Job opportunity'}>Email me</a><a className="btn" href={SITE.wa} {...ext}>WhatsApp</a><a className="btn" href={CV} {...ext}>View CV</a></div>
  </div></div></section>);
export const ProjectCard = ({ c, i }) => (<article className="pc card" data-r style={{ '--d': i }}>
  {c.thumb && <Link href={'/projects#' + c.id} className="pt" tabIndex={-1} aria-hidden="true"><img src={c.thumb} alt="" width="800" height="390" loading="lazy" decoding="async" /></Link>}
  <div className="pb"><small>{c.k}</small><h3><Link href={'/projects#' + c.id}>{c.n}</Link></h3><p className="mu">{c.shows}</p><Chips a={c.stack.slice(0, 4)} />
    <p className="pl"><Link className="lk" href={'/projects#' + c.id}>Case study</Link><a className="lk" href={'https://' + c.u} {...ext}>{c.u} ↗</a></p></div>
</article>);
