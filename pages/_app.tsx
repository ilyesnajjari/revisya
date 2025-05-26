import "../styles/Footer.css";
import "../styles/Header.css";
import "../styles/SearchFiches.css";
import "../styles/index.css";
import "../styles/contact.css";
import "../styles/cours.css";
import "../styles/fiche-detail.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!GA_ID) return;
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_ID, { page_path: url });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
  <link rel="icon" href="/logo_revisya.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_revisya.png" sizes="180x180" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
