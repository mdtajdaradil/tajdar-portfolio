import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import { SITE, STEPS, CASES } from '@/lib/data';
const hasImg = src => { try { return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, ''))); } catch { return false; } };
export const Chips = ({ a }) => <ul className="chips">{a.map(x => <li key={x}>{x}</li>)}</ul>;
export const Cta = ({ img, eyebrow, h = 'Hiring a developer or planning a website?', p = 'Tell me what you need. I reply by email or WhatsApp.', kind = 'client', primary, flush = true, pos }) => {
  const ok = img && hasImg(img);
  const mail = 'mailto:' + SITE.email;
  const acts = kind === 'hire'
    ? [['p', primary || 'Email me', mail + '?subject=Job opportunity'], ['', 'WhatsApp', SITE.wa], ['', 'View CV', '/Tajdar_Adil_Resume.pdf', true]]
    : [['p', primary || 'Start a project', '/contact', false, true], ['', 'WhatsApp', SITE.wa], ['', 'Email', mail]];
  return (
    <section className={'sec ctb' + (flush ? ' ctf' : '')}><div className="w" data-r>
      <div className={'glow pic' + (ok ? '' : ' noimg')}><div>
        {ok && <img className="ctab" src={img} alt="" width="1600" height="727" loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />}
        {eyebrow && <span className="ceb"><i />{eyebrow}</span>}
        <h2>{h}</h2><p className="lead">{p}</p>
        <div className="row">{acts.map(([c, t, u, blank, internal]) => internal
          ? <Link key={t} className={'btn ' + c} href={u}>{t}</Link>
          : <a key={t} className={'btn ' + c} href={u} {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t}</a>)}</div>
        <p className="cmt">Ranchi, India · I reply by email or WhatsApp</p>
      </div></div>
    </div></section>);
};
export const Process = () => (<div className="tl">{STEPS.map(([t, d], i) => <div key={t} data-r style={{ '--d': i % 3 }}><h3>{t}</h3><p className="mu">{d}</p></div>)}</div>);
export const PageHead = ({ t, p }) => (<section className="ph"><div className="w"><h1 style={{ maxWidth: '16ch' }}>{t}</h1><p className="lead" style={{ fontSize: '1.3rem' }}>{p}</p></div></section>);
export const Case = ({ w, i }) => { const c = CASES.find(x => x.u === w.u); return (<article className="stk" style={{ '--h': w.h, '--i': i }}><div><small>{w.k}</small><h3>{w.n}</h3><p className="mu">{w.d}</p><Chips a={w.s} /><p style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: '8px 22px' }}><a className="lk" href={'https://' + w.u} target="_blank" rel="noopener noreferrer">Visit {w.u}</a>{c && <Link className="lk" href={'/work#' + c.id}>Read case study</Link>}</p></div><div className="cdr">{c && c.thumb && <a className="cth" href={'https://' + w.u} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + w.n}><img src={c.thumb} alt={w.n + ' homepage'} width="800" height="390" decoding="async" loading={i < 1 ? 'eager' : 'lazy'} /></a>}<ul>{w.l.map(x => <li key={x}>{x}</li>)}</ul></div></article>); };