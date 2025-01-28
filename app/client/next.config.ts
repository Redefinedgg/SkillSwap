import type { NextConfig } from "next";
import path from "path";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  // webpackDevMiddleware: (config: any) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },

  webpack: (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
