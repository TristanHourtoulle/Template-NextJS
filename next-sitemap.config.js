/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tristanhourtoulle.fr", // Votre URL de base
  generateRobotsTxt: true, // Générer un fichier robots.txt
  sitemapSize: 5000, // Nombre maximal d'URL par fichier sitemap
  changefreq: "daily", // Fréquence de changement des pages
  priority: 0.7, // Priorité par défaut des pages
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
  // Options supplémentaires
};
