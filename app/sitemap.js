import { NAV, SITE } from '@/lib/data';
export default () => NAV.map(([h]) => ({ url: SITE.url + (h === '/' ? '' : h), changeFrequency: 'monthly', priority: h === '/' ? 1 : .7 }));
