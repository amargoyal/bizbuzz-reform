/** @type {import('next').NextConfig} */

// This copy of the site is published to GitHub Pages, which is a plain static
// host: no Next server, and the site lives under a /<repo> path prefix rather
// than at the domain root. BASE_PATH is supplied by the deploy workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  basePath,
  // Pages resolves /camps by looking for camps/index.html, so emit directories
  // rather than sibling .html files.
  trailingSlash: true,
  images: {
    // No Next image optimizer exists on a static host, and the default loader
    // drops basePath from /public sources.
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
