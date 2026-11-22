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
  robots: { index: true, follow: true }, themeColor: '#0A0F1F',
};
const ld = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Person', name: 'Md. Tajdar Adil', url: SITE.url, jobTitle: 'Full Stack Web Developer', email: SITE.email, address: { '@type': 'PostalAddress', addressLocality: 'Ranchi', addressCountry: 'IN' }, sameAs: [SITE.li, SITE.gh] },
  { '@type': 'ProfessionalService', name: 'Tajdar Adil Web Development', url: SITE.url, areaServed: 'Worldwide', telephone: SITE.phone, serviceType: ['Drupal development', 'Shopify development', 'E-commerce development', 'Website development'] }] };
export default function Root({ children }) {
  return (<html lang="en" className={`${fd.variable} ${fb.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></head>
    <body><div className="prog" aria-hidden="true" /><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{children}</main>
      <footer><div className="w"><span>© 2026 Md. Tajdar Adil · tajdaradil.com</span><span><a href={SITE.li}>LinkedIn</a> · <a href={SITE.gh}>GitHub</a> · <a href={'mailto:' + SITE.email}>Email</a></span></div></footer>
      <a className="wa" href={SITE.wa} aria-label="Chat on WhatsApp">WhatsApp</a><Motion /></body></html>);
}
