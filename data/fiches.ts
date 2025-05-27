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
  //Algebre

  // algebre-generale
  {
  id: 'Algebre-generale',
  titre: 'Algèbre Générale - Bases',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Algèbre Générale

---

#### Produit de sommes
- Produit de deux sommes :
$$
\\left(\\sum_i a_i \\right) \\times \\left(\\sum_j b_j \\right) = \\sum_i \\sum_j a_i b_j.
$$
- Utilisé pour développer des expressions algébriques.

---

#### Sommes classiques
- Sommes usuelles :
  - Somme des entiers de 1 à $n$ :
  $$
  \\sum_{k=1}^n k = \\frac{n(n+1)}{2}.
  $$
  - Somme des carrés de 1 à $n$ :
  $$
  \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}.
  $$
  - Somme des cubes de 1 à $n$ :
  $$
  \\sum_{k=1}^n k^3 = \\left( \\frac{n(n+1)}{2} \\right)^2.
  $$

---

#### Formule du binôme de Newton
- Pour tout $n \\in \\mathbb{N}$, $(a+b)^n$ s’écrit :
$$
(a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k,
$$
où
$$
\\binom{n}{k} = \\frac{n!}{k!(n-k)!}.
$$

---

#### Lien coefficients/racines d’un polynôme
- Pour un polynôme de degré $n$,
$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_0,
$$
avec racines $r_1, r_2, ..., r_n$ (dans $\\mathbb{C}$), on a :
  - Somme des racines :
  $$
  r_1 + r_2 + \\cdots + r_n = -\\frac{a_{n-1}}{a_n}.
  $$
  - Produit des racines :
  $$
  r_1 r_2 \\cdots r_n = (-1)^n \\frac{a_0}{a_n}.
  $$

---

#### Opérations sur ensembles : union, intersection, complémentaire
- **Union** : $A \\cup B = \\{ x : x \\in A \\text{ ou } x \\in B \\}$.
- **Intersection** : $A \\cap B = \\{ x : x \\in A \\text{ et } x \\in B \\}$.
- **Complémentaire** : $A^c = \\{ x : x \\notin A \\}$.
- Formules classiques :
  - $A \\cup B = A + B - A \\cap B$ (cardinal)
  - $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ (loi de De Morgan)
  - $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$ (loi de De Morgan)

  `,
  tags: [
    'algèbre',
    'produit',
    'somme',
    'binôme de Newton',
    'polynôme',
    'racines',
    'ensembles',
    'union',
    'intersection',
    'complémentaire'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

// Trigonometrie-formules
{
  id: 'Trigonometrie-formules',
  titre: 'Trigonométrie - Formules au programme',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Lycée', 'Prépa', 'Université'],
  contenu: `
### Trigonométrie - Formules au programme

---

#### Formules de base
- Relations fondamentales :
  - $\\sin^2 x + \\cos^2 x = 1$,
  - $\\tan x = \\frac{\\sin x}{\\cos x}$ (si $\\cos x \\neq 0$).

---

#### Formules d’addition et de soustraction
- $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$,
- $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$,
- $\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$.

---

#### Formules de duplication (double angle)
- $\\sin(2x) = 2 \\sin x \\cos x$,
- $\\cos(2x) = \\cos^2 x - \\sin^2 x = 2 \\cos^2 x - 1 = 1 - 2 \\sin^2 x$,
- $\\tan(2x) = \\frac{2 \\tan x}{1 - \\tan^2 x}$.

---

#### Formules de réduction
- $\\sin(\\pi - x) = \\sin x$,
- $\\cos(\\pi - x) = -\\cos x$,
- $\\sin(-x) = -\\sin x$,
- $\\cos(-x) = \\cos x$.

---

#### Formules de produit en somme et somme en produit
- $\\sin a \\sin b = \\frac{1}{2} [ \\cos(a - b) - \\cos(a + b) ]$,
- $\\cos a \\cos b = \\frac{1}{2} [ \\cos(a - b) + \\cos(a + b) ]$,
- $\\sin a \\cos b = \\frac{1}{2} [ \\sin(a + b) + \\sin(a - b) ]$.

---

### Formules hors programme (à connaître mais pas au programme officiel)

- Formules de la tangente de demi-angle :
  $$
  \\tan \\frac{x}{2} = \\frac{\\sin x}{1 + \\cos x} = \\frac{1 - \\cos x}{\\sin x}.
  $$

- Formules d’angle multiple :
  - $\\sin(3x) = 3 \\sin x - 4 \\sin^3 x$,
  - $\\cos(3x) = 4 \\cos^3 x - 3 \\cos x$.

- Formules d’addition pour les fonctions inverses (arcsin, arccos, arctan), utiles pour certaines intégrations.

  `,
  tags: [
    'trigonométrie',
    'formules',
    'sinus',
    'cosinus',
    'tangente',
    'angles',
    'formules d\'addition',
    'formules de duplication',
    'formules produit-somme'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

// Complexes-formules
{
  id: 'Complexes-formules',
  titre: 'Nombres Complexes - Formules essentielles',
  matiere: 'Algèbre',
  categorie: 'Mathématiques',
  niveau: ['Lycée','Prépa', 'Université'],
  contenu: `
### Nombres Complexes - Formules essentielles

---

#### Formules d’Euler
- Pour tout réel $\\theta$ :
  $$
  e^{i\\theta} = \\cos \\theta + i \\sin \\theta.
  $$
- En particulier :
  $$
  \\cos \\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\quad \\sin \\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}.
  $$

---

#### Racines nèmes de l’unité
- Les $n$ racines complexes de l’équation $z^n = 1$ sont données par :
  $$
  z_k = e^{i \\frac{2\\pi k}{n}}, \\quad k = 0, 1, \\dots, n-1.
  $$
- Elles forment un polygone régulier à $n$ sommets sur le cercle unité dans le plan complexe.

---

#### Résolution du trinôme du second degré à coefficients réels
- Équation : $az^2 + bz + c = 0$, avec $a \\neq 0$, $a,b,c \\in \\mathbb{R}$.
- Discriminant : $\\Delta = b^2 - 4ac$.
- Solutions dans $\\mathbb{C}$ :
  - Si $\\Delta \\geq 0$ :
    $$
    z_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}, \\quad z_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}.
    $$
  - Si $\\Delta < 0$ :
    $$
    z_1 = \\frac{-b}{2a} - i \\frac{\\sqrt{-\\Delta}}{2a}, \\quad z_2 = \\frac{-b}{2a} + i \\frac{\\sqrt{-\\Delta}}{2a}.
    $$

---

#### Représentation trigonométrique
- Pour $z = re^{i\\theta}$ avec $r = |z|$ et $\\theta = \\arg(z)$ :
  $$
  z = r(\\cos \\theta + i \\sin \\theta).
  $$

- Puissance et racines :
  $$
  z^n = r^n e^{i n \\theta}, \quad z^{1/n} = r^{1/n} e^{i \\frac{\\theta + 2k\\pi}{n}}, \quad k=0,...,n-1.
  $$

  `,
  tags: [
    'nombres complexes',
    'formules d\'Euler',
    'racines nèmes',
    'polynôme du second degré',
    'équation quadratique',
    'algèbre'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
  

  //Endomorphismes-matrices-carrees
{
  id: 'Calcul-matriciel',
  titre: 'Calcul Matriciel',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa'],
  contenu: `
### Calcul Matriciel

---

#### Définition
- Une matrice $A$ est un tableau rectangulaire de coefficients $a_{ij}$ appartenant à un corps $\mathbb{K}$, de dimension $m \\times n$.
- Les matrices carrées ont même nombre de lignes et de colonnes : $n \\times n$.

---

#### Image et noyau
- Considérer la matrice $A \\in \\mathcal{M}_{m,n}(\\mathbb{K})$ comme une application linéaire $f : \\mathbb{K}^n \\to \\mathbb{K}^m$.
- L’**image** de $A$ est l’ensemble des vecteurs $y$ tels qu’il existe $x$ avec $Ax = y$.
- Le **noyau** de $A$ est l’ensemble des vecteurs $x$ tels que $Ax = 0$.

---

#### Produit matriciel
- Soient $A \\in \\mathcal{M}_{m,n}(\\mathbb{K})$ et $B \\in \\mathcal{M}_{n,p}(\\mathbb{K})$, le produit $AB \\in \\mathcal{M}_{m,p}(\\mathbb{K})$ est défini par :
  $$
  (AB)_{ij} = \\sum_{k=1}^n a_{ik} b_{kj}.
  $$
- Le produit matriciel est associatif mais **non commutatif** en général.

---

#### Transposée
- La transposée d’une matrice $A = (a_{ij})$ est la matrice $A^T = (a_{ji})$.
- Propriétés :
  - $(A^T)^T = A$,
  - $(A + B)^T = A^T + B^T$,
  - $(\lambda A)^T = \lambda A^T$,
  - $(AB)^T = B^T A^T$.

---

#### Matrices symétriques et antisymétriques
- $A$ est **symétrique** si $A = A^T$.
- $A$ est **antisymétrique** (ou skew-symétrique) si $A^T = -A$.
- Toute matrice carrée $M$ peut s’écrire de manière unique comme :
  $$
  M = \frac{M + M^T}{2} + \frac{M - M^T}{2},
  $$
  où la première partie est symétrique, la seconde antisymétrique.

---

#### Matrices triangulaires supérieures
- Une matrice carrée est **triangulaire supérieure** si tous ses coefficients sous la diagonale sont nuls : $a_{ij} = 0$ pour $i > j$.
- Propriétés importantes :
  - Le produit de matrices triangulaires supérieures est triangulaire supérieure.
  - Le déterminant est le produit des coefficients diagonaux.

---

#### Matrices inversibles
- Une matrice carrée $A$ est **inversible** s’il existe $A^{-1}$ telle que :
  $$
  AA^{-1} = A^{-1}A = I_n,
  $$
  où $I_n$ est la matrice identité.
- Propriétés :
  - $A$ inversible $\iff$ $\\det(A) \\neq 0$,
  - $(A^{-1})^T = (A^T)^{-1}$,
  - Si $A$ et $B$ sont inversibles, alors $AB$ est inversible et $(AB)^{-1} = B^{-1} A^{-1}$.

  `,
  tags: [
    'matrices',
    'calcul matriciel',
    'image',
    'noyau',
    'produit matriciel',
    'transposée',
    'matrices symétriques',
    'triangulaire',
    'matrices inversibles',
    'algèbre linéaire'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Produit-scalaire
 {
  id: 'Produit-scalaire',
  titre: 'Produit Scalaire',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Produit Scalaire

---

#### Définition
- Un produit scalaire sur un espace vectoriel réel $E$ est une application bilinéaire symétrique, positive définie :
  $$
  \\langle \\, \\cdot \\, , \\, \\cdot \\, \\rangle : E \\times E \\to \\mathbb{R}
  $$
  telle que pour tout $x, y, z \\in E$ et $\\lambda \\in \\mathbb{R}$ :
  - Bilinéarité : $\\langle x + y, z \\rangle = \\langle x, z \\rangle + \\langle y, z \\rangle$, et $\\langle \\lambda x, y \\rangle = \\lambda \\langle x, y \\rangle$
  - Symétrie : $\\langle x, y \\rangle = \\langle y, x \\rangle$
  - Positivité : $\\langle x, x \\rangle \\geq 0$ avec égalité si et seulement si $x = 0$

---

#### Inégalité de Cauchy-Schwarz
- Pour tous $x, y \\in E$ :
  $$
  |\\langle x, y \\rangle| \\leq \\|x\\| \\cdot \\|y\\|
  $$
  où $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$ est la norme associée.

---

#### Orthogonalisation de Gram-Schmidt
- Procédé permettant de construire à partir d’une famille libre $(v_1, \\dots, v_n)$ une famille orthogonale (ou orthonormale) $(u_1, \\dots, u_n)$ :
  $$
  u_1 = v_1, \quad
  u_k = v_k - \\sum_{j=1}^{k-1} \\frac{\\langle v_k, u_j \\rangle}{\\langle u_j, u_j \\rangle} u_j, \quad k=2,\\dots,n
  $$

---

#### Formules avec $\\langle \\, \\cdot \\, , \\, \\cdot \\, \\rangle$
- Norme : $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$
- Relation de polarisation : 
  $$
  \\langle x, y \\rangle = \\frac{1}{4} \\big( \\|x + y\\|^2 - \\|x - y\\|^2 \\big)
  $$

---

#### Projecteur orthogonal
- Pour un sous-espace vectoriel $F \\subset E$, le projecteur orthogonal $P_F : E \\to F$ est l'application linéaire telle que pour tout $x \\in E$ :
  $$
  x = P_F(x) + (x - P_F(x)),
  $$
  avec $P_F(x) \\in F$ et $x - P_F(x)$ orthogonal à $F$.

---

#### Méthode des moindres carrés
- Trouver $\\hat{x} \\in F$ qui minimise $\\|y - \\hat{x}\\|^2$ pour $y \\in E$.
- Solution donnée par $\\hat{x} = P_F(y)$, projecteur orthogonal de $y$ sur $F$.

---

#### Droite de régression linéaire
- Modèle simple $y = ax + b + \\varepsilon$
- Les coefficients $a, b$ minimisent la somme des carrés des erreurs.
- Formule analytique par moindres carrés dans $\\mathbb{R}^2$ :
  $$
  a = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)}, \quad b = \\bar{Y} - a \\bar{X}
  $$
  où $\\bar{X}, \\bar{Y}$ sont les moyennes.

  `,
  tags: [
    'produit scalaire',
    'orthogonalisation',
    'cauchy-schwarz',
    'projecteur orthogonal',
    'moindres carrés',
    'régression linéaire'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Endomorphismes-symetriques
{
  id: 'Endomorphismes-symetriques',
  titre: 'Endomorphismes Symétriques',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Endomorphismes Symétriques

---

#### Définition d’un endomorphisme symétrique
- Soit $(E, \\langle \\, \\cdot \\, , \\, \\cdot \\, \\rangle)$ un espace vectoriel euclidien.
- Un endomorphisme $f : E \\to E$ est **symétrique** si pour tous $x,y \\in E$ :
  $$
  \\langle f(x), y \\rangle = \\langle x, f(y) \\rangle
  $$

---

#### Forme quadratique associée
- La forme quadratique $Q_f$ associée à $f$ est définie par :
  $$
  Q_f(x) = \\langle f(x), x \\rangle
  $$
- $Q_f$ est réelle et symétrique.

---

#### Théorème spectral (cas réel)
- Tout endomorphisme symétrique $f$ sur un espace euclidien réel admet une base orthonormée $(e_1, \\dots, e_n)$ de vecteurs propres.
- En cette base, la matrice de $f$ est diagonale.
- Les valeurs propres sont réelles.

---

#### Décomposition en somme de projecteurs orthogonaux
- Si $\\lambda_1, \\dots, \\lambda_k$ sont les valeurs propres distinctes de $f$ avec sous-espaces propres $E_{\\lambda_i}$,
  alors :
  $$
  f = \\sum_{i=1}^k \\lambda_i P_i
  $$
  où $P_i$ est le projecteur orthogonal sur $E_{\\lambda_i}$.
- Ces projecteurs sont orthogonaux et vérifient :
  $$
  P_i P_j = 0 \\quad (i \\neq j), \quad \\sum_{i=1}^k P_i = \\mathrm{Id}
  $$

---

#### Conséquences
- Diagonalisation orthogonale : matrice symétrique = matrice diagonale dans une base orthonormée.
- Application importante en optimisation, mécanique, statistiques (analyse en composantes principales).

  `,
  tags: [
    'endomorphisme symétrique',
    'théorème spectral',
    'projecteurs orthogonaux',
    'forme quadratique',
    'algèbre linéaire',
    'diagonalisation'
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
  niveau: ['Prépa', 'Université'],
  contenu: `
### Réduction des Endomorphismes et des Matrices Carrées

---

#### Valeurs propres
- Définition : $\\lambda \\in \\mathbb{K}$ est une valeur propre d’un endomorphisme $f$ ou d’une matrice carrée $A$ s’il existe un vecteur non nul $v$ tel que :
  $$
  f(v) = \\lambda v \quad \text{ou} \quad Av = \\lambda v.
  $$

---

#### Spectre
- Ensemble des valeurs propres de $f$ ou $A$.

---

#### Vecteurs propres
- Vecteurs non nuls associés à une valeur propre donnée.

---

#### Sous-espaces propres
- $E_{\\lambda} = \\{ v \\in E : f(v) = \\lambda v \\}$, sous-espace vectoriel propre associé à $\\lambda$.

---

#### Polynôme caractéristique
- Défini par :
  $$
  \\chi_f(X) = \\det(X I - A),
  $$
  où $A$ est la matrice de $f$ dans une base.
- Ses racines sont les valeurs propres.

---

#### Multiplicité d’une valeur propre
- Multiplicité algébrique : multiplicité de $\\lambda$ comme racine de $\\chi_f$.
- Multiplicité géométrique : dimension de $E_{\\lambda}$.

---

#### Propriétés des valeurs propres
- Racines de tout polynôme annulateur.
- Somme des valeurs propres = trace de $A$ (si $\\chi_f$ scindé).
- Produit des valeurs propres = déterminant de $A$ (si $\\chi_f$ scindé).

---

#### Propriétés des sous-espaces propres
- $E_{\\lambda}$ est stable par $f$.
- Théorème de Cayley-Hamilton : $\\chi_f(f) = 0$ (l’endomorphisme annule son propre polynôme caractéristique).

---

#### Trigonalisabilité
- $f$ est trigonalisable s’il existe une base dans laquelle la matrice de $f$ est triangulaire supérieure.
- Critère : $\\chi_f$ est scindé (factorisable en racines linéaires) sur $\\mathbb{K}$.

---

#### Diagonalisabilité
- $f$ est diagonalisable s’il existe une base de vecteurs propres.
- Équivalences :
  - Somme des dimensions des sous-espaces propres = dimension de $E$.
  - Pour chaque valeur propre, multiplicité algébrique = multiplicité géométrique.
  - Existence d’un polynôme annulateur scindé à racines simples.

---

#### Matrices de passage
- Matrice $P$ dont les colonnes sont une base de vecteurs propres de $f$.
- $P^{-1} A P$ est une matrice diagonale si $f$ est diagonalisable.

---

#### Conditions suffisantes de diagonalisabilité
- $\\chi_f$ scindé à racines simples.
- Endomorphisme symétrique (théorème spectral) : diagonalisable dans une base orthonormale.

  `,
  tags: [
    'valeurs propres',
    'spectre',
    'sous-espaces propres',
    'polynôme caractéristique',
    'trigonalisabilité',
    'diagonalisabilité',
    'matrices de passage',
    'théorème spectral',
    'algèbre linéaire'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

// Polynomes
{
  id: 'Polynomes',
  titre: 'Polynômes - Notions fondamentales',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Lycée','Prépa', 'Université'],
  contenu: `
### Polynômes - Notions fondamentales

---

#### Produit de polynômes
- Soient deux polynômes $P(x) = \\sum_{i=0}^m a_i x^i$ et $Q(x) = \\sum_{j=0}^n b_j x^j$.
- Leur produit est :
  $$
  (PQ)(x) = \\sum_{k=0}^{m+n} c_k x^k, \quad \\text{où } c_k = \\sum_{i=0}^k a_i b_{k-i}.
  $$

---

#### Degré et coefficient dominant
- Le **degré** de $P$ est le plus grand exposant $d$ tel que $a_d \\neq 0$.
- Le **coefficient dominant** est $a_d$.
- Pour le produit :
  $$
  \\deg(PQ) = \\deg(P) + \\deg(Q).
  $$

---

#### Division euclidienne
- Pour deux polynômes $P$ et $D \\neq 0$, il existe un unique couple $(Q,R)$ tels que :
  $$
  P = DQ + R,
  $$
  avec $\\deg(R) < \\deg(D)$ ou $R=0$.
- Le polynôme $Q$ est le quotient et $R$ le reste.

---

#### Formule de Taylor (ou développement de Taylor pour les polynômes)
- Pour un polynôme $P$, on a :
  $$
  P(x) = \\sum_{k=0}^n \\frac{P^{(k)}(a)}{k!} (x - a)^k,
  $$
  où $P^{(k)}$ est la $k$-ième dérivée de $P$.

---

#### Racine d’ordre $k$
- Une racine $a$ de $P$ est dite d’ordre $k$ si :
  $$
  (x - a)^k \\mid P(x) \quad \\text{et} \quad (x - a)^{k+1} \\nmid P(x).
  $$
- Cela équivaut à : 
  $$
  P(a) = P'(a) = \\cdots = P^{(k-1)}(a) = 0, \quad P^{(k)}(a) \\neq 0.
  $$

  `,
  tags: [
    'polynômes',
    'produit',
    'degré',
    'division euclidienne',
    'formule de Taylor',
    'racine d’ordre k',
    'algèbre'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Espaces-vectoriels-et-applications-lineaires
{
  id: 'Espaces-vectoriels-et-applications-lineaires',
  titre: 'Espaces vectoriels et applications linéaires',
  matiere: 'Algèbre linéaire',
  categorie: 'Mathématiques',
  niveau: ['Lycée','Prépa', 'Université'],
  contenu: `
### Espaces vectoriels et applications linéaires

---

#### Espaces vectoriels
- Un **espace vectoriel** $E$ sur un corps $\\mathbb{K}$ est un ensemble muni de deux opérations :
  - Addition : $+ : E \\times E \\to E$,
  - Multiplication scalaire : $\\cdot : \\mathbb{K} \\times E \\to E$,
  
  vérifiant les axiomes :
  - Associativité, commutativité de l’addition,
  - Existence d’un élément neutre $0$,
  - Existence d’opposés,
  - Compatibilité des opérations scalaires,
  - Distributivité, etc.

---

#### Union et intersection d’espaces vectoriels
- L’**intersection** de deux sous-espaces vectoriels de $E$ est un sous-espace vectoriel.
- L’**union** n’est en général pas un sous-espace vectoriel sauf si l’un est inclus dans l’autre.

---

#### Applications linéaires
- Une application $f : E \\to F$ entre espaces vectoriels est **linéaire** si :
  $$
  \\forall x,y \\in E, \\forall \\lambda \\in \\mathbb{K}, \quad f(x + y) = f(x) + f(y), \quad f(\\lambda x) = \\lambda f(x).
  $$
- L’ensemble des applications linéaires de $E$ dans $F$ est noté $\\mathcal{L}(E,F)$.

---

#### Famille de vecteurs
- Une famille $(v_1, \\ldots, v_n)$ est :
  - **libre** si la combinaison linéaire nulle implique tous les coefficients nuls,
  - ** liée** sinon,
  - **génératrice** si tout vecteur de $E$ s’écrit comme combinaison linéaire des $v_i$.
- Une base est une famille libre et génératrice.

---

#### Théorème du rang
- Pour une application linéaire $f : E \\to F$ avec $E$ de dimension finie,
  $$
  \\dim(E) = \\mathrm{rang}(f) + \\dim(\\ker f),
  $$
  où $\\mathrm{rang}(f) = \\dim(\\mathrm{Im}(f))$.

  `,
  tags: [
    'espaces vectoriels',
    'applications linéaires',
    'famille de vecteurs',
    'théorème du rang',
    'algèbre linéaire',
    'mathématiques'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Supplementaires-et-projecteurs
{
  id: 'Supplementaires-et-projecteurs',
  titre: 'Supplémentaires et projecteurs',
  matiere: 'Algèbre linéaire',
  categorie: 'Mathématiques',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Supplémentaires et projecteurs

---

#### Deux espaces supplémentaires
- Soient $E$ un espace vectoriel, et $F$, $G$ deux sous-espaces vectoriels de $E$.
- On dit que $F$ et $G$ sont **supplémentaires** dans $E$ si :
  $$
  E = F \\oplus G,
  $$
  c’est-à-dire :
  - $E = F + G$,
  - $F \\cap G = \\{0\\}$.

- Dans ce cas, tout vecteur $x \\in E$ s’écrit **de façon unique** :
  $$
  x = f + g, \quad f \\in F, g \\in G.
  $$

---

#### Plusieurs espaces supplémentaires
- On peut généraliser la notion à plusieurs sous-espaces $F_1, F_2, \\ldots, F_k$ :
  $$
  E = F_1 \\oplus F_2 \\oplus \\cdots \\oplus F_k,
  $$
  signifiant que $E$ est somme directe des $F_i$, avec intersections triviales deux à deux.

---

#### Projecteurs - définition
- Soit $E = F \\oplus G$.
- Le **projecteur** sur $F$ parallèlement à $G$ est l’application linéaire $p : E \\to E$ définie par :
  $$
  p(x) = f,
  $$
  où $x = f + g$ est la décomposition unique de $x$ avec $f \\in F$, $g \\in G$.

---

#### Projecteurs - propriétés
- $p$ est un projecteur, c’est-à-dire une application linéaire telle que :
  $$
  p^2 = p.
  $$
- L’image de $p$ est $F$ : $\\mathrm{Im}(p) = F$.
- Le noyau de $p$ est $G$ : $\\ker(p) = G$.
- $p$ est l’identité sur $F$, et nul sur $G$.
- Si $p$ est un projecteur, alors $E = \\mathrm{Im}(p) \\oplus \\ker(p)$.

  `,
  tags: [
    'espaces vectoriels',
    'supplémentaires',
    'projecteurs',
    'algèbre linéaire',
    'mathématiques'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

//Analyse
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

### 6. Dérivées directionnelles

Soit $u \\in \\mathbb{R}^p$, $\\|u\\|=1$. Alors :

$$
D_u f(x) = \\nabla f(x) \\cdot u
$$

---

### 7. Développements limités

Pour une fonction $f : \\mathbb{R}^p \\to \\mathbb{R}$ de classe $\\mathcal{C}^k$, on a :

$$
f(x+h) = f(x) + \\nabla f(x) \\cdot h + \\frac{1}{2} h^T H_f(x) h + o(\\|h\\|^2)
$$

---

### 8. Hessienne et forme quadratique associée

- Hessienne :

$$
H_f(x) = \\left( \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(x) \\right)
$$

- Forme quadratique associée :

$$
Q(h) = h^T H_f(x) h
$$

---

### 9. Extrema locaux

- **Point critique** : $\\nabla f(x_0) = 0$

- **Condition nécessaire** :
  - $f$ admet un extremum local en $x_0 \\Rightarrow \\nabla f(x_0) = 0$

- **Condition suffisante** :
  - $\\nabla f(x_0) = 0$ et
    - si $H_f(x_0)$ est définie positive $\\Rightarrow$ minimum local
    - si définie négative $\\Rightarrow$ maximum local
    - si signe indéterminé $\\Rightarrow$ point selle

---

### 10. Cas des notations de Monge

- Étude locale de $f(x,y)$ autour d’un point critique $\\Rightarrow$ étude de la nature via le signe de la forme quadratique :
  $$
  f(x, y) = f(x_0, y_0) + \\frac{1}{2}(ax^2 + 2bxy + cy^2) + \\cdots
  $$

---

### 11. Extremum sous contrainte d’égalités linéaires

- Méthode des multiplicateurs de Lagrange :  
  Soit $f$ à optimiser sous $g(x) = 0$, on résout :

  $$
  \\nabla f = \\lambda \\nabla g
  $$

  - Généralisation à plusieurs contraintes :

  $$
  \\nabla f = \\lambda_1 \\nabla g_1 + \\lambda_2 \\nabla g_2 + \\cdots
  $$

---

### 12. Courbes et surfaces

- Courbe ou surface définie par une équation cartésienne, par exemple :

$$
F(x, y) = 0 \\quad \\text{ou} \\quad F(x, y, z) = 0
$$

- Point régulier :

$$
\\nabla F(x_0) \\neq 0
$$

---

### 13. Tangentes et plans tangents

- Droite tangente à une courbe dans $\\mathbb{R}^2$ au point $M_0$ :

$$
\\text{vecteur tangent} = \\nabla F(M_0)
$$

- Plan tangent à une surface dans $\\mathbb{R}^3$ au point régulier $M_0$ :

$$
\\text{plan tangent} : \\nabla F(M_0) \\cdot (M - M_0) = 0
$$

---

### 14. Topologie locale (rappels utiles)

- Ouverts, fermés, voisinages
- Intérieur, adhérence, frontière
- Boules ouvertes, compacité (utile pour existence d’extrema)
  `,
  tags: [
    'analyse',
    'gradient',
    'dérivées partielles',
    'développements limités',
    'extrema',
    'Hessienne',
    'tangente',
    'topologie',
    'Monge',
    'Lagrange',
    'prépa'
  ],
  datePublication: '2025-05-26',
  populaire: false,
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
    aReviser: false,
  },

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
    populaire: false,
    aReviser: false
  },

// Developpements-limites
{
  id: 'Developpements-limites',
  titre: 'Développements Limités et Formules de Taylor',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Développements Limités et Formules de Taylor

---

#### Formule de Taylor avec reste intégral
- Si $f$ est $\\mathcal{C}^{n+1}$ sur un intervalle $I$ contenant $a$, alors pour $x \\in I$ :
  $$
  f(x) = f(a) + f'(a)(x-a) + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)
  $$
  avec le **reste intégral** :
  $$
  R_n(x) = \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t) \\, dt.
  $$

---

#### Inégalité de Taylor-Lagrange
- Sous les mêmes hypothèses, il existe $c \\in [a,x]$ (ou $[x,a]$ selon le sens) tel que :
  $$
  R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1}
  $$
  d'où l'inégalité :
  $$
  |R_n(x)| \\leq \\frac{\\sup_{t \\in [a,x]} |f^{(n+1)}(t)|}{(n+1)!} |x - a|^{n+1}.
  $$

---

#### Formule de Taylor-Young
- Notée aussi $f(x) = P_n(x - a) + o((x - a)^n)$ :
  - $f$ est $\\mathcal{C}^n$ en $a$ si et seulement si :
    $$
    f(x) = f(a) + f'(a)(x-a) + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n + o((x-a)^n)
    $$  
    lorsque $x \\to a$.

---

#### Développements limités usuels (en 0)

- $\\boxed{(1+x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^2 + \\cdots}$  
  ($x \\to 0$, valable si $\\alpha \\in \\mathbb{R}$, $|x| < 1$)

- $\\boxed{\\mathrm{e}^x = 1 + x + \\frac{x^2}{2!} + \\cdots + \\frac{x^n}{n!} + o(x^n)}$

- $\\boxed{\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots + (-1)^{n+1} \\frac{x^n}{n} + o(x^n)}$

- $\\boxed{\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} + o(x^5)}$

- $\\boxed{\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4)}$

- $\\boxed{\\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \\cdots + x^n + o(x^n)}$ pour $|x| < 1$

---

#### Application : approximation locale
- Un DL permet d’approximer une fonction $f(x)$ près d’un point $a$ par un polynôme.
- Utilisé pour linéariser, comparer, simplifier des expressions.

  `,
  tags: [
    'développement limité',
    'Taylor',
    'reste intégral',
    'inégalité de Taylor',
    'Taylor-Young',
    'analyse',
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},


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

#### Primitives Usuelles à Connaître

| Fonction $f(x)$                  | Primitive $F(x)$                        | Conditions                         |
|----------------------------------|-----------------------------------------|------------------------------------|
| $x^n$                            | $\\frac{x^{n+1}}{n+1}$                  | $n \\neq -1$                       |
| $\\frac{1}{x}$                   | $\\ln\\lvert x \\rvert$                 | $x \\neq 0$                        |
| $\\frac{1}{1+x^2}$               | $\\arctan(x)$                           | -                                  |
| $\\frac{1}{\\sqrt{1-x^2}}$       | $\\arcsin(x)$                           | $\\lvert x \\rvert$ < 1            |
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
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

// Suites-arithmetico-geometriques
{
  id: 'suites-arithmetico-geometriques',
  titre: 'Suites Arithmético-Géométriques et Suites Récurrentes',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Lycée', 'Prépa', 'Université'],
  contenu: `
### Suites Arithmético-Géométriques
---

#### Définition
- Une suite $(u_n)$ est **arithmético-géométrique** s'il existe deux réels $a$ et $b$ tels que :
  $$
  u_{n+1} = a u_n + b
  $$
- Elle combine une partie arithmétique et une partie géométrique.

#### Résolution
- Si $a \\neq 1$, la suite peut se décomposer en :
  $$
  u_n = v_n + l
  $$
  où $(v_n)$ est géométrique de raison $a$, et $l$ est la limite éventuelle solution de :
  $$
  l = a l + b \\implies l = \\frac{b}{1 - a}
  $$

- Ainsi :
  $$
  u_n = \\left(u_0 - \\frac{b}{1 - a}\\right) a^n + \\frac{b}{1 - a}
  $$

---

### Suites Récurrentes Linéaires d’Ordre 2
---

#### Définition
- Une suite $(u_n)$ vérifie une relation du type :
  $$
  u_{n+2} = \\alpha u_{n+1} + \\beta u_n
  $$
  avec $\\alpha, \\beta \\in \\mathbb{R}$.

#### Méthode de résolution
- On considère l’équation caractéristique :
  $$
  r^2 - \\alpha r - \\beta = 0
  $$
- Les solutions $r_1, r_2$ donnent la forme générale de la suite :
  - Si $r_1 \\neq r_2$ réels distincts :
    $$
    u_n = \\lambda r_1^n + \\mu r_2^n
    $$
  - Si racine double $r$ :
    $$
    u_n = (\\lambda + \\mu n) r^n
    $$
  - Si racines complexes $r = \\rho e^{i \\theta}$ :
    $$
    u_n = \\rho^n \\left(A \\cos(n \\theta) + B \\sin(n \\theta)\\right)
    $$

---

### Négligeabilité, Domination et Équivalence de Suites
---

#### Définitions
- **Négligeabilité** : $(u_n)$ est négligeable devant $(v_n)$ si
  $$
  \\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 0
  $$

- **Domination** : $(u_n)$ est dominée par $(v_n)$ si
  $$
  \\exists M > 0, \\quad \\forall n, \\quad |u_n| \\leq M |v_n|
  $$

- **Équivalence** : $(u_n)$ est équivalente à $(v_n)$ si
  $$
  \\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 1
  $$

#### Propriétés
- Si $u_n = o(v_n)$, alors $u_n$ est négligeable devant $v_n$.
- Si $u_n \\sim v_n$, alors $u_n - v_n$ est négligeable devant $v_n$.

---

### Exemples Classiques

- Suite géométrique : $u_n = q^n$ avec $|q| < 1$ tend vers 0.
- Suite arithmético-géométrique : $u_{n+1} = \\frac{1}{2} u_n + 3$, etc.
- Dominations : $n = o(n^2)$, $\\ln n = o(n)$.

---

### Conseils de Méthodologie

- Identifier la nature de la suite (linéaire, géométrique, récurrente).
- Calculer les racines caractéristiques pour les suites d’ordre 2.
- Utiliser les notions de négligeabilité et équivalence pour comparer suites.

---
`,
  tags: [
    'suites',
    'arithmético-géométriques',
    'références',
    'équations récurrentes',
    'domination',
    'négligeabilité',
    'équivalence',
  ],
  datePublication: '2025-05-26',
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
  aReviser: false
},

//Etude-globale-fonction
{
  id: 'Etude-globale-fonction',
  titre: 'Étude Globale d’une Fonction',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Lycée', 'Prépa', 'Université'],
  contenu: `
### Étude Globale d’une Fonction

---

#### Symétries d’une fonction
- Une fonction $f : \\mathbb{R} \\to \\mathbb{R}$ peut avoir des symétries qui simplifient son étude.

- **Symétrie paire** :  
  $$
  \\forall x \\in \\mathbb{R}, \\quad f(-x) = f(x).
  $$  
  La courbe de $f$ est symétrique par rapport à l'axe des ordonnées.

- **Symétrie impaire** :  
  $$
  \\forall x \\in \\mathbb{R}, \\quad f(-x) = -f(x).
  $$  
  La courbe de $f$ est symétrique par rapport à l'origine.

- **Périodicité** :  
  $$
  \\exists T > 0, \\quad \\forall x \\in \\mathbb{R}, \quad f(x+T) = f(x).
  $$  
  La fonction est périodique de période $T$.

---

#### Branches infinies (Asymptotes)
- Une branche infinie décrit le comportement de la fonction $f$ quand $x$ tend vers une valeur (finie ou infinie).

- **Asymptote verticale** :  
  Si  
  $$
  \\lim_{x \\to a} f(x) = \\pm \\infty,
  $$  
  alors $x = a$ est une asymptote verticale.

- **Asymptote horizontale** :  
  Si  
  $$
  \\lim_{x \\to \\pm \\infty} f(x) = L \\in \\mathbb{R},
  $$  
  alors $y = L$ est une asymptote horizontale.

- **Asymptote oblique** :  
  Si  
  $$
  \\lim_{x \\to \\pm \\infty} \\left( f(x) - (ax + b) \\right) = 0,
  $$  
  avec $a \\neq 0$, alors la droite $y = ax + b$ est une asymptote oblique.

- Pour trouver $a$ et $b$ :  
  $$
  a = \\lim_{x \\to \\pm \\infty} \\frac{f(x)}{x}, \\quad
  b = \\lim_{x \\to \\pm \\infty} \\left( f(x) - a x \\right).
  $$

---

#### Comportement en l’infini
- Analyse des limites à l'infini pour décrire la tendance globale de la fonction.

- Important pour tracer la courbe et comprendre la nature des branches infinies.

`,
  tags: [
    'fonction',
    'symétrie',
    'asymptote',
    'branche infinie',
    'analyse',
    'prépa'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},


//Série-numeriques
{
  id: 'Serie-numeriques',
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
- Série $\\sum_{n=0}^{+\\infty} a r^n$ converge si $|r| < 1$.
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

//proba
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
  populaire: false,
  aReviser: false,
},

//Variables-aleatoires-discretes
{
  id: 'Variables-aleatoires-discretes',
  titre: 'Variables Aléatoires Discrètes',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Variables Aléatoires Discrètes

---

#### Définition
- Une **variable aléatoire discrète** est une fonction $X : \\Omega \\to \\mathbb{R}$ prenant un nombre **dénombrable** de valeurs.

---

#### Loi de probabilité
- Déterminée par la suite $\\{\\mathbb{P}(X = x_i)\\}_{i}$ telle que :
  - $\\mathbb{P}(X = x_i) \\geq 0$
  - $\\sum_i \\mathbb{P}(X = x_i) = 1$

---

#### Espérance $E(X)$
- **Définition** : $E(X) = \\sum_x x \\cdot \\mathbb{P}(X = x)$ si la série converge absolument.
- **Théorèmes de transfert** :
  - Si $Y = g(X)$, alors $E(Y) = \\sum g(x) \\cdot \\mathbb{P}(X = x)$.
  - En particulier, $E(X^2) = \\sum x^2 \\cdot \\mathbb{P}(X = x)$

**Propriétés** :
- Linéarité : $E(aX + bY) = aE(X) + bE(Y)$
- Positivité : si $X \\geq 0$, alors $E(X) \\geq 0$
- Monotonie : $X \\leq Y \\Rightarrow E(X) \\leq E(Y)$
- Inégalité de Markov : $\\mathbb{P}(|X| \\geq a) \\leq \\frac{E(|X|)}{a}$ pour $a > 0$

---

#### Variance $V(X)$ et écart-type $\\sigma(X)$
- $V(X) = E[(X - E(X))^2] = E(X^2) - (E(X))^2$
- $\\sigma(X) = \\sqrt{V(X)}$
- Inégalité de Bienaymé-Tchebychev :
  $\\mathbb{P}(|X - E(X)| \\geq a) \\leq \\frac{V(X)}{a^2}$

---

#### Fonction de répartition $F$
- $F(x) = \\mathbb{P}(X \\leq x)$

**Propriétés** :
- $F$ est croissante, continue à droite
- $\\lim_{x \\to -\\infty} F(x) = 0$, $\\lim_{x \\to +\\infty} F(x) = 1$

---

#### Fonction génératrice $G_X$
- $G_X(t) = E(t^X) = \\sum_{k=0}^{\\infty} \\mathbb{P}(X = k)t^k$
- **Propriétés** :
  - Rayon de convergence $\\geq 1$
  - $G_X(1) = 1$
  - $E(X) = G'_X(1)$, $V(X) = G''_X(1) + G'_X(1) - (G'_X(1))^2$

---

#### Indépendance de variables aléatoires
- Deux variables aléatoires $X$ et $Y$ sont **indépendantes** si :
$$
\\forall A, B \\subset \\mathbb{R}, \\quad \\mathbb{P}(X \\in A, Y \\in B) = \\mathbb{P}(X \\in A) \\cdot \\mathbb{P}(Y \\in B)
$$
- Pour les lois jointes : $\\mathbb{P}(X = x, Y = y) = \\mathbb{P}(X = x)\\mathbb{P}(Y = y)$

---

#### Lois usuelles discrètes et leurs paramètres

| Loi                       | Espérance $E(X)$         | Variance $V(X)$           | Fonction génératrice $G_X(t)$                           |
|---------------------------|---------------------------|----------------------------|----------------------------------------------------------|
| Uniforme sur $\\{1,...,n\\}$ | $\\frac{n+1}{2}$        | $\\frac{n^2 - 1}{12}$      | $\\frac{t(1 - t^n)}{n(1 - t)}$                          |
| Bernoulli $(p)$           | $p$                       | $p(1 - p)$                 | $1 - p + pt$                                             |
| Binomiale $(n, p)$        | $np$                      | $np(1 - p)$                | $(1 - p + pt)^n$                                        |
| Géométrique $(p)$         | $\\frac{1}{p}$            | $\\frac{1 - p}{p^2}$       | $\\frac{pt}{1 - (1 - p)t}$                              |
| Poisson $(\\lambda)$      | $\\lambda$                | $\\lambda$                 | $e^{\\lambda(t - 1)}$                                   |
  `,
  tags: [
    'variables aléatoires',
    'espérance',
    'variance',
    'fonction génératrice',
    'lois de probabilité',
    'probabilités',
    'fonction de répartition',
    'indépendance',
    'analyse'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

// Dénombrement
{
  id: 'Denombrement',
  titre: 'Dénombrement : Parties et Unions',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Lycée', 'Prépa'],
  contenu: `
### 1. Parties d’un ensemble

- Un ensemble de cardinal $n$ possède $2^n$ parties.
- Si on ne considère que les parties de cardinal $k$, on a :

$$
\\binom{n}{k} = \\text{nombre de sous-ensembles de } k \\text{ éléments parmi } n.
$$

---

### 2. Suites d’éléments

- Nombre de suites de $k$ éléments parmi $n$ (avec répétition, ordre important) : $n^k$
- Sans répétition, ordre important (permutations de $k$ parmi $n$) :

$$
A_n^k = \\frac{n!}{(n-k)!}
$$

---

### 3. Cardinal d'une union de deux ou trois parties

- Pour deux ensembles $A$ et $B$ :

$$
|A \\cup B| = |A| + |B| - |A \\cap B|
$$

- Pour trois ensembles $A$, $B$, $C$ :

- Pour trois ensembles $A$, $B$, $C$ :

$$
|A \\cup B \\cup C| = |A| + |B| + |C| \\\\
\\quad - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|
$$

---

### 4. Cardinal d'une union de $n$ parties : formule du crible (formule de Poincaré)

Soient $A_1, A_2, ..., A_n$ des ensembles finis. Alors :

$$
\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{i=1}^{n} |A_i| - \\sum_{1 \\le i < j \\le n} |A_i \\cap A_j| \\\\
\\quad + \\sum_{1 \\le i < j < k \\le n} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap A_2 \\cap \\cdots \\cap A_n|
$$

- Cette formule est appelée **formule du crible** ou **formule d'inclusion-exclusion**.

---

### Applications classiques

- Comptage de nombres entiers multiples de plusieurs entiers.
- Calculs de probabilités dans des ensembles finis (principe additif et soustractif).
  `,
  tags: ['dénombrement', 'ensembles', 'cardinal', 'formule du crible', 'combinatoire'],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false,
},

// Espaces-probabilises
{
  id: 'Espaces-probabilises',
  titre: 'Espaces Probabilisés & Probabilités Conditionnelles',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Lycée','Prépa', 'Université'],
  contenu: `
### Définition : Espace Probabilisé

Un **espace probabilisé** est un triplet $(\\Omega, \\mathcal{A}, \\mathbb{P})$ où :
- $\\Omega$ : ensemble des issues (univers),
- $\\mathcal{A}$ : tribu, ensemble d'événements,
- $\\mathbb{P}$ : mesure de probabilité.

---

### Ensembles Dénombrables

- Un ensemble est **dénombrable** s’il est en bijection avec $\\mathbb{N}$ ou une partie de $\\mathbb{N}$.
- Exemples : $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$
- Contre-exemples : $\\mathbb{R}, [0,1]$

---

### Tribu sur un ensemble $\\Omega$

Un ensemble $\\mathcal{A} \\subset \\mathcal{P}(\\Omega)$ est une **tribu** si :
- $\\Omega \\in \\mathcal{A}$ et $\\emptyset \\in \\mathcal{A}$,
- stable par complémentaire, union et intersection dénombrables.

**Vocabulaire** :
- Événements : éléments de $\\mathcal{A}$.
- Système **complet** : ensemble d'événements deux à deux incompatibles dont l’union est $\\Omega$.
- Système **presque complet** : probabilité totale = 1.

---

### Probabilité sur un espace probabilisable

Fonction $\\mathbb{P} : \\mathcal{A} \\to [0,1]$ vérifiant :
- $\\mathbb{P}(\\Omega) = 1$
- $\\mathbb{P}(\\bigcup A_i) = \\sum \\mathbb{P}(A_i)$ pour des $A_i$ disjoints

**Cas dénombrable** :
- Probabilité déterminée par les poids $p_i = \\mathbb{P}(\\{\\omega_i\\})$

---

### Propriétés fondamentales

- $\\mathbb{P}(\\emptyset) = 0$, $\\mathbb{P}(\\bar{A}) = 1 - \\mathbb{P}(A)$
- $\\mathbb{P}(A \\cup B) = \\mathbb{P}(A) + \\mathbb{P}(B) - \\mathbb{P}(A \\cap B)$
- Si $A \\subset B$, alors $\\mathbb{P}(A) \\leq \\mathbb{P}(B)$ (croissance)
- **Sous-additivité** : $\\mathbb{P}(\\cup A_i) \\leq \\sum \\mathbb{P}(A_i)$
- **Propriété de limite monotone** :
  - $A_n \\uparrow A \\Rightarrow \\mathbb{P}(A_n) \\to \\mathbb{P}(A)$
  - $A_n \\downarrow A \\Rightarrow \\mathbb{P}(A_n) \\to \\mathbb{P}(A)$

---

### Formule du crible (ou de Poincaré)

Pour des ensembles finis $A_1, ..., A_n$ :

$$
\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| \\\\
\\quad + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\dots \\cap A_n|
$$

---

### Probabilité conditionnelle

#### Définition :

$$
\\mathbb{P}(A | B) = \\frac{\\mathbb{P}(A \\cap B)}{\\mathbb{P}(B)} \\quad \\text{si } \\mathbb{P}(B) > 0
$$

#### Formule des probabilités composées :

$$
\\mathbb{P}(A \\cap B) = \\mathbb{P}(B) \\cdot \\mathbb{P}(A | B)
$$

#### Formule des probabilités totales :

Si $(B_i)$ est un système complet :

$$
\\mathbb{P}(A) = \\sum_i \\mathbb{P}(A | B_i) \\cdot \\mathbb{P}(B_i)
$$

#### Formule de Bayes :

$$
\\mathbb{P}(B_i | A) = \\frac{\\mathbb{P}(A | B_i) \\cdot \\mathbb{P}(B_i)}{\\sum_j \\mathbb{P}(A | B_j) \\cdot \\mathbb{P}(B_j)}
$$

---

### Indépendance

#### Définition :

Deux événements $A$ et $B$ sont **indépendants** si :

$$
\\mathbb{P}(A \\cap B) = \\mathbb{P}(A) \\cdot \\mathbb{P}(B)
$$

#### Généralisation :

Une famille $(A_i)$ est **mutuellement indépendante** si toute sous-famille l’est.

---

### Variables aléatoires discrètes

- Fonction $X : \\Omega \\to \\mathbb{R}$
- **Loi de $X$** : $\\mathbb{P}_X(x) = \\mathbb{P}(X = x)$

---

### Lois usuelles

- **Uniforme** sur $\\{1, ..., n\\}$ : $\\mathbb{P}(X = i) = \\frac{1}{n}$
- **Bernoulli(p)** : $X \\in \\{0,1\\}$ avec $\\mathbb{P}(X=1)=p$
- **Binomiale** $\\text{Bin}(n,p)$ : $\\mathbb{P}(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$
- **Géométrique** : $\\mathbb{P}(X=k) = (1-p)^{k-1}p$
- **Poisson(\\lambda)** : $\\mathbb{P}(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}$
  `,
  tags: [
    'espaces probabilisés',
    'tribus',
    'probabilités conditionnelles',
    'formule du crible',
    'événements indépendants',
    'lois discrètes',
    'formule de Bayes',
    'probabilités composées'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Variables-aleatoires-a-densite
{
  id: 'Variables-aleatoires-a-densite',
  titre: 'Variables Aléatoires à Densité',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Variables Aléatoires Réelles à Densité

---

#### Définition d’une densité
- Une variable aléatoire réelle $X$ est **à densité** s’il existe une fonction $f : \\mathbb{R} \\to \\mathbb{R}_+$ telle que :
  $$
  \\forall a < b, \\quad \\mathbb{P}(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx
  $$
- $f$ est appelée **densité de probabilité** de $X$.

**Propriétés** :
- $f(x) \\geq 0$
- $\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$
- La fonction de répartition associée est :
  $$
  F_X(x) = \\mathbb{P}(X \\leq x) = \\int_{-\\infty}^x f(t)\\,dt
  $$

---

#### Espérance $E(X)$
- Si $X$ admet une densité $f$ et que $\\int_{-\\infty}^{+\\infty} |x|f(x)\\,dx < +\\infty$, alors :
  $$
  E(X) = \\int_{-\\infty}^{+\\infty} x f(x)\\,dx
  $$

- De manière générale, si $g$ est une fonction mesurable telle que $g(X)$ est intégrable :
  $$
  E(g(X)) = \\int_{-\\infty}^{+\\infty} g(x)f(x)\\,dx
  $$

> **Théorème de transfert** : $Y = g(X)$ alors $E(Y) = \\int g(x) f(x) dx$

---

#### Somme de variables aléatoires
- Soient $X$ et $Y$ deux variables aléatoires indépendantes **à densité**, leur **somme** $S = X + Y$ admet une densité donnée par :
  $$
  f_S(s) = \\int_{-\\infty}^{+\\infty} f_X(x)f_Y(s - x)\\,dx
  $$
- Cette opération est appelée **convolution** : $f_S = f_X * f_Y$

---

#### Indépendance de variables aléatoires
- $X$ et $Y$ sont **indépendantes** ssi la densité jointe $f_{X,Y}(x,y)$ vérifie :
  $$
  f_{X,Y}(x,y) = f_X(x) \\cdot f_Y(y)
  $$
- Alors : $\\mathbb{P}(X \\in A, Y \\in B) = \\mathbb{P}(X \\in A) \\cdot \\mathbb{P}(Y \\in B)$

---

#### Variance et écart-type
- $V(X) = E[(X - E(X))^2] = \\int (x - E(X))^2 f(x) dx$
- $\\sigma(X) = \\sqrt{V(X)}$

---

#### Lois usuelles à densité

| Loi                      | Densité $f(x)$                              | Domaine                  | Espérance $E(X)$ | Variance $V(X)$  |
|--------------------------|---------------------------------------------|---------------------------|------------------|------------------|
| Uniforme $\\mathcal{U}(a,b)$ | $\\frac{1}{b-a}$                            | $[a,b]$                   | $\\frac{a+b}{2}$ | $\\frac{(b-a)^2}{12}$ |
| Normale $\\mathcal{N}(\\mu,\\sigma^2)$ | $\\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mathbb{R}$             | $\\mu$           | $\\sigma^2$       |
| Exponentielle $(\\lambda)$ | $\\lambda e^{-\\lambda x}$                   | $x \\geq 0$               | $\\frac{1}{\\lambda}$ | $\\frac{1}{\\lambda^2}$ |

  `,
  tags: [
    'densité',
    'espérance',
    'convolution',
    'indépendance',
    'lois continues',
    'fonction de répartition',
    'probabilités',
    'analyse',
    'théorème de transfert'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Moments-variable-reelle
{
  id: 'Moments-variable-reelle',
  titre: 'Moments d’une Variable Aléatoire Réelle',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Moments d’une Variable Aléatoire Réelle

---

#### Espérance : premières propriétés
- **Linéarité** : $E(aX + b) = aE(X) + b$
- Si $X \\geq 0$ alors $E(X) \\geq 0$
- Si $X \\leq Y$ alors $E(X) \\leq E(Y)$
- $E(g(X)) = \\int g(x) f(x) dx$ (si $X$ à densité $f$)

---

#### Variance et écart-type
- $V(X) = E[(X - E(X))^2] = E(X^2) - [E(X)]^2$
- $\\sigma(X) = \\sqrt{V(X)}$
- **Propriétés** :
  - $V(aX + b) = a^2 V(X)$
  - Inégalité de Bienaymé-Tchebychev : $P(|X - E(X)| \\geq \\varepsilon) \\leq \\frac{V(X)}{\\varepsilon^2}$

---

#### Covariance
- $\\operatorname{Cov}(X,Y) = E[(X - E(X))(Y - E(Y))] = E(XY) - E(X)E(Y)$
- **Propriétés** :
  - $\\operatorname{Cov}(X,Y) = 0$ si $X$ et $Y$ sont indépendantes (réciproque fausse)
  - $\\operatorname{Cov}(aX + b, Y) = a \\cdot \\operatorname{Cov}(X, Y)$

---

#### Coefficient de corrélation linéaire
- $\\rho(X,Y) = \\frac{\\operatorname{Cov}(X,Y)}{\\sigma(X)\\sigma(Y)}$
- $\\rho \\in [-1, 1]$
- $\\rho = \\pm 1$ ssi $Y = aX + b$ avec $a \\neq 0$ (relation linéaire parfaite)

---

#### Moments et moments centrés
- Moment d’ordre $r$ : $E(X^r)$
- Moment centré d’ordre $r$ : $E[(X - E(X))^r]$
  - Moment centré d’ordre 2 : la **variance**
- Le moment d’ordre 1 est l’**espérance**
- Moments utiles pour la forme des lois (asymétrie, aplatissement…)

---

#### Variable aléatoire centrée réduite
- Soit $X$ une v.a. avec $E(X) = \\mu$ et $\\sigma(X) = \\sigma$
- La variable centrée réduite associée est :
  $$
  Z = \\frac{X - \\mu}{\\sigma}
  $$
- Alors : $E(Z) = 0$, $V(Z) = 1$

---

### Espérance conditionnelle

#### Définition
- Soient $X$, $Y$ deux v.a. réelles.
- L’espérance conditionnelle de $X$ sachant $Y = y$ est :
  $$
  E(X \\mid Y = y) = \\int x \\cdot f_{X\\mid Y}(x \\mid y) dx
  $$

#### Formule de l’espérance totale
- Si $Y$ est une variable aléatoire discrète ou continue :
  $$
  E(X) = E[E(X \\mid Y)]
  $$

> Cette formule permet de **décomposer une espérance** selon la loi d'une autre variable.

  `,
  tags: [
    'espérance',
    'variance',
    'écart-type',
    'covariance',
    'corrélation',
    'moments',
    'espérance conditionnelle',
    'espérance totale',
    'variables aléatoires'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},

// Lois-discretes-usuelles
{
  id: 'Lois-discretes-usuelles',
  titre: 'Lois Discrètes Usuelles',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Lois Discrètes Usuelles

---

#### Loi uniforme sur un ensemble fini
- **Définition** : Tous les résultats dans $\\{1, 2, ..., n\\}$ sont équiprobables.
- $P(X = k) = \\frac{1}{n}$ pour $k = 1, ..., n$
- $E(X) = \\frac{n+1}{2}$, $V(X) = \\frac{n^2 - 1}{12}$
- **Exemple** : lancer d’un dé équilibré

---

#### Loi de Bernoulli $\\mathcal{B}(p)$
- **Définition** : Modélise une épreuve à deux issues : succès ($1$) ou échec ($0$)
- $P(X = 1) = p$, $P(X = 0) = 1 - p$
- $E(X) = p$, $V(X) = p(1 - p)$
- **Fonction génératrice** : $G_X(t) = 1 - p + pt$

---

#### Loi binomiale $\\mathcal{B}(n, p)$
- **Définition** : Somme de $n$ variables de Bernoulli indépendantes
- $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$, $k \\in \\{0, ..., n\\}$
- $E(X) = np$, $V(X) = np(1 - p)$
- **Fonction génératrice** : $G_X(t) = (1 - p + pt)^n$

---

#### Loi hypergéométrique $\\mathcal{H}(N, K, n)$
- **Définition** : Modélise un tirage sans remise de $n$ objets parmi $N$ contenant $K$ succès
- $P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$ avec $\\max(0, n-N+K) \\leq k \\leq \\min(K, n)$
- $E(X) = n \\cdot \\frac{K}{N}$, $V(X) = n \\cdot \\frac{K}{N} \\cdot \\left(1 - \\frac{K}{N}\\right) \\cdot \\frac{N - n}{N - 1}$
- **Exemple** : loterie sans remise

---

#### Loi géométrique $\\mathcal{G}(p)$
- **Définition** : Modélise le rang du premier succès dans une suite d’épreuves de Bernoulli
- $P(X = k) = (1 - p)^{k - 1} p$, $k \\geq 1$
- $E(X) = \\frac{1}{p}$, $V(X) = \\frac{1 - p}{p^2}$
- **Fonction génératrice** : $G_X(t) = \\frac{pt}{1 - (1 - p)t}$ pour $|t| < \\frac{1}{1 - p}$

---

#### Loi de Poisson $\\mathcal{P}(\\lambda)$
- **Définition** : Modélise le nombre d’occurrences d’un événement rare sur un intervalle
- $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, $k \\in \\mathbb{N}$
- $E(X) = \\lambda$, $V(X) = \\lambda$
- **Fonction génératrice** : $G_X(t) = e^{\\lambda (t - 1)}$
- **Convergence** : $\\mathcal{B}(n, \\frac{\\lambda}{n}) \\rightarrow \\mathcal{P}(\\lambda)$

---

> Ces lois sont fondamentales pour modéliser des expériences aléatoires simples et souvent rencontrées en pratique (tirage, comptage, répétition d’épreuves).
  `,
  tags: [
    'lois de probabilité',
    'lois discrètes',
    'loi uniforme',
    'loi de Bernoulli',
    'loi binomiale',
    'loi hypergéométrique',
    'loi géométrique',
    'loi de Poisson',
    'variables aléatoires',
    'fonction génératrice'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Lois-usuelles-a-densite
{
  id: 'Lois-usuelles-a-densite',
  titre: 'Lois Usuelles à Densité',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Lois Usuelles à Densité

---

#### Loi uniforme sur $[a, b]$
- **Définition** : $X \\sim \\mathcal{U}([a, b])$ si sa densité est $f(x) = \\frac{1}{b-a}$ pour $x \\in [a, b]$
- $E(X) = \\frac{a + b}{2}$, $V(X) = \\frac{(b-a)^2}{12}$
- Fonction de répartition : $F(x) = \\frac{x - a}{b - a}$ pour $x \\in [a, b]$
- Modélise un tirage équi-réparti sur un intervalle

---

#### Loi exponentielle $\\mathcal{E}(\\lambda)$
- **Définition** : $f(x) = \\lambda e^{-\\lambda x}$ pour $x \\geq 0$, $\\lambda > 0$
- $E(X) = \\frac{1}{\\lambda}$, $V(X) = \\frac{1}{\\lambda^2}$
- Propriété de **sans mémoire** : $P(X > t + s \\mid X > s) = P(X > t)$
- Fonction de répartition : $F(x) = 1 - e^{-\\lambda x}$
- Utilisée pour modéliser le temps d’attente entre événements rares

---

#### Loi gamma $\\Gamma(k, \\lambda)$ (ou loi \\( \\gamma \\))
- **Définition** : $f(x) = \\frac{\\lambda^k x^{k - 1} e^{-\\lambda x}}{\\Gamma(k)}$ pour $x > 0$
- $k > 0$ (forme), $\\lambda > 0$ (taux)
- $E(X) = \\frac{k}{\\lambda}$, $V(X) = \\frac{k}{\\lambda^2}$
- Cas particuliers :
  - $k = 1$ : loi exponentielle
  - $k \\in \\mathbb{N}$ : somme de $k$ variables exponentielles indépendantes
- Utilisée en fiabilité, files d’attente, etc.

---

#### Loi normale $\\mathcal{N}(\\mu, \\sigma^2)$
- **Définition** : $f(x) = \\frac{1}{\\sqrt{2\\pi \\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$
- $E(X) = \\mu$, $V(X) = \\sigma^2$
- Symétrique autour de $\\mu$
- Densité en cloche : concentration autour de la moyenne
- Fonction de répartition : notée $\\Phi$ dans le cas standard
- **Loi normale standard** : $\\mathcal{N}(0, 1)$
- **Propriété de stabilité** :
  - Somme de lois normales indépendantes : loi normale
  - $aX + b \\sim \\mathcal{N}(a\\mu + b, a^2 \\sigma^2)$
- **Théorème central limite** : la moyenne d’un grand nombre de variables iid converge en loi vers une normale

---

> Ces lois continues sont fondamentales en statistiques et en modélisation des phénomènes aléatoires dans la nature, l'industrie, et l’ingénierie.
  `,
  tags: [
    'lois continues',
    'loi uniforme',
    'loi exponentielle',
    'loi gamma',
    'loi normale',
    'densité de probabilité',
    'fonction de répartition',
    'espérance',
    'variance',
    'théorème central limite'
  ],
  datePublication: '2025-05-26',
  populaire: false,
  aReviser: false
},
// Convergences et approximations
{
  id: 'Convergences-et-approximations',
  titre: 'Convergences et Approximations',
  matiere: 'Mathématiques',
  categorie: 'Probabilités',
  niveau: ['Prépa'],
  contenu: `
### Convergences et Approximations

---

#### Inégalité de Markov
- Pour une variable aléatoire $X \\geq 0$ et $a > 0$,
$$
P(X \\geq a) \\leq \\frac{E(X)}{a}.
$$
- Permet de majorer la probabilité que $X$ dépasse un seuil via son espérance.

---

#### Inégalité de Bienaymé-Tchebychev
- Pour une variable $X$ de variance finie et $a > 0$,
$$
P(|X - E(X)| \\geq a) \\leq \\frac{V(X)}{a^2}.
$$
- Outil fondamental pour contrôler la dispersion autour de la moyenne.

---

#### Convergence en probabilité
- Une suite $(X_n)$ converge en probabilité vers $X$ si, pour tout $\\varepsilon > 0$,
$$
\\lim_{n \\to \\infty} P(|X_n - X| > \\varepsilon) = 0.
$$
- Notation : $X_n \\xrightarrow{p} X$.

---

#### Loi faible des grands nombres (LGN)
- Soit $(X_i)$ iid avec $E(X_i) = \\mu$ et variance finie.
- La moyenne empirique
$$
\\overline{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i
$$
converge en probabilité vers $\\mu$ :
$$
\\overline{X}_n \\xrightarrow{p} \\mu.
$$
- Justifie l’usage des moyennes empiriques comme estimateurs.

---

#### Approximations classiques
- Approximation de la loi binomiale par la loi normale (quand $n$ grand, $p$ fixe) :
$$
B(n,p) \\approx \\mathcal{N}(np, np(1-p)).
$$
- Approximation de la loi de Poisson par la loi normale (pour $\\lambda$ grand) :
$$
\\mathcal{P}(\\lambda) \\approx \\mathcal{N}(\\lambda, \\lambda).
$$

---

#### Théorème central limite (TCL)
- Soit $(X_i)$ iid de moyenne $\\mu$ et variance $\\sigma^2 > 0$.
- La variable centrée et réduite
$$
Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma \\sqrt{n}}
$$
converge en loi vers une loi normale standard :
$$
Z_n \\xrightarrow{d} \\mathcal{N}(0,1).
$$
- Fondement théorique de nombreuses approximations statistiques.

---

> Ces outils permettent d’analyser la convergence des suites de variables aléatoires et d’utiliser des lois continues pour approximer des lois discrètes.
  `,
  tags: [
    'convergence',
    'inégalités',
    'Markov',
    'Bienaymé-Tchebychev',
    'loi faible des grands nombres',
    'approximation',
    'théorème central limite',
    'probabilités',
    'statistiques'
  ],
  datePublication: '2025-05-26',
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
    populaire: false,
    aReviser: false,
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
  populaire: false,
  aReviser: false,
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
