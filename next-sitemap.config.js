/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.blognlp.com" || "https://blognlp.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: "https://blognlp.com",
      hreflang: "en",
    },
  ],
  // ...other options
};
