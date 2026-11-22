import { PageHead, Cta, Case } from '@/components/Bits';
import { WORK } from '@/lib/data';
export const metadata = { title: 'Projects and Case Studies', description: 'Live Drupal and Shopify projects: Nayan Sukh Exclusive, Oxfam Pacific, Cricket Discounts, Cric Predictor and Maltalingua.', alternates: { canonical: '/work' } };
export default function Work() {
  return (<><PageHead t="Work you can open and click." p="Five live websites. Each link goes to the real site." /><section className="sec"><div className="w">{WORK.map((w, i) => <Case key={w.n} w={w} i={i} />)}</div></section><Cta h="Like what you see?" p="Let’s talk about your project." /></>);
}
