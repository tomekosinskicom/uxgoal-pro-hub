import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CompareBar } from "@/components/CompareBar";
import { CompareProvider } from "@/lib/compare-context";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "UXGoal" },
      { property: "og:title", content: "UXGoal — Become the designer AI can't replace" },
      { property: "og:description", content: "Curated tools, practical prompts, and a skill roadmap for product designers (1–5 yrs experience) adapting to the AI era." },
      { property: "og:site_name", content: "UXGoal" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "http://uxgoal.com" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "http://uxgoal.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-E7G446CSYF", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-E7G446CSYF');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "UXGoal",
          url: "http://uxgoal.com/",
          description:
            "Curated AI tools, prompts, and a skill roadmap for UX and product designers.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <CompareProvider>
      <main>
        <Outlet />
      </main>
      <CompareBar />
      <Toaster />
    </CompareProvider>
  );
}
