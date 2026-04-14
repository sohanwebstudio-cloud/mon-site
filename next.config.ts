import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/les-prestations",
        destination: "/prestations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
