import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fiches de Révision - Prépa & Lycée</title>
        <meta
          name="description"
          content="Fiches de révision gratuites pour classes préparatoires scientifiques, économiques et lycée. Idéal pour réussir vos concours et examens."
        />
      </Head>
      <main className="min-h-screen p-6 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur Mon Site de Révision</h1>
        <p className="text-lg mb-6">
          Retrouvez des fiches synthétiques et claires pour réussir en prépa et au lycée.
        </p>
        <a
          href="/fiches"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Voir les Fiches
        </a>
      </main>
    </>
  );
}
