module.exports = { extends: ["@commitlint/config-conventional"] };

const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "dv3twlinm",
  api_key: "573568887222329",
  api_secret: "BdNMSVu4bBkSX3IJz24_V79pSTI",
});
