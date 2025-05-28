import { useState, useMemo, useEffect, useTransition, memo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'katex/dist/katex.min.css';
import { FaHeart, FaRegClock, FaRegCalendarCheck, FaCalculator, FaRegStickyNote } from "react-icons/fa";
import { useRouter } from 'next/router';

import { Fiche, fiches } from '../../data/fiches';
import CompteAReboursModal from '../../components/CompteAReboursModal';
import toast from "react-hot-toast";

const matieres = ['Mathématiques', 'Physique', 'Informatique', 'Chimie','Sciences de l\'Ingénieur']; 
const triOptions = ['Titre (A-Z)', 'Date (récent)'];
type Niveau = 'Tous' | 'Lycée' | 'Prépa' | 'Université';
const niveaux: Niveau[] = ['Tous', 'Lycée', 'Prépa', 'Université'];

type FicheCardProps = {
  fiche: Fiche;
  favoris: string[];
  toggleFavori: (id: string) => void;
  matiereActive: string;
};

const FicheCard = memo(function FicheCard({
  fiche,
  favoris,
  toggleFavori,
  matiereActive,
}: FicheCardProps) {
  return (
    <li className="fiche-card">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
        <Link
          href={{
            pathname: `/fiches/${fiche.id}`,
            query: { matiere: matiereActive }
          }}
          className="fiche-link"
        >
          {fiche.titre}
        </Link>
        <button
          className="fiche-favori-btn"
          aria-label={favoris.includes(fiche.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
          onClick={() => toggleFavori(fiche.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: "0.3em",
            display: "flex",
            alignItems: "center"
          }}
        >
          <FaHeart
            color={favoris.includes(fiche.id) ? "#ef4444" : "#d1d5db"}
            style={{ fontSize: "1.3em", transition: "color 0.2s" }}
            title={favoris.includes(fiche.id) ? "Favori" : "Ajouter aux favoris"}
          />
        </button>
      </div>
      <span className="fiche-categorie">{fiche.categorie}</span>
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
  );
});

export default function FichesPage() {
  const [matiereActive, setMatiereActive] = useState('Mathématiques');
  const [niveauFiltre, setNiveauFiltre] = useState<Niveau>('Tous');
  const [recherche, setRecherche] = useState('');
  const [tri, setTri] = useState('Titre (A-Z)');
  const [filtreCategorie, setFiltreCategorie] = useState('');
  const [filtrePopulaire, setFiltrePopulaire] = useState(false);
  const [filtreFavoris, setFiltreFavoris] = useState(false);
  const [pageCourante, setPageCourante] = useState(1);
  const [favoris, setFavoris] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [modalOpen, setModalOpen] = useState(false);
  const [cible, setCible] = useState<'concours' | 'bac'>('concours');

  const fichesFiltres = useMemo(() => {
    let res = fiches.filter(f => f.matiere === matiereActive);

    if (niveauFiltre !== 'Tous') {
      res = res.filter(f => f.niveau.includes(niveauFiltre));
    }

    if (recherche.trim() !== '') {
      const search = recherche.toLowerCase();
      res = res.filter(f =>
        f.titre.toLowerCase().includes(search) ||
        f.matiere.toLowerCase().includes(search) ||
        f.categorie.toLowerCase().includes(search) ||
        f.contenu.toLowerCase().includes(search) ||
        f.niveau.some(niveau => niveau.toLowerCase().includes(search)) ||
        (f.tags && f.tags.some(tag => tag.toLowerCase().includes(search)))
      );
    }

    if (filtreCategorie) res = res.filter(f => f.categorie === filtreCategorie);
    if (filtrePopulaire) res = res.filter(f => f.populaire);
    if (filtreFavoris) res = res.filter(f => favoris.includes(f.id));

    if (tri === 'Titre (A-Z)') res = [...res].sort((a, b) => a.titre.localeCompare(b.titre));
    if (tri === 'Date (récent)') res = [...res].sort((a, b) => (b.datePublication || '').localeCompare(a.datePublication || ''));

    return res;
  }, [matiereActive, niveauFiltre, recherche, tri, filtreCategorie, filtrePopulaire, filtreFavoris, favoris]);

  // Charger les favoris du localStorage côté client uniquement
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const fav = JSON.parse(localStorage.getItem("fichesFavoris") || "[]");
        setFavoris(fav);
      } catch {
        setFavoris([]);
      }
    }
  }, []);

  const categoriesDisponibles = useMemo(
    () => Array.from(new Set(
      fiches
        .filter(f => f.matiere === matiereActive)
        .map(f => f.categorie)
    )),
    [matiereActive]
  );

  const fichesParPage = 10;

  // Réinitialiser les filtres
  const resetFilters = () => {
    setNiveauFiltre('Tous');
    setRecherche('');
    setTri('Titre (A-Z)');
    setFiltreCategorie('');
    setFiltrePopulaire(false);
    setFiltreFavoris(false);
    setPageCourante(1);
  };

  // Pagination optimisée avec useMemo
  const fichesAffichees = useMemo(
    () => fichesFiltres.slice((pageCourante - 1) * fichesParPage, pageCourante * fichesParPage),
    [fichesFiltres, pageCourante]
  );

  // Sauvegarde des favoris dans le localStorage à chaque changement
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fichesFavoris", JSON.stringify(favoris));
    }
  }, [favoris]);

  const toggleFavori = (ficheId: string) => {
    setFavoris((prev) =>
      prev.includes(ficheId)
        ? prev.filter((id) => id !== ficheId)
        : [...prev, ficheId]
    );
  };

  const handleMatiereChange = (matiere: string) => {
    startTransition(() => {
      setMatiereActive(matiere);
      setPageCourante(1);
      setFiltreCategorie('');
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // On compare le nombre total de fiches de la matière active, pas le résultat filtré
      const fichesMatiere = fiches.filter(f => f.matiere === matiereActive);
      const lastCount = Number(localStorage.getItem("fichesNotifCount_" + matiereActive) || "0");
      if (fichesMatiere.length > lastCount) {
        toast(
          <span>
            <FaRegStickyNote style={{ marginRight: 8, color: "#2563eb", verticalAlign: "middle" }} />
            {`J'ai ajouté des fiches : ${fichesMatiere.length} en ${matiereActive}`}
          </span>
        );
        localStorage.setItem("fichesNotifCount_" + matiereActive, fichesMatiere.length.toString());
      }
    }
  }, [matiereActive, fiches.length]);

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
                  onClick={() => handleMatiereChange(matiere)}
                  disabled={isPending}
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

            <select value={filtreCategorie} onChange={e => { setFiltreCategorie(e.target.value); setPageCourante(1); }} className="fiches-filtre-select">
              <option value="">Toutes les catégories</option>
              {categoriesDisponibles.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <label className="fiches-filtre-checkbox">
              <input
                type="checkbox"
                checked={filtrePopulaire}
                onChange={() => { setFiltrePopulaire(!filtrePopulaire); setPageCourante(1); }}
              />
              Populaires
            </label>

            <label className="fiches-filtre-checkbox">
              <input
                type="checkbox"
                checked={filtreFavoris}
                onChange={() => { setFiltreFavoris(!filtreFavoris); setPageCourante(1); }}
              />
              Favoris
            </label>

            <button onClick={resetFilters} className="fiches-filtre-reset-btn">
              Réinitialiser
            </button>
          </div>

          {/* Liste des fiches */}
          <ul className="fiches-list">
            {fichesAffichees.map((fiche) => (
              <FicheCard key={fiche.id} fiche={fiche} favoris={favoris} toggleFavori={toggleFavori} matiereActive={matiereActive} />
            ))}
          </ul>

          {/* Pagination */}
          <div className="fiches-pagination">
            {Array.from({ length: Math.ceil(fichesFiltres.length / fichesParPage) }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPageCourante(num)}
                className={`fiches-pagination-btn${num === pageCourante ? ' active' : ''}`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Boutons de compte à rebours */}
          <div className="fiches-btns" style={{ display: "flex", gap: "1em", justifyContent: "center", margin: "2em 0" }}>
            <button
              className="btn-countdown"
              onClick={() => { setCible("concours"); setModalOpen(true); }}
            >
              <span className="icon"><FaRegClock /></span>
              Compte à rebours Concours
            </button>
            <button
              className="btn-countdown"
              onClick={() => { setCible("bac"); setModalOpen(true); }}
            >
              <span className="icon"><FaRegCalendarCheck /></span>
              Compte à rebours Bac
            </button>
            <Link href="/simulateur" className="btn-moyenne">
              <span className="icon" style={{ display: "inline-flex", alignItems: "center", marginRight: "0.5em" }}>
                <FaCalculator />
              </span>
              Simuler ma moyenne
            </Link>
          </div>
          <CompteAReboursModal open={modalOpen} onClose={() => setModalOpen(false)} cible={cible} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export function FicheDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    // Affiche un loader tant que l'id n'est pas prêt
    return <p>Chargement...</p>;
  }

  const fiche = fiches.find((f) => f.id === String(id)); // Ensure id is a string

  if (!fiche) {
    return <p>Fiche non trouvée.</p>;
  }

  return (
    <div>
      <Head>
        <title>{fiche.titre} - {fiche.matiere}</title>
        <meta
          name="description"
          content={`Fiche de révision sur ${fiche.titre} en ${fiche.matiere} : ${fiche.contenu.slice(0, 150)}...`}
        />
        {/* Ajout des tags dans la meta keywords */}
        <meta
          name="keywords"
          content={fiche.tags && fiche.tags.length > 0 ? fiche.tags.join(', ') : `${fiche.titre}, ${fiche.matiere}`}
        />
      </Head>
      <h1>{fiche.titre}</h1>
      <p>{fiche.contenu}</p>
      {/* Ajoutez d'autres détails de la fiche ici */}
    </div>
  );
}
