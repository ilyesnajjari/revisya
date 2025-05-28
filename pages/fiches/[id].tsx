import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fiches } from '../../data/fiches';
import 'katex/dist/katex.min.css';
import { SITE_URL } from '../../config';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useEffect } from 'react';

export default function FicheDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Ajoute cette ligne pour forcer le remount quand l'id change
  useEffect(() => {}, [id]);

  if (!id) {
    return <p>Chargement...</p>;
  }

  const fiche = fiches.find((f) => f.id === String(id));

  if (!fiche) {
    return <p>Fiche non trouvée.</p>;
  }

  // URL absolue dynamique basée sur la config
  const url = `${SITE_URL}/fiches/${fiche.id}`;

  return (
    <>
      <Head>
        <title>{fiche.titre} - {fiche.matiere}</title>
        <meta
          name="description"
          content={`Fiche de révision sur ${fiche.titre} en ${fiche.matiere} : ${fiche.contenu.slice(0, 150)}...`}
        />
        <meta
          name="keywords"
          content={fiche.tags && fiche.tags.length > 0 ? fiche.tags.join(', ') : `${fiche.titre}, ${fiche.matiere}`}
        />
        <link rel="canonical" href={`https://www.revisya.fr/fiches/${fiche.id}`} />
        <meta property="og:title" content={`${fiche.titre} - ${fiche.matiere} | Fiche de Révision`} />
        <meta property="og:description" content={`Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${fiche.titre} - ${fiche.matiere} | Fiche de Révision`} />
        <meta name="twitter:description" content={`Fiche de révision complète sur ${fiche.titre} en ${fiche.matiere}.`} />
        {/* Liens meta supplémentaires */}
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="author" content="Ton Site" />
        <meta name="keywords" content={fiche.tags ? fiche.tags.join(', ') : fiche.titre} />
        {/* Ajout d'un lien meta sur le contenu */}
        <meta name="content" content={fiche.contenu.slice(0, 200).replace(/\n/g, ' ') + '...'} />

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
          onClick={() => {
            // Redirection simple et fiable vers la liste des fiches
            window.location.href = '/fiches';
          }}
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

      {/* Bulle flottante de signalement */}
      <Link
        href={`/fiches/${fiche.id}/report`}
        className="report-bubble"
        aria-label="Signaler un problème"
      >
        <span className="report-bubble-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" fill="#fff3cd" stroke="#f59e42"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="#f59e42"/>
            <circle cx="12" cy="16" r="1" fill="#f59e42" stroke="#f59e42"/>
          </svg>
        </span>
        <span className="report-bubble-text">
          Signaler un problème<br />
          <small>
            Si une notion manque ou si tu trouves une erreur, clique ici&nbsp;!
          </small>
        </span>
      </Link>
    </>
  );
}

