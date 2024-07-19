/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/next-portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next-portfolio/' : '',
};

export default nextConfig;
