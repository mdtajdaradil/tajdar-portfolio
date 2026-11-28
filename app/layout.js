import './globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import StatusBar from '@/components/StatusBar';
import Motion from '@/components/Motion';
import { SITE, CV } from '@/lib/data';
const fd = Space_Grotesk({ subsets: ['latin'], variable: '--fd', display: 'swap' });
const fm = JetBrains_Mono({ subsets: ['latin'], variable: '--fm', display: 'swap' });
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Tajdar Adil | Full Stack Developer (Drupal, Shopify, PHP)', template: '%s | Tajdar Adil' },
  description: 'Md. Tajdar Adil, Full Stack Developer in Ranchi, India, with nearly 3 years of live Drupal 10 and Shopify work. Open to full-time roles. See experience, projects and CV.',
  alternates: { canonical: '/' }, openGraph: { type: 'profile', url: SITE.url, siteName: 'Tajdar Adil', title: 'Tajdar Adil | Full Stack Developer', description: 'Drupal 10, Shopify and PHP developer open to full-time roles.' },
  robots: { index: true, follow: true }
};
export const viewport = { themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F4F6F2' }, { media: '(prefers-color-scheme: dark)', color: '#0D0F0D' }] };
const ld = { '@context': 'https://schema.org', '@type': 'Person', name: 'Md. Tajdar Adil', url: SITE.url, jobTitle: 'Full Stack Developer', email: SITE.email, knowsAbout: ['Drupal', 'Shopify', 'PHP', 'JavaScript', 'React', 'Next.js'], address: { '@type': 'PostalAddress', addressLocality: 'Ranchi', addressCountry: 'IN' }, sameAs: [SITE.li, SITE.gh] };
export default function Root({ children }) {
  return (<html lang="en" className={`${fd.variable} ${fm.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme')||'dark';document.documentElement.dataset.theme=t}catch(e){}" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /></head>
    <body><a className="skip" href="#main">Skip to content</a><div className="glowbg" aria-hidden="true" /><Header /><main id="main">{children}
      <footer><span>© 2026 Md. Tajdar Adil · Full Stack Developer</span><span><a href={CV}>cv.pdf</a> · <a href={SITE.li}>linkedin</a> · <a href={SITE.gh}>github</a> · <a href={'mailto:' + SITE.email}>email</a></span></footer></main>
      <StatusBar /><Motion /></body></html>);
}