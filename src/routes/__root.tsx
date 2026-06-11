import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCallBar } from "@/components/site/MobileCallBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1>404</h1>
        <h2 className="mt-2 text-xl">Page not found</h2>
        <p className="mt-2 text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page did not load</h1>
        <p className="mt-2 text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1E4D4F" },
      { title: "Vision Plus Eyecare | Opticians in Hull, Holderness Road" },
      { name: "description", content: "Independent opticians on Holderness Road, Hull. NHS and private eye exams, designer frames, contact lenses and children's myopia management. Call 01482 225545." },
      { property: "og:site_name", content: "Vision Plus Eyecare" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vision Plus Eyecare | Opticians in Hull" },
      { property: "og:description", content: "Independent opticians on Holderness Road, Hull. NHS and private eye care." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Optician",
        name: "Vision Plus Eyecare",
        image: "https://www.visionplus-eyecare.co.uk/",
        telephone: "+44 1482 225545",
        email: "info@visionplus-eyecare.co.uk",
        priceRange: "££",
        address: {
          "@type": "PostalAddress",
          streetAddress: "283 Holderness Road",
          addressLocality: "Hull",
          postalCode: "HU8 8TE",
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: 53.7552, longitude: -0.3116 },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          opens: "09:30", closes: "17:30",
        }],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </QueryClientProvider>
  );
}
