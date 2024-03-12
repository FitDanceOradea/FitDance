/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  serverRuntimeConfig: {
    // Increase the maximum payload size limit to 10MB
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};
