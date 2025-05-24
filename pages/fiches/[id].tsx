import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fiches } from '../../data/fiches';
import 'katex/dist/katex.min.css';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function FicheDetail() {
  const router = useRouter();
  const { id } = router.query;

  const fiche = fiches.find((f) => f.id === id);

  if (!fiche) {
    return <p>Fiche non trouvée.</p>;
  }

  // URL absolue dynamique (à remplacer par ton vrai domaine)
  const url = `https://ton-site.com/fiches/${fiche.id}`;

  return (
    <>
      <Head>
        <title>{fiche.titre} - {fiche.matiere}</title>
        <meta
          name="description"
          content={`Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}, pour bien préparer tes examens.`}
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${fiche.titre} - ${fiche.matiere} | Fiche de Révision`} />
        <meta property="og:description" content={`Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${fiche.titre} - ${fiche.matiere} | Fiche de Révision`} />
        <meta name="twitter:description" content={`Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}.`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: fiche.titre,
              description: `Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}.`,
              url,
              author: {
                "@type": "Organization",
                name: "Ton Site",
              },
              mainEntityOfPage: url,
            }),
          }}
        />
      </Head>
      <Header />

      <main className="fiche-detail-main">
        <button
          type="button"
          className="fiche-retour-btn"
          onClick={() => router.back()}
        >
          ← Retour aux fiches
        </button>
        <h1 className="fiche-detail-title">{fiche.titre}</h1>
        <span className="fiche-categorie">{fiche.categorie}</span>
        <p className="fiche-detail-niveau">{fiche.niveau.join(' - ')}</p>

        {fiche.tags && (
          <div className="fiche-detail-tags">
            {fiche.tags.map((tag) => (
              <span key={tag} className="fiche-detail-tag">#{tag}</span>
            ))}
          </div>
        )}

        <div className="fiche-detail-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {fiche.contenu}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
}
