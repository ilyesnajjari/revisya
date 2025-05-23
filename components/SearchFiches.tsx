import { useState } from "react";
import Link from "next/link";
import { fiches } from "../data/fiches";
import "../styles/SearchFiches.css";

export default function SearchFiches() {
  const [query, setQuery] = useState("");

  const results = fiches.filter((fiche) => {
    const search = query.toLowerCase();
    return (
      fiche.titre.toLowerCase().includes(search) ||
      fiche.matiere.toLowerCase().includes(search) ||
      fiche.niveau.some((niveau) => niveau.toLowerCase().includes(search)) || // Vérifie les niveaux
      (fiche.tags && fiche.tags.some((tag) => tag.toLowerCase().includes(search))) // Vérifie les tags
    );
  });

  return (
    <div className="search-container">
      <label htmlFor="search-fiches" className="sr-only">
        Recherche de fiches
      </label>
      <input
        id="search-fiches"
        type="text"
        value={query}
        placeholder="Rechercher une fiche..."
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {query && (
        <ul className="results-list">
          {results.length > 0 ? (
            results.map((fiche) => (
              <li key={fiche.id} className="result-item">
                <Link href={`/fiches/${fiche.id}`} className="result-link">
                  {fiche.titre} —{" "}
                  <span className="subject">{fiche.matiere}</span>
                </Link>
              </li>
            ))
          ) : (
            <li className="no-results">Aucun résultat pour "{query}"</li>
          )}
        </ul>
      )}
    </div>
  );
}
