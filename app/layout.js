import './globals.css';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Motion from '@/components/Motion';
import { SITE } from '@/lib/data';
const fd = Bricolage_Grotesque({ subsets: ['latin'], variable: '--fd', display: 'swap', weight: ['700', '800'] });
const fb = Manrope({ subsets: ['latin'], variable: '--fb', display: 'swap' });
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Tajdar Adil | Full Stack Web Developer for Drupal, Shopify and Custom Websites', template: '%s | Tajdar Adil' },
  description: 'Full Stack Web Developer in Ranchi, India. I build e-commerce, NGO, education, hospital and business websites on Drupal, Shopify, WordPress, React, Next.js and Laravel.',
  alternates: { canonical: '/' }, openGraph: { type: 'website', url: SITE.url, siteName: 'Tajdar Adil', title: 'Tajdar Adil | Full Stack Web Developer', description: 'Websites and online stores on Drupal, Shopify, React, Next.js and more.' },
  robots: { index: true, follow: true }
};
export const viewport = { themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F6F7FB' }, { media: '(prefers-color-scheme: dark)', color: '#0A0F1F' }] };
const ld = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Person', name: 'Md. Tajdar Adil', url: SITE.url, jobTitle: 'Full Stack Web Developer', email: SITE.email, address: { '@type': 'PostalAddress', addressLocality: 'Ranchi', addressCountry: 'IN' }, sameAs: [SITE.li, SITE.gh] },
  { '@type': 'ProfessionalService', name: 'Tajdar Adil Web Development', url: SITE.url, areaServed: 'Worldwide', telephone: SITE.phone, serviceType: ['Drupal development', 'Shopify development', 'E-commerce development', 'Website development'] }] };
export default function Root({ children }) {
  return (<html lang="en" className={`${fd.variable} ${fb.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}setTimeout(function(){if(!window.__rv)document.documentElement.classList.remove('js')},6000)" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></head>
    <body><div className="prog" aria-hidden="true" /><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{children}</main>
      <footer><div className="w"><span>© 2026 Md. Tajdar Adil · tajdaradil.com</span><span><a href={SITE.li}>LinkedIn</a> · <a href={SITE.gh}>GitHub</a> · <a href={'mailto:' + SITE.email}>Email</a></span></div></footer>
      <a className="wa" href={SITE.wa} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></a><Motion /></body></html>);
}