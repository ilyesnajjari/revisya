// /data/fiches.ts
import 'katex/dist/katex.min.css'

export type Fiche = {
  id: string;
  titre: string;
  matiere: string;
  niveau: ('Lycée' | 'Prépa' | 'Université')[]; // Tableau de niveaux
  contenu: string;
  tags?: string[];
  datePublication?: string;
  populaire?: boolean;
  aReviser?: boolean;
};

// Mathématiques
export const fichesMaths: Fiche[] = [
  {
    id: "trinome-second-degre",
    titre: "Fonction trinôme du second degré",
    matiere: "Mathématiques",
    niveau: ["Lycée", "Prépa"], // Plusieurs niveaux
    contenu: `
## Définition

Une **fonction trinôme** est une fonction polynomiale de degré 2, s'écrivant sous la forme :  
$$
f(x) = ax^2 + bx + c
$$  
avec $a \\neq 0$, et $a, b, c \\in \\mathbb{R}$.

Elle modélise une **courbe en forme de parabole** dans un repère cartésien.

---

## Forme canonique

Toute fonction trinôme peut être réécrite sous la **forme canonique** suivante :  
$$
f(x) = a(x - \\alpha)^2 + \\beta
$$  
avec :  
- $\\alpha = -\\frac{b}{2a}$ (abscisse du sommet de la parabole)  
- $\\beta = f(\\alpha)$ (ordonnée du sommet)

Cette forme permet de **repérer facilement le sommet** de la parabole $S(\\alpha, \\beta)$.

---

## Sens de variation

Le signe du coefficient $a$ détermine la **concavité** de la parabole et donc les **variations** de la fonction :

- Si $a > 0$ : la parabole est **ouverte vers le haut**  
   $f$ **décroît** sur $]-\\infty, \\alpha]$ et **croît** sur $[\\alpha, +\\infty[$  
   Le **minimum** est atteint en $x = \\alpha$

- Si $a < 0$ : la parabole est **ouverte vers le bas**  
   $f$ **croît** sur $]-\\infty, \\alpha]$ et **décroît** sur $[\\alpha, +\\infty[$  
   Le **maximum** est atteint en $x = \\alpha$

---

## Racines (solutions de l'équation $f(x) = 0$)

Pour résoudre $ax^2 + bx + c = 0$, on utilise le **discriminant** $\\Delta$ :

$$
\\Delta = b^2 - 4ac
$$

- Si $\\Delta > 0$ : deux racines réelles distinctes :  
  $$
  x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}, \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}
  $$

- Si $\\Delta = 0$ : une racine double (ou racine unique) :  
  $$
  x_0 = -\\frac{b}{2a}
  $$

- Si $\\Delta < 0$ : **aucune racine réelle** (les solutions sont complexes)

---

## Représentation graphique

- **Courbe** : une **parabole** symétrique par rapport à l’axe $x = \\alpha$
- **Sommet** : point $S(\\alpha, \\beta)$
- **Axe de symétrie** : droite d'équation $x = \\alpha$
- Les **racines** (si elles existent) sont les points d'intersection avec l’axe des abscisses ($f(x) = 0$)

---

## Signe du trinôme

Le signe de $f(x) = ax^2 + bx + c$ dépend de $a$ et du discriminant $\\Delta$ :

- Si $\\Delta > 0$, alors :
  - $f(x) > 0$ à l'extérieur des racines
  - $f(x) < 0$ entre les racines (si $a > 0$) et inversement si $a < 0$

- Si $\\Delta = 0$, alors :
  - $f(x)$ a **le même signe que $a$** sauf au point racine où $f(x) = 0$

- Si $\\Delta < 0$, alors :
  - $f(x)$ a toujours **le signe de $a$**

---
    `,
    tags: ["trinôme", "second degré", "équation quadratique", "forme canonique", "parabole"],
    datePublication: "2025-05-22",
    populaire: true,
    aReviser: false
  },
  {
    id: "somme-produit-racines",
    titre: "Sommes et produit des racines",
    matiere: "Mathématiques",
    niveau: ["Lycée"], // Un seul niveau
    contenu: `
## Théorème fondamental

Soit $ax^2 + bx + c = 0$ une équation du second degré avec $a \\neq 0$.  
Si elle admet deux racines réelles $x_1$ et $x_2$, alors :

- Somme des racines :  
  $$
  x_1 + x_2 = -\\frac{b}{a}
  $$

- Produit des racines :  
  $$
  x_1 \\cdot x_2 = \\frac{c}{a}
  $$

Ces deux relations sont appelées **formules de Viète**.

---

## Démonstration (esquisse)

Si $f(x) = ax^2 + bx + c$ a pour racines $x_1$ et $x_2$, on peut écrire :

$$
f(x) = a(x - x_1)(x - x_2)
$$

En développant :  
$$
f(x) = a(x^2 - (x_1 + x_2)x + x_1 x_2)
$$

Par identification avec $ax^2 + bx + c$, on obtient :  
- $x_1 + x_2 = -\\frac{b}{a}$  
- $x_1 \\cdot x_2 = \\frac{c}{a}$

---

## Exemples

**Exemple 1 : à partir des racines**  
Soient $x_1 = 2$, $x_2 = 3$.  
Alors $x_1 + x_2 = 5$, $x_1 x_2 = 6$.  
On peut reconstituer l'équation :  
$$
x^2 - 5x + 6 = 0
$$

**Exemple 2 : à partir du polynôme**  
Soit $f(x) = 2x^2 - 4x + 1$  
Alors :  
- Somme des racines = $-\\frac{-4}{2} = 2$  
- Produit des racines = $\\frac{1}{2}$

---

## Remarques

- Ces relations sont valables uniquement lorsque les racines sont réelles ($\\Delta \\geq 0$).
- Si $\\Delta = 0$, on a une racine double $x_0 = -\\frac{b}{2a}$ et on retrouve bien :  
  $$
  x_0 + x_0 = -\\frac{b}{a}, \\quad x_0^2 = \\frac{c}{a}
  $$
- Si $\\Delta < 0$, les racines sont complexes, mais ces formules restent valables si on travaille dans $\\mathbb{C}$.

---

## Tableau récapitulatif

| Élément                     | Formule                       | Condition d'application |
|----------------------------|------------------------------|-------------------------|
| Somme des racines          | $x_1 + x_2 = -\\frac{b}{a}$  | $\\Delta \\geq 0$        |
| Produit des racines        | $x_1 \\cdot x_2 = \\frac{c}{a}$ | $\\Delta \\geq 0$     |
| Reconstruction du polynôme | $a(x - x_1)(x - x_2)$        | racines réelles         |

---

## Applications typiques

- Retrouver un polynôme à partir de ses racines
- Vérifier une résolution sans recalculer le discriminant
- Résoudre des problèmes par identification ou par factorisation
- Utiliser les propriétés de symétrie des racines dans les problèmes d’analyse

---

## Exercices proposés

1. Déterminer le polynôme de degré 2 ayant pour racines $4$ et $-1$.
2. Dans $x^2 + 3x - 10$, calculer la somme et le produit des racines.
3. On sait que $x_1 + x_2 = 7$ et $x_1 x_2 = 10$. Retrouver une équation du second degré ayant ces racines.
    `,
    tags: ["somme", "produit", "racines", "polynôme", "viète"],
    datePublication: "2025-05-22",
    populaire: false,
    aReviser: true
  },
  // Ajoute d'autres fiches de maths ici
];

// Physique
export const fichesPhysique: Fiche[] = [
  {
    id: 'physique-milieux-ferromagnetiques',
    titre: "Milieux ferromagnétiques et magnétisme",
    matiere: "Physique",
    niveau: ["Prépa", "Université"],
    contenu: `
# Magnétisme – Milieux Ferromagnétiques

## 1. Origine du magnétisme

- Le **champ magnétique** peut être créé par :
  - Un **aimant permanent**.
  - Un **circuit parcouru par un courant** (loi de Biot et Savart).

- À l’échelle microscopique :
  - Chaque électron possède un **moment magnétique** dû à :
    - Son **moment cinétique orbital**.
    - Son **spin**.

- Moment magnétique élémentaire :

$$
\\vec{\\mu} = \\gamma \\vec{L}
$$

avec :
- $\\vec{L}$ : moment cinétique
- $\\gamma$ : rapport gyromagnétique

---

## 2. Matériaux magnétiques

| Type              | Caractéristique principale                      | Exemples              |
|-------------------|--------------------------------------------------|------------------------|
| Diamagnétique     | Répulsion, moments induits opposés à $\\vec{B}$   | Cu, Bi, Au             |
| Paramagnétique    | Faible attraction, moments partiellement alignés | Al, Pt                 |
| Ferromagnétique   | Forte attraction, aimantation spontanée          | Fe, Co, Ni             |

---

## 3. Aimantation et champ total

### Aimantation

- Moment magnétique total par unité de volume :

$$
\\vec{M} = \\frac{1}{V} \\sum_i \\vec{\\mu}_i
$$

### Relation entre champs

- Champ magnétique total :

$$
\\vec{B} = \\mu_0 (\\vec{H} + \\vec{M})
$$

- Si le matériau est **linéaire et isotrope** :

$$
\\vec{M} = \\chi_m \\vec{H}
$$

donc :

$$
\\vec{B} = \\mu_0 (1 + \\chi_m) \\vec{H} = \\mu \\vec{H}, \\quad \\text{où} \\quad \\mu = \\mu_0 \\mu_r
$$

---

## 4. Domaine de Weiss (ferromagnétiques)

- Zones internes avec **moments magnétiques alignés**.
- Sans champ externe : orientation aléatoire → $ \\vec{M}_{\\text{macro}} = 0 $
- Avec champ externe : croissance des domaines alignés → forte aimantation.

---

## 5. Énergie potentielle magnétique

- Pour un moment magnétique dans un champ magnétique :

$$
E_p = -\\vec{\\mu} \\cdot \\vec{B}
$$

- Tendance naturelle à s’aligner pour minimiser l’énergie.

---

## 6. Courant d’aimantation

- L’aimantation $\\vec{M}$ donne naissance à un **courant d’aimantation** :

$$
\\vec{j}_m = \\nabla \\times \\vec{M}
$$

- Ce courant est **équivalent** à un courant électrique réel dans le formalisme de Maxwell.

---

## 7. Équation de Maxwell-Ampère (dans un matériau)

- Forme générale :

$$
\\nabla \\times \\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\nabla \\times \\vec{M}
$$

- En introduisant le **champ $\\vec{H}$** :

$$
\\vec{H} = \\frac{\\vec{B}}{\\mu_0} - \\vec{M}
$$

alors :

$$
\\nabla \\times \\vec{H} = \\vec{j}
$$

---

## 8. Théorème d’Ampère

- Intégrale du champ $\\vec{H}$ le long d’un contour fermé :

$$
\\oint_C \\vec{H} \\cdot d\\vec{l} = I_{\\text{encl}}
$$

où $I_{\\text{encl}}$ est le courant **conduction uniquement** (hors aimantation).

---

## 9. Remarques utiles

- Dans le vide : $\\vec{B} = \\mu_0 \\vec{H}$
- Dans les milieux : $\\vec{B} = \\mu \\vec{H}$ avec $\\mu = \\mu_0 \\mu_r$
- $\\vec{M}$ est une propriété **interne** du matériau.
- $\\vec{H}$ est lié **au courant source**, $\\vec{M}$ à la **structure magnétique** du matériau.

---

## Résumé relations

$$
\\vec{H} = \\frac{\\vec{B}}{\\mu_0} - \\vec{M}
$$

- $ \\vec{M} = \\chi_m \\vec{H} $
- $ \\mu = \\mu_0 (1 + \\chi_m) = \\mu_0 \\mu_r $
- $ \\nabla \\times \\vec{H} = \\vec{j} $
- $ \\vec{j}_m = \\nabla \\times \\vec{M} $
    `,
    tags: ['aimantation', 'champ magnétique', 'Maxwell-Ampère'],
    datePublication: '2025-05-23',
    populaire: true,
    aReviser: true,
  },
];

// Informatique
export const fichesInfo: Fiche[] = [
  // Ajoute ici les fiches d'Informatique
];

// Chimie
export const fichesChimie: Fiche[] = [
{
  id: 'chimie-structure-atomique',
  titre: "Structure atomique et liaisons chimiques",
  matiere: "Chimie",
  niveau: ["Prépa"],
  contenu: `
### Notation et structure électronique

- **Notation nucléaire** : $ {}_{Z}^{A}X$
  - \( A \) = nombre de nucléons (protons + neutrons)  
  - \( Z \) = nombre de protons  
  - \( N = A - Z \) = nombre de neutrons  

- **Isotopes** : atomes d’un même élément (\( Z \) identique) mais avec un nombre différent de neutrons (\( A \) varie).  
  → Propriétés chimiques identiques, propriétés nucléaires différentes.

---

### Niveaux d’énergie & configuration électronique

- **Niveaux d’énergie principaux** : numérotés \( n = 1, 2, 3, \ldots \)  
  → Chaque niveau contient un certain nombre de sous-couches : \( s, p, d, f \)  
  → Capacité maximale par niveau :  
    - \( n = 1 \): 2 électrons (1s)  
    - \( n = 2 \): 8 électrons (2s, 2p)  
    - \( n = 3 \): 18 électrons (3s, 3p, 3d)  
    - etc.

- **Principe d’exclusion de Pauli** :  
  → Une orbitale ne peut contenir que **2 électrons au maximum** avec des spins opposés.

- **Électrons de valence** : électrons situés sur la **couche électronique externe** (responsables de la réactivité chimique).  
  - Exemple : Oxygène (Z = 8) → \( 1s^2 2s^2 2p^4 \) → 6 électrons de valence

- **Électrons de cœur** : les autres électrons, plus profondément liés au noyau → peu impliqués dans les réactions chimiques.

---

### Remplissage des orbitales

- **Ordre énergétique** : \( 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < \ldots \)
- **Règle de Hund** : les électrons se répartissent sur des orbitales de même énergie en maximisant les spins parallèles avant de se coupler.

---

### Classification périodique des éléments

- **Structure en blocs** :
  - Bloc s : colonnes 1–2 + H et He
  - Bloc p : colonnes 13–18
  - Bloc d : métaux de transition (colonnes 3–12)
  - Bloc f : lanthanides et actinides (hors tableau principal)

- **Lignes = Périodes** : nombre de couches électroniques
- **Colonnes = Groupes** : nombre d’électrons de valence (propriétés chimiques similaires)

- **Familles importantes** :
  - Groupe 1 : Alcalins  
  - Groupe 2 : Alcalino-terreux  
  - Groupe 17 : Halogènes  
  - Groupe 18 : Gaz nobles

---

### Électronégativité

- Capacité d’un atome à attirer les électrons dans une liaison.
- Classement selon Pauling : F > O > Cl > N > Br > ...
- Utilisée pour déterminer la polarité des liaisons chimiques.

---

### Liaisons chimiques & interactions

- **Règle de l’octet** : les atomes tendent à avoir 8 électrons de valence
- **Types de liaisons** :
  - Covalente (partage d’électrons)
  - Ionique (transfert d’électrons)
  - Métallique (électrons délocalisés)
- **Interactions faibles** :
  - Van der Waals
  - Dipôle-dipôle
  - Ponts hydrogène

---

### Résumé

- Les **niveaux d’énergie**, **isotopes**, et **électrons de valence** expliquent la réactivité chimique.
- La **classification périodique** permet de prédire les propriétés chimiques.
- La **configuration électronique** régit le comportement des atomes dans les liaisons.
`,
  tags: ['isotopes', 'niveaux d’énergie', 'principe de Pauli', 'électrons de valence', 'classification périodique'],
  datePublication: '2025-05-23',
  populaire: true,
  aReviser: true,
}];

// Kholles
export const fichesKholles: Fiche[] = [
  // Ajoute ici les fiches de Kholles
];

// Toutes les fiches réunies (pour compatibilité avec l’existant)
export const fiches: Fiche[] = [
  ...fichesMaths,
  ...fichesPhysique,
  ...fichesInfo,
  ...fichesChimie,
  ...fichesKholles,
];
