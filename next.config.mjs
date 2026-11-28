export default {
  reactStrictMode: true, poweredByHeader: false, compress: true,
  async redirects() {
    return [['/work', '/projects'], ['/about', '/experience'], ['/hire-me', '/experience'], ['/services', '/contact']].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};
