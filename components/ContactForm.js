'use client';
import { useState } from 'react';
import { SITE } from '@/lib/data';
const SV = ['Full-time role', 'Contract role', 'Interview request', 'Other'];
const F = ({ k, l, err, ...r }) => <label>{l}<input name={k} aria-invalid={!!err[k]} {...r} /><span className="er" role="alert">{err[k]}</span></label>;
export default function ContactForm() {
  const [err, setErr] = useState({}), [done, setDone] = useState(false);
  function go(e) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)); if (d.web) return;
    const er = {}; if (!d.n.trim()) er.n = 'Enter your name.'; if (!/^\S+@\S+\.\S+$/.test(d.e)) er.e = 'Enter a valid email address.'; if (!d.d.trim()) er.d = 'Add a short message or the job description.';
    setErr(er); if (Object.keys(er).length) return;
    const body = `Name: ${d.n}\nEmail: ${d.e}\nCompany: ${d.c}\nRole: ${d.r}\nType: ${d.s}\n\n${d.d}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(d.s + (d.r ? ': ' + d.r : ''))}&body=${encodeURIComponent(body)}`; setDone(true);
  }
  return (<form onSubmit={go} noValidate>
    <F err={err} k="n" l="Your name" autoComplete="name" /><F err={err} k="e" l="Work email" type="email" autoComplete="email" />
    <F err={err} k="c" l="Company (optional)" autoComplete="organization" /><F err={err} k="r" l="Role title (optional)" placeholder="e.g. Drupal Developer" />
    <label className="full">Type<select name="s" defaultValue={SV[0]}>{SV.map(x => <option key={x}>{x}</option>)}</select></label>
    <label className="full">Message or job description<textarea name="d" rows="5" aria-invalid={!!err.d} /><span className="er" role="alert">{err.d}</span></label>
    <div className="hpw" aria-hidden="true"><input name="web" tabIndex="-1" autoComplete="off" /></div>
    <div className="full"><button className="btn p" type="submit">Send message</button>{done && <p role="status" className="mu" style={{ marginTop: 12 }}>Your email app opened with the details. You can also message me on WhatsApp.</p>}</div></form>);
}
