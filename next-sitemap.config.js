/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://theeraphong.com', // 👈 เปลี่ยนเป็น URL ของคุณ
  generateRobotsTxt: true, // สร้าง robots.txt ให้ด้วย
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
};
