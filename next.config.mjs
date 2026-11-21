/** @type {import('next').NextConfig} */
const preview = process.env.NEXT_PUBLIC_PREVIEW === '1';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Normal build: /about/ style URLs. Preview build: flat about.html files with relative assets,
  // so the static site can be opened from any folder or sub-path.
  trailingSlash: !preview,
  ...(preview ? { assetPrefix: '/__rel__' } : {}),
};
export default nextConfig;
