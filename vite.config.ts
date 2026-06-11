// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "cloudflare-module",
    routeRules: {
      "/lenses": { redirect: { to: "/services/frames-and-lenses", statusCode: 301 } },
      "/lenses/": { redirect: { to: "/services/frames-and-lenses", statusCode: 301 } },
      "/frames": { redirect: { to: "/services/frames-and-lenses", statusCode: 301 } },
      "/frames/": { redirect: { to: "/services/frames-and-lenses", statusCode: 301 } },
      "/contact-lenses": { redirect: { to: "/services/contact-lenses", statusCode: 301 } },
      "/contact-lenses/": { redirect: { to: "/services/contact-lenses", statusCode: 301 } },
      "/sunglasses": { redirect: { to: "/services/sunglasses", statusCode: 301 } },
      "/sunglasses/": { redirect: { to: "/services/sunglasses", statusCode: 301 } },
      "/eye-tests": { redirect: { to: "/services/nhs-eye-exams", statusCode: 301 } },
      "/eye-tests/": { redirect: { to: "/services/nhs-eye-exams", statusCode: 301 } },
      "/contact-lens-examinations": { redirect: { to: "/services/contact-lenses", statusCode: 301 } },
      "/contact-lens-examinations/": { redirect: { to: "/services/contact-lenses", statusCode: 301 } },
      "/eye-care": { redirect: { to: "/", statusCode: 301 } },
      "/eye-care/": { redirect: { to: "/", statusCode: 301 } },
      "/myopia-management": { redirect: { to: "/services/childrens-eyecare", statusCode: 301 } },
      "/myopia-management/": { redirect: { to: "/services/childrens-eyecare", statusCode: 301 } },
      "/regular-eye-examinations": { redirect: { to: "/services/nhs-eye-exams", statusCode: 301 } },
      "/regular-eye-examinations/": { redirect: { to: "/services/nhs-eye-exams", statusCode: 301 } },
      "/make-appointment": { redirect: { to: "/contact", statusCode: 301 } },
      "/make-appointment/": { redirect: { to: "/contact", statusCode: 301 } },
    },
  },
});
