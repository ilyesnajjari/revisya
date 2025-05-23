import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'katex/dist/katex.min.css';

import {
  fichesMaths,
  fichesPhysique,
  fichesInfo,
  fichesChimie,
  fichesKholles,
  Fiche
} from '../../data/fiches';
import '../../styles/index.css';

const matieres = ['Mathématiques', 'Physique', 'Informatique', 'Chimie', 'Kholles'];
const niveaux = ['Tous', 'Lycée', 'Prépa', 'Université'];
const triOptions = ['Titre (A-Z)', 'Date (récent)'];

const fichesParMatiere: Record<string, Fiche[]> = {
  Mathématiques: fichesMaths,
  Physique: fichesPhysique,
  Informatique: fichesInfo,
  Chimie: fichesChimie,
  Kholles: fichesKholles,
};

type Niveau = "Lycée" | "Prépa" | "Université" | "Tous";

export default function FichesPage() {
  const router = useRouter();
  const { matiere: matiereQuery, page: pageQuery } = router.query;

  const [matiereActive, setMatiereActive] = useState('Mathématiques');
  const [niveauFiltre, setNiveauFiltre] = useState<Niveau>('Tous');
  const [recherche, setRecherche] = useState('');
  const [tri, setTri] = useState('Titre (A-Z)');
  const [filtreTag, setFiltreTag] = useState('');
  const [filtrePopulaire, setFiltrePopulaire] = useState(false);
  const [pageCourante, setPageCourante] = useState(1);

  const fiches = fichesParMatiere[matiereActive] || [];
  const tagsDisponibles = Array.from(new Set(fiches.flatMap(f => f.tags || [])));
  const fichesParPage = 10;

  // Initialisation des états à partir des paramètres URL (une seule fois ou à chaque changement URL)
  useEffect(() => {
    if (matiereQuery && typeof matiereQuery === 'string' && matieres.includes(matiereQuery)) {
      setMatiereActive(matiereQuery);
    }
    if (pageQuery && !isNaN(Number(pageQuery))) {
      const p = Number(pageQuery);
      if (p >= 1) setPageCourante(p);
    }
  }, [matiereQuery, pageQuery]);

  // Synchronisation URL quand matiereActive ou pageCourante changent
  useEffect(() => {
    router.push(
      `/fiches?matiere=${encodeURIComponent(matiereActive)}&page=${pageCourante}`,
      undefined,
      { shallow: true }
    );
  }, [matiereActive, pageCourante]);

  // Réinitialiser les filtres
  const resetFilters = () => {
    setNiveauFiltre('Tous');
    setRecherche('');
    setTri('Titre (A-Z)');
    setFiltreTag('');
    setFiltrePopulaire(false);
    setPageCourante(1);
  };

  const fichesFiltres = useMemo(() => {
    const search = recherche.toLowerCase();

    let res = fiches
      .filter(f => 
        niveauFiltre === 'Tous' || f.niveau.includes(niveauFiltre)
      )
      .filter(f => 
        f.titre.toLowerCase().includes(search) || 
        f.matiere.toLowerCase().includes(search) || 
        f.niveau.some(niveau => niveau.toLowerCase().includes(search)) || 
        (f.tags && f.tags.some(tag => tag.toLowerCase().includes(search)))
      );

    if (filtreTag) res = res.filter(f => f.tags?.includes(filtreTag));
    if (filtrePopulaire) res = res.filter(f => f.populaire);

    if (tri === 'Titre (A-Z)') res.sort((a, b) => a.titre.localeCompare(b.titre));
    if (tri === 'Date (récent)') res.sort((a, b) => (b.datePublication || '').localeCompare(a.datePublication || ''));

    return res;
  }, [fiches, niveauFiltre, recherche, tri, filtreTag, filtrePopulaire]);

  const totalPages = Math.ceil(fichesFiltres.length / fichesParPage);
  const fichesAffichees = fichesFiltres.slice((pageCourante - 1) * fichesParPage, pageCourante * fichesParPage);

  return (
    <>
      <Head>
        <title>{`Fiches de Révision - ${matiereActive}`}</title>
        <meta name="description" content={`Fiches de révision en ${matiereActive} pour tous les niveaux.`} />
      </Head>
      <Header />

      <main className="fiches-main">
        {/* Menu latéral sticky */}
        <aside className="fiches-aside">
          <h2 className="fiches-aside-title">Matières</h2>
          <ul className="fiches-aside-list">
            {matieres.map((matiere) => (
              <li key={matiere}>
                <button
                  className={`fiches-aside-btn${matiere === matiereActive ? ' active' : ''}`}
                  onClick={() => { setMatiereActive(matiere); setPageCourante(1); setFiltreTag(''); }}
                >
                  {matiere}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenu principal */}
        <section className="fiches-section">
          <h1 className="fiches-title">{`Fiches de ${matiereActive}`}</h1>

          {/* Filtres */}
          <div className="fiches-filtres">
            <select value={niveauFiltre} onChange={(e) => { setNiveauFiltre(e.target.value as Niveau); setPageCourante(1); }} className="fiches-filtre-select">
              {niveaux.map((niveau) => (
                <option key={niveau} value={niveau}>{niveau}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Rechercher une fiche..."
              value={recherche}
              onChange={(e) => { setRecherche(e.target.value); setPageCourante(1); }}
              className="fiches-filtre-input"
            />

            <select value={tri} onChange={(e) => setTri(e.target.value)} className="fiches-filtre-select">
              {triOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            <select value={filtreTag} onChange={(e) => { setFiltreTag(e.target.value); setPageCourante(1); }} className="fiches-filtre-select">
              <option value="">Tous les tags</option>
              {tagsDisponibles.map(tag => <option key={tag} value={tag}>{tag}</option>)}
            </select>

            <label className="fiches-filtre-checkbox">
              <input
                type="checkbox"
                checked={filtrePopulaire}
                onChange={() => { setFiltrePopulaire(!filtrePopulaire); setPageCourante(1); }}
              />
              Populaires
            </label>

            <button onClick={resetFilters} className="fiches-filtre-reset-btn">
              Réinitialiser
            </button>
          </div>

          {/* Liste des fiches */}
          <ul className="fiches-list">
            {fichesAffichees.map((fiche) => (
              <li key={fiche.id} className="fiche-card">
                <Link href={`/fiches/${fiche.id}`} className="fiche-link">
                  {fiche.titre}
                </Link>
                <p className="fiche-niveau">{fiche.niveau.join(' - ')}</p>

                {fiche.tags && (
                  <div className="fiche-tags">
                    {fiche.tags.map((tag) => (
                      <span key={tag} className="fiche-tag">#{tag}</span>
                    ))}
                  </div>
                )}

                <div className="fiche-labels">
                  {fiche.populaire && <span className="fiche-label-populaire">Populaire</span>}
                  {fiche.aReviser && <span className="fiche-label-reviser">À réviser bientôt</span>}
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="fiches-pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPageCourante(num)}
                className={`fiches-pagination-btn${num === pageCourante ? ' active' : ''}`}
              >
                {num}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
