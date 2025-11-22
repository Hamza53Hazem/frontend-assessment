import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// This points to the request file we just created
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

// Wrap the config with the translations plugin
export default withNextIntl(nextConfig);