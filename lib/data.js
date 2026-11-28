export const SITE = { url: 'https://tajdaradil.com', email: 'tajdardrupal@gmail.com', phone: '+91 7352033010', wa: 'https://wa.me/917352033010', li: 'https://linkedin.com/in/tajdaradil', gh: 'https://github.com/mdtajdaradil' };
export const NAV = [['/', 'Home'], ['/experience', 'Experience'], ['/projects', 'Projects'], ['/contact', 'Contact']];
export const CV = '/Tajdar_Adil_Resume.pdf';
// ---- Hiring details (shown on /experience). Edit freely. Set a value in HIRE_EXTRA to show it on the page; null hides it. ----
export const HIRE_EXTRA = { 'Notice period': null, 'Work mode': null, 'Relocation': 'Open to relocate', 'Expected CTC': null };
export const ROLES = [
  ['Full Stack Developer', 'Drupal 10 and PHP end to end', 215, ['Twig theming and SCSS', 'Custom modules with hooks and services', 'Content architecture: Views, Paragraphs, Webforms', 'REST API integration', 'Git, Composer, Drush, Pantheon deploys'], 'Ships features from template to module to release, and debugs what breaks in production.'],
  ['Shopify Developer', 'Liquid themes and store logic', 38, ['Custom sections, PDP, PLP, collections', 'Metafields, Variants, Dynamic Sources', 'Razorpay, COD, partial payments', 'Shipping, reviews, order tracking', 'Speed: fewer scripts, lighter images'], 'Runs a live store for a real client: requirements, features, fixes and support.'],
  ['Frontend Developer', 'Responsive and accessible UI', 150, ['HTML5, CSS3, SCSS, Bootstrap 5', 'JavaScript ES6+ and jQuery', 'Responsive layouts, cross-browser checks', 'Accessibility and SEO basics', 'React and Next.js (growing)'], 'Turns designs into fast, clean pages, and keeps layout shift and script weight low.'],
];
export const PROBLEMS = [
  ['The store loads slowly', 'Cut third-party script load, optimized images, fixed JavaScript and CSS issues and reduced layout shift on a live Shopify store.'],
  ['Editors need a developer for every page', 'Set up Layout Builder, Paragraphs, Views and Webforms so editors build and update pages without code (Oxfam Pacific).'],
  ['Features break after changes', 'Debugged module conflicts, routing, permissions, caching and database issues on Drupal sites.'],
  ['An old Drupal 7 site must move', 'Migrated Maltalingua from Drupal 7 to 10, with theme, modules, responsive design and accessibility work.'],
  ['Customers pay in Indian ways', 'Integrated Razorpay, cash on delivery, partial payments, shipping and order tracking.'],
  ['The site needs live data', 'Brought cricket data into Cric Predictor through REST APIs, with custom content types and Views.'],
];
export const TIERS = [
  ['Daily work', 215, ['Drupal 10', 'PHP', 'Twig', 'JavaScript ES6+', 'HTML5', 'CSS3 and SCSS', 'MySQL', 'Shopify Liquid', 'Git']],
  ['Comfortable', 38, ['Drupal Commerce', 'Layout Builder', 'Composer', 'Drush', 'Pantheon', 'Docker', 'REST APIs', 'Bootstrap 5', 'jQuery', 'Figma']],
  ['Growing', 150, ['React.js', 'Next.js (this portfolio)', 'Tailwind CSS', 'Cursor AI workflow']],
];
export const PLAN = [
  [30, 'Days 1 to 30', 'Learn the codebase and workflow', ['Set up the project, Git and deploy flow', 'Fix small bugs and ship first tasks', 'Learn how the team reviews and releases']],
  [60, 'Days 31 to 60', 'Own features', ['Build features end to end', 'Write modules or theme components', 'Raise issues early, with a proposed fix']],
  [90, 'Days 61 to 90', 'Own an area', ['Take responsibility for a module, theme or store area', 'Improve speed, accessibility and SEO', 'Document what I built for the team']],
];
export const HIRE_FAQ = [
  ['Are you open to relocating?', 'Yes. I am based in Ranchi and open to relocating for the right full-time role. I am also open to remote work.'],
  ['What roles are you looking for?', 'Full Stack Developer, Drupal Developer, Shopify Developer or Frontend Developer roles.'],
  ['What is your strongest area?', 'Drupal 10 with PHP and Twig, then Shopify with Liquid. These are what I use every day on live projects.'],
  ['Have you worked with real clients?', 'Yes. I run a freelance Shopify project for a designer-eyewear store, and I have built Drupal sites for nonprofit, e-commerce, sports and education clients.'],
  ['How do you learn new tools?', 'On the job. I learned Drupal 7 to 10 migration and Drupal Commerce as projects needed them, and I built this portfolio in Next.js.'],
  ['How can I see your work?', 'All five projects on the Work page are live. Each has a link to the real site.'],
];

// ================= HOME (job view) =================
export const PILLARS = [
  ['Ships to production', 'Live Drupal 10 sites and a Shopify store, released through Pantheon Dev, Test and Live.'],
  ['Owns the problem', 'Debugs module conflicts, routing, permissions, caching and database issues instead of waiting for help.'],
  ['Cares about quality', 'Works on performance, security, accessibility, SEO and cross-browser behaviour, not only on features.'],
  ['Learns on the job', 'Picked up Drupal 7 to 10 migration and Drupal Commerce as projects needed them, and built this portfolio in Next.js.'],
];
export const JOURNEY = [
  ['Jan 2024', 'Frontend Developer Intern', 'Responsive pages and UI bugs; learned Drupal and Git with senior developers.'],
  ['Jul 2024', 'Full Stack Developer', 'Drupal 10 sites, custom modules and Pantheon deployments at Next Geeks.'],
  ['Oct 2025', 'Freelance Shopify Developer', 'A live designer-eyewear store, from new features to production support.'],
  ['2026', 'Next.js and beyond', 'Built this portfolio in Next.js and keep growing in React.'],
];
// ================= ABOUT (shown on /experience) =================
export const CHAPTERS = [
  ['2021 – Jan 2024', 'Learning the foundations', 'I studied a Bachelor of Computer Applications at Radha Govind University, Ranchi (2021 – 2024). In January 2024, while finishing my degree, I joined Next Geeks as a Frontend Developer Intern.'],
  ['Jan – Jun 2024', 'First real projects', 'I built responsive pages with HTML5, CSS3, Bootstrap and JavaScript, fixed UI bugs, and learned Drupal and Git workflows by working next to senior developers.'],
  ['Jul 2024 – Oct 2026', 'Becoming full stack', 'At Next Geeks I moved to full stack work on Drupal 10: Twig themes, custom PHP modules, content architecture, REST APIs and Pantheon deployments. I also learned Drupal 7 to 10 migration and Drupal Commerce as projects needed them.'],
  ['Oct 2025 – Oct 2026', 'Running a live store', 'I took on a freelance Shopify project for a designer-eyewear brand: custom sections, product pages, lens customization, Razorpay and COD, speed work and ongoing support.'],
  ['Now', 'Looking ahead', 'I built this portfolio in Next.js and keep growing in React. I want a full-time role in a team where I can build, own and learn, and I take on select freelance projects.'],
];
// ================= EXPERIENCE (in-depth) =================
// Facts here come from your existing data. Fields set to null are hidden on the page: fill them with real numbers when you have them.
export const SNAPSHOT = [
  ['Target role', 'Full Stack / Drupal / Shopify Developer'],
  ['Experience', '34 months on live projects (Jan 2024 – Oct 2026)'],
  ['Core stack', 'Drupal 10, PHP, Twig, SCSS, Shopify Liquid'],
  ['Location', 'Ranchi, India · open to relocate or remote'],
  ['Availability', 'Open to full-time roles'],
  ['Education', 'BCA, Radha Govind University (2021 – 2024)'],
];
export const EXP_KPI = [[34, 'months', 'of professional work'], [3, '', 'roles held'], [5, '', 'live websites'], [1, '', 'Drupal 7 → 10 migration']];
export const TLDR = [
  'Started as a frontend intern (Jan 2024) and was moved to a full stack developer role at Next Geeks in Jul 2024.',
  'Builds and ships Drupal 10 sites and a live Shopify store, with Pantheon Dev → Test → Live releases.',
  'Takes ownership of production bugs, speed, accessibility and SEO, and learns new tools while delivering.',
];
export const JOBS2 = [
  { h: 215, role: 'Full Stack Developer', org: 'Next Geeks', place: 'Ranchi', type: 'Full-time', when: 'Jul 2024 – Oct 2026', len: '2 yrs 4 mos',
    sum: 'Delivered Drupal 10 websites end to end for nonprofit, e-commerce, sports and education clients: theme, content architecture, custom code, deployment and production support.',
    own: [
      ['Frontend', 'Twig templates, HTML5, CSS3, SCSS, Bootstrap, JavaScript and jQuery; reusable and accessible components.'],
      ['Backend', 'PHP custom modules with hooks, services and APIs; REST and third-party integrations; MySQL.'],
      ['Content architecture', 'Content types, taxonomy, Views, Paragraphs, Webforms, Media and Layout Builder, so editors work without code.'],
      ['Delivery', 'Git, Composer and Drush; releases through Pantheon Dev, Test and Live.'],
      ['Quality', 'Debugging, performance, security, accessibility, SEO and cross-browser behaviour.'],
    ],
    wins: [
      ['Editors depended on developers', 'Built content types, Layout Builder, Paragraphs and Views on Oxfam Pacific.', 'Editors build and update pages themselves, without touching code.'],
      ['An old Drupal 7 site had to move', 'Rebuilt the theme, reconfigured modules and reworked responsive design and accessibility for Maltalingua.', 'The site now runs on Drupal 10.'],
      ['Live data had to reach the site', 'Created custom content types and Views, and pulled cricket data in through REST APIs for Cric Predictor.', 'A prediction site fed by live data.'],
      ['Production bugs blocked releases', 'Traced module conflicts, routing, permission, caching and database issues to their cause.', 'Fixes shipped through the Dev, Test and Live flow.'],
    ],
    stack: ['Drupal 10', 'PHP', 'Twig', 'SCSS', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL', 'REST APIs', 'Git', 'Composer', 'Drush', 'Pantheon'],
    learned: ['Drupal 7 to 10 migration', 'Drupal Commerce', 'Working in a team release flow'],
    proof: ['oxfampacific.org', 'cricketdiscounts.com', 'cricpredictor.com', 'maltalingua.com'], metric: null },
  { h: 38, role: 'Freelance Shopify Developer', org: 'Nayan Sukh Exclusive', place: 'Ranchi', type: 'Freelance', when: 'Oct 2025 – Oct 2026', len: '1 yr 1 mo',
    sum: 'Developed and maintained a live designer-eyewear store alone: gathered requirements from the client, built features, shipped fixes and gave production support.',
    own: [
      ['Storefront', 'Custom sections, product pages (PDP), listing pages (PLP) and collection pages in Liquid on the Dawn theme.'],
      ['Customization', 'Wishlist and lens customization using Metafields, variants and dynamic sources.'],
      ['Payments and orders', 'Razorpay, cash on delivery, partial payments, shipping, reviews and order tracking.'],
      ['Speed', 'Fewer third-party scripts, optimized images and less layout shift.'],
      ['Client work', 'Requirements, delivery, fixes and ongoing support.'],
    ],
    wins: [
      ['Customers pay in Indian ways', 'Integrated Razorpay, COD and partial payments with shipping and tracking.', 'Customers can pay and follow their order in the way they prefer.'],
      ['Eyewear needs lens choices', 'Built lens customization and wishlist with Metafields.', 'Shoppers pick lens options on the product page.'],
      ['The store felt slow', 'Removed extra third-party scripts, optimized images and fixed layout shift.', 'A lighter, steadier page load.'],
    ],
    stack: ['Shopify', 'Liquid', 'Dawn', 'JavaScript', 'HTML5', 'CSS3', 'Metafields', 'Razorpay'],
    learned: ['Owning a client project alone', 'Requirement gathering', 'Production support'],
    proof: ['nayansukhexclusive.com'], metric: null },
  { h: 150, role: 'Frontend Developer Intern', org: 'Next Geeks', place: 'Ranchi', type: 'Internship', when: 'Jan 2024 – Jun 2024', len: '6 mos',
    sum: 'Joined while finishing my BCA. Built responsive pages, fixed UI bugs and learned Drupal and Git workflows beside senior developers. Moved to full stack in Jul 2024.',
    own: [
      ['Pages', 'Responsive layouts in HTML5, CSS3, Bootstrap and JavaScript.'],
      ['Bug fixing', 'UI and cross-browser fixes on real projects.'],
      ['Workflow', 'Git branches, reviews and the first steps in Drupal.'],
    ],
    wins: [['Intern to full stack', 'Learned Drupal and Git from senior developers while delivering pages.', 'Offered the full stack developer role in Jul 2024.']],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git', 'Drupal basics'],
    learned: ['Git workflow', 'Drupal fundamentals', 'Code review'], proof: [], metric: null },
];
export const EDU = { deg: 'Bachelor of Computer Applications (BCA)', uni: 'Radha Govind University, Ranchi', yrs: '2021 – 2024', note: 'Started professional work during the final year, in Jan 2024.' };
export const VERIFY = { items: ['Employer, title and dates on this page match my CV', 'Every project on the Work page is live to open', 'References available on request'], note: null };

// ================= WORK (in-depth) =================
// shot: desktop screenshot in /public/work/. shotM: optional mobile screenshot shown in a phone frame. Both null shows an animated mock.
export const CASES = [
  { id: 'nayan', n: 'Nayan Sukh Exclusive', k: 'Shopify store', u: 'nayansukhexclusive.com', p: 'shopify', h: 38, yr: 'Oct 2025 – Oct 2026', role: 'Freelance Shopify developer (sole developer)', shot: '/work/nayan.webp', thumb: '/work/nayan-t.webp', shotM: '/work/nayan-m.webp',
    ctx: 'A designer-eyewear brand in Ranchi that sells online and needed a store that handles lens choices and Indian payment habits.',
    ch: ['Eyewear needs lens options and a wishlist on every product', 'Customers expect Razorpay, COD and partial payment', 'Third-party scripts and images were slowing pages'],
    sol: ['Custom Liquid sections on Dawn for PDP, PLP and collections', 'Lens customization and wishlist built on Metafields and variants', 'Razorpay, COD, partial payments, shipping, reviews and tracking', 'Script clean-up, optimized images and layout-shift fixes'],
    flow: ['Requirements', 'Sections and PDP', 'Payments', 'Speed pass', 'Support'],
    stack: ['Shopify', 'Liquid', 'Dawn', 'JavaScript', 'Metafields', 'Razorpay'],
    out: ['Live store I still maintain', 'Client-facing work: requirements to production support'], metric: null,
    shows: 'That I can own a store alone, from client brief to production support.' },
  { id: 'oxfam', n: 'Oxfam Pacific', k: 'Drupal 10 nonprofit', u: 'oxfampacific.org', p: 'drupal', h: 215, yr: 'Next Geeks', role: 'Full Stack Developer (theme and content architecture)', shot: '/work/oxfam.webp', thumb: '/work/oxfam-t.webp', shotM: '/work/oxfam-m.webp',
    ctx: 'A nonprofit website for the Pacific region whose editors need to publish and rearrange pages on their own.',
    ch: ['Editors should not wait for a developer for every page', 'Components must be reusable and accessible', 'Content must stay easy to find'],
    sol: ['Halpes theme with Twig overrides', 'Reusable, accessible components', 'Layout Builder and Paragraphs for flexible pages', 'Views and Webforms for listings and enquiries'],
    flow: ['Content model', 'Twig theme', 'Components', 'Editor setup', 'Release via Pantheon'],
    stack: ['Drupal 10', 'Twig', 'Layout Builder', 'Paragraphs', 'Views', 'Webforms'],
    out: ['Editors build and update pages without code', 'Components reused across pages'], metric: null,
    shows: 'That I design for editors, not only for developers.' },
  { id: 'cricketdiscounts', n: 'Cricket Discounts', k: 'Drupal Commerce', u: 'cricketdiscounts.com', p: 'drupal', h: 150, yr: 'Next Geeks', role: 'Full Stack Developer', shot: '/work/cricketdiscounts.webp', thumb: '/work/cricketdiscounts-t.webp', shotM: '/work/cricketdiscounts-m.webp',
    ctx: 'An e-commerce site that sells cricket merchandise and needs a browsable catalog.',
    ch: ['Shoppers must narrow a large catalog quickly', 'Search engines must be able to find product pages'],
    sol: ['Product catalogs with filters', 'User login and a blog', 'On-page SEO'],
    flow: ['Catalog model', 'Filters', 'Accounts and blog', 'SEO', 'Release'],
    stack: ['Drupal Commerce', 'PHP', 'Twig', 'Views'],
    out: ['A working Drupal Commerce store', 'Where I learned Commerce on the job'], metric: null,
    shows: 'That I pick up a new Drupal module family as a project needs it.' },
  { id: 'cricpredictor', n: 'Cric Predictor', k: 'Drupal and REST API', u: 'cricpredictor.com', p: 'drupal', h: 280, yr: 'Next Geeks', role: 'Full Stack Developer (data and content model)', shot: '/work/cricpredictor.webp', thumb: '/work/cricpredictor-t.webp', shotM: '/work/cricpredictor-m.webp',
    ctx: 'A cricket prediction site that shows live match data instead of hand-typed content.',
    ch: ['Data comes from outside the site', 'Match, team and prediction content need structure'],
    sol: ['Custom content types and taxonomy', 'Views and Paragraphs to present the data', 'REST API integration for live cricket data'],
    flow: ['Data model', 'API fetch', 'Views', 'Page layout', 'Release'],
    stack: ['Drupal 10', 'REST APIs', 'Views', 'Paragraphs', 'Taxonomy'],
    out: ['Pages fed by live data', 'A clean content model behind them'], metric: null,
    shows: 'That I can connect Drupal to outside APIs and structure the data.' },
  { id: 'maltalingua', n: 'Maltalingua', k: 'Drupal 7 to 10 migration', u: 'maltalingua.com', p: 'drupal', h: 330, yr: 'Next Geeks', role: 'Full Stack Developer (migration and theme)', shot: null,
    ctx: 'A language-learning site that was still running on Drupal 7.',
    ch: ['Drupal 7 is old and hard to keep secure', 'Theme and modules had to be rebuilt for Drupal 10', 'The old layout was weak on small screens'],
    sol: ['Theme customization on Drupal 10', 'Module configuration', 'Better responsive design and accessibility'],
    flow: ['Audit', 'Modules', 'Theme rebuild', 'Responsive and a11y', 'Release'],
    stack: ['Drupal 7', 'Drupal 10', 'PHP', 'Twig'],
    out: ['Site now on Drupal 10', 'Responsive and more accessible'], metric: null,
    shows: 'That I can move a legacy site to a modern version.' },
];
export const WORK_KPI = [[5, '', 'live websites'], [2, '', 'platforms: Drupal and Shopify'], [1, '', 'Drupal 7 → 10 migration'], [4, '', 'Drupal sites for real clients']];
export const WORK_FILTERS = [['all', 'All projects'], ['drupal', 'Drupal'], ['shopify', 'Shopify']];
