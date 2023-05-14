/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  i18n ,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      }),
    );
    return config;
  },
}

module.exports = nextConfig
//export default nextConfig
