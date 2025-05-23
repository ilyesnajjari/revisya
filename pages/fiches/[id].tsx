import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fiches } from '../../data/fiches';
import Link from 'next/link';
import '../../styles/fiche-detail.css';
import 'katex/dist/katex.min.css';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default function FicheDetail() {
  const router = useRouter();
  const { id, matiere } = router.query;

  const fiche = fiches.find((f) => f.id === id);

  if (!fiche) {
    return <p>Fiche non trouvée.</p>;
  }

  return (
    <>
      <Head>
        <title>{fiche.titre} - {fiche.matiere}</title>
        <meta name="description" content={`Fiche de révision sur ${fiche.titre} en ${fiche.matiere}.`} />
      </Head>
      <Header />

      <main className="fiche-detail-main">
        <Link href={`/fiches?matiere=${matiere || 'Mathématiques'}`} className="fiche-retour-btn">
          ← Retour aux fiches
        </Link>
        <h1 className="fiche-detail-title">{fiche.titre}</h1>
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
