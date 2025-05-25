// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr"> {/* <-- corrige aussi l'erreur de "lang" manquant */}
        <Head>
          <meta
            name="google-site-verification"
            content="5nANXr2L6_eGycf6iHvDMvrqu02gtCbo18CcE-5-pDw"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
