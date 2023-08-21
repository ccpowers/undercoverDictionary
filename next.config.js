/** @type {import('next').NextConfig} */
const nodeExternals = require('webpack-node-externals');

const nextConfig =  {
  externals: [nodeExternals()],
};
module.exports = nextConfig
