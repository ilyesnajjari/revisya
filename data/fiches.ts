// /data/fiches.ts

export type Fiche = {
  id: string;
  titre: string;
  matiere: string; // ex: 'Mathématiques'
  niveau: 'Lycée' | 'Prépa Commerce' | 'Prépa Scientifique';
  contenu: string; // Markdown ou HTML
};

export const fiches: Fiche[] = [
  {
    id: 'fiche-1',
    titre: 'Dérivées - Introduction',
    matiere: 'Mathématiques',
    niveau: 'Prépa Scientifique',
    contenu: `
# Dérivées

La dérivée d'une fonction \(f\) en un point \(x\) est ...

## Formules clés

- \(f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}\)
- ...
    `,
  },
  // Plus de fiches ici...
];
