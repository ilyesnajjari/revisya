// /data/fiches.ts

export type Fiche = {
  id: string;
  titre: string;
  matiere: string;
  categorie: string; // Ajouté : Algèbre, Analyse, Proba, etc.
  niveau: ('Lycée' | 'Prépa' | 'Université')[]; // Tableau de niveaux
  contenu: string;
  tags?: string[];
  datePublication?: string;
  populaire?: boolean;
  aReviser?: boolean;
};

// Mathématiques
export const fichesMaths: Fiche[] = [
  //trinome-second-degre
  {
    id: "trinome-second-degre",
    titre: "Fonction trinôme du second degré",
    matiere: "Mathématiques",
    categorie: "Analyse", // <-- Ajouté
    niveau: ["Lycée"], // Plusieurs niveaux
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
  // somme-produit-racines
  {
    id: "somme-produit-racines",
    titre: "Sommes et produit des racines",
    matiere: "Mathématiques",
    categorie: "Algèbre", // <-- Ajouté
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

 {
    id: "trinome-second-degree",
    titre: "Fonction trinôme du second degré",
    matiere: "Mathématiques",
    categorie: "Analyse", // <-- Ajouté
    niveau: ["Lycée"], // Plusieurs niveaux
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
//Euclidien-endomorphismes
{
  id: 'Euclidien-endomorphismes',
  titre: 'Endomorphismes Remarquables des Espaces Euclidiens',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
## Endomorphismes Remarquables des Espaces Euclidiens

**Algèbre — Prépa**

---

# Variables Aléatoires Discrètes

---

## 1. Espérance $E(X)$

Pour une variable aléatoire discrète réelle $X$ prenant les valeurs $x_i$ avec probabilités $p_i = P(X = x_i)$ :

$$
E(X) = \\sum_i x_i \\, p_i
$$

### Propriétés

- **Linéarité :**

  $$
  E(aX + bY) = a E(X) + b E(Y)
  $$

- **Positivité :**

  $$
  X \\geq 0 \\implies E(X) \\geq 0
  $$

- **Croissance :**

  $$
  X \\leq Y \\implies E(X) \\leq E(Y)
  $$

- **Inégalité de Markov :**

  Pour tout $a > 0$,

  $$
  P(|X| \\geq a) \\leq \\frac{E(|X|)}{a}
  $$

- **Théorème de transfert :**

  Pour $Y = g(X)$,

  $$
  E(Y) = \\sum_i g(x_i) P(X = x_i)
  $$

---

## 2. Variance $V(X)$ et écart-type $\\sigma(X)$

### Définition

$$
V(X) = E\\big((X - E(X))^2\\big) = E(X^2) - (E(X))^2
$$

$$
\\sigma(X) = \\sqrt{V(X)}
$$

### Propriétés

Pour $a,b \\in \\mathbb{R}$,

$$
V(aX + b) = a^2 V(X)
$$

- **Inégalité de Bienaymé-Tchebychev :**

  Pour tout $a > 0$,

  $$
  P(|X - E(X)| \\geq a) \\leq \\frac{V(X)}{a^2}
  $$

---

## 3. Fonction de répartition $F$

Définie par :

$$
F(x) = P(X \\leq x)
$$

### Propriétés

- $F$ est croissante et à droite continue.
- Limites :

  $$
  \\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to +\\infty} F(x) = 1
  $$

- Pour $X$ à valeurs dans $\\mathbb{N}$, l’espérance peut s’exprimer via $F$ :

  $$
  E(X) = \\sum_{k=0}^{\\infty} P(X > k) = \\sum_{k=0}^\\infty [1 - F(k)]
  $$

---

## 4. Fonction génératrice $G_X$

Définie pour $|s| \\leq 1$ par :

$$
G_X(s) = E(s^X) = \\sum_{k=0}^\\infty s^k P(X = k)
$$

### Propriétés

- Le rayon de convergence est au moins égal à 1.
- $G_X(1) = 1$.
- $G_X$ détermine la loi de $X$ de façon unique.
- Espérance et variance exprimables par dérivées de $G_X$ en 1 :

  $$
  E(X) = G_X'(1), \\quad V(X) = G_X''(1) + G_X'(1) - (G_X'(1))^2
  $$

---

## 5. Lois usuelles — espérance, variance et fonction génératrice

| Loi                   | Loi de probabilité                                   | $E(X)$            | $V(X)$                  | Fonction génératrice $G_X(s)$                                  |
|-----------------------|-----------------------------------------------------|-------------------|-------------------------|-----------------------------------------------------------------|
| Uniforme sur $\{1,\\ldots,n\}$ | $P(X=k) = \\frac{1}{n}$ pour $k=1,\\ldots,n$        | $\\frac{n+1}{2}$  | $\\frac{n^2 -1}{12}$    | $\\frac{1}{n} \\frac{1 - s^n}{1 - s}$                          |
| Bernoulli $B(p)$      | $P(X=1)=p, \\; P(X=0)=1-p$                         | $p$               | $p(1-p)$                | $1 - p + p s$                                                  |
| Binomiale $B(n,p)$    | Somme de $n$ Bernoulli indépendantes                | $n p$             | $n p (1-p)$             | $(1 - p + p s)^n$                                             |
| Géométrique           | $P(X = k) = p (1-p)^{k-1}, \\; k \\geq 1$           | $\\frac{1}{p}$    | $\\frac{1-p}{p^2}$      | $\\frac{p s}{1 - (1-p)s}$ pour $|s| < \\frac{1}{1-p}$          |
| Poisson $\\lambda$    | $P(X=k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}$       | $\\lambda$        | $\\lambda$              | $e^{\\lambda(s-1)}$                                            |

---

## Conseils pratiques

- Bien maîtriser les définitions d’espérance et variance.
- Comprendre les différentes inégalités (Markov, Bienaymé-Tchebychev) pour encadrer les probabilités.
- Savoir manipuler la fonction génératrice pour retrouver moments et lois.
- Connaître les lois usuelles, leur espérance, variance et fonction génératrice.
  `,
  tags: ['euclidien', 'endomorphisme', 'isométrie', 'matrices', 'rotation', 'réflexion'],
  datePublication: '2025-05-23',
  populaire: true,
  aReviser: true,
},

//Calcul-differentiel
{
  id: 'Calcul-differentiel',
  titre: 'Calcul Différentiel',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
contenu: `
### 1. Fonctions de $\\mathbb{R}^p \\to \\mathbb{R}$
- Définitions de base  
- Dérivées partielles d’ordre 1

---

### 2. Gradient

Soit $f : U \\subset \\mathbb{R}^p \\to \\mathbb{R}$ définie sur un ouvert $U$.

- Définition :

$$
\\nabla f = \\left( \\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_p} \\right)
$$

---

### 3. Fonctions de classe $\\mathcal{C}^1$

- Toutes les dérivées partielles d’ordre 1 sont continues sur $U$.
- Propriétés principales :
  - Développement limité d’ordre 1 : pour $h \\to 0$,

  $$
  f(x + h) = f(x) + \\nabla f(x) \\cdot h + o(\\|h\\|)
  $$

  - Continuité de $f$.
  - Opérations usuelles : somme, produit, quotient (sous conditions).
  - Règle de la chaîne : si $g : V \\to U$, alors

  $$
  \\nabla (f \\circ g)(t) = Dg(t)^T \\, \\nabla f(g(t))
  $$

- Caractérisation des fonctions constantes sur un ouvert convexe :

$$
\\nabla f = 0 \\implies f \\text{ est constante sur } U
$$

---

### 4. Dérivées partielles d’une composée

Pour $f(x(u,v), y(u,v))$ :

$$
\\frac{\\partial}{\\partial u} f(x(u,v), y(u,v)) = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial u} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial u}
$$

---

### 5. Dérivées partielles d’ordre 2

- Dérivées croisées :

$$
\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}
$$

- Classe $\\mathcal{C}^2$ : dérivées partielles d’ordre 2 continues.

- Théorème de Schwarz (symétrie des dérivées secondes) :

$$
\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}
$$

---

### 6. Extrema et points critiques

- Définition : $x_0$ est un point critique si

$$
\\nabla f(x_0) = 0
$$

- Nature du point critique déterminée par la matrice Hessienne $H_f(x_0)$ :

$$
H_f(x_0) = \\left( \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(x_0) \\right)_{i,j}
$$

---

### 7. Courbes et surfaces

- Courbe ou surface définie par une équation cartésienne, par exemple :

$$
F(x, y) = 0 \\quad \\text{ou} \\quad F(x, y, z) = 0
$$

- Point régulier :

$$
\\nabla F(x_0) \\neq 0
$$

---

### 8. Tangentes et plans tangents

- Droite tangente à une courbe dans $\\mathbb{R}^2$ au point $M_0$ :

$$
\\text{vecteur tangent} = \\nabla F(M_0)
$$

- Plan tangent à une surface dans $\\mathbb{R}^3$ au point régulier $M_0$ :

$$
\\text{plan tangent} : \\nabla F(M_0) \\cdot (M - M_0) = 0
$$

---
`,
  tags: ['analyse', 'gradient', 'dérivées partielles', 'EDP', 'tangente', 'extrema'],
  datePublication: '2025-05-23',
  populaire: true,
  aReviser: true,
},

//Variables-aleatoires-couples-familles
{
  id: 'Variables-aleatoires-couples-familles',
  titre: 'Couples et Familles de Variables Aléatoires',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Couples et familles de variables aléatoires

---

#### Couples de variables aléatoires discrètes

- **Loi conjointe** : $P_{X,Y}(x,y)$
- **Lois marginales** : $P_X(x) = \\sum_y P_{X,Y}(x,y)$, $P_Y(y) = \\sum_x P_{X,Y}(x,y)$
- **Lois conditionnelles** : $P_{X|Y}(x|y) = \\dfrac{P_{X,Y}(x,y)}{P_Y(y)}$ (si $P_Y(y) \\neq 0$)

---

#### Indépendance

- **Définition** : $X$ et $Y$ sont indépendantes $\ \\, \\forall x, y,\\; P_{X,Y}(x,y) = P_X(x)P_Y(y)$
- **Propriétés** :
  - $X \\perp Y \\implies \\{X \\in A\\} \\perp \\{Y \\in B\\}$
  - $f(X) \\perp g(Y)$
  - $E(XY) = E(X)E(Y)$ si $E(X), E(Y)$ existent
  - $V(X \\pm Y) = V(X) + V(Y)$
  - $\\forall t \\in (-1, 1),\\; G_{X+Y}(t) = G_X(t)G_Y(t)$ (fonctions génératrices)

---

#### Covariance et corrélation

- **Covariance** : $\\mathrm{Cov}(X, Y) = E[(X - E(X))(Y - E(Y))]$
- **Coefficient de corrélation** : $\\rho(X, Y) = \\dfrac{\\mathrm{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$
- **Propriétés** :
  - L'indépendance $\\implies$ non-corrélation (la réciproque est fausse)
  - Covariance bilinéaire, symétrique : $\\mathrm{Cov}(X, Y) = \\mathrm{Cov}(Y, X)$
  - $|\\mathrm{Cov}(X, Y)| \\leq \\sigma_X \\sigma_Y$ (inégalité de Cauchy-Schwarz)
  - $V(X + Y) = V(X) + V(Y) + 2\\mathrm{Cov}(X, Y)$

---

#### Familles de variables aléatoires discrètes

- **Indépendance mutuelle** : $(X_i)_{i \\in I}$ indépendantes deux à deux et globalement
- **Propriétés** :
  - Indépendance mutuelle $\\implies$ indépendance deux à deux (réciproque fausse)
  - $f((X_j)_{j \\in J}) \\perp g((X_k)_{k \\in K})$ si $J \\cap K = \\emptyset$
  - Si $I$ fini :
    $$
    E\\left( \\prod_{i \\in I} X_i \\right) = \\prod_{i \\in I} E(X_i)
    \\quad \\text{et} \\quad
    G_{\\sum_{i \\in I} X_i}(t) = \\prod_{i \\in I} G_{X_i}(t)
    $$

---

#### Variance de la somme de variables aléatoires

- **Cas général** :
  $$
  V\\left( \\sum_{i=1}^n X_i \\right) = \\sum_{i=1}^n V(X_i) + 2 \\sum_{i < j} \\mathrm{Cov}(X_i, X_j)
  $$
- **Cas de variables deux à deux non corrélées** :
  $$
  V\\left( \\sum_{i=1}^n X_i \\right) = \\sum_{i=1}^n V(X_i)
  $$

---

#### Loi faible des grands nombres

- Soit $(X_n)$ une suite de variables aléatoires indépendantes, identiquement distribuées avec $E(X_n) = \\mu$.
- Alors :
  $$
  \\frac{1}{n} \\sum_{k=1}^n X_k \\xrightarrow[n \\to \\infty]{P} \\mu
  $$
  (convergence en probabilité)

---
`,
  tags: ['probabilités', 'indépendance', 'covariance', 'corrélation', 'variables aléatoires', 'loi des grands nombres'],
  datePublication: '2025-05-23',
  populaire: true,
  aReviser: true,
}
,

//Courbes-parametrees
{
  id: 'Courbes-parametrees',
  titre: 'Courbes Paramétrées',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Courbes Paramétrées

---

#### Définition et généralités
- Une **courbe paramétrée** est définie par une fonction $f : I \\subset \\mathbb{R} \\to \\mathbb{R}^n$
- $f(t) = (x_1(t), x_2(t), ..., x_n(t))$ : **fonctions coordonnées**
- **Trajectoire** : ensemble des points $f(t)$ lorsque $t$ parcourt $I$

#### Dérivabilité
- Si $f$ est dérivable en $t_0$, alors sa dérivée est :  
  $$
  f'(t_0) = (x_1'(t_0), x_2'(t_0), ..., x_n'(t_0))
  $$
- **Point régulier** : $f'(t_0) \\neq 0$
- **Point stationnaire** : $f'(t_0) = 0$

#### Fonctions dérivables de classe $\\mathcal{C}^k$
- $f \\in \\mathcal{C}^k$ signifie que $f$ admet $k$ dérivées continues
- $\\mathcal{C}^\\infty$ : fonction indéfiniment dérivable
- Dérivées successives : $f^{(k)}(t)$

#### Opérations
- Somme, produit scalaire, composition (avec fonctions réelles), etc. respectent la dérivabilité

---

#### Géométrie des courbes paramétrées

##### Tangente en un point
- Si $f$ est $\\mathcal{C}^1$ et $f'(t_0) \\neq 0$, alors la **tangente** en $f(t_0)$ a pour direction $f'(t_0)$

##### Longueur d'une courbe
- Longueur de $f(t)$, $t \\in [a,b]$ :  
  $$
  L = \\int_a^b \\| f'(t) \\| \\; dt
  $$

##### Symétries
- Dans $\\mathbb{R}^2$, la **symétrie de la trajectoire** dépend de la parité des fonctions coordonnées :
  - $x(t)$ pair, $y(t)$ impair : symétrie par rapport à l'axe des abscisses
  - $x(t)$ impair, $y(t)$ pair : symétrie par rapport à l’axe des ordonnées
  - Les deux impaires : symétrie par rapport à l’origine

---

#### Étude locale et asymptotique

##### Branches infinies
- Lorsqu’un paramètre $t \\to \\infty$ ou $t \\to -\\infty$, on observe le comportement asymptotique

##### Asymptotes
- Une **asymptote oblique** à la courbe $f(t) = (x(t), y(t))$ est une droite $y = ax + b$ telle que :
  $$
  \\lim_{t \\to \\infty} (y(t) - ax(t)) = b
  $$
- **Asymptote verticale** : $\\lim_{t \\to t_0} x(t) = a$, $\\lim_{t \\to t_0} y(t) = \\pm\\infty$
- **Détermination pratique** :
  - Étudier $\\lim_{t \\to \\pm\\infty} x(t)$, $y(t)$, $\\frac{y(t)}{x(t)}$
  `,
  tags: ['analyse', 'courbe paramétrée', 'asymptote', 'longueur', 'tangente', 'symétrie'],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//Endomorphismes-matrices-carrees
{
  id: 'Endomorphismes-matrices-carrees',
  titre: 'Endomorphismes et Matrices Carrées',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Endomorphismes et Matrices Carrées

---

#### Déterminants
- Déterminant d’une matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{K})$
- Déterminant d’une famille $(v_1, \\dots, v_n)$ de vecteurs dans une base d’un espace $E$ de dimension $n$
- Déterminant d’un endomorphisme $f : E \\to E$ en dimension finie

#### Trace
- Trace d’une matrice carrée : $\\text{Tr}(A) = \\sum_{i=1}^n a_{ii}$
- Propriétés :
  - $\\text{Tr}(A + B) = \\text{Tr}(A) + \\text{Tr}(B)$
  - $\\text{Tr}(\\lambda A) = \\lambda \\text{Tr}(A)$
  - $\\text{Tr}(A^T) = \\text{Tr}(A)$
  - $\\text{Tr}(AB) = \\text{Tr}(BA)$
- Trace d’un endomorphisme $f$ en dimension finie : $\\text{Tr}(f) = \\text{Tr}(\\text{Mat}_B(f))$

---

#### Polynômes en matrices ou endomorphismes
- Polynôme $P \\in \\mathbb{K}[X]$ appliqué à une matrice $A$ ou un endomorphisme $f$
- Polynôme annulateur $P$ tel que $P(A) = 0$ ou $P(f) = 0$
- Applications :
  - Calcul de l’inverse $A^{-1}$ si $A$ est inversible
  - Calcul des puissances $A^n$ ou $f^n$

---

#### Similitude de matrices
- Deux matrices $A$ et $B$ sont **semblables** s’il existe une matrice inversible $P$ telle que :
  $$
  B = P^{-1}AP
  $$
- Propriétés :
  - La similitude est une relation d’équivalence
  - Les matrices semblables ont :
    - même trace
    - même déterminant
    - même polynôme caractéristique
    - même polynôme minimal

---

#### Sous-espaces stables
- $F \\subset E$ est **stable** par $f$ si $f(F) \\subset F$
- Endomorphisme induit : $f|_F : F \\to F$
- Propriétés :
  - $\\ker(f)$ et $\\text{Im}(f)$ stables par tout $g$ qui commute avec $f$
  - Traduction matricielle de la stabilité : forme triangulaire ou bloc-diagonale
  - Droites vectorielles stables : $\\exists v \\neq 0, f(v) \\in \\text{Vect}(v)$

---

#### Matrices par blocs
- Matrice carrée écrite sous forme de **blocs**
- Matrices **triangulaires par blocs** ou **diagonales par blocs**
- Propriétés :
  - Produit et somme de matrices par blocs
  - Déterminant d’une matrice triangulaire par blocs : produit des déterminants des blocs diagonaux
  `,
  tags: ['algèbre', 'matrices', 'endomorphismes', 'déterminant', 'trace', 'polynômes', 'similitude'],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//Équations-differentielles-lineaires
{
  id: 'Équations-differentielles-lineaires',
  titre: 'Équations Différentielles Linéaires',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Équations Différentielles Linéaires

---

#### Systèmes différentiels linéaires d’ordre 1
- Système de la forme :
  $$
  Y'(t) = A(t)Y(t) + B(t)
  $$
  avec $Y : I \\to \\mathbb{R}^n$, $A : I \\to \\mathcal{M}_n(\\mathbb{R})$, $B : I \\to \\mathbb{R}^n$
- **Écriture matricielle** : dérivée d’un vecteur = produit matrice × vecteur + second membre
- **Vocabulaire** :
  - Système **homogène** : $Y'(t) = A(t)Y(t)$
  - Système **non homogène** : $Y'(t) = A(t)Y(t) + B(t)$

#### Résolution théorique
- Ensemble des solutions du système homogène : un **espace vectoriel**
- Ensemble des solutions du système non homogène : un **espace affine**
- **Théorème de Cauchy** :
  > Si $A$ et $B$ sont continues sur $I$, alors pour tout $t_0 \\in I$ et toute condition initiale $Y(t_0) = Y_0$, il existe une unique solution $Y$ sur $I$

#### Résolution pratique
- Cas $Y' = AY$ avec $A \\in \\mathcal{M}_n(\\mathbb{R})$ à **coefficients constants**
  - Si $A$ est **diagonalisable** : $A = PDP^{-1}$, alors $Y(t) = P e^{Dt} C$
  - Si $A$ est **trigonalisable** : méthode de Jordan ou méthode des chaînes généralisées
  - Solutions basées sur l’étude du système fondamental de solutions $\{Y_1(t), \\dots, Y_n(t)\}$

---

#### Équation différentielle linéaire scalaire d’ordre 2
- Équation de la forme :
  $$
  y'' + a_1(t) y' + a_0(t) y = b(t)
  $$
- **Vocabulaire** :
  - Équation **homogène** : $b(t) = 0$
  - Équation **non homogène** : $b(t) \\neq 0$

#### Passage à un système d’ordre 1
- Transformation en système :
  $$
  \\begin{cases}
  y_1 = y \\\\
  y_2 = y' \\\\
  y_1' = y_2 \\\\
  y_2' = -a_1(t) y_2 - a_0(t) y_1 + b(t)
  \\end{cases}
  $$

#### Résolution théorique
- Ensemble des solutions d’une équation homogène : espace vectoriel de dimension 2
- Ensemble des solutions d’une équation non homogène : espace affine
- **Théorème de Cauchy** :
  > Si $a_0, a_1, b$ sont continues sur $I$, alors pour toute condition initiale $(y(t_0), y'(t_0))$, il existe une unique solution $y$ sur $I$
  `,
  tags: ['équations différentielles', 'systèmes linéaires', 'Cauchy', 'résolution', 'diagonalisable', 'matrices'],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Espaces-probabilises
{
  id: 'Espaces-probabilises',
  titre: 'Espaces Probabilisés',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Espaces Probabilisés

---

#### Ensembles dénombrables
- Ensemble **dénombrable** : en bijection avec $\\mathbb{N}$ ou une partie de $\\mathbb{N}$
- **Exemples** : $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$
- **Contre-exemples** : $\\mathbb{R}, [0,1]$

---

#### Tribu sur un ensemble $\\Omega$
- Ensemble $\\mathcal{A} \\subset \\mathcal{P}(\\Omega)$ tel que :
  - $\\Omega \\in \\mathcal{A}$, $\\emptyset \\in \\mathcal{A}$
  - stable par complémentaire, réunion et intersection **dénombrables**

**Vocabulaire** :
- **Espace probabilisable** : couple $(\\Omega, \\mathcal{A})$
- **Événements** : éléments de $\\mathcal{A}$
- **Événement certain** : $\\Omega$, **impossible** : $\\emptyset$
- **Contraires** : $A$ et $\\bar{A}$
- **Incompatibles** : $A \\cap B = \\emptyset$
- **Système complet** : réunion = $\\Omega$, événements deux à deux incompatibles

---

#### Probabilité sur un espace probabilisable
- Application $\\mathbb{P} : \\mathcal{A} \\to [0,1]$ vérifiant :
  - $\\mathbb{P}(\\Omega) = 1$
  - $\\mathbb{P}(\\bigcup A_i) = \\sum \\mathbb{P}(A_i)$ si $A_i$ disjoints

**Cas fini ou dénombrable** :
- $\\Omega = \\{\\omega_1, \\omega_2, \\dots\\}$
- Probabilité définie par les poids $p_i = \\mathbb{P}(\\{\\omega_i\\})$

**Vocabulaire** :
- **Espace probabilisé** : $(\\Omega, \\mathcal{A}, \\mathbb{P})$
- **Événement négligeable** : probabilité nulle
- **Événement presque sûr** : probabilité 1
- **Système presque complet** : $\\mathbb{P}(\\cup A_i) = 1$

---

#### Propriétés calculatoires
- $\\mathbb{P}(\\emptyset) = 0$, $\\mathbb{P}(\\bar{A}) = 1 - \\mathbb{P}(A)$
- $\\mathbb{P}(A \\cup B) = \\mathbb{P}(A) + \\mathbb{P}(B) - \\mathbb{P}(A \\cap B)$
- Croissance : $A \\subset B \\Rightarrow \\mathbb{P}(A) \\leq \\mathbb{P}(B)$
- Sous-additivité : $\\mathbb{P}(\\cup A_i) \\leq \\sum \\mathbb{P}(A_i)$
- Continuité croissante/décroissante pour suites $A_n$

---

#### Lois de probabilité usuelles
- **Uniforme** sur $\\{1, ..., n\\}$
- **Bernoulli** : $\\mathbb{P}(X=1) = p, \\mathbb{P}(X=0) = 1-p$
- **Binomiale** : $\\text{Bin}(n,p)$
- **Géométrique** : $\\mathbb{P}(X=k) = (1-p)^{k-1}p$
- **Poisson** : $\\mathbb{P}(X=k) = \\frac{\\lambda^k}{k!} e^{-\\lambda}$

---

#### Probabilité conditionnelle
$$
\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(A \\cap B)}{\\mathbb{P}(B)} \\quad (\\mathbb{P}(B) > 0)
$$

**Propriétés** :
- Formule des probabilités totales : $\\mathbb{P}(A) = \\sum \\mathbb{P}(A|B_i)\\mathbb{P}(B_i)$
- Formule de Bayes :
$$
\\mathbb{P}(B_i|A) = \\frac{\\mathbb{P}(A|B_i)\\mathbb{P}(B_i)}{\\sum \\mathbb{P}(A|B_j)\\mathbb{P}(B_j)}
$$
- Probabilités composées : $\\mathbb{P}(A \\cap B) = \\mathbb{P}(A|B)\\mathbb{P}(B)$

---

#### Indépendance
- Deux événements $A, B$ sont **indépendants** si $\\mathbb{P}(A \\cap B) = \\mathbb{P}(A)\\mathbb{P}(B)$
- Une famille $(A_i)$ est **mutuellement indépendante** si toute sous-famille l’est

---

#### Variables aléatoires discrètes
- Variable $X : \\Omega \\to \\mathbb{R}$
- **Loi de X** : $\\mathbb{P}_X(x) = \\mathbb{P}(X = x)$
- **Lois usuelles** : 
  - Bernoulli, Binomiale, Géométrique, Poisson
  - Uniforme finie sur un ensemble de valeurs

  `,
  tags: ['espaces probabilisés', 'tribus', 'probabilités', 'événements', 'lois discrètes'],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Fonctions-de-deux-variables
{
  id: 'Fonctions-de-deux-variables',
  titre: 'Fonctions de Deux Variables Réelles et à Valeurs Scalaires',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Fonctions de Deux Variables Réelles et à Valeurs Scalaires

---

#### Fonctions de deux variables réelles
- Étude des fonctions $f : \\mathbb{R}^2 \\to \\mathbb{R}$
- Domaine, image, représentation graphique

---

#### Applications partielles
- Pour $f(x,y)$, les applications partielles sont $x \\mapsto f(x,y_0)$ et $y \\mapsto f(x_0,y)$
- Analyse des variations selon chaque variable séparément

---

#### Dérivées partielles
- Définition des dérivées partielles $\\frac{\\partial f}{\\partial x}$, $\\frac{\\partial f}{\\partial y}$
- Existence et continuité
- Interprétation géométrique (pente dans chaque direction)

---

#### Intégrale à paramètre
- Intégrales de la forme $I(t) = \\int_a^b f(t,x) \\, dx$, où $t$ est un paramètre
- Étude de la dépendance de $I(t)$ par rapport à $t$

---

#### Théorème de continuité des intégrales à paramètre
- Si $f(t,x)$ est continue en $(t,x)$ sur $[c,d] \\times [a,b]$, alors $I(t)$ est continue sur $[c,d]$

---

#### Théorème de dérivabilité des intégrales à paramètre
- Sous conditions régulières (continuité, différentiabilité de $f$)
$$
\\frac{d}{dt} I(t) = \\int_a^b \\frac{\\partial}{\\partial t} f(t,x) \\, dx
$$

---

#### Extension du théorème de dérivabilité
- Pour $f$ de classe $C^k$ ou $C^{\\infty}$
- Dérivation sous le signe intégrale multiple fois possible, avec continuité suffisante

  `,
  tags: [
    'fonctions de plusieurs variables',
    'dérivées partielles',
    'intégrale à paramètre',
    'théorème de continuité',
    'théorème de dérivabilité',
    'analyse',
    'Ck',
    'C∞'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Intégrales-generalisees
{
  id: 'Integrales-generalisees',
  titre: 'Intégrales Généralisées',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `

### Intégrales Généralisées (Prépa)
---

#### Fonction Continue Par Morceaux (CPM)
- Une fonction est dite **continue par morceaux** sur un intervalle si elle est continue sauf en un nombre fini de points où elle admet des limites à gauche et à droite.
- Toute fonction continue est CPM, mais l’inverse n’est pas vrai.
- **Notation :** $f \\in \\mathscr{C}_{pm}([a;b])$

---

#### Intégrale Convergente / Divergente
- On dit que l’intégrale impropre $\\int_a^b f(t) \\, dt$ **converge** si la limite de l’intégrale sur un intervalle tronqué existe et est finie.
- Cas classiques :
  - Borne infinie (ex : $\\int_1^{+\\infty} f(t) \\, dt$)
  - Discontinuité en une borne (ex : $\\int_0^1 \\frac{1}{\\sqrt{t}} \\, dt$)

---

#### Méthode des Rectangles (Sommes de Riemann)
- Approche intuitive de l’intégration comme somme d’aires de rectangles.
- $$\\int_a^b f(t) \\, dt \\approx \\sum_{i=0}^{n-1} f(t_i)\\Delta t$$ avec $\\Delta t = \\frac{b-a}{n}$
- Permet de définir l’intégrale de Riemann et d’aborder la convergence.

---

#### Intégrales de Riemann
- Définition rigoureuse via les **sommes de Riemann**, puis passage à la limite.
- Étendue aux cas impropres par le passage à la limite lorsque la borne tend vers une valeur problématique.

---

#### Intégration par Parties
- Formule : $$\\int_a^b u v' = [uv]_a^b - \\int_a^b u' v$$
- Très utile pour intégrer des produits, notamment avec $\\ln(t)$, $t^n$, ou des fonctions trigonométriques.

---

#### Changement de Variable
- Si $t = \\phi(x)$, alors : $$\\int f(t) \\, dt = \\int f(\\phi(x)) \\phi'(x) \\, dx$$
- Outil important pour simplifier les intégrales compliquées ou ramener à une forme connue.

---

#### Exemples Classiques
$$ \\int_0^{+\\infty} e^{-\\alpha t} \\, dt = \\frac{1}{\\alpha} \\quad (\\alpha > 0) $$
$$ \\int_0^{1} \\ln(t) \\, dt = -1 $$
$$ \\int_1^{+\\infty} \\frac{1}{1 + t^2} \\, dt = \\frac{\\pi}{4} $$

---

#### Intégrales Classiques à connaître
| Intégrale | Condition | Résultat |
|----------|-----------|----------|
| $\\int_1^{+\\infty} \\frac{1}{t^\\alpha} dt$ | $\\alpha > 1$ | Converge |
| $\\int_0^1 \\frac{1}{t^\\alpha} dt$ | $\\alpha < 1$ | Converge |
| $\\int_0^{+\\infty} e^{-\\alpha t} dt$ | $\\alpha > 0$ | $\\frac{1}{\\alpha}$ |
| $\\int_0^1 \\ln(t) dt$ | – | $-1$ |
| $\\int_1^{+\\infty} \\frac{1}{1+t^2} dt$ | – | $\\frac{\\pi}{4}$ |

---

#### Intégrales Faussement Impropres ou Grossièrement Divergentes
- Certaines intégrales avec des bornes infinies ou des discontinuités peuvent tout de même **converger**.
- Exemples :
  - $\\int_0^1 \\frac{\\sin t}{\\sqrt{t}} \\, dt$ converge
  - $\\int_1^{+\\infty} \\frac{\\sin t}{t} \\, dt$ converge (mais pas absolument)

---

#### Fonction Gamma de Euler
- Définie par : $$\\Gamma(x) = \\int_0^{+\\infty} t^{x-1} e^{-t} \\, dt$$
- Généralisation de la factorielle : $\\Gamma(n) = (n-1)!$ si $n \\in \\mathbb{N}^*$
- Très utilisée en probabilités et analyse complexe.

---

#### Propriétés des Intégrales Généralisées
- **Linéarité** : $\\int_a^b (\\lambda f + \\mu g) = \\lambda \\int_a^b f + \\mu \\int_a^b g$
- **Chasles** : $\\int_a^b f + \\int_b^c f = \\int_a^c f$
- **Positivité** : Si $f \\geq 0$, alors $\\int f \\geq 0$
- **Croissance** : Si $f \\leq g$, alors $\\int f \\leq \\int g$
- **Changement de variable**, **intégration par parties** (cf. plus haut)

---

#### Critères de Convergence
- **Par comparaison** : Si $0 \\leq f(t) \\leq g(t)$ et $\\int g$ converge, alors $\\int f$ converge.
- **Comparaison asymptotique** : Si $f(t) \\sim g(t)$ en $t \\to a^+$, alors $f$ et $g$ ont le même caractère de convergence.

---

#### Intégrale Absolument Convergente
- Si $\\int |f|$ converge, alors $\\int f$ converge (**convergence absolue**).
- La réciproque est **fausse** :
  $$ \\int_1^{+\\infty} \\frac{\\sin t}{t} \\, dt \\text{ converge } \\quad \\text{mais} \\quad \\int_1^{+\\infty} \\left| \\frac{\\sin t}{t} \\right| \\, dt \\text{ diverge} $$

---

#### Fonction Intégrable sur un Intervalle
- Une fonction est **intégrable** sur un intervalle si $\\int |f|$ est finie.
- **Critères** :
  - Comparaison avec une fonction intégrable
  - Développement limité
  - Diminution rapide (ex : $t^{-\\alpha}$ avec $\\alpha > 1$ sur $[1,+\\infty[$)

---

#### Remarques Importantes
- **Convergence absolue ⇒ convergence**, mais pas l'inverse.
- **Fonction $e^{it}$** : $|e^{it}| = 1$, donc :
  $$ \\int_1^{+\\infty} e^{it} dt \\text{ diverge } \\quad \\text{(pas de limite)} $$
  $$ \\int_1^{+\\infty} |e^{it}| dt = \\int_1^{+\\infty} 1 \\, dt = +\\infty $$

---

### Conseils de Méthodologie
- Toujours **analyser les bornes** : continuité ? discontinuité ? borne infinie ?
- Se méfier de **l’intuition géométrique**.
- Utiliser les **modèles types** : $\\int \\frac{1}{t^\\alpha}$, $\\ln(t)$, $e^{-t}$, etc.
- Penser à **intégration par parties** et **changement de variable**.

---
  `,
  tags: [
    'intégrales généralisées',
    'intégrale impropre',
    'continuité par morceaux',
    'convergence',
    'critères de convergence',
    'intégration',
    'analyse',
    'intégrale absolument convergente',
    'intégration par parties',
    'changement de variable',
    'sommes de Riemann',
    'méthode des rectangles',
    'fonction gamma',
    'intégrales classiques'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Integrales-primitives
{
  id: 'integrales-primitives',
  titre: 'Intégrales et Primitives',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Lycée'],
  contenu: `

### Intégrales et Primitives (Lycée)
---

#### Définition d'une Primitive
- Une **primitive** de $f$ sur un intervalle $I$ est une fonction $F$ telle que :
  $$
  F'(x) = f(x)
  $$
- Si $F$ est une primitive, alors toutes les primitives s’écrivent :
  $$
  F(x) + C
  $$
  où $C \\in \\mathbb{R}$ est une constante.

---

#### Primitives Usuelles à Connaître

| Fonction $f(x)$                  | Primitive $F(x)$                        | Conditions                         |
|----------------------------------|-----------------------------------------|-------------------------------------|
| $x^n$                            | $\\frac{x^{n+1}}{n+1}$                  | $n \\neq -1$                       |
| $\\frac{1}{x}$                   | $\\ln|x|$                               | $x \\neq 0$                        |
| $\\frac{1}{1+x^2}$               | $\\arctan(x)$                           | -                                  |
| $\\frac{1}{\\sqrt{1-x^2}}$       | $\\arcsin(x)$                           | $|x| < 1$                          |
| $e^x$                            | $e^x$                                   | -                                  |
| $a^x$                            | $\\frac{a^x}{\\ln a}$                   | $a > 0,\\ a \\neq 1$               |
| $\\cos(x)$                       | $\\sin(x)$                              | -                                  |
| $\\sin(x)$                       | $-\\cos(x)$                             | -                                  |

---

#### Intégrale Définie
- Pour une fonction continue $f$ sur $[a; b]$, l’**intégrale définie** est notée :
  $$
  \\int_a^b f(x)\\, dx
  $$
- Elle représente l’aire algébrique entre la courbe $f$ et l’axe des abscisses.

**Théorème fondamental du calcul intégral :**
Si $F$ est une primitive de $f$, alors :
$$
\\int_a^b f(x)\\, dx = F(b) - F(a)
$$

---

#### Propriétés des Intégrales
- **Linéarité** :
  $$
  \\int_a^b [af(x) + bg(x)]\\, dx = a \\int_a^b f(x)\\, dx + b \\int_a^b g(x)\\, dx
  $$
- **Changement de bornes** :
  $$
  \\int_b^a f(x)\\, dx = - \\int_a^b f(x)\\, dx
  $$
- **Positivité** :
  Si $f(x) \\geq 0$ sur $[a; b]$, alors :
  $$
  \\int_a^b f(x)\\, dx \\geq 0
  $$
- **Additivité** :
  $$
  \\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx
  $$

---

#### Méthodes de Calcul

##### Intégration par Parties
- Pour $u(x), v(x)$ dérivables :
  $$
  \\int u(x)v'(x)\\, dx = u(x)v(x) - \\int u'(x)v(x)\\, dx
  $$
- Choisir $u$ facile à dériver, $v'$ facile à intégrer.

**Exemple :**
$$
\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C
$$

---

##### Changement de Variable (hors programme officiel, utile)
- Si $x = \\phi(t)$, alors :
  $$
  \\int f(x)\\, dx = \\int f(\\phi(t)) \\cdot \\phi'(t)\\, dt
  $$

---

#### Méthode des Rectangles (ou Sommes de Riemann)
- Approche numérique pour estimer une intégrale définie :
  $$
  \\int_a^b f(x)\\, dx \\approx \\sum_{i=0}^{n-1} f(x_i) \\cdot \\Delta x
  $$
  avec $\\Delta x = \\frac{b-a}{n}$

---

#### Exemples Classiques

- $\\displaystyle \\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3}$
- $\\displaystyle \\int_1^e \\frac{1}{x} dx = \\left[ \\ln x \\right]_1^e = 1$
- $\\displaystyle \\int_0^{\\pi} \\sin(x) dx = 2$

---

#### Conseils de Méthodologie

- **Identifier la forme** de la fonction : polynôme, exponentielle, trigonométrique...
- **Simplifier avant d’intégrer** si possible.
- **Penser à l’intégration par parties** quand le produit de fonctions apparaît.
- Vérifier la **continuité de la fonction** sur l’intervalle d’intégration.
- Toujours **ajouter $+C$** pour les primitives.

---

### À Savoir Par Cœur
- Primitives usuelles
- Théorème fondamental
- Formule de l’intégration par parties
- Interprétation géométrique de l’intégrale définie

---
  `,
  tags: [
    'primitive',
    'intégrale définie',
    'intégration par parties',
    'formules usuelles',
    'sommes de Riemann',
    'calcul intégral',
    'maths lycée',
    'analyse'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

//Réduction-endomorphismes-matrices
{
  id: 'Réduction-endomorphismes-matrices',
  titre: 'Réduction des Endomorphismes et des Matrices Carrées',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa'],
  contenu: `
### Réduction des Endomorphismes et des Matrices Carrées

---

#### Valeurs propres
- Définition : $\\lambda \\in \\mathbb{K}$ est une valeur propre d’un endomorphisme $f$ ou d’une matrice carrée $A$ s’il existe un vecteur non nul $v$ tel que $f(v) = \\lambda v$ ou $Av = \\lambda v$.

---

#### Spectre
- Ensemble des valeurs propres d’un endomorphisme ou d’une matrice carrée.

---

#### Vecteurs propres
- Vecteurs non nuls associés à une valeur propre.

---

#### Sous-espaces propres
- $E_{\\lambda} = \\{ v \\in E : f(v) = \\lambda v \\}$, sous-espace vectoriel propre associé à la valeur propre $\\lambda$.

---

#### Polynôme caractéristique
- Définition : $\\chi_f(X) = \\det(X I - A)$ pour une matrice $A$.
- Racines : valeurs propres.

---

#### Multiplicité d’une valeur propre
- Multiplicité algébrique : multiplicité de la racine dans $\\chi_f$.
- Multiplicité géométrique : dimension de $E_{\\lambda}$.

---

#### Propriétés des valeurs propres
- Les valeurs propres sont racines de tout polynôme annulateur.
- Elles sont précisément les racines du polynôme caractéristique.
- Leur somme est la trace de la matrice si $\\chi_f$ est scindé.
- Leur produit est le déterminant dans ce cas.

---

#### Propriétés des sous-espaces propres
- Sous-espaces stables par $f$.
- Théorème de Cayley-Hamilton : $\\chi_f(f) = 0$.

---

#### Trigonalisabilité
- Un endomorphisme (ou matrice) est trigonalisable s’il est représentable dans une base où sa matrice est triangulaire supérieure.
- Caractérisation : polynôme caractéristique scindé sur $\\mathbb{K}$.

---

#### Diagonalisabilité
- Un endomorphisme (ou matrice) est diagonalisable s’il existe une base de vecteurs propres.
- Caractérisations :
  - Dimension totale des sous-espaces propres égale à la dimension de l’espace.
  - Polynôme caractéristique scindé avec multiplicités algébriques égales aux dimensions des sous-espaces propres.
  - Existence d’un polynôme annulateur scindé à racines simples.

---

#### Conditions suffisantes de diagonalisabilité
- Polynôme caractéristique scindé à racines simples.
- Endomorphisme induit sur un sous-espace stable diagonalisable.
- Théorème spectral (endomorphismes symétriques dans $\\mathbb{R}$) : tout endomorphisme symétrique est diagonalisable dans une base orthonormale.

  `,
  tags: [
    'valeurs propres',
    'spectre',
    'sous-espaces propres',
    'polynôme caractéristique',
    'trigonalisabilité',
    'diagonalisabilité',
    'théorème spectral',
    'algèbre linéaire'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Séries-entières
{
  id: 'Séries-entières',
  titre: 'Séries Entières',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa'],
  contenu: `
### Séries Entières

---

#### Série entière
- Série de la forme $\\sum_{n=0}^{+\\infty} a_n z^n$, avec $(a_n)$ une suite de coefficients et $z \\in \\mathbb{C}$.

---

#### Rayon de convergence
- Rayon $R \\in [0, +\\infty]$ tel que la série converge pour $|z| < R$ et diverge pour $|z| > R$.

---

#### Lemme d’Abel
- Convergence uniforme sur tout disque fermé $\\overline{D(0, r)}$ pour tout $r < R$.

---

#### Disque ouvert de convergence
- Ensemble $\\{ z \\,|\\, |z| < R \\}$ où la série converge normalement.

---

#### Calcul pratique du rayon de convergence
- Par comparaison asymptotique des coefficients.
- Règle de d’Alembert : 
  $$
  R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|
  $$
- Exemple pour $\\sum n^\\alpha a_n z^n$.

---

#### Opérations sur séries entières
- Rayon de convergence de la somme : $R = \\min(R_1, R_2)$.
- Rayon de convergence du produit de Cauchy : au moins $\\min(R_1, R_2)$.

---

#### Classe $C^\\infty$
- La somme d’une série entière est de classe $C^\\infty$ sur le disque ouvert de convergence.

---

#### Dérivées successives
- Dérivation terme à terme possible sur $|z| < R$.
- Formule : 
  $$
  S^{(k)}(z) = \\sum_{n=k}^{+\\infty} a_n \\frac{n!}{(n-k)!} z^{n-k}
  $$

---

#### Primitivation
- Intégration terme à terme possible sur $|z| < R$.

---

#### Expression des coefficients par dérivées
- Coefficients $a_n = \\frac{S^{(n)}(0)}{n!}$.

---

#### Fonction développable en série entière
- Fonction $f$ telle que :
  $$
  f(x) = \\sum_{n=0}^{+\\infty} a_n (x - x_0)^n
  $$
  sur un intervalle ouvert de convergence.

---

#### Propriétés des fonctions développables en série entière
- Elles sont de classe $C^\\infty$.
- Dérivées successives et primitives restent développables en série entière.
- Leur développement est leur série de Taylor centrée en $x_0$.

---

#### Opérations sur fonctions développables
- Somme, produit, composition, dérivation et intégration terme à terme possibles dans le disque de convergence.

---

#### Développements usuels
- $\\exp(x) = \\sum_{n=0}^{+\\infty} \\frac{x^n}{n!}$
- $\\cos(x) = \\sum_{n=0}^{+\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}$
- $\\sin(x) = \\sum_{n=0}^{+\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$
- $\\cosh(x) = \\sum_{n=0}^{+\\infty} \\frac{x^{2n}}{(2n)!}$
- $\\sinh(x) = \\sum_{n=0}^{+\\infty} \\frac{x^{2n+1}}{(2n+1)!}$
- $(1+x)^\\alpha = \\sum_{n=0}^{+\\infty} \\binom{\\alpha}{n} x^n, \\quad |x|<1$
- $\\ln(1+x) = \\sum_{n=1}^{+\\infty} (-1)^{n+1} \\frac{x^n}{n}, \\quad |x| < 1$
- $\\arctan(x) = \\sum_{n=0}^{+\\infty} (-1)^n \\frac{x^{2n+1}}{2n+1}, \\quad |x| < 1$

  `,
  tags: [
    'série entière',
    'rayon de convergence',
    'lemme d’Abel',
    'dérivation terme à terme',
    'fonction développable',
    'série de Taylor',
    'analyse',
    'développement en série'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: true
},


//Série-numeriques
{
  id: 'Série-numeriques',
  titre: 'Série Numérique',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa'],
  contenu: `
### Série Numérique

---

#### Terme général et sommes partielles
- Série numérique : $\\sum_{n=0}^{+\\infty} u_n$ avec terme général $u_n$.
- Somme partielle : $S_N = \\sum_{n=0}^N u_n$.

---

#### Série convergente
- Série convergente si $S_N \\to S \\in \\mathbb{R}$ lorsque $N \\to +\\infty$.
- Somme de la série : $S$.

---

#### Sommes et restes
- Reste : $R_N = S - S_N = \\sum_{n=N+1}^{+\\infty} u_n$.
- Pour une série convergente, $u_n \\to 0$ et $R_N \\to 0$.

---

#### Séries géométriques
- Série $\\sum_{n=0}^{+\\infty} ar^n$ converge si $|r| < 1$.
- Somme : $S = \\frac{a}{1-r}$.

---

#### Séries exponentielles
- Séries comme $\\sum \\frac{x^n}{n!}$, convergence pour tout $x \\in \\mathbb{R}$.

---

#### Séries télescopiques
- Séries dont les termes s’annulent partiellement entre eux, simplifiant la somme partielle.

---

#### Série de Riemann
- Série $\\sum_{n=1}^{+\\infty} \\frac{1}{n^\\alpha}$.
- Converge si $\\alpha > 1$, diverge sinon.

---

#### Propriétés des séries convergentes
- Linéarité : somme de séries convergentes converge vers somme des sommes.
- Positivité et croissance : somme partielle croissante si termes positifs.
- Terme général et reste tendent vers 0.

---

#### Convergence absolue
- Série absolument convergente si $\\sum |u_n|$ converge.
- Toute série absolument convergente est convergente.

---

#### Produit de Cauchy
- Produit $w_n = \\sum_{k=0}^n u_k v_{n-k}$.
- Si $\\sum u_n$ et $\\sum v_n$ absolument convergentes, leur produit de Cauchy converge absolument et 
  $$
  \\sum w_n = \\left( \\sum u_n \\right) \\cdot \\left( \\sum v_n \\right).
  $$

---

#### Critères de convergence
- Comparaison des termes généraux avec une série connue.
- Règle de d’Alembert :
  $$
  L = \\lim_{n \\to \\infty} \\left| \\frac{u_{n+1}}{u_n} \\right|.
  $$
  Si $L < 1$, série absolument convergente ; si $L > 1$, divergence.

---

#### Théorème de comparaison série-intégrale
- Compare $\\sum u_n$ avec $\\int f(x) \\, dx$ pour fonction décroissante positive $f$.

---

#### Critère spécial des séries alternées
- Série $\\sum (-1)^n a_n$ avec $(a_n)$ positive, décroissante vers 0 est convergente.

---

#### Séries de Riemann alternées
- Alternance de signe sur la série de Riemann, converge conditionnellement si $\\alpha > 0$.

  `,
  tags: [
    'série numérique',
    'convergence',
    'critères de convergence',
    'série géométrique',
    'série de Riemann',
    'convergence absolue',
    'produit de Cauchy',
    'analyse'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Suites-series-fonctions
{
  id: 'Suites-series-fonctions',
  titre: 'Suites et Série de Fonctions',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa'],
  contenu: `
### Suites et Série de Fonctions

---

#### Modes de convergence pour les suites de fonctions
- **Convergence simple** : $f_n(x) \\to f(x)$ pour tout $x$.
- **Convergence uniforme** : $\\sup_x |f_n(x) - f(x)| \\to 0$.
- Norme de la convergence uniforme : $\\|f_n - f\\|_{\\infty} = \\sup_x |f_n(x) - f(x)|$.

---

#### Modes de convergence pour les séries de fonctions
- **Convergence simple** : la série des fonctions $\\sum f_n(x)$ converge point par point.
- **Convergence uniforme** : la série converge uniformément si la suite des sommes partielles converge uniformément.
- **Convergence normale** : la série $\\sum \\|f_n\\|_{\\infty}$ converge, ce qui implique la convergence uniforme.

---

#### Relations entre modes de convergence
- La convergence uniforme implique la convergence simple (pour suites et séries).
- La convergence normale implique la convergence uniforme (pour séries).
- La convergence uniforme d’une série est équivalente à la convergence simple plus la convergence uniforme des restes vers 0.

---

#### Propriétés conservées par la convergence simple
- Positivité
- Monotonie
- Parité
- Périodicité

---

#### Théorèmes importants
- **Théorème de la double limite** (pour suites et séries) : échange des limites sous certaines conditions.
- **Théorème de continuité** : limite uniforme d’une suite de fonctions continues est continue.
- **Théorème d’intégration sur un segment** : passage à la limite sous intégrale pour suite ou série convergeant uniformément.
- **Théorème de convergence dominée** : convergence et intégration interchangeables sous condition de domination.
- **Théorème d’intégration terme à terme** (pour séries) : intégration de la somme égale à la somme des intégrales sous convergence uniforme.
- **Théorème de dérivation** (pour suites et séries) : dérivation terme à terme possible sous conditions de convergence uniforme des dérivées.

---

#### Extensions à la classe 𝐶^k ou 𝐶^∞
- Ces théorèmes s’étendent aux fonctions de classe $C^k$ ou $C^{\\infty}$, avec dérivations successives passant à la limite.

  `,
  tags: [
    'suites de fonctions',
    'séries de fonctions',
    'convergence uniforme',
    'théorème',
    'analyse',
    'continuité',
    'intégration',
    'dérivation'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//Variables-aleatoires-discretes
{
  id: 'Variables-aleatoires-discretes',
  titre: 'Variables Aléatoires Discrètes',
  matiere: 'Probabilités',
  categorie: 'Statistiques',
  niveau: ['Prépa'],
  contenu: `
### Variables Aléatoires Discrètes

---

#### Espérance $E(X)$
- Pour une variable aléatoire discrète réelle $X$, $E(X) = \\sum_x x \\cdot P(X=x)$.
- **Propriétés** :
  - Linéarité : $E(aX + bY) = aE(X) + bE(Y)$.
  - Positivité : si $X \\geq 0$, alors $E(X) \\geq 0$.
  - Croissance : si $X \\leq Y$ alors $E(X) \\leq E(Y)$.
  - Inégalité de Markov : $P(|X| \\geq a) \\leq \\frac{E(|X|)}{a}$ pour $a > 0$.
  - Théorème de transfert : pour $Y = g(X)$, $E(Y) = \\sum g(x) P(X=x)$.

---

#### Variance $V(X)$ et écart-type $\\sigma(X)$
- $V(X) = E[(X - E(X))^2] = E(X^2) - (E(X))^2$.
- $\\sigma(X) = \\sqrt{V(X)}$.
- **Propriétés** :
  - $V(aX + b) = a^2 V(X)$.
  - Inégalité de Bienaymé-Tchebychev : $P(|X - E(X)| \\geq a) \\leq \\frac{V(X)}{a^2}$.

---

#### Fonction de répartition $F$
- $F(x) = P(X \\leq x)$.
- **Propriétés** :
  - $F$ est croissante, à droite continue.
  - $\\lim_{x \\to -\\infty} F(x) = 0$, $\\lim_{x \\to +\\infty} F(x) = 1$.
- Expression de l’espérance à l’aide de $F$ (pour variables à valeurs dans $\\mathbb{N}$).

---

#### Fonction génératrice $G_X$
- Pour $X$ à valeurs dans $\\mathbb{N}$, $G_X(t) = E(t^X) = \\sum_{k=0}^{\\infty} P(X=k) t^k$.
- **Propriétés** :
  - Rayon de convergence $\\geq 1$.
  - $G_X(1) = 1$.
  - $G_X$ détermine la loi de $X$.
  - Expressions de l’espérance et de la variance à l’aide de $G_X$ :
    - $E(X) = G'_X(1)$,
    - $V(X) = G''_X(1) + G'_X(1) - (G'_X(1))^2$.

---

#### Lois usuelles discrètes et leurs paramètres
| Loi                | Espérance $E(X)$ | Variance $V(X)$ | Fonction génératrice $G_X(t)$                |
|--------------------|------------------|-----------------|----------------------------------------------|
| Loi uniforme sur $\\{1,...,n\\}$ | $\\frac{n+1}{2}$ | $\\frac{n^2 - 1}{12}$ | $\\frac{t(1 - t^n)}{n(1-t)}$                  |
| Loi de Bernoulli $(p)$          | $p$              | $p(1-p)$        | $1 - p + pt$                                 |
| Loi binomiale $(n,p)$           | $np$             | $np(1-p)$       | $(1-p + pt)^n$                               |
| Loi géométrique $(p)$           | $\\frac{1}{p}$   | $\\frac{1-p}{p^2}$ | $\\frac{pt}{1 - (1-p)t}$ (pour $|t| < \\frac{1}{1-p}$) |
| Loi de Poisson $(\\lambda)$     | $\\lambda$       | $\\lambda$      | $e^{\\lambda (t-1)}$                         |

  `,
  tags: [
    'variables aléatoires',
    'espérance',
    'variance',
    'fonction génératrice',
    'lois de probabilité',
    'probabilités',
    'analyse'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

];

// Physique
export const fichesPhysique: Fiche[] = [
  {
    //physique-milieux-ferromagnetiques
    id: 'physique-milieux-ferromagnetiques',
    titre: "Milieux ferromagnétiques et magnétisme",
    matiere: "Physique",
    categorie: "Électromagnétisme", // <-- Ajouté
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
  //chimie-structure-atomique
{
  //chimie-structure-atomique
  id: 'chimie-structure-atomique',
  titre: "Structure atomique et liaisons chimiques",
  matiere: "Chimie",
  categorie: "Structure atomique",
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
    - \( n = 1 \) : 2 électrons (1s)  
    - \( n = 2 \) : 8 électrons (2s, 2p)  
    - \( n = 3 \) : 18 électrons (3s, 3p, 3d)  
    - etc.

- **Principe d’exclusion de Pauli** :  
  → Une orbitale ne peut contenir que **2 électrons au maximum** avec des spins opposés.

- **Électrons de valence** : électrons situés sur la **couche électronique externe** (responsables de la réactivité chimique).  
  - Exemple : Oxygène (Z = 8) → \( 1s^2 2s^2 2p^4 \) → 6 électrons de valence

- **Électrons de cœur** : les autres électrons, plus profondément liés au noyau → peu impliqués dans les réactions chimiques.

---

### Remplissage des orbitales

- **Ordre énergétique** :  
  $$
  1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < \\ldots
  $$
- **Règle de Hund** : les électrons se répartissent sur des orbitales de même énergie en maximisant les spins parallèles avant de se coupler.
- **Règle de Pauli** : chaque orbitale peut contenir au plus 2 électrons de spins opposés.
- **Règle de Klechkowski** (ou principe de Aufbau) : remplissage des orbitales par ordre croissant d'énergie effective.

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

### Théorie de Lewis

- Représentation des atomes via des symboles et des points pour les électrons de valence.
- Permet d'illustrer la formation des liaisons covalentes par partage d’électrons.

---

### Électronégativité

- Capacité d’un atome à attirer les électrons dans une liaison.  
- Classement selon Pauling : \( \mathrm{F} > \mathrm{O} > \mathrm{Cl} > \mathrm{N} > \mathrm{Br} > \ldots \)  
- Utilisée pour déterminer la polarité des liaisons chimiques.

---

### Notion de cristallographie

- **Structures cristallographiques** : arrangement périodique des atomes dans les solides.  
- **Coordination** : nombre d’atomes voisins immédiats autour d’un atome donné.  
- **Compacité** : fraction de volume effectivement occupée par les atomes dans le réseau.  
- **Masses volumiques** : masse par unité de volume, liée à la compacité et à la masse atomique.  
- **Sites** : positions spécifiques occupées par les atomes dans le réseau cristallin.

---

### Résumé

- Les **niveaux d’énergie**, **isotopes**, et **électrons de valence** expliquent la réactivité chimique.  
- La **classification périodique** permet de prédire les propriétés chimiques.  
- La **configuration électronique** régit le comportement des atomes dans les liaisons.  
- Les **règles de Hund, Pauli, Klechkowski** expliquent le remplissage des orbitales.  
- La **théorie de Lewis** illustre la formation des liaisons covalentes.  
- La **cristallographie** permet d’étudier la structure et les propriétés des solides.

`,
  tags: [
    'isotopes',
    'niveaux d’énergie',
    'principe de Pauli',
    'électrons de valence',
    'classification périodique',
    'règle de Hund',
    'règle de Klechkowski',
    'théorie de Lewis',
    'électronégativité',
    'cristallographie'
  ],
  datePublication: '2025-05-23',
  populaire: true,
  aReviser: true,
},

//cinétique-chimique
{
  //cinétique-chimique
  id: 'chimie-cinetique-chimique',
  titre: "Cinétique chimique",
  matiere: "Chimie",
  categorie: "Cinétique chimique",
  niveau: ["Prépa"],
  contenu: `
### Cinétique chimique

---

#### Définitions des vitesses

- La vitesse de réaction exprime la variation de la concentration d’un réactif ou d’un produit par unité de temps.  
- Formellement, pour un réactif \( A \) :  
  $$
  v = - \\frac{1}{\\nu_A} \\frac{d[A]}{dt}
  $$
  où \( \\nu_A \) est le coefficient stœchiométrique (positif) de \( A \).

---

#### Ordre de réaction

- L’ordre global est la somme des exposants dans la loi de vitesse empirique.  
- Exemple d’une réaction \( A + B \\to C \) avec vitesse :  
  $$
  v = k [A]^m [B]^n
  $$
  - Ordre partiel par rapport à \( A \) : \( m \)  
  - Ordre partiel par rapport à \( B \) : \( n \)  
  - Ordre global : \( m + n \)

---

#### Temps de demi-réaction

- Le temps nécessaire pour que la concentration d’un réactif soit réduite de moitié.  
- Exemple pour une réaction d’ordre 1 :  
  $$
  t_{1/2} = \\frac{\\ln 2}{k}
  $$

---

#### Loi d’Arrhénius

- Exprime la dépendance de la constante de vitesse \( k \) à la température \( T \) :  
  $$
  k = A \\exp \\left(-\\frac{E_a}{RT}\\right)
  $$
  - \( A \) : facteur pré-exponentiel (fréquence des collisions efficaces)  
  - \( E_a \) : énergie d’activation  
  - \( R \) : constante des gaz parfaits  
  - \( T \) : température en kelvin

---

### Résumé

- La **vitesse de réaction** mesure l’évolution des concentrations.  
- L’**ordre de réaction** caractérise la dépendance de la vitesse en fonction des concentrations.  
- Le **temps de demi-réaction** est un indicateur temporel caractéristique.  
- La **loi d’Arrhénius** décrit l’influence de la température sur la vitesse.

`,
  tags: [
    'cinétique',
    'vitesse de réaction',
    'ordre de réaction',
    'temps de demi-réaction',
    'loi d’Arrhénius'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//chimie-des-solutions
{
  id: 'chimie-des-solutions',
  titre: "Chimie des solutions",
  matiere: "Chimie",
  categorie: "Chimie des solutions",
  niveau: ["Prépa"],
  contenu: `
### Chimie des solutions

---

#### Étude des domaines de prédominance : acide-base

- Analyse des espèces chimiques présentes en fonction du pH.  
- Utilisation des constantes d’acidité \( K_a \) pour déterminer les formes prédominantes.  
- Exemple : équilibre acide-base  
  $$
  HA \\leftrightarrow H^+ + A^-
  $$
- Domaine de prédominance de \( HA \) ou \( A^- \) selon le pH.

---

#### Étude des domaines d’existence : précipitation

- Détermination des conditions de formation ou de dissolution d’un précipité.  
- Utilisation du produit de solubilité \( K_{ps} \) :  
  $$
  M^{m+} + nX^{x-} \\leftrightarrow M_mX_n(s)
  $$
- Précipitation lorsque le produit ionique dépasse \( K_{ps} \).

---

#### Définition des différentes constantes

- \( K_a \) : constante d’acidité  
- \( K_b \) : constante de basicité  
- \( K_{ps} \) : produit de solubilité  
- \( K_c \) : constante d’équilibre générale

---

#### Solubilité

- Quantité maximale de soluté dissous à l’équilibre dans une solution saturée.  
- Relation avec \( K_{ps} \) :  
  Pour un sel \( MX \),  
  $$
  K_{ps} = [M^{+}][X^{-}]
  $$
- Calcul de la solubilité à partir de \( K_{ps} \).

---

#### Suivi de dosage ou cinétique par pH-métrie

- Mesure du pH en fonction du temps ou du volume ajouté lors d’un dosage.  
- Permet de déterminer les points d’équivalence et d’étudier la vitesse de réaction.

---

#### Conductimétrie

- Mesure de la conductivité électrique d’une solution.  
- Utilisée pour suivre la concentration ionique et la progression de réactions.

---

#### Spectrophotométrie : Loi de Beer-Lambert

- Relation entre l’absorbance \( A \), la concentration \( c \), et la longueur de la cellule \( l \) :  
  $$
  A = \\varepsilon \\, l \\, c
  $$
- \( \\varepsilon \) : coefficient d’extinction molaire, caractéristique de l’espèce chimique.  
- Permet la détermination quantitative d’espèces en solution.

---

### Résumé

- La chimie des solutions repose sur l’étude des équilibres acido-basiques et de précipitation.  
- Les constantes d’équilibre sont essentielles pour prédire le comportement des espèces.  
- Les méthodes analytiques (pH-métrie, conductimétrie, spectrophotométrie) permettent un suivi précis des réactions en solution.

`,
  tags: [
    'chimie des solutions',
    'équilibres acide-base',
    'précipitation',
    'constantes d’équilibre',
    'solubilité',
    'pH-métrie',
    'conductimétrie',
    'spectrophotométrie',
    'loi de Beer-Lambert'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//thermochimie
{
  //thermochimie
  id: 'thermochimie',
  titre: "Thermochimie",
  matiere: "Chimie",
  categorie: "Thermochimie",
  niveau: ["Prépa"],
  contenu: `
### Thermochimie

---

#### Énergie dégagée par une réaction

- Quantité de chaleur échangée lors d’une réaction chimique à pression constante.  
- Notée $\\Delta H$ (enthalpie de réaction).  
- $\\Delta H < 0$ : réaction exothermique (dégage de la chaleur).  
- $\\Delta H > 0$ : réaction endothermique (absorbe de la chaleur).

---

#### Température de flamme

- Température maximale atteinte lors de la combustion d’un combustible en présence d’un comburant.  
- Dépend des quantités initiales et des conditions de la réaction.

---

#### Définition des grandeurs de réaction

- Grandeurs thermodynamiques associées à une réaction chimique :  
  - $\\Delta H$ : enthalpie  
  - $\\Delta S$ : entropie  
  - $\\Delta G$ : énergie libre de Gibbs

---

#### Définition des grandeurs de formation

- Grandeurs associées à la formation d’un composé à partir des éléments dans leur forme standard.  
- Par exemple : enthalpie standard de formation $\\Delta H_f^0$.

---

#### Grandeurs standard

- Grandeurs mesurées sous conditions standards :  
  - Pression $P^0 = 1\, \\text{atm}$  
  - Température généralement $25^\\circ C$ ou $298\,K$

---

#### Variance

- Nombre de paramètres indépendants que l’on peut modifier sans changer l’état d’équilibre.  
- Donnée par la règle de Gibbs :  
  $$
  V = C - P + 2
  $$
  où $C$ = nombre de composants, $P$ = nombre de phases.

---

#### Critères d’évolution et de déplacement d’équilibre

- Critère d’évolution spontanée :  
  $\\Delta G < 0$ → réaction spontanée dans le sens direct.  
- Position d’équilibre déterminée par $\\Delta G = 0$.  
- Loi de Le Chatelier : un système à l’équilibre soumis à une contrainte tend à s’adapter pour la réduire.

---

### Résumé

- La thermochimie étudie les échanges d’énergie lors des réactions chimiques.  
- L’enthalpie, l’entropie et l’énergie libre sont des grandeurs clés.  
- Les conditions standards permettent de comparer les réactions.  
- La variance et les critères d’évolution guident la compréhension des équilibres chimiques.

`,
  tags: [
    'thermochimie',
    'enthalpie',
    'température de flamme',
    'grandeurs de réaction',
    'grandeurs de formation',
    'grandeurs standard',
    'variance',
    'critères d’évolution',
    'équilibre chimique'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//binaires
{
  //binaires
  id: 'binaires',
  titre: "Systèmes Binaires",
  matiere: "Chimie",
  categorie: "Chimie Physique",
  niveau: ["Prépa"],
  contenu: `
### Systèmes Binaires

---

#### Calculs de variance selon les domaines

- La variance \( V \) dans un système binaire dépend du nombre de phases \( P \) et des composants \( C=2 \).  
- Règle de Gibbs :  
  $$
  V = C - P + 2 = 2 - P + 2 = 4 - P
  $$
- Exemple :  
  - 1 phase → \( V = 3 \) variables indépendantes  
  - 2 phases → \( V = 2 \)  
  - 3 phases → \( V = 1 \)

---

#### Identification des zones du diagramme

- Le diagramme de phases binaire montre différentes zones selon le nombre et la nature des phases présentes :  
  - Zones monophasiques (liquide ou solide)  
  - Zones biphasées (liquide + solide, ou deux solides)

---

#### Miscibilité totale ou nulle

- **Miscibilité totale** : les deux composants sont complètement miscibles dans toutes les proportions, formant une phase homogène.  
- **Miscibilité nulle** : les composants sont totalement immiscibles, formant des phases séparées.

---

#### Mélanges indifférents

- Mélanges dont les propriétés thermodynamiques (température de fusion, pression) sont pratiquement celles d’un composant pur, sans interaction notable.

---

#### Eutectique

- Point du diagramme où deux phases solides coexistent en équilibre avec la phase liquide.  
- Température minimale à laquelle le mélange liquide se solidifie.  
- Composition et température caractéristiques.

---

#### Composés définis

- Phases solides composées d’un rapport stœchiométrique fixe entre les composants.  
- Généralement des phases intermédiaires distinctes dans le diagramme.

---

#### Courbes d’analyse thermique

- Utilisation des techniques comme la DSC (Différential Scanning Calorimetry) pour suivre les transitions de phase.  
- Courbes montrent les points de fusion, solidification, transformations, etc.

---

#### Analyse quantitative

- Retrouver la composition d’un composé défini à partir des diagrammes.  
- Utilisation de la règle des moments pour exploiter la proportion des phases dans un mélange biphasique.  
- Règle des moments :  
  $$
  C_0 = x C_1 + (1 - x) C_2
  $$
  où $\ C_0 \$ est la composition globale, $\ C_1 \$ et $\ C_2 \$ les compositions des phases, et $\ x \$ la fraction molaire.

---

### Résumé

- Les systèmes binaires présentent une grande richesse de comportements avec différentes zones de phases.  
- La variance et la règle de Gibbs permettent de comprendre les degrés de liberté.  
- La compréhension du diagramme est essentielle pour prévoir les mélanges et leurs transformations thermiques.

`,
  tags: [
    'systèmes binaires',
    'variance',
    'diagrammes de phase',
    'miscibilité',
    'eutectique',
    'composés définis',
    'analyse thermique',
    'règle des moments'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

//diagramme-epH
{
  //diagramme-epH
  id: 'diagramme-epH',
  titre: "Diagramme E-pH (Diagramme de Pourbaix)",
  matiere: "Chimie",
  categorie: "Chimie Physique",
  niveau: ["Prépa"],
  contenu: `
### Diagramme E-pH (Diagramme de Pourbaix)

---

#### Construction et identification des domaines

- Le diagramme E-pH représente les zones de stabilité des différentes espèces chimiques en fonction du potentiel électrique $E$ et du pH de la solution.  
- Identification des domaines de prédominance (espèce majoritaire) et d’existence.  
- Justification par les réactions d’oxydo-réduction et équilibres acido-basiques.

---

#### Cas particulier de l’eau

- L’eau se décompose en $\\mathrm{H_2}$ et $\\mathrm{O_2}$ dans certaines zones du diagramme.  
- Potentiels limites :  
  $$
  \\mathrm{H_2O} + e^- \\rightarrow \\frac{1}{2} \\mathrm{H_2} + \\mathrm{OH}^- \\quad \\text{(réduction)}  
  $$
  $$
  \\mathrm{H_2O} \\rightarrow \\frac{1}{2} \\mathrm{O_2} + 2H^+ + 2e^- \\quad \\text{(oxydation)}  
  $$

---

#### Zones d’immunité, de passivation et de corrosion

- **Zone d’immunité** : métal stable, aucune corrosion observable.  
- **Zone de passivation** : formation d’un film protecteur (oxyde, couche passive).  
- **Zone de corrosion** : dissolution active du métal, corrosion rapide.

---

#### Courbes intensité-potentiel (i-E)

- Relation entre l’intensité électrique $i$ et le potentiel $E$.  
- **Tracé** des courbes d’intensité en fonction du potentiel pour étudier les réactions électrochimiques.  
- **Interprétation** : domaines de courant anodique (oxydation) et cathodique (réduction).

---

#### Phénomènes associés

- **Surtensions** : déviation du potentiel réel par rapport au potentiel d’équilibre dû aux phénomènes cinétiques.  
- **Blocages cinétiques** : ralentissement des réactions électrochimiques.  
- **Électrolyse** : processus forcé par passage de courant, décomposition des espèces chimiques.  
- **Pile** : conversion d’énergie chimique en énergie électrique.  
  - Capacité, masse formée et énergie massique consommée sont des paramètres clés.

---

#### Protection contre la corrosion

- Utilisation de potentiels pour maintenir le métal dans la zone d’immunité ou de passivation.  
- Concepts de potentiel mixte : équilibre entre anodique et cathodique dans un système réel.

---

### Résumé

- Le diagramme E-pH est un outil fondamental pour comprendre la stabilité chimique des métaux en solution aqueuse.  
- Il permet d’anticiper les conditions de corrosion et de protection.  
- L’étude des courbes intensité-potentiel complète cette analyse en mettant en lumière les mécanismes électrochimiques.

`,
  tags: [
    'diagramme E-pH',
    'diagramme de Pourbaix',
    'corrosion',
    'passivation',
    'courbes intensité-potentiel',
    'électrochimie',
    'protection contre la corrosion',
    'pile',
    'électrolyse'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false,
},

];

// Kholles
export const fichesKholles: Fiche[] = [


];


export const fichesSI: Fiche[] = [ 


];


// Toutes les fiches réunies (pour compatibilité avec l’existant)
export const fiches: Fiche[] = [
  ...fichesMaths,
  ...fichesPhysique,
  ...fichesInfo,
  ...fichesChimie,
  ...fichesKholles,
  ...fichesSI
];
