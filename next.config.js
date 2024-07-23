/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    // Warning: Ignoring build errors to speed up deployments.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: Ignoring linter errors during build to speed up deployments.
    ignoreDuringBuilds: true,
  },
};

export default config;
