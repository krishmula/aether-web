import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        // Long-lived caching for the demo video + poster. They're served from
        // /public so they aren't content-hashed; bump the filename if you swap
        // either asset to bust the CDN cache.
        source: "/:file(demo\\.mp4|demo-poster\\.jpg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
