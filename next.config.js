module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/",
  },
  assetPrefix: '.', 
};


const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/my-project'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};