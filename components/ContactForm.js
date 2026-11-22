'use client';
import { useState } from 'react';
import { SITE } from '@/lib/data';
const SV = ['Custom Website', 'Drupal', 'Shopify', 'WordPress', 'React / Next.js', 'Laravel', 'E-commerce', 'Redesign', 'API Integration', 'Maintenance', 'Migration', 'Hiring me full-time', 'Other'];
const F = ({ k, l, err, ...r }) => <label>{l}<input name={k} aria-invalid={!!err[k]} {...r} /><span className="er" role="alert">{err[k]}</span></label>;
export default function ContactForm() {
  const [err, setErr] = useState({}), [done, setDone] = useState(false);
  function go(e) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)); if (d.web) return;
    const er = {}; if (!d.n.trim()) er.n = 'Enter your name.'; if (!/^\S+@\S+\.\S+$/.test(d.e)) er.e = 'Enter a valid email address.'; if (!d.s) er.s = 'Choose a service.'; if (!d.d.trim()) er.d = 'Describe your project or role.';
    setErr(er); if (Object.keys(er).length) return;
    const body = `Name: ${d.n}\nEmail: ${d.e}\nCompany: ${d.c}\nService: ${d.s}\nBudget: ${d.b}\nTimeline: ${d.t}\n\n${d.d}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Inquiry: ' + d.s)}&body=${encodeURIComponent(body)}`; setDone(true);
  }
  return (<form onSubmit={go} noValidate>
    <F err={err} k="n" l="Full name" autoComplete="name" /><F err={err} k="e" l="Email address" type="email" autoComplete="email" /><F err={err} k="c" l="Company (optional)" />
    <label>What do you need?<select name="s" aria-invalid={!!err.s}><option value="">Select</option>{SV.map(x => <option key={x}>{x}</option>)}</select><span className="er" role="alert">{err.s}</span></label>
    <F err={err} k="b" l="Budget (optional)" placeholder="e.g. ₹25,000 – ₹50,000" /><F err={err} k="t" l="Timeline (optional)" placeholder="e.g. 4 weeks" />
    <label className="full">Project or role details<textarea name="d" rows="5" aria-invalid={!!err.d} /><span className="er" role="alert">{err.d}</span></label>
    <div className="hpw" aria-hidden="true"><input name="web" tabIndex="-1" autoComplete="off" /></div>
    <div className="full"><button className="btn p" type="submit">Send inquiry</button>{done && <p role="status" className="mu" style={{ marginTop: 12 }}>Your email app opened with the details. You can also message me on WhatsApp.</p>}</div></form>);
}
