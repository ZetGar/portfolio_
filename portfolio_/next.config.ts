import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // @ts-expect-error: appDir는 experimental 타입에 없음
    appDir: true,
  },
  output: undefined,
};

export default nextConfig;
