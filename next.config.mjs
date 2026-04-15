import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV !== 'production'

const cspDirectives = [
  "default-src 'self'",
  isDev 
    ? "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com"
    : "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://images.ctfassets.net https://*.vercel.app",
  "connect-src 'self' https://formspree.io https://lottie.host https://unpkg.com https://cdn.jsdelivr.net https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.contentful.com https://*.ctfassets.net https://va.vercel-scripts.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "frame-ancestors 'self' https://app.contentful.com https://*.contentful.com",
  "object-src 'none'",
  "worker-src 'self' blob:",
]
const csp = cspDirectives.join('; ')

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Permissions-Policy',
    // Only allow what is typically needed; expand as features are added
    value:
      'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
