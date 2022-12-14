const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

const configuration = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins(
  [[optimizedImages, { inlineImageLimit: 1 }], [withFonts]],
  configuration
);
module.exports = {
  env: {
    API_HOST: process.env.API_HOST,
    API_DATAS: process.env.API_DATA,
    API_PRODUCTDATA: process.env.API_PRODUCTDATA,
    MONGODB_DB: process.env.MONGODB_DB,
    MONGODB_URI: process.env.MONGODB_URI,
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    USER_PATH: process.env.USER_PATH,
    UPLOAD_URL: process.env.UPLOAD_URL,
  },
  images: {
    domains: ["images.prom.ua", "cdn-icons-png.flaticon.com"],
  },
};
