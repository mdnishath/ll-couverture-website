/**
 * Content-Security-Policy
 *
 * `unsafe-inline` reste nécessaire pour les scripts : Next.js injecte un
 * bootstrap inline et les données structurées JSON-LD sont inlinées. Les
 * supprimer imposerait un nonce par requête, donc un rendu dynamique — ce qui
 * ferait perdre la génération statique de tout le site. Le site n'affiche
 * aucune donnée saisie par un visiteur, la surface XSS est donc nulle ; la
 * valeur de cette CSP tient surtout à `frame-ancestors`, `base-uri`,
 * `form-action` et `object-src`.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://api.couverturejjm.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Strict-Transport-Security est déjà posé par Vercel — ne pas le dupliquer ici.
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
