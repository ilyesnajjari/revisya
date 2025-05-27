import "../globals.css";

import "../styles/Footer.css";
import "../styles/Header.css";
import "../styles/SearchFiches.css";
import "../styles/index.css";
import "../styles/contact.css";
import "../styles/cours.css";
import "../styles/fiche-detail.css";
import "../styles/SimulateurCommun.css";
import "../styles/CompteAReboursModal.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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

      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
