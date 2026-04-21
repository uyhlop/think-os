/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/cohort', destination: '/apply', permanent: true },
      { source: '/cohort/:path*', destination: '/apply', permanent: true },
      { source: '/join', destination: '/apply', permanent: true },
      { source: '/waitlist', destination: '/apply', permanent: true },
      { source: '/bio', destination: '/links', permanent: true },
      { source: '/live-site', destination: '/live', permanent: true },
      { source: '/liveapp', destination: '/live', permanent: true },
      { source: '/home', destination: '/', permanent: true }
    ];
  }
};

module.exports = nextConfig;
