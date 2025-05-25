// filepath: /pages/_app.tsx

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
