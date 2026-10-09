const repo = "vecired-apps-colaborativas-uvm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;