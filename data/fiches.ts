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
- Une matrice $A$ est un tableau rectangulaire de coefficients $a_{ij}$ appartenant à un corps $\\mathbb{K}$, de dimension $m \\times n$.
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
  - $(\\lambda A)^T = \\lambda A^T$,
  - $(AB)^T = B^T A^T$.

---

#### Matrices symétriques et antisymétriques
- $A$ est **symétrique** si $A = A^T$.
- $A$ est **antisymétrique** (ou skew-symétrique) si $A^T = -A$.
- Toute matrice carrée $M$ peut s’écrire de manière unique comme :
  $$
  M = \\frac{M + M^T}{2} + \\frac{M - M^T}{2},
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
  - $A$ inversible $\\iff$ $\\det(A) \\neq 0$,
  - $(A^{-1})^T = (A^T)^{-1}$,
  - Si $A$ et $B$ sont inversibles, alors $AB$ est inversible et $(AB)^{-1} = B^{-1} A^{-1}$

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
  id: 'Réduction-endomorphismes-theoremes',
  titre: 'Réduction des Endomorphismes et Matrices Carrées — Théorèmes et Propriétés',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Théorèmes et Propriétés Importantes en Réduction d’Endomorphismes

---

#### 1. Définition : Valeur propre et vecteur propre

- **Hypothèse** : $f : E \\to E$ endomorphisme, $v \\in E \\setminus \\{0\\}$.
- **Conclusion** : $\\lambda \\in \\mathbb{K}$ est valeur propre ssi  
  $$
  f(v) = \\lambda v.
  $$

---

#### 2. Polynôme caractéristique

- **Définition** :  
  $$
  \\chi_f(X) = \\det(X I - A),
  $$
  où $A$ est la matrice de $f$ dans une base.

- **Propriété** :  
  Les racines de $\\chi_f$ sont les valeurs propres de $f$.

---

#### 3. Multiplicité algébrique et géométrique

- **Hypothèse** : $\\lambda$ valeur propre.

- **Définitions** :  
  - Multiplicité algébrique : multiplicité de $\\lambda$ comme racine de $\\chi_f$.  
  - Multiplicité géométrique : dimension du sous-espace propre $E_{\\lambda}$.

- **Propriété** :  
  $$
  1 \\leq \\text{multiplicité géométrique} \\leq \\text{multiplicité algébrique}.
  $$

---

#### 4. Théorème de Cayley-Hamilton

- **Hypothèse** : $\\chi_f$ polynôme caractéristique de $f$.

- **Conclusion** :  
  $$
  \\chi_f(f) = 0,
  $$
  c’est-à-dire que l’endomorphisme annule son propre polynôme caractéristique.

---

#### 5. Propriétés liées aux valeurs propres

- **Si $\\chi_f$ est scindé sur $\\mathbb{K}$ (factorisable en racines linéaires)** :  
  - Somme des valeurs propres (avec multiplicités) = trace de $A$.  
  - Produit des valeurs propres = déterminant de $A$.

---

#### 6. Critère de trigonalisabilité

- **Hypothèse** :  
  Le polynôme caractéristique $\\chi_f$ est scindé sur $\\mathbb{K}$.

- **Conclusion** :  
  L’endomorphisme $f$ est trigonalisable, c’est-à-dire qu’il existe une base dans laquelle la matrice est triangulaire supérieure.

---

#### 7. Critère de diagonalisabilité

- **Hypothèses équivalentes** :  
  - $f$ admet une base de vecteurs propres.  
  - La somme des dimensions des sous-espaces propres est égale à la dimension totale de $E$.  
  - Pour chaque valeur propre, multiplicité géométrique = multiplicité algébrique.  
  - $f$ admet un polynôme annulateur scindé à racines simples.

- **Conclusion** :  
  $f$ est diagonalisable.

---

#### 8. Matrices de passage et diagonalisation

- **Hypothèse** : Base $(v_1, \\ldots, v_n)$ formée de vecteurs propres.

- **Conclusion** :  
  La matrice de passage $P$ (dont les colonnes sont ces vecteurs) vérifie  
  $$
  P^{-1} A P = D,
  $$
  avec $D$ matrice diagonale.

---

#### 9. Théorème spectral (endomorphismes symétriques)

- **Hypothèse** :  
  $f$ endomorphisme symétrique (auto-adjoint) sur espace euclidien réel.

- **Conclusion** :  
  $f$ est diagonalisable dans une base orthonormale, avec valeurs propres réelles.

`
  ,
  tags: [
    'valeurs propres',
    'polynôme caractéristique',
    'multiplicité algébrique',
    'multiplicité géométrique',
    'théorème de Cayley-Hamilton',
    'trigonalisabilité',
    'diagonalisabilité',
    'matrices de passage',
    'théorème spectral',
    'algèbre linéaire'
  ],
  datePublication: '2025-05-27',
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
  (PQ)(x) = \\sum_{k=0}^{m+n} c_k x^k, \\quad \\text{où } c_k = \\sum_{i=0}^k a_i b_{k-i}.
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
  (x - a)^k \\mid P(x) \\quad \\text{et} \\quad (x - a)^{k+1} \\nmid P(x).
  $$
- Cela équivaut à : 
  $$
  P(a) = P'(a) = \\cdots = P^{(k-1)}(a) = 0, \\quad P^{(k)}(a) \\neq 0.
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
//theoremes-fondamentaux-analyse
{
  id: 'theoremes-fondamentaux-analyse',
  titre: 'Théorèmes Fondamentaux de l\'Analyse',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Lycée', 'Prépa', 'Université'],
contenu: `
### 1. Théorème des valeurs intermédiaires (TVI)

Soit $f : [a, b] \\to \\mathbb{R}$ une fonction continue sur l’intervalle fermé $[a,b]$.

Si $y_0$ est un réel compris entre $f(a)$ et $f(b)$, alors il existe au moins un $c \\in [a,b]$ tel que :
$$
f(c) = y_0.
$$

**Hypothèses :**
- $f$ continue sur $[a,b]$
- $y_0 \\in [\\min(f(a), f(b)), \\max(f(a), f(b))]$

**Conclusion :**
- Il existe $c \\in [a,b]$ avec $f(c) = y_0$.

---

### 2. Théorème de Rolle

Soit $f : [a,b] \\to \\mathbb{R}$ telle que :

- $f$ est continue sur $[a,b]$,
- $f$ est dérivable sur $(a,b)$,
- $f(a) = f(b)$.

Alors, il existe au moins un $c \\in (a,b)$ tel que :
$$
f'(c) = 0.
$$

---

### 3. Théorème des accroissements finis (Théorème de la moyenne)

Soit $f : [a,b] \\to \\mathbb{R}$ telle que :

- $f$ est continue sur $[a,b]$,
- $f$ est dérivable sur $(a,b)$.

Alors, il existe au moins un $c \\in (a,b)$ tel que :
$$
f'(c) = \\frac{f(b) - f(a)}{b - a}.
$$

---

### 4. Remarques et interprétations

- Le TVI garantit que la fonction prend toutes les valeurs intermédiaires entre $f(a)$ et $f(b)$.
- Le théorème de Rolle est un cas particulier du théorème des accroissements finis avec $f(a) = f(b)$.
- Le théorème des accroissements finis donne une **valeur moyenne** de la dérivée sur un intervalle.
- Ces théorèmes sont essentiels en analyse pour :
  - comprendre le comportement des fonctions,
  - démontrer des inégalités,
  - rechercher des extrema, etc.

---

### 5. Exemple (Théorème des accroissements finis)

Soit $f(x) = x^2$ sur $[1,3]$.

- $\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$
- $f'(x) = 2x$

Il existe $c \\in (1,3)$ tel que $f'(c) = 4$, donc $2c = 4 \\Rightarrow c = 2$.
`
,  tags: [
    'théorème des valeurs intermédiaires',
    'théorème de Rolle',
    'théorème des accroissements finis',
    'analyse',
    'fonction continue',
    'dérivée',
    'lycée',
    'prépa'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// limites-et-continuite
{
  id: 'limites-et-continuite',
  titre: 'Limites et Continuité des Fonctions',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Lycée', 'Prépa', 'Université'],
  contenu: `
### 1. Notion de limite

Soit $f : D \\subset \\mathbb{R} \\to \\mathbb{R}$ une fonction, et $a$ un point d’accumulation de $D$.

On dit que $f(x)$ tend vers $L \\in \\mathbb{R} \\cup \\{ +\\infty, -\\infty \\}$ quand $x \\to a$ (noté $\\lim_{x \\to a} f(x) = L$) si :

$$
\\forall \\varepsilon > 0, \\exists \\delta > 0, \\text{ tel que } \\forall x \\in D, \\quad 0 < \\lvert x - a \\rvert < \\delta \\implies \\lvert f(x) - L \\rvert < \\varepsilon.
$$

---

### 2. Types de limites

- **Limite finie en un point fini** : $L \\in \\mathbb{R}$
- **Limite infinie en un point fini** : $L = +\\infty$ ou $-\\infty$
- **Limite en l’infini** : $\\lim_{x \\to +\\infty} f(x)$, $\\lim_{x \\to -\\infty} f(x)$
- **Limite infinie en l’infini** : $+\\infty$ ou $-\\infty$

---

### 3. Propriétés fondamentales

- **Unicité de la limite** : Si la limite existe, elle est unique.
- **Limite d’une somme, produit, quotient** (si définies) :

$$
\\lim_{x \\to a} (f(x) + g(x)) = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)
$$

$$
\\lim_{x \\to a} (f(x) g(x)) = \\lim_{x \\to a} f(x) \\times \\lim_{x \\to a} g(x)
$$

$$
\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\text{si } \\lim_{x \\to a} g(x) \\neq 0
$$

---

### 4. Continuité d’une fonction

Soit $f : D \\to \\mathbb{R}$, $a \\in D$.

$f$ est **continue en $a$** si :

- $f(a)$ est défini,
- $\\lim_{x \\to a} f(x)$ existe,
- et $\\lim_{x \\to a} f(x) = f(a)$.

En termes formels :

$$
\\forall \\varepsilon > 0, \\exists \\delta > 0, \\quad \\lvert x - a \\rvert < \\delta \\implies \\lvert f(x) - f(a) \\rvert < \\varepsilon.
$$

---

### 5. Continuité sur un intervalle

- $f$ est continue sur un intervalle $I$ si elle est continue en tout point $a \\in I$.
- Propriétés utiles :
  - Somme, produit, quotient (si dénominateur non nul) de fonctions continues sont continues.
  - Composition de fonctions continues est continue.

---

### 6. Continuité à droite et à gauche (limites latérales)

- $f$ est continue à droite en $a$ si :

$$
\\lim_{x \\to a^+} f(x) = f(a).
$$

- $f$ est continue à gauche en $a$ si :

$$
\\lim_{x \\to a^-} f(x) = f(a).
$$

---

### 7. Fonctions discontinues

- **Discontinuité de type saut** : limite à gauche et à droite existent mais sont différentes.
- **Discontinuité essentielle** : limite n’existe pas ou est infinie.
- **Discontinuité évitable** : limite existe mais différente de la valeur $f(a)$.

---

### 8. Exemples classiques

- Fonction $f(x) = \\frac{\\sin x}{x}$ avec $f(0)$ non défini.  
  La limite en 0 existe et vaut 1.  
  On peut définir $f(0) = 1$ pour rendre $f$ continue en 0 (continuité évitable).

- Fonction partie entière $[x]$ discontinue en tous les entiers.

---

### 9. Théorème de la limite de composition

Si $f$ est continue en $a$ et $g$ est continue en $f(a)$, alors la composée $g \\circ f$ est continue en $a$.

---

### 10. Théorème des gendarmes

Si $f, g, h : D \\to \\mathbb{R}$ telles que

$$
f(x) \\leq g(x) \\leq h(x)
$$

pour tout $x$ proche de $a$ (hors éventuellement en $a$), et si

$$
\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L,
$$

alors

$$
\\lim_{x \\to a} g(x) = L.
$$

---

### 11. Continuité et théorèmes d’existence

- Une fonction continue sur un intervalle fermé et borné est **bornée** et atteint ses bornes (théorème des bornes atteintes).
- Toute fonction continue sur un intervalle fermé et borné atteint un minimum et un maximum (théorème de Weierstrass).

---

### 12. Prolongement par continuité

Si $\\lim_{x \\to a} f(x) = L \\in \\mathbb{R}$, alors on peut définir $\\tilde{f}$ par :

$$
\\tilde{f}(x) = \\begin{cases}
f(x), & x \\neq a \\\\
L, & x = a
\\end{cases}
$$

Ce nouveau $\\tilde{f}$ est continue en $a$.

---

### 13. Topologie et continuité

- Une fonction est continue si l’image réciproque de tout ouvert est un ouvert.
- En particulier, la continuité est liée à la structure topologique de l’espace de départ et d’arrivée.

---

### 14. Limites et continuité dans $\\mathbb{R}^n$

- On généralise la notion de limite et continuité aux fonctions $f : \\mathbb{R}^n \\to \\mathbb{R}^m$ via les normes.
- Même définition avec $\\lVert x - a \\rVert$ et $\\lVert f(x) - L \\rVert$.

---

### 15. Résumé

| Propriété                          | Condition                                                                 | Résultat                              |
|-----------------------------------|---------------------------------------------------------------------------|---------------------------------------|
| Limite $\\lim_{x \\to a} f(x) = L$ | $\\forall \\varepsilon>0, \\exists \\delta>0$ tel que $\\lvert x-a \\rvert < \\delta \\implies \\lvert f(x)-L \\rvert < \\varepsilon$ | $f(x) \\to L$ quand $x \\to a$        |
| Continuité en $a$                 | $f$ définie en $a$, limite existe, limite = $f(a)$                         | $f$ est continue en $a$               |
| Limite infinie                    | Approche de $+\\infty$ ou $-\\infty$                                      | Limite infinie                        |
| Composition continue              | $f$ continue en $a$, $g$ continue en $f(a)$                                | $g \\circ f$ continue en $a$          |

  `,
  tags: [
    'limites',
    'continuité',
    'analyse',
    'fonction',
    'théorème des gendarmes',
    'topologie',
    'lycée',
    'prépa'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
// Résolution des systèmes linéaires, Rang, Théorème de Cramer
{
  id: 'resolution-systemes-lineaires-rang-cramer',
  titre: 'Résolution des systèmes linéaires, Rang, Théorème de Cramer',
  matiere: 'Mathématiques',
  categorie: 'Algèbre',
  niveau: ['Lycée', 'Prépa', 'Université'],
contenu: `
### 1. Définitions

- Un **système linéaire** est un ensemble de $m$ équations linéaires à $n$ inconnues :

$$
\\begin{cases}
a_{11}x_1 + a_{12}x_2 + \\dots + a_{1n}x_n = b_1 \\\\
a_{21}x_1 + a_{22}x_2 + \\dots + a_{2n}x_n = b_2 \\\\
\\vdots \\\\
a_{m1}x_1 + a_{m2}x_2 + \\dots + a_{mn}x_n = b_m
\\end{cases}
$$

- On note $A = (a_{ij})$ la matrice des coefficients, $X = (x_1, \\ldots, x_n)^T$ le vecteur inconnu, et $B = (b_1, \\ldots, b_m)^T$ le vecteur des termes constants.

Le système s’écrit sous forme matricielle :
$$
AX = B.
$$

---

### 2. Rang d’une matrice

- Le **rang** d’une matrice $A$, noté $\\text{rang}(A)$, est le nombre maximal de lignes (ou colonnes) linéairement indépendantes.

- Propriétés :
  - $\\text{rang}(A) \\leq \\min(m,n)$
  - Le rang est égal à la dimension de l’espace engendré par les colonnes (ou les lignes) de $A$.

---

### 3. Systèmes compatibles et incompatibles

- Le système $AX = B$ est **compatible** (admet au moins une solution) si et seulement si
$$
\\text{rang}(A) = \\text{rang}([A|B]),
$$
où $[A|B]$ est la matrice augmentée (matrice $A$ avec la colonne $B$ ajoutée).

- Sinon, le système est **incompatible** (pas de solution).

---

### 4. Systèmes compatibles déterminés ou indéterminés

- Si compatible et
$$
\\text{rang}(A) = \\text{rang}([A|B]) = n,
$$
le système admet une solution unique.

- Si
$$
\\text{rang}(A) = \\text{rang}([A|B]) < n,
$$
le système admet une infinité de solutions (de dimension $n - \\text{rang}(A)$).

---

### 5. Méthodes de résolution

#### 5.1. Méthode du pivot de Gauss

- Transformation par opérations élémentaires sur les lignes pour obtenir une forme triangulaire (ou échelonnée).
- Résolution par substitution (remontée).

---

#### 5.2. Méthode de Cramer

- **Théorème de Cramer** :  
Si $A$ est une matrice carrée $n \\times n$ et $\\det(A) \\neq 0$, alors le système
$$
AX = B
$$
admet une solution unique donnée par :
$$
x_i = \\frac{\\det(A_i)}{\\det(A)}, \\quad i = 1, \\ldots, n,
$$
où $A_i$ est la matrice obtenue en remplaçant la $i$-ème colonne de $A$ par $B$.

---

### 6. Interprétation géométrique

- En dimension 2 ou 3, chaque équation représente une droite ou un plan.
- La solution correspond au point (ou ensemble de points) d’intersection.

---

### 7. Exemple complet

Considérons le système :
$$
\\begin{cases}
2x + 3y = 5 \\\\
4x - y = 1
\\end{cases}
$$

- Matrice $A = \\begin{pmatrix} 2 & 3 \\\\ 4 & -1 \\end{pmatrix}$, vecteur $B = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$.

- Calcul de $\\det(A) = 2 \\times (-1) - 4 \\times 3 = -2 - 12 = -14 \\neq 0$.

- Matrices $A_1$ et $A_2$ :
$$
A_1 = \\begin{pmatrix} 5 & 3 \\\\ 1 & -1 \\end{pmatrix}, \\quad
A_2 = \\begin{pmatrix} 2 & 5 \\\\ 4 & 1 \\end{pmatrix}
$$

- Calcul des déterminants :
$$
\\det(A_1) = 5 \\times (-1) - 1 \\times 3 = -5 - 3 = -8,
$$
$$
\\det(A_2) = 2 \\times 1 - 4 \\times 5 = 2 - 20 = -18.
$$

- Solutions :
$$
x = \\frac{\\det(A_1)}{\\det(A)} = \\frac{-8}{-14} = \\frac{4}{7}, \\quad y = \\frac{\\det(A_2)}{\\det(A)} = \\frac{-18}{-14} = \\frac{9}{7}.
$$

---

### 8. Compléments importants

- Si $\\det(A) = 0$, la méthode de Cramer ne s’applique pas.
- On peut alors utiliser le rang et la méthode de Gauss pour étudier le système.
- Le rang est un outil fondamental pour classifier la nature des solutions.

---

### 9. Propriétés du déterminant utiles

- $\\det(I_n) = 1$, où $I_n$ est la matrice identité.
- Le déterminant change de signe lorsqu’on échange deux lignes.
- Multiplier une ligne par un scalaire multiplie le déterminant par ce scalaire.
- Ajouter à une ligne un multiple d’une autre ligne ne change pas le déterminant.

---

### 10. Résumé des cas

| Condition                                                                  | Solution                               |
|----------------------------------------------------------------------------|----------------------------------------|
| $\\det(A) \\neq 0$                                                         | Solution unique (formule de Cramer)    |
| $\\det(A) = 0$ et $\\text{rang}(A) = \\text{rang}([A \\mid B]) = r < n$   | Infinité de solutions                  |
| $\\text{rang}(A) \\neq \\text{rang}([A \\mid B])$                         | Pas de solution (système incompatible) |

---

### 11. Exercices type

- Résoudre par Cramer le système :
$$
\\begin{cases}
x + 2y + z = 6 \\\\
2x - y + 3z = 14 \\\\
x + y + 2z = 11
\\end{cases}
$$

- Étudier le rang et la compatibilité du système :
$$
\\begin{cases}
x + y + z = 3 \\\\
2x + 2y + 2z = 6 \\\\
x - y + z = 1
\\end{cases}
$$

---

### 12. Conclusion

La résolution des systèmes linéaires repose sur la notion de rang et l’outil du déterminant. Le théorème de Cramer donne une solution explicite en dimension carrée lorsque le déterminant est non nul. Sinon, on utilise le rang et les méthodes de réduction (pivot de Gauss) pour étudier la compatibilité et trouver les solutions.
`,  tags: [
    'systèmes linéaires',
    'rang',
    'théorème de Cramer',
    'algèbre linéaire',
    'déterminant',
    'résolution de système',
    'lycée',
    'prépa'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// Suites récurrentes non-linéaires
{
  id: 'suites-recurrentes-non-lineaires',
  titre: 'Suites récurrentes non-linéaires (Prépa approfondie)',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### 1. Définitions

- Une suite \\((u_n)\\) est dite **récurrente non-linéaire** si elle est définie par une relation de la forme :

$$
u_{n+1} = f(u_n),
$$

où \\( f : \\mathbb{R} \\to \\mathbb{R} \\) est une fonction non-linéaire.

- Plus généralement, une suite peut être définie par une relation de récurrence d'ordre \\(k\\) :

$$
u_{n+k} = F(u_n, u_{n+1}, \\ldots, u_{n+k-1}),
$$

avec \\(F : \\mathbb{R}^k \\to \\mathbb{R}\\) non-linéaire.

---

### 2. Exemple classique : la suite logistique

La suite logistique est définie par :

$$
u_{n+1} = r u_n (1 - u_n),
$$

avec \\(r > 0\\) un paramètre réel, et une condition initiale \\( u_0 \\in [0,1] \\).

---

### 3. Étude des suites récurrentes non-linéaires

#### 3.1. Points fixes (ou points d’équilibre)

- Un **point fixe** \\( \\ell \\) est une solution de l’équation :

$$
\\ell = f(\\ell).
$$

- Les suites définies par \c( u_{n+1} = f(u_n) \\) qui convergent vers \\(\\ell\\) vérifient que \\(\\ell\\) est un point fixe de \\(f\\).

---

#### 3.2. Stabilité d’un point fixe

- Soit \\( \\ell \\) un point fixe.  
- On étudie la stabilité locale via la dérivée de \\( f \\) en \\(\\ell\\) :

- Si

$$
|f'(\\ell)| < 1,
$$

alors \\(\\ell\\) est **stable** : les suites commençant suffisamment proches de \\(\\ell\\) convergent vers \\(\\ell\\).

- Si

$$
|f'(\\ell)| > 1,
$$

alors \\(\\ell\\) est **instable**.

- Si

$$
|f'(\\ell)| = 1,
$$

l’étude est plus délicate, souvent on étudie les dérivées supérieures.

---

#### 3.3. Comportement général

- Les suites non-linéaires peuvent présenter des comportements très riches : convergence, cycles, chaos.

---

### 4. Exemple : étude de la suite logistique

- Points fixes :

$$
\\ell = r \\ell (1 - \\ell) \\implies \\ell (r(1-\\ell) - 1) = 0,
$$

donc

$$
\\ell = 0 \\quad \\text{ou} \\quad \\ell = 1 - \\frac{1}{r}.
$$

- Dérivée :

$$
f'(x) = r (1 - 2x).
$$

- Stabilité des points fixes :

1. Pour \\(\\ell = 0\\) :

$$
|f'(0)| = |r| < 1 \\implies \\text{stable si } 0 < r < 1.
$$

2. Pour \\(\\ell = 1 - \\frac{1}{r}\\) :

$$
|f'(\\ell)| = |r (1 - 2(1 - \\frac{1}{r}))| = |r (1 - 2 + \\frac{2}{r})| = |r (-1 + \\frac{2}{r})| = |-r + 2| = |2 - r|.
$$

- Donc ce point est stable si

$$
|2 - r| < 1 \\implies 1 < r < 3.
$$

---

### 5. Suites d’ordre supérieur non-linéaires

- Par exemple,

$$
u_{n+2} = g(u_n, u_{n+1}),
$$

avec \\(g\\) non-linéaire. Leur étude est plus complexe et fait appel à des méthodes d’analyse qualitative et dynamique.

---

### 6. Outils d’étude

- **Monotonie** : Étudier si la suite est croissante ou décroissante.

- **Bornes** : Chercher des majorants ou minorants.

- **Points fixes et stabilité**.

- **Étude graphique** : utiliser la fonction \\(f\\) et la droite \\(y=x\\) (méthode du cobweb).

---

### 7. Exemple d’application : suite définie par

$$
u_{n+1} = \\cos(u_n),
$$

avec \\(u_0 \\in \\mathbb{R}\\).

- Trouver les points fixes :

$$
\\ell = \\cos(\\ell).
$$

- Cette équation admet une solution unique \\(\\ell \\approx 0.739085\\).

- Étudier la stabilité :

$$
f'(x) = -\\sin(x),
$$

donc

$$
|f'(\\ell)| = |\\sin(\\ell)| < 1,
$$

la suite converge vers ce point fixe stable.

---

### 8. Résumé
| Concept          | Définition / Critère                                   |
|------------------|--------------------------------------------------------|
| Suite récurrente | $u_{n+1} = f(u_n)$                                      |
| Point fixe       | $\\ell = f(\\ell)$                                        |
| Stabilité        | Stable si $|f'(\\ell)| < 1$, instable sinon              |
| Exemple          | Suite logistique, $u_{n+1} = r u_n(1 - u_n)$            |
| Comportements    | Convergence, cycles, chaos                              |
---

### 9. Exercices

- Étudier la convergence et la stabilité de la suite définie par

$$
u_{n+1} = \\frac{1}{2} (u_n + \\frac{2}{u_n}), \\quad u_0 > 0.
$$

- Étudier la suite \\( u_{n+1} = \\sin(u_n) \\).

---

### 10. Conclusion

Les suites récurrentes non-linéaires sont un sujet fondamental en analyse et en dynamique. Elles illustrent la complexité des comportements même dans des relations très simples. La compréhension des points fixes et de leur stabilité est un premier pas essentiel avant d’étudier des phénomènes plus complexes comme les cycles ou le chaos.

`,
  tags: [
    'suites',
    'réccurence non linéaire',
    'stabilité',
    'points fixes',
    'suite logistique',
    'prépa',
    'analyse'
  ],
  datePublication: '2025-05-27',
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
  id: 'Serie-numerique-theoremes',
  titre: 'Série Numérique — Théorèmes et Critères',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa'],
  contenu: `
### Théorèmes et Critères Importants pour les Séries Numériques

---

#### 1. Critère de convergence de la série numérique

- **Hypothèse** : Soit une série $\\sum u_n$ avec terme général $(u_n)$.
- **Conclusion** :  
  Si la série converge, alors $u_n \\to 0$. La réciproque est fausse en général.

---

#### 2. Critère de comparaison

- **Hypothèses** :  
  Soit $u_n, v_n \\geq 0$ pour tout $n$ à partir d’un certain rang, avec  
  $$
  \\exists M > 0, \\forall n, \\quad u_n \\leq M v_n.
  $$
- **Conclusions** :  
  - Si $\\sum v_n$ converge, alors $\\sum u_n$ converge.  
  - Si $\\sum u_n$ diverge, alors $\\sum v_n$ diverge.

---

#### 3. Critère de d’Alembert (ratio test)

- **Hypothèse** :  
  $$
  L = \\lim_{n \\to +\\infty} \\left| \\frac{u_{n+1}}{u_n} \\right|
  $$
  existe (ou est $+\\infty$).

- **Conclusions** :  
  - Si $L < 1$, la série $\\sum u_n$ converge absolument.  
  - Si $L > 1$, la série diverge.  
  - Si $L = 1$, le critère est indéterminé.

---

#### 4. Critère de Cauchy (critère de la racine)

- **Hypothèse** :  
  $$
  L = \\lim_{n \\to +\\infty} \\sqrt[n]{|u_n|}.
  $$

- **Conclusions** :  
  - Si $L < 1$, la série converge absolument.  
  - Si $L > 1$, la série diverge.  
  - Si $L = 1$, critère indéterminé.

---

#### 5. Critère de la série de Riemann

- **Hypothèse** : Série $\\sum_{n=1}^{+\\infty} \\frac{1}{n^\\alpha}$.

- **Conclusion** :  
  - Converge si et seulement si $\\alpha > 1$.  
  - Diverge sinon.

---

#### 6. Critère spécial des séries alternées (Leibniz)

- **Hypothèses** :  
  Série de la forme $\\sum (-1)^n a_n$, où $(a_n)$ est positive, décroissante et tend vers 0.

- **Conclusion** :  
  La série converge (mais pas forcément absolument).

---

#### 7. Convergence absolue

- **Hypothèse** :  
  Série $\\sum u_n$ telle que $\\sum |u_n|$ converge.

- **Conclusion** :  
  Alors $\\sum u_n$ converge (convergence absolue implique convergence).

---

#### 8. Produit de Cauchy

- **Hypothèse** :  
  Séries $\\sum u_n$ et $\\sum v_n$ absolument convergentes.

- **Conclusion** :  
  Leur produit de Cauchy  
  $$
  w_n = \\sum_{k=0}^n u_k v_{n-k}
  $$
  converge absolument et  
  $$
  \\sum w_n = \\left( \\sum u_n \\right) \\cdot \\left( \\sum v_n \\right).
  $$

---

#### 9. Théorème de comparaison série-intégrale

- **Hypothèse** :  
  Soit une fonction décroissante positive $f : [N, +\\infty) \\to \\mathbb{R}$, avec  
  $$
  u_n = f(n).
  $$

- **Conclusion** :  
  La série $\\sum_{n=N}^{+\\infty} u_n$ converge si et seulement si l’intégrale  
  $$
  \\int_N^{+\\infty} f(x) \\, dx
  $$
  converge.

`
  ,
  tags: [
    'série numérique',
    'convergence',
    'critères de convergence',
    'critère d\'Alembert',
    'critère de Cauchy',
    'critère de comparaison',
    'série géométrique',
    'série de Riemann',
    'série alternée',
    'produit de Cauchy',
    'analyse'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Suites-series-fonctions
{
  id: 'Suites-series-fonctions-theoremes',
  titre: 'Suites et Série de Fonctions — Théorèmes Importants',
  matiere: 'Mathématiques',
  categorie: 'Analyse',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Théorèmes Importants pour Suites et Séries de Fonctions

---

#### 1. Théorème de la double limite

- **Hypothèses** :  
  Soit une suite de fonctions $(f_n)_{n\\in\\mathbb{N}}$ définie sur un ensemble $E$, telle que  
  - Pour tout $x \\in E$, la limite $\\lim_{n \\to +\\infty} f_n(x)$ existe et vaut $f(x)$.  
  - La convergence est uniforme sur $E$.  
  - De plus, pour tout $n$, la limite $\\lim_{x \\to x_0} f_n(x)$ existe (avec $x_0$ un point d’accumulation de $E$).

- **Conclusion** :  
  Alors on peut permuter les limites :  
  $$
  \\lim_{x \\to x_0} \\lim_{n \\to +\\infty} f_n(x) = \\lim_{n \\to +\\infty} \\lim_{x \\to x_0} f_n(x).
  $$

---

#### 2. Théorème de continuité

- **Hypothèses** :  
  Soit une suite $(f_n)$ de fonctions continues sur un intervalle $I$, qui converge uniformément vers une fonction $f$ sur $I$.

- **Conclusion** :  
  La limite $f$ est continue sur $I$.

---

#### 3. Théorème d’intégration sur un segment

- **Hypothèses** :  
  Soit une suite $(f_n)$ de fonctions continues sur un segment $[a,b]$ convergeant uniformément vers $f$.

- **Conclusion** :  
  On peut échanger limite et intégrale :  
  $$
  \\lim_{n \\to +\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b \\lim_{n \\to +\\infty} f_n(x) \\, dx = \\int_a^b f(x) \\, dx.
  $$

---

#### 4. Théorème de convergence dominée (Lebesgue)

- **Hypothèses** :  
  Soit une suite $(f_n)$ de fonctions mesurables sur un ensemble $E$, telle que  
  - $f_n(x) \\to f(x)$ presque partout sur $E$.  
  - Il existe une fonction intégrable $g$ telle que $|f_n(x)| \\leq g(x)$ pour tout $n$ et presque tout $x$.

- **Conclusion** :  
  Alors  
  $$
  \\lim_{n \\to +\\infty} \\int_E f_n(x) \\, dx = \\int_E f(x) \\, dx.
  $$

---

#### 5. Théorème d’intégration terme à terme (pour séries)

- **Hypothèses** :  
  Soit une série de fonctions $\sum f_n$ qui converge uniformément sur $[a,b]$.

- **Conclusion** :  
  On peut intégrer terme à terme la série :  
  $$
  \\int_a^b \\sum_{n=0}^{+\\infty} f_n(x) \\, dx = \\sum_{n=0}^{+\\infty} \\int_a^b f_n(x) \\, dx.
  $$

---

#### 6. Théorème de dérivation terme à terme

- **Hypothèses** :  
  Soit une suite $(f_n)$ de fonctions dérivables sur $[a,b]$, telles que  
  - La suite $(f_n)$ converge en un point $x_0 \in [a,b]$.  
  - La suite des dérivées $(f_n')$ converge uniformément sur $[a,b]$ vers une fonction $g$.

- **Conclusion** :  
  Alors $(f_n)$ converge uniformément vers une fonction $f$ dérivable sur $[a,b]$, et  
  $$
  f'(x) = g(x) = \\lim_{n \\to +\\infty} f_n'(x).
  $$
  C’est-à-dire que la dérivation terme à terme est permise.

`
  ,
  tags: [
    'théorème',
    'convergence',
    'intégration',
    'dérivation',
    'analyse',
    'suite de fonctions',
    'série de fonctions'
  ],
  datePublication: '2025-05-27',
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
//python-structures-controle
{
  id: 'python-structures-controle',
  titre: 'Structures de Contrôle en Python',
  matiere: 'Informatique',
  categorie: 'Python',
  niveau: ['Lycée', 'Prépa','Université'],
  contenu: `
### Structures de Contrôle en Python

---

#### Conditions (instructions conditionnelles)

- Syntaxe :
\`\`\`python
if condition:
    # bloc si vrai
elif autre_condition:
    # bloc sinon si
else:
    # bloc sinon
\`\`\`

- Comparateurs :
  - \`==\`, \`!=\`, \`<\`, \`<=\`, \`>\`, \`>=\`
  
- Opérateurs logiques :
  - \`and\` : et logique
  - \`or\` : ou logique
  - \`not\` : non logique
  
- Exemple :
\`\`\`python
if x == 0:
    print("x nul")
elif x > 0:
    print("x positif")
else:
    print("x négatif")
\`\`\`

---

#### Boucles conditionnelles : \`while\`

- Exécute un bloc **tant que** la condition est vraie.
- Attention aux boucles infinies !

- Exemple :
\`\`\`python
i = 1
s = 0
while i <= 100:
    s += i**2
    i += 1
print("somme:", s)
\`\`\`

---

#### Boucles itératives : \`for\`

- Utilisée pour parcourir une **séquence** :
\`\`\`python
for variable in sequence:
    # bloc
\`\`\`

- Exemple avec \`range\` :
\`\`\`python
s = 0
for i in range(101):
    s += i**2
print("somme:", s)
\`\`\`

- Générateur de séquences :
  - \`range(fin)\`
  - \`range(début, fin[, pas])\`
  
  Exemples :
  - \`range(3, 8)\` → 3, 4, 5, 6, 7  
  - \`range(2, 12, 3)\` → 2, 5, 8, 11

---

#### Contrôle de boucle

- \`break\` : interrompt la boucle immédiatement.
- \`continue\` : passe à l'itération suivante.

---

#### Types de base

| Type       | Exemple                     |
|------------|-----------------------------|
| \`int\`     | \`1\`, \`-3\`, \`783\`         |
| \`float\`   | \`9.23\`, \`-1.8e-6\`          |
| \`bool\`    | \`True\`, \`False\`           |
| \`str\`     | \`"abc"\`, \`'L\\'un'\`        |
| \`list\`    | \`[1, 2, 3]\`, \`["x", 1.0]\`  |

---

#### Affichage / Saisie

- Afficher :
\`\`\`python
print("v =", 8, "cm")
\`\`\`

- Lire une entrée utilisateur :
\`\`\`python
s = input("Saisir une valeur:")
\`\`\`

---

#### Fonctions

- Définir une fonction :
\`\`\`python
def nomfct(x, y):
    """Documentation"""
    return x + y
\`\`\`

- Appel et récupération :
\`\`\`python
r = nomfct(5, 3)
\`\`\`

- Les variables dans une fonction sont **locales**.

---

#### Fonctions mathématiques (via \`numpy\`)

- Exemple d'import :
\`\`\`python
from numpy import *
\`\`\`

- Exemples d'utilisation :
  - \`abs(-3.2)\` → $3.2$
  - \`sin(\\pi/4)\` → $\\approx 0.707$
  - \`sqrt(81)\` → $9$
  - \`log(e**2)\` → $2$

---

#### Séquences : listes, chaînes

- Indexation :
  - \`[0]\`, \`[1]\`, ..., \`[-1]\` (dernier)
  
- Tranches :
\`\`\`python
liste = [11, 67, "ok", 3.14, 1912]
liste[:3]    # [11, 67, "ok"]
liste[1:3]   # [67, "ok"]
liste[3:]    # [3.14, 1912]
\`\`\`

- Taille d’une séquence :
\`\`\`python
len(liste)
\`\`\`

  `,
  tags: [
    'python',
    'conditions',
    'boucles',
    'while',
    'for',
    'types',
    'listes',
    'fonctions',
    'math',
    'range',
    'input',
    'print'
  ],
  datePublication: '2025-05-27',
  populaire: true,
  aReviser: false
},
//Programmation Orientée Objet en Python
{
  id: 'python-poo',
  titre: 'Programmation Orientée Objet en Python',
  matiere: 'Informatique',
  categorie: 'Python',
  niveau: ['Prépa', 'Université'],
  contenu: `
### Programmation Orientée Objet (POO) en Python

---

#### Définition d'une classe

- Syntaxe de base :
\`\`\`python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def saluer(self):
        print("Bonjour, je m'appelle", self.nom)
\`\`\`

---

#### Instanciation d’un objet

\`\`\`python
p = Personne("Alice", 25)
p.saluer()  # Bonjour, je m'appelle Alice
\`\`\`

---

#### Attributs et méthodes

- Attribut : variable liée à l’objet via \`self.nom\`
- Méthode : fonction définie dans une classe

---

#### Encapsulation

- Attribut protégé : \`_attribut\`
- Attribut privé : \`__attribut\`

---

#### Héritage

\`\`\`python
class Etudiant(Personne):
    def __init__(self, nom, age, niveau):
        super().__init__(nom, age)
        self.niveau = niveau
\`\`\`

---

#### Méthodes spéciales

- \`__str__\`, \`__repr__\` : affichage
- \`__eq__\`, \`__lt__\` : comparaisons
- \`__len__\`, \`__getitem__\` : comportement comme une séquence

---

#### Attributs de classe

- Partagés entre toutes les instances :
\`\`\`python
class Compteur:
    total = 0
    def __init__(self):
        Compteur.total += 1
\`\`\`

  `,
  tags: [
    'python',
    'POO',
    'classe',
    'objet',
    'méthode',
    'héritage',
    'encapsulation'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Gestion des Exceptions en Python
{
  id: 'python-exceptions',
  titre: 'Gestion des Exceptions en Python',
  matiere: 'Informatique',
  categorie: 'Python',
  niveau: ['Lycée', 'Prépa','Université'],
  contenu: `
### Gestion des Exceptions en Python

---

#### try / except

- Intercepte les erreurs à l'exécution :
\`\`\`python
try:
    x = 1 / 0
except ZeroDivisionError:
    print("Division par zéro !")
\`\`\`

---

#### Bloc complet : try / except / else / finally

\`\`\`python
try:
    x = int(input("Entier : "))
except ValueError:
    print("Ce n'est pas un entier.")
else:
    print("Merci pour", x)
finally:
    print("Fin du bloc.")
\`\`\`

---

#### Lever une exception

- Utiliser \`raise\` :
\`\`\`python
def racine(x):
    if x < 0:
        raise ValueError("x doit être positif")
    return x ** 0.5
\`\`\`

---

#### Créer ses propres exceptions

\`\`\`python
class MonErreur(Exception):
    pass

raise MonErreur("Erreur personnalisée")
\`\`\`

---

#### Exceptions courantes

- \`ZeroDivisionError\`
- \`ValueError\`
- \`TypeError\`
- \`IndexError\`
- \`KeyError\`
- \`ImportError\`

  `,
  tags: [
    'python',
    'exceptions',
    'try',
    'raise',
    'error',
    'gestion des erreurs'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Bases du langage C++
{
  id: 'cpp-bases',
  titre: 'Bases du langage C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Bases du langage C++

---

#### Structure minimale d'un programme

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Bonjour, monde !" << std::endl;
    return 0;
}
\`\`\`

---

#### Types de base

- Entiers : \`int\`, \`short\`, \`long\`
- Flottants : \`float\`, \`double\`
- Booléens : \`bool\` (valeurs \`true\` / \`false\`)
- Caractères : \`char\`

---

#### Opérateurs

- Arithmétiques : \`+\`, \`-\`, \`*\`, \`/\`, \`%\`
- Comparaison : \`==\`, \`!=\`, \`<\`, \`<=\`, \`>\`, \`>=\`
- Logiques : \`&&\`, \`||\`, \`!\`

---

#### Entrée / sortie

\`\`\`cpp
int x;
std::cin >> x; // Entrée
std::cout << "x = " << x << std::endl; // Sortie
\`\`\`
  `,
  tags: ['c++', 'types', 'entrée', 'sortie', 'opérateurs'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Structures de contrôle en C++
{
  id: 'cpp-controle',
  titre: 'Structures de contrôle en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Structures de contrôle en C++

---

#### Conditions

\`\`\`cpp
if (x > 0) {
    std::cout << "Positif";
} else if (x < 0) {
    std::cout << "Négatif";
} else {
    std::cout << "Nul";
}
\`\`\`

---

#### Boucle \`while\`

\`\`\`cpp
int i = 0;
while (i < 10) {
    std::cout << i << " ";
    i++;
}
\`\`\`

---

#### Boucle \`for\`

\`\`\`cpp
for (int i = 0; i < 10; ++i) {
    std::cout << i << " ";
}
\`\`\`

---

#### Boucle \`do...while\`

\`\`\`cpp
int i = 0;
do {
    std::cout << i << " ";
    i++;
} while (i < 10);
\`\`\`

---

#### Interruption de boucle

- \`break\` : sort de la boucle
- \`continue\` : passe à l’itération suivante
  `,
  tags: ['c++', 'conditions', 'boucles', 'for', 'while'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Fonctions en C++
{
  id: 'cpp-fonctions',
  titre: 'Fonctions en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Fonctions en C++

---

#### Déclaration et appel

\`\`\`cpp
int carre(int x) {
    return x * x;
}

int main() {
    int res = carre(5);
    std::cout << res; // 25
}
\`\`\`

---

#### Passage de paramètres

- Par valeur (copie) :
  \`int f(int x)\`
- Par référence (modification possible) :
  \`int f(int &x)\`
- Par pointeur :
  \`int f(int *x)\`

---

#### Surcharge de fonction

\`\`\`cpp
int max(int a, int b);
double max(double a, double b);
\`\`\`

---

#### Fonctions avec paramètres par défaut

\`\`\`cpp
void afficher(std::string s = "Bonjour") {
    std::cout << s;
}
\`\`\`
  `,
  tags: ['c++', 'fonctions', 'référence', 'valeur', 'surcharge'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Programmation Orientée Objet en C++
{
  id: 'cpp-poo',
  titre: 'Programmation Orientée Objet en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### POO en C++

---

#### Définir une classe

\`\`\`cpp
class Personne {
public:
    std::string nom;
    int age;

    void saluer() {
        std::cout << "Bonjour, je suis " << nom;
    }
};
\`\`\`

---

#### Constructeur

\`\`\`cpp
class Personne {
public:
    Personne(std::string n, int a) : nom(n), age(a) {}
};
\`\`\`

---

#### Héritage

\`\`\`cpp
class Etudiant : public Personne {
public:
    int niveau;
};
\`\`\`

---

#### Encapsulation

- \`public\` : accessible de partout
- \`private\` : accessible uniquement dans la classe
- \`protected\` : accessible dans la classe et les sous-classes

---

#### Méthodes virtuelles et polymorphisme

\`\`\`cpp
class Animal {
public:
    virtual void parler() { std::cout << "..." << std::endl; }
};
class Chien : public Animal {
public:
    void parler() override { std::cout << "Wouf" << std::endl; }
};
\`\`\`
  `,
  tags: ['c++', 'classe', 'objet', 'héritage', 'polymorphisme'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Pointeurs et Références en C++
 {
  id: 'cpp-pointeurs-references',
  titre: 'Pointeurs et Références en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Pointeurs et Références en C++

---

#### Références

- Une **référence** est un alias d'une variable existante.

\`\`\`cpp
int a = 5;
int &r = a;
r = 10;
// a vaut maintenant 10
\`\`\`

---

#### Pointeurs

- Un **pointeur** stocke l’adresse mémoire d’une variable.

\`\`\`cpp
int a = 5;
int* p = &a; // p pointe vers a
*p = 7;      // modification de a via p
\`\`\`

---

#### Notations

- \`&x\` : adresse de x
- \`*p\` : contenu pointé par p
- \`int *p\` : déclaration d’un pointeur vers int

---

#### Pointeurs nuls et vérification

\`\`\`cpp
int* p = nullptr;
if (p != nullptr) {
    // utilisation de p
}
\`\`\`

---

#### Pointeurs et tableaux

\`\`\`cpp
int t[3] = {1, 2, 3};
int* p = t;
std::cout << *(p + 1); // affiche 2
\`\`\`
  `,
  tags: ['c++', 'pointeur', 'référence', 'adresse', 'mémoire'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//Gestion Mémoire Dynamique en C++
{
  id: 'cpp-memoire-dynamique',
  titre: 'Gestion Mémoire Dynamique en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Mémoire Dynamique en C++

---

#### Allocation et libération

\`\`\`cpp
int* p = new int;    // allocation
*p = 42;
delete p;            // libération
\`\`\`

---

#### Tableaux dynamiques

\`\`\`cpp
int* tab = new int[10];
// ...
delete[] tab;
\`\`\`

---

#### Risques à éviter

- Fuites mémoire : ne pas oublier \`delete\`
- Dangling pointer : utiliser un pointeur après \`delete\`
- Double suppression : \`delete\` deux fois

---

#### Bonnes pratiques

- Initialiser les pointeurs : \`int* p = nullptr;\`
- Supprimer avec \`delete\` dès que plus utilisé
- Préférer les **smart pointers** en C++ moderne (C++11+)
  `,
  tags: ['c++', 'mémoire', 'new', 'delete', 'fuites'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: true
},
//Fichiers en C++
 {
  id: 'cpp-fichiers',
  titre: 'Fichiers en C++',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Fichiers en C++

---

#### Inclure la bibliothèque

\`\`\`cpp
#include <fstream>
\`\`\`

---

#### Écriture dans un fichier

\`\`\`cpp
std::ofstream fichier("donnees.txt");
fichier << "Ligne 1" << std::endl;
fichier.close();
\`\`\`

---

#### Lecture depuis un fichier

\`\`\`cpp
std::ifstream fichier("donnees.txt");
std::string ligne;
while (std::getline(fichier, ligne)) {
    std::cout << ligne << std::endl;
}
fichier.close();
\`\`\`

---

#### Vérifier l’ouverture

\`\`\`cpp
if (!fichier.is_open()) {
    std::cerr << "Erreur d'ouverture" << std::endl;
}
\`\`\`
  `,
  tags: ['c++', 'fichiers', 'ifstream', 'ofstream', 'lecture', 'écriture'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
//STL - Conteneurs de base
 {
  id: 'cpp-stl-intro',
  titre: 'STL - Conteneurs de base',
  matiere: 'Informatique',
  categorie: 'C++',
  niveau: ['Université'],
  contenu: `
### Introduction à la STL en C++

---

#### Bibliothèque à inclure

\`\`\`cpp
#include <vector>
#include <map>
#include <set>
#include <algorithm>
\`\`\`

---

#### Vecteurs

\`\`\`cpp
std::vector<int> v = {1, 2, 3};
v.push_back(4);
for (int x : v) std::cout << x << " ";
\`\`\`

---

#### Maps (dictionnaires)

\`\`\`cpp
std::map<std::string, int> notes;
notes["Alice"] = 17;
std::cout << notes["Alice"]; // 17
\`\`\`

---

#### Sets (ensembles)

\`\`\`cpp
std::set<int> s;
s.insert(5);
s.insert(3);
// Trié automatiquement
\`\`\`

---

#### Algorithmes utiles

\`\`\`cpp
std::sort(v.begin(), v.end());
std::reverse(v.begin(), v.end());
std::find(v.begin(), v.end(), 3);
\`\`\`
  `,
  tags: ['c++', 'STL', 'vector', 'map', 'set', 'algorithm'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Variables et Types de base en C#
{
  id: 'csharp-variables-types',
  titre: 'Variables et Types de base en C#',
  matiere: 'Informatique',
  categorie: 'C#',
  niveau: ['Université'],
  contenu: `
### Variables et Types de base en C#

---

#### Déclaration et affectation

\`\`\`csharp
int age = 20;
double pi = 3.14;
char lettre = 'A';
string nom = "Alice";
bool majeur = true;
\`\`\`

---

#### Constantes

\`\`\`csharp
const double TVA = 0.20;
\`\`\`

---

#### Inférence de type (C# moderne)

\`\`\`csharp
var note = 15.5; // déduit comme double
\`\`\`

---

#### Types numériques

- \`int\` : entier 32 bits
- \`double\`, \`float\` : réels
- \`decimal\` : précision financière
- \`bool\` : vrai/faux
- \`string\` : texte
- \`char\` : caractère

  `,
  tags: ['c#', 'variables', 'types', 'constantes'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Conditions en C#
 {
  id: 'csharp-conditions',
  titre: 'Conditions en C#',
  matiere: 'Informatique',
  categorie: 'C#',
  niveau: ['Université'],
  contenu: `
### Conditions en C#

---

#### if / else if / else

\`\`\`csharp
int x = -3;
if (x == 0)
{
    Console.WriteLine("x est nul");
}
else if (x > 0)
{
    Console.WriteLine("x est positif");
}
else
{
    Console.WriteLine("x est négatif");
}
\`\`\`

---

#### Opérateurs logiques

- \`&&\` : et logique
- \`||\` : ou logique
- \`!\` : non logique

#### Comparateurs

- \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`

---

#### Ternaire

\`\`\`csharp
string resultat = (x > 0) ? "positif" : "non positif";
\`\`\`
  `,
  tags: ['c#', 'conditions', 'if', 'logique', 'opérateurs'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Boucles en C#
{
  id: 'csharp-boucles',
  titre: 'Boucles en C#',
  matiere: 'Informatique',
  categorie: 'C#',
  niveau: ['Université'],
  contenu: `
### Boucles en C#

---

#### Boucle \`while\`

\`\`\`csharp
int i = 0;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}
\`\`\`

---

#### Boucle \`for\`

\`\`\`csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
\`\`\`

---

#### Boucle \`foreach\`

\`\`\`csharp
string[] noms = { "Alice", "Bob", "Eve" };
foreach (string nom in noms)
{
    Console.WriteLine(nom);
}
\`\`\`

---

#### Mots-clés utiles

- \`break\` : sortir de la boucle
- \`continue\` : passer à l’itération suivante
  `,
  tags: ['c#', 'boucles', 'while', 'for', 'foreach'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Classes et Objets en C#
{
  id: 'csharp-classes-objets',
  titre: 'Classes et Objets en C#',
  matiere: 'Informatique',
  categorie: 'C#',
  niveau: ['Université'],
  contenu: `
### Classes et Objets en C#

---

#### Déclaration d’une classe

\`\`\`csharp
class Personne
{
    public string Nom;
    public int Age;

    public void SePresenter()
    {
        Console.WriteLine("Je m'appelle " + Nom + " et j'ai " + Age + " ans.");
    }
}
\`\`\`

---

#### Création d’un objet

\`\`\`csharp
Personne p = new Personne();
p.Nom = "Alice";
p.Age = 30;
p.SePresenter();
\`\`\`

---

#### Constructeur

\`\`\`csharp
class Personne
{
    public string Nom;
    public int Age;

    public Personne(string nom, int age)
    {
        Nom = nom;
        Age = age;
    }
}
\`\`\`
  `,
  tags: ['c#', 'classe', 'objet', 'méthode', 'constructeur'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Listes et Collections en C#
{
  id: 'csharp-listes',
  titre: 'Listes et Collections en C#',
  matiere: 'Informatique',
  categorie: 'C#',
  niveau: ['Université'],
  contenu: `
### Listes et Collections en C#

---

#### Listes génériques

\`\`\`csharp
using System.Collections.Generic;

List<string> prenoms = new List<string>();
prenoms.Add("Alice");
prenoms.Add("Bob");

foreach (string nom in prenoms)
{
    Console.WriteLine(nom);
}
\`\`\`

---

#### Accès et manipulation

\`\`\`csharp
Console.WriteLine(prenoms[0]); // Alice
prenoms.Remove("Bob");
\`\`\`

---

#### Autres collections utiles

- \`Dictionary<TKey, TValue>\`
- \`HashSet<T>\`
- \`Queue<T>\`, \`Stack<T>\`

---

#### Initialisation

\`\`\`csharp
var notes = new List<int> { 10, 12, 14 };
\`\`\`
  `,
  tags: ['c#', 'liste', 'collection', 'List', 'Dictionary'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Variables et Types en Java
{
  id: 'java-variables-types',
  titre: 'Variables et Types en Java',
  matiere: 'Informatique',
  categorie: 'Java',
  niveau: ['Université'],
  contenu: `
### Variables et Types en Java

---

#### Déclaration et initialisation

\`\`\`java
int age = 20;
double pi = 3.14;
char lettre = 'A';
String nom = "Alice";
boolean majeur = true;
\`\`\`

---

#### Constantes

\`\`\`java
final double TAUX_TVA = 0.20;
\`\`\`

---

#### Types primitifs

- \`int\`, \`long\`, \`short\`, \`byte\` : entiers
- \`float\`, \`double\` : décimaux
- \`char\` : caractère unicode
- \`boolean\` : vrai ou faux
- \`String\` : chaîne de caractères (objet)

---

#### Conversion de types

\`\`\`java
int x = (int) 3.99; // x = 3
\`\`\`
  `,
  tags: ['java', 'variables', 'types', 'constantes'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Conditions en Java
{
  id: 'java-conditions',
  titre: 'Conditions en Java',
  matiere: 'Informatique',
  categorie: 'Java',
  niveau: ['Université'],
  contenu: `
### Conditions en Java

---

#### Structure if / else

\`\`\`java
int x = -5;
if (x == 0) {
    System.out.println("x est nul");
} else if (x > 0) {
    System.out.println("x est positif");
} else {
    System.out.println("x est négatif");
}
\`\`\`

---

#### Opérateurs logiques

- \`&&\` : ET
- \`||\` : OU
- \`!\` : NON

#### Ternaire

\`\`\`java
String resultat = (x > 0) ? "positif" : "négatif";
\`\`\`
  `,
  tags: ['java', 'conditions', 'if', 'logique', 'opérateurs'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Boucles en Java
{
  id: 'java-boucles',
  titre: 'Boucles en Java',
  matiere: 'Informatique',
  categorie: 'Java',
  niveau: ['Université'],
  contenu: `
### Boucles en Java

---

#### Boucle while

\`\`\`java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
\`\`\`

---

#### Boucle for

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
\`\`\`

---

#### Boucle foreach

\`\`\`java
String[] noms = { "Alice", "Bob", "Eve" };
for (String nom : noms) {
    System.out.println(nom);
}
\`\`\`

---

#### Mots-clés

- \`break\` : quitte la boucle
- \`continue\` : saute à l’itération suivante
  `,
  tags: ['java', 'boucles', 'while', 'for', 'foreach'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Classes et Objets en Java
{
  id: 'java-classes-objets',
  titre: 'Classes et Objets en Java',
  matiere: 'Informatique',
  categorie: 'Java',
  niveau: ['Université'],
  contenu: `
### Classes et Objets en Java

---

#### Déclaration d’une classe

\`\`\`java
public class Personne {
    String nom;
    int age;

    void sePresenter() {
        System.out.println("Je m'appelle " + nom + " et j'ai " + age + " ans.");
    }
}
\`\`\`

---

#### Instanciation

\`\`\`java
Personne p = new Personne();
p.nom = "Alice";
p.age = 30;
p.sePresenter();
\`\`\`

---

#### Constructeur

\`\`\`java
public class Personne {
    String nom;
    int age;

    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
}
\`\`\`
  `,
  tags: ['java', 'classe', 'objet', 'constructeur'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//Listes et Tableaux en Java
{
  id: 'java-listes',
  titre: 'Tableaux et Listes en Java',
  matiere: 'Informatique',
  categorie: 'Java',
  niveau: ['Université'],
  contenu: `
### Tableaux et Listes en Java

---

#### Tableaux

\`\`\`java
int[] notes = {10, 12, 15};
System.out.println(notes[0]); // Affiche 10
\`\`\`

---

#### Listes dynamiques (ArrayList)

\`\`\`java
import java.util.ArrayList;

ArrayList<String> noms = new ArrayList<>();
noms.add("Alice");
noms.add("Bob");

for (String nom : noms) {
    System.out.println(nom);
}
\`\`\`

---

#### Méthodes utiles

- \`add()\`, \`get(index)\`, \`remove()\`
- \`size()\` : taille de la liste
- \`contains()\` : contient un élément ?
  `,
  tags: ['java', 'liste', 'ArrayList', 'tableaux'],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

];

// Chimie
export const fichesChimie: Fiche[] = [
  //chimie-structure-atomique
{
  id: 'chimie-structure-atomique',
  titre: "Structure atomique et liaisons chimiques",
  matiere: "Chimie",
  categorie: "Structure atomique",
  niveau: ["Lycée","Prépa", "Université"],
  contenu: `
### Notation et structure électronique

- **Notation nucléaire** : $ {}_{Z}^{A}X$
  - $A$ = nombre de nucléons (protons + neutrons)  
  - $Z$ = nombre de protons  
  - $N = A - Z$ = nombre de neutrons  

- **Isotopes** : atomes d’un même élément ($Z$ identique) mais avec un nombre différent de neutrons ($A$ varie).  
  → Propriétés chimiques identiques, propriétés nucléaires différentes.

---

### Niveaux d’énergie & configuration électronique

- **Niveaux d’énergie principaux** : numérotés $n = 1, 2, 3, \\ldots$  
  → Chaque niveau contient un certain nombre de sous-couches : $s, p, d, f$  
  → Capacité maximale par niveau :  
    - $n = 1$ : 2 électrons (1s)  
    - $n = 2$ : 8 électrons (2s, 2p)  
    - $n = 3$ : 18 électrons (3s, 3p, 3d)  
    - etc.

- **Principe d’exclusion de Pauli** :  
  → Une orbitale ne peut contenir que **2 électrons au maximum** avec des spins opposés.

- **Électrons de valence** : électrons situés sur la **couche électronique externe** (responsables de la réactivité chimique).  
  - Exemple : Oxygène ($Z = 8$) → $1s^2 2s^2 2p^4$ → 6 électrons de valence

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
- Classement selon Pauling : $\\mathrm{F} > \\mathrm{O} > \\mathrm{Cl} > \\mathrm{N} > \\mathrm{Br} > \\ldots$  
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



//chimie-des-solutions
{
  id: 'chimie-des-solutions',
  titre: "Chimie des solutions",
  matiere: "Chimie",
  categorie: "Chimie des solutions",
  niveau: ["Lycée","Prépa", "Université"],
  contenu: `
### Chimie des solutions

---

#### Étude des domaines de prédominance : acide-base

- Analyse des espèces chimiques présentes en fonction du pH.  
- Utilisation des constantes d’acidité $K_a$ pour déterminer les formes prédominantes.  
- Exemple : équilibre acide-base  
  $$
  HA \\leftrightarrow H^+ + A^-
  $$
- Domaine de prédominance de $HA$ ou $A^-$ selon le pH.

---

#### Étude des domaines d’existence : précipitation

- Détermination des conditions de formation ou de dissolution d’un précipité.  
- Utilisation du produit de solubilité $K_{ps}$ :  
  $$
  M^{m+} + nX^{x-} \\leftrightarrow M_mX_n(s)
  $$
- Précipitation lorsque le produit ionique dépasse $K_{ps}$.

---

#### Définition des différentes constantes

- $K_a$ : constante d’acidité  
- $K_b$ : constante de basicité  
- $K_{ps}$ : produit de solubilité  
- $K_c$ : constante d’équilibre générale

---

#### Solubilité

- Quantité maximale de soluté dissous à l’équilibre dans une solution saturée.  
- Relation avec $K_{ps}$ :  
  Pour un sel $MX$,  
  $$
  K_{ps} = [M^+][X^-]
  $$
- Calcul de la solubilité à partir de $K_{ps}$.

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

- Relation entre l’absorbance $A$, la concentration $c$, et la longueur de la cellule $l$ :  
  $$
  A = \\varepsilon \\, l \\, c
  $$
- $\\varepsilon$ : coefficient d’extinction molaire, caractéristique de l’espèce chimique.  
- Permet la détermination quantitative d’espèces en solution.

---

### Résumé

- La **chimie des solutions** repose sur l’étude des équilibres acido-basiques et de précipitation.  
- Les **constantes d’équilibre** sont essentielles pour prédire le comportement des espèces.  
- Les **méthodes analytiques** (pH-métrie, conductimétrie, spectrophotométrie) permettent un suivi précis des réactions en solution.

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
  id: 'thermochimie',
  titre: "Thermochimie",
  matiere: "Chimie",
  categorie: "Thermochimie",
  niveau: ["Prépa", "Université"],
  contenu: `
### Thermochimie

---

#### Énergie dégagée par une réaction

- Quantité de chaleur échangée lors d’une réaction chimique à pression constante.  
- Notée $\\Delta H$ (enthalpie de réaction).  
- $\\Delta H < 0$ : réaction exothermique (dégage de la chaleur).  
- $\\Delta H > 0$ : réaction endothermique (absorbe de la chaleur).  
- Relation avec la chaleur à pression constante :  
  $$
  q_P = \\Delta H
  $$

---

#### Température de flamme

- Température maximale atteinte lors de la combustion d’un combustible en présence d’un comburant.  
- Dépend des quantités initiales et des conditions de la réaction.  
- Estimée à l'aide du **premier principe de la thermodynamique** :  
  $$
  \\Delta H_{combustion} = \\int_{T_0}^{T_f} C_p(T) \\, dT
  $$

---

#### Définition des grandeurs de réaction

- Grandeurs thermodynamiques associées à une réaction chimique :  
  - $\\Delta H$ : enthalpie  
  - $\\Delta S$ : entropie  
  - $\\Delta G$ : énergie libre de Gibbs  
- Relation fondamentale de Gibbs :  
  $$
  \\Delta G = \\Delta H - T \\Delta S
  $$

---

#### Définition des grandeurs de formation

- Grandeurs associées à la formation d’un composé à partir des éléments dans leur forme standard.  
- Exemple : enthalpie standard de formation :  
  $$
  \\Delta H_{f}^0 = \\sum \\Delta H^0_{produits} - \\sum \\Delta H^0_{réactifs}
  $$

---

#### Grandeurs standard

- Grandeurs mesurées sous conditions standards :  
  - Pression $P^0 = 1\\,\\text{atm}$  
  - Température $T^0 = 298\\,\\text{K}$  
- Utilisées pour comparer les réactions dans les mêmes conditions.

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

- **Critère d’évolution spontanée** :  
  $$
  \\Delta G < 0 \\quad \\Rightarrow \\quad \\text{réaction spontanée (sens direct)}
  $$
  $$
  \\Delta G > 0 \\quad \\Rightarrow \\quad \\text{réaction non spontanée (sens inverse)}
  $$
- À l’équilibre :  
  $$
  \\Delta G = 0
  $$
- Relation avec la constante d'équilibre $K$ :  
  $$
  \\Delta G^0 = -RT \\ln K
  $$
- **Loi de Le Chatelier** :  
  Un système à l’équilibre soumis à une contrainte (température, pression, concentration) évolue de manière à s’opposer à cette contrainte.

---

### Résumé

- La **thermochimie** étudie les échanges d’énergie lors des réactions chimiques.  
- L’**enthalpie**, l’**entropie** et l’**énergie libre** sont des grandeurs clés :  
  $\\Delta G = \\Delta H - T \\Delta S$  
- Les **conditions standards** permettent de comparer les réactions ($T = 298\\,\\text{K}$, $P = 1\\,\\text{atm}$).  
- La **variance** ($V = C - P + 2$) permet de comprendre la liberté du système.  
- Les **critères d’évolution** guident le sens d’évolution spontanée d’une réaction.
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
    'équilibre chimique',
    'énergie libre de Gibbs'
  ],
  datePublication: '2025-05-23',
  populaire: false,
  aReviser: false
},

//binaires
{
  id: 'binaires',
  titre: "Systèmes Binaires",
  matiere: "Chimie",
  categorie: "Chimie Physique",
  niveau: ["Prépa", "Université"],  
  contenu: `
### Systèmes Binaires

---

#### Calculs de variance selon les domaines

- La variance $V$ dans un système binaire dépend du nombre de phases $P$ et des composants ($C = 2$).  
- **Règle de Gibbs** :  
  $$
  V = C - P + 2 = 2 - P + 2 = 4 - P
  $$
- Exemple :  
  - 1 phase → $V = 3$ variables indépendantes  
  - 2 phases → $V = 2$  
  - 3 phases → $V = 1$

---

#### Identification des zones du diagramme

- Le diagramme de phases binaire montre différentes zones selon le nombre et la nature des phases présentes :  
  - Zones **monophasées** (liquide ou solide)  
  - Zones **biphasées** (liquide + solide, ou deux solides)

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

- Phases solides composées d’un **rapport stœchiométrique fixe** entre les composants.  
- Généralement des **phases intermédiaires distinctes** dans le diagramme.

---

#### Courbes d’analyse thermique

- Utilisation des techniques comme la **DSC (Differential Scanning Calorimetry)** pour suivre les transitions de phase.  
- Les courbes montrent les points de fusion, de solidification, de transformations, etc.

---

#### Analyse quantitative

- Retrouver la composition d’un composé défini à partir des diagrammes.  
- Utilisation de la **règle des moments** pour exploiter la proportion des phases dans un mélange biphasique :  
  $$
  C_0 = x C_1 + (1 - x) C_2
  $$
  où $C_0$ est la composition globale, $C_1$ et $C_2$ les compositions des phases, et $x$ la fraction molaire.

---

### Résumé

- Les **systèmes binaires** présentent une grande richesse de comportements avec différentes zones de phases.  
- La **variance** et la **règle de Gibbs** permettent de comprendre les degrés de liberté.  
- La compréhension du **diagramme de phases** est essentielle pour prévoir les mélanges et leurs transformations thermiques.
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
  id: 'diagramme-epH',
  titre: "Diagramme E-pH (Diagramme de Pourbaix)",
  matiere: "Chimie",
  categorie: "Chimie Physique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Diagramme E-pH (Diagramme de Pourbaix)

---

#### Construction et identification des domaines

- Le diagramme E-pH représente les zones de stabilité des différentes espèces chimiques en fonction du potentiel électrique $E$ et du pH de la solution.  
- Identification des domaines de **prédominance** (espèce majoritaire) et d’**existence**.  
- Justification par les réactions d’**oxydo-réduction** et les **équilibres acido-basiques**.

---

#### Cas particulier de l’eau

- L’eau peut se décomposer en $\\mathrm{H_2}$ et $\\mathrm{O_2}$ dans certaines zones du diagramme.  
- **Potentiels limites** :  
  $$
  \\mathrm{H_2O} + e^- \\rightarrow \\frac{1}{2} \\mathrm{H_2} + \\mathrm{OH}^- \\quad \\text{(réduction)}
  $$
  $$
  \\mathrm{H_2O} \\rightarrow \\frac{1}{2} \\mathrm{O_2} + 2H^+ + 2e^- \\quad \\text{(oxydation)}
  $$

---

#### Zones d’immunité, de passivation et de corrosion

- **Zone d’immunité** : le métal est stable, **aucune corrosion**.  
- **Zone de passivation** : formation d’un **film protecteur** (oxyde).  
- **Zone de corrosion** : **dissolution active** du métal, corrosion accélérée.

---

#### Courbes intensité-potentiel (i-E)

- Représentation de la relation entre **l’intensité électrique $i$** et le **potentiel $E$**.  
- **Tracé des courbes** $i = f(E)$ pour étudier les réactions électrochimiques.  
- **Interprétation** :  
  - Domaine **anodique** (oxydation)  
  - Domaine **cathodique** (réduction)

---

#### Phénomènes associés

- **Surtensions** : écart entre le potentiel appliqué et le potentiel d’équilibre (effets cinétiques).  
- **Blocages cinétiques** : ralentissement de certaines réactions.  
- **Électrolyse** : décomposition forcée par passage de courant.  
- **Pile** : transformation d’**énergie chimique** en **énergie électrique**.  
  - Paramètres : **capacité**, **masse formée**, **énergie massique** consommée.

---

#### Protection contre la corrosion

- **Contrôle du potentiel** pour maintenir le métal en zone d’immunité ou de passivation.  
- Utilisation du **potentiel mixte** : équilibre entre les courants anodique et cathodique dans des systèmes réels.

---

### Résumé

- Le **diagramme E-pH** est un outil fondamental pour visualiser la **stabilité chimique** des espèces en milieu aqueux.  
- Il permet d’anticiper les conditions de **corrosion** et de définir des **stratégies de protection**.  
- L’étude des **courbes intensité-potentiel** éclaire les mécanismes **électrochimiques** sous-jacents.
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

//chimie-oxydoreduction
{
  id: 'chimie-oxydoreduction',
  titre: "Oxydoréduction",
  matiere: "Chimie",
  categorie: "Oxydoréduction",
  niveau: ["Prépa", "Université"],
  contenu: `
### Oxydoréduction

---

#### Définitions fondamentales

- Une réaction d’**oxydoréduction** met en jeu un **transfert d’électrons** entre deux espèces chimiques.
- L’espèce qui **perd** des électrons est **oxydée** (agent réducteur).
- L’espèce qui **gagne** des électrons est **réduite** (agent oxydant).
- Exemple :
  $$
  \\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e^- \\quad \\text{(oxydation)} \\\\
  \\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu} \\quad \\text{(réduction)}
  $$

---

#### Demi-équations électroniques

- Une réaction rédox se décrit à l’aide de **deux demi-équations** :
  - Oxydation : perte d’électrons  
  - Réduction : gain d’électrons
- On équilibre les électrons échangés pour écrire l’équation globale.

---

#### Nombre d’oxydation

- Permet de suivre le transfert d’électrons.
- Règles de base :
  - Élément seul : $0$  
  - Ion monoatomique : égal à la charge  
  - Molécule : somme des nombres d’oxydation = charge globale

---

#### Équation globale d’oxydoréduction

- On additionne les demi-équations après avoir égalisé les électrons :
  $$
  \\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}
  $$

---

#### Potentiel standard d’électrode

- Noté $E^0$, il mesure la **tendance d’un couple à capter ou céder des électrons**.
- Exemple de couple : $\\text{Cu}^{2+}/\\text{Cu}$, $\\text{Zn}^{2+}/\\text{Zn}$
- Plus $E^0$ est élevé, plus l'espèce oxydée est facilement réduite.

---

#### Sens spontané d’une réaction

- Le sens spontané va du couple au **plus bas $E^0$ (réducteur)** vers le **plus haut $E^0$ (oxydant)**.
- Critère d’évolution spontanée :  
  $$
  \\Delta E = E^0_{oxydant} - E^0_{réducteur} > 0
  $$

---

#### Pile électrochimique

- Dispositif où la réaction rédox produit de l’électricité.
- Fonctionnement :
  - Anode : site de l’**oxydation**
  - Cathode : site de la **réduction**
- Tension fournie par la pile :
  $$
  E_{pile} = E^0_{cathode} - E^0_{anode}
  $$

---

#### Loi de Faraday

- Permet de relier la quantité d’électricité à la quantité de matière transformée :
  $$
  Q = n \\cdot z \\cdot F
  $$
  - $Q$ : charge électrique (en coulombs)  
  - $n$ : quantité de matière (mol)  
  - $z$ : nombre d’électrons échangés  
  - $F$ : constante de Faraday $\\approx 96485\\,\\text{C/mol}$

---

### Résumé

- Une réaction rédox implique un **transfert d’électrons** entre un oxydant et un réducteur.  
- Elle est décrite par **deux demi-équations** équilibrées.  
- Le **nombre d’oxydation** permet de suivre les électrons.  
- Le **potentiel standard $E^0$** indique le pouvoir oxydant ou réducteur.  
- Une **pile électrochimique** convertit l’énergie chimique en énergie électrique.  
- La **loi de Faraday** relie quantité de matière et charge électrique.
`,
  tags: [
    'oxydoréduction',
    'réactions rédox',
    'nombre d’oxydation',
    'potentiel standard',
    'pile électrochimique',
    'loi de Faraday'
  ],
  datePublication: '2025-05-28',
  populaire: false,
  aReviser: false
},
//chimie-acide-base
{
  id: 'chimie-acide-base',
  titre: "Acide-Base",
  matiere: "Chimie",
  categorie: "Acide-Base",
  niveau: ["Prépa", "Université"],
  contenu: `
### Acide-Base

---

#### Définitions de Brønsted

- Un **acide** est une espèce chimique capable de **donner un proton** $\\mathrm{H}^+$.
- Une **base** est une espèce chimique capable de **capturer un proton** $\\mathrm{H}^+$.
- Une réaction acide-base met en jeu un **transfert de proton** :
  $$
  \\mathrm{HA} + \\mathrm{B} \\rightleftharpoons \\mathrm{A}^- + \\mathrm{BH}^+
  $$

---

#### Couples acide/base conjugués

- À chaque acide correspond une **base conjuguée** et réciproquement.
- Exemple :
  - $\\mathrm{HCl} / \\mathrm{Cl}^-$
  - $\\mathrm{NH}_4^+ / \\mathrm{NH}_3$

---

#### Constante d’acidité ($K_a$) et $pK_a$

- La force d’un acide est mesurée par sa constante d’acidité :
  $$
  K_a = \\frac{[\\mathrm{A}^-][\\mathrm{H}^+]}{[\\mathrm{HA}]}
  $$
- On définit le **$pK_a$** par :
  $$
  pK_a = -\\log_{10}(K_a)
  $$
- Plus $pK_a$ est petit, plus l’acide est fort.

---

#### Échelle de pH

- Le **pH** mesure l’acidité d’une solution :
  $$
  \\mathrm{pH} = -\\log_{10} [\\mathrm{H}^+]
  $$
- À $25^\\circ\\mathrm{C}$ :
  - Acide : $\\mathrm{pH} < 7$  
  - Neutre : $\\mathrm{pH} = 7$  
  - Basique : $\\mathrm{pH} > 7$

---

#### Produit ionique de l’eau

- L’eau s’auto-ionise selon :
  $$
  2\\,\\mathrm{H}_2\\mathrm{O} \\rightleftharpoons \\mathrm{H}_3\\mathrm{O}^+ + \\mathrm{OH}^-
  $$
- Le **produit ionique** :
  $$
  K_e = [\\mathrm{H}^+][\\mathrm{OH}^-] = 10^{-14} \\quad \\text{à } 25^\\circ\\mathrm{C}
  $$

---

#### Réaction acide-base

- Évolution spontanée vers le couple **acide-base le plus faible**.
- Une réaction est quasi totale si :
  $$
  \\Delta pK_a = pK_{a(1)} - pK_{a(2)} > 3
  $$

---

#### Solutions tampons

- Mélange d’un acide faible et de sa base conjuguée.
- Permet de **stabiliser le pH**.
- Formule du pH d’un tampon :
  $$
  \\mathrm{pH} = pK_a + \\log_{10}\\left(\\frac{[\\mathrm{A}^-]}{[\\mathrm{HA}]}\\right)
  $$

---

#### Titrage acide-base

- Permet de déterminer la concentration d’une solution.
- Point d’équivalence : quantités stœchiométriques d’acide et de base ont réagi.
- Exemple pour titrage d’un acide fort par une base forte :
  - Avant l’équivalence : calcul du pH par concentration d’acide résiduel  
  - À l’équivalence : $\\mathrm{pH} = 7$  
  - Après : pH déterminé par la base ajoutée

---

### Résumé

- Un acide donne un proton, une base capte un proton.  
- La force d’un acide est mesurée par son $K_a$ ou $pK_a$.  
- Le pH est relié à la concentration en ions $\\mathrm{H}^+$.  
- L’eau possède un équilibre acido-basique propre ($K_e$).  
- Les solutions tampons maintiennent un pH stable.  
- Le titrage permet de **quantifier un acide ou une base**.

`,
  tags: [
    'acide-base',
    'pH',
    'pKa',
    'réactions acido-basiques',
    'titrage',
    'solution tampon',
    'produit ionique',
    'Brønsted'
  ],
  datePublication: '2025-05-28',
  populaire: false,
  aReviser: false
},

//reaction-precipitation
{
  id: 'reaction-precipitation',
  titre: "Réaction de Précipitation",
  matiere: "Chimie",
  categorie: "Réactions en solution aqueuse",
  niveau: ["Prépa", "Université"],
  contenu: `
### Réaction de Précipitation

---

#### Définition

- Une **réaction de précipitation** est une réaction chimique entre deux **solutions ioniques** aboutissant à la formation d’un **précipité** (solide insoluble) :
  $$
  \\text{solution} + \\text{solution} \\longrightarrow \\text{précipité} + \\text{solution}
  $$
- Exemple :
  $$
  \\mathrm{AgNO_3}(aq) + \\mathrm{NaCl}(aq) \\rightarrow \\mathrm{AgCl}(s) + \\mathrm{NaNO_3}(aq)
  $$

---

#### Produit de solubilité ($K_s$)

- Le **produit de solubilité** est une constante d’équilibre définissant la solubilité d’un sel peu soluble.
- Pour un sel de formule $\\mathrm{A}_x\\mathrm{B}_y$ :
  $$
  K_s = [\\mathrm{A}^{n+}]^x \\cdot [\\mathrm{B}^{m-}]^y
  $$

- Exemple : pour $\\mathrm{AgCl}(s) \\rightleftharpoons \\mathrm{Ag}^+(aq) + \\mathrm{Cl}^-(aq)$ :
  $$
  K_s = [\\mathrm{Ag}^+][\\mathrm{Cl}^-]
  $$

---

#### Précipitation ou non ?

- On compare le produit ionique $Q$ au produit de solubilité $K_s$ :
  - $Q < K_s$ : **pas de précipitation**
  - $Q = K_s$ : solution **saturée**
  - $Q > K_s$ : **précipitation** (formation d’un solide)

---

#### Tableau de solubilité (règles générales)

| Anion \\ Cation        | $\\mathrm{Na}^+$, $\\mathrm{K}^+$, $\\mathrm{NH_4}^+$ | $\\mathrm{Ag}^+$ | $\\mathrm{Pb}^{2+}$ | $\\mathrm{Ca}^{2+}$ |
|------------------------|---------------------------------------------|------------------|-------------------|------------------|
| $\\mathrm{Cl}^-$       | Soluble                                      | Insoluble        | Insoluble         | Soluble          |
| $\\mathrm{SO_4}^{2-}$  | Soluble                                      | Soluble          | Insoluble         | Peu soluble      |
| $\\mathrm{CO_3}^{2-}$  | Soluble (NH₄⁺)                                | Insoluble        | Insoluble         | Insoluble        |
| $\\mathrm{OH}^-$       | Soluble (NH₄⁺)                                | Insoluble        | Insoluble         | Peu soluble      |

---

#### Cas typiques

- **AgCl** : précipité blanc
  $$
  \\mathrm{Ag}^+ + \\mathrm{Cl}^- \\rightarrow \\mathrm{AgCl}(s)
  $$
- **BaSO₄** : précipité blanc
  $$
  \\mathrm{Ba}^{2+} + \\mathrm{SO_4}^{2-} \\rightarrow \\mathrm{BaSO_4}(s)
  $$
- **Cu(OH)₂** : précipité bleu
  $$
  \\mathrm{Cu}^{2+} + 2\\,\\mathrm{OH}^- \\rightarrow \\mathrm{Cu(OH)_2}(s)
  $$

---

#### Applications

- **Dosages par précipitation** (ex. : dosage de $\\mathrm{Cl}^-$ par $\\mathrm{Ag}^+$).
- **Traitement des eaux** (retrait d’ions toxiques par précipitation).
- **Reconnaissance d’ions** par tests de précipitation.

---

### Résumé

- Une réaction de précipitation forme un solide insoluble dans une solution.
- Le **produit de solubilité** $K_s$ détermine si un sel peut précipiter.
- On utilise le **produit ionique** $Q$ pour prédire la formation d’un précipité.
- Des réactions caractéristiques permettent d’identifier certains ions (test à la goutte).

`,
  tags: [
    'précipitation',
    'produit de solubilité',
    'Ks',
    'test ionique',
    'chimie en solution',
    'réaction ionique',
    'solubilité',
    'produit ionique',
    'dosage'
  ],
  datePublication: '2025-05-28',
  populaire: false,
  aReviser: false
},

//chimie-cinetique-chimique
{
  id: 'chimie-cinetique-chimique',
  titre: "Cinétique chimique",
  matiere: "Chimie",
  categorie: "Cinétique chimique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Cinétique chimique

---

#### Vitesse de disparition / apparition

- Pour une réaction :  
  $$
  aA + bB \\longrightarrow cC + dD
  $$
- Les vitesses sont données par :
  $$
  v = -\\frac{1}{a} \\frac{d[A]}{dt} = -\\frac{1}{b} \\frac{d[B]}{dt} = \\frac{1}{c} \\frac{d[C]}{dt} = \\frac{1}{d} \\frac{d[D]}{dt}
  $$
- On parle de :
  - **Vitesse de disparition** pour les réactifs.
  - **Vitesse de formation** pour les produits.
  - **Vitesse de réaction** : valeur unique positive, définie à partir des variations stœchiométriques.

---

#### Loi de vitesse

- Forme générale :  
  $$
  v = k [A]^m [B]^n
  $$
  où :
  - $k$ est la constante de vitesse (dépend de $T$),
  - $m$, $n$ : ordres partiels,
  - $m + n$ : ordre global.

---

#### Réactions d’ordre simple

##### **Ordre 0** :
- $v = k$ (indépendant de [A])
- Intégration :
  $$
  [A](t) = [A]_0 - kt
  $$
- Temps de demi-réaction :
  $$
  t_{1/2} = \\frac{[A]_0}{2k}
  $$

##### **Ordre 1** :
- $v = k[A]$
- Intégration :
  $$
  [A](t) = [A]_0 e^{-kt}
  $$
- Temps de demi-réaction :
  $$
  t_{1/2} = \\frac{\\ln 2}{k}
  $$
- **Remarque** : $t_{1/2}$ **ne dépend pas** de $[A]_0$.

##### **Ordre 2** (cas $v = k[A]^2$) :
- Intégration :
  $$
  \\frac{1}{[A](t)} = \\frac{1}{[A]_0} + kt
  $$
- Temps de demi-réaction :
  $$
  t_{1/2} = \\frac{1}{k [A]_0}
  $$
- **Remarque** : $t_{1/2}$ **dépend fortement** de $[A]_0$.

---

#### Temps de demi-réaction : récapitulatif

| Ordre de réaction | Équation | $t_{1/2}$ |
|-------------------|----------|-----------|
| 0 | $[A](t) = [A]_0 - kt$ | $\\frac{[A]_0}{2k}$ |
| 1 | $[A](t) = [A]_0 e^{-kt}$ | $\\frac{\\ln 2}{k}$ |
| 2 | $\\frac{1}{[A](t)} = \\frac{1}{[A]_0} + kt$ | $\\frac{1}{k[A]_0}$ |

---

#### Loi d’Arrhénius

- Décrit l'effet de la température sur la constante de vitesse :
  $$
  k = A e^{-\\frac{E_a}{RT}}
  $$
  - $A$ : facteur de fréquence
  - $E_a$ : énergie d’activation
  - $R$ : constante des gaz parfaits ($8{,}314\\,\\mathrm{J\\cdot mol^{-1} \\cdot K^{-1}}$)
  - $T$ : température en Kelvin

---

#### Application graphique (vérification de l'ordre)

- Ordre 1 : tracer $\\ln [A]$ vs $t$ → droite décroissante.
- Ordre 2 : tracer $1/[A]$ vs $t$ → droite croissante.
- Ordre 0 : tracer $[A]$ vs $t$ → droite décroissante.

---

### Résumé

- La **cinétique chimique** étudie la vitesse des réactions et leur dépendance aux concentrations.
- La **vitesse de réaction** est définie via les coefficients stœchiométriques.
- L’**ordre de réaction** est obtenu empiriquement ou par modélisation.
- Le **temps de demi-réaction** varie selon l’ordre.
- La **loi d’Arrhénius** relie température et rapidité des réactions.

`,
  tags: [
    'cinétique',
    'vitesse de réaction',
    'vitesse de disparition',
    'ordre de réaction',
    'réactions d’ordre 0',
    'réactions d’ordre 1',
    'réactions d’ordre 2',
    'temps de demi-réaction',
    'loi d’Arrhénius'
  ],
  datePublication: '2025-05-28',
  populaire: false,
  aReviser: false
},

//thermodynamique-generale
{
  id: "thermodynamique-generale",
  titre: "Thermodynamique",
  matiere: "Chimie",
  categorie: "Thermodynamique",
  niveau: ["Lycée", "Prépa", "Université"],
  contenu: `
### Thermodynamique

---

#### 1. Paramètres d’état

- Grandeurs définissant l’état macroscopique d’un système.
- Exemples :
  - Pression $P$ (Pa)
  - Volume $V$ (m³)
  - Température $T$ (K)
  - Masse $m$ ou quantité de matière $n$ (mol)
  - Énergie interne $U$ (J)
- L’état d’un système est entièrement défini par un ensemble cohérent de ces paramètres.

---

#### 2. Fonctions d’état

- Dépendent uniquement de l’état du système, pas du chemin suivi.
- Exemples :
  - Énergie interne $U$
  - Entropie $S$
  - Enthalpie $H = U + PV$
  - Énergie libre de Helmholtz $A = U - TS$
  - Énergie libre de Gibbs $G = H - TS$
- Variation entre deux états :  
  $$
  \\Delta X = X_2 - X_1
  $$

---

#### 3. Premier principe de la thermodynamique

- Conservation de l’énergie :  
  $$
  \\Delta U = Q + W
  $$
  où :
  - $\\Delta U$ : variation d’énergie interne
  - $Q$ : chaleur échangée (positive si reçue)
  - $W$ : travail reçu (positif si travail sur le système)

- Travail de pression-volume (transformation quasi-statique) :  
  $$
  W = -\\int_{V_i}^{V_f} P \\, dV
  $$

---

#### 4. Changements de phase

- Deux phases coexistent à température et pression constantes.
- Température constante pendant le changement.
- Chaleur latente de changement de phase :  
  $$
  Q = mL_f
  $$

---

#### 5. Variation d’une fonction d’état

- Gaz parfait :
  - Énergie interne :  
    $$
    \\Delta U = n C_V \\Delta T
    $$
  - Enthalpie :  
    $$
    \\Delta H = n C_P \\Delta T
    $$

---

#### 6. Stratégie de résolution

1. Identifier le système (ouvert, fermé, isolé).
2. Recenser les données et les inconnues.
3. Appliquer les principes (1er principe, équations d’état...).
4. Exploiter les fonctions d’état et la nature des transformations.
5. Vérifier les unités, signes, cohérence physique.

---

#### 7. Loi de Laplace (adiabatique réversible)

- Gaz parfait :  
  $$
  PV^\\gamma = \\text{constante}
  $$
  avec $\\gamma = \\frac{C_P}{C_V}$

- Autres formes utiles :  
  $$
  TV^{\\gamma - 1} = \\text{constante}, \\quad T^\\gamma P^{1 - \\gamma} = \\text{constante}
  $$

---

#### 8. Loi de Joule (détente libre)

- Détente d’un gaz parfait sans travail ni échange de chaleur :  
  $$
  \\Delta U = 0 \\quad \\Rightarrow \\quad \\Delta T = 0
  $$

---

#### 9. Relation de Mayer

- Pour un gaz parfait :  
  $$
  C_P - C_V = R
  $$
  avec $R = 8{,}314 \\, \\mathrm{J \\, mol^{-1} \\, K^{-1}}$

---

### 10. Résumé des équations clés

| Concept                                | Équation                                      |
|----------------------------------------|-----------------------------------------------|
| Premier principe                       | $\\Delta U = Q + W$                            |
| Travail pression-volume                | $W = -\\int P \\, dV$                          |
| Enthalpie                               | $H = U + PV$                                   |
| Loi de Laplace                         | $PV^\\gamma = \\text{const}$                  |
| Relation de Mayer                      | $C_P - C_V = R$                                |
| Chaleur latente                        | $Q = mL$                                       |
| Énergie interne (gaz parfait)          | $\\Delta U = nC_V \\Delta T$                   |
| Enthalpie (gaz parfait)                | $\\Delta H = nC_P \\Delta T$                   |
| Loi d’Arrhénius (bonus, cinétique)     | $k = A e^{-E_a / (RT)}$                        |

---

### Remarques finales

- La **thermodynamique** relie les échanges d’énergie et les transformations de matière à travers des lois universelles.
- L’étude des gaz parfaits fournit un cadre simple mais puissant pour aborder de nombreux problèmes physiques et chimiques.
- Maîtriser les fonctions d’état et les transformations élémentaires permet de résoudre une grande variété d’exercices.

`,
  "tags": [
    "thermodynamique",
    "paramètres d’état",
    "gaz parfait",
    "changement de phase",
    "énergie interne",
    "fonction d’état",
    "loi de Laplace",
    "loi de Joule",
    "relation de Mayer"
  ],
  datePublication: "2025-05-28",
  populaire: true,
  aReviser: false
},
//thermochimie-avancee
{
  id: 'thermochimie-avancee',
  titre: "Thermochimie Avancée",
  matiere: "Chimie",
  categorie: "Thermochimie",
  niveau: ["Prépa", "Université"],
  contenu: `
### Thermochimie Avancée

---

#### Énergie échangée et enthalpie de réaction

- À **pression constante**, la chaleur échangée est l’**enthalpie** :
  $$
  q_P = \\Delta H
  $$
- Si $\\Delta H < 0$ : **réaction exothermique**  
- Si $\\Delta H > 0$ : **réaction endothermique**

---

#### Température de flamme

- Température maximale atteinte par un système adiabatique lors de la **combustion** :
  $$
  \\Delta H_{comb} = \\int_{T_0}^{T_f} \\sum_i n_i C_{p,i}(T) \\, dT
  $$

---

#### Grandeurs thermodynamiques d’une réaction

- Enthalpie : $\\Delta H$  
- Entropie : $\\Delta S$  
- Énergie libre de Gibbs : $\\Delta G$

Relation fondamentale :
$$
\\Delta G = \\Delta H - T\\Delta S
$$

- $\\Delta G < 0$ : réaction **spontanée**  
- $\\Delta G > 0$ : réaction **non spontanée**  
- $\\Delta G = 0$ : **équilibre**

---

#### Deuxième principe de la thermodynamique

> L’entropie d’un système isolé augmente lors d’une transformation spontanée :
$$
\\Delta S_{univers} = \\Delta S_{système} + \\Delta S_{milieu} \\geq 0
$$

---

#### Évolution d’un système chimique

- Le **critère d’évolution spontanée** est donné par :
  $$
  \\Delta G < 0 \\Rightarrow \\text{évolution spontanée}
  $$

- À l’équilibre :
  $$
  \\Delta G = 0 \\Rightarrow \\Delta H = T \\Delta S
  $$

- Lien avec la constante d'équilibre $K$ :
  $$
  \\Delta G^0 = -RT \\ln K
  $$

---

#### Relation de Van’t Hoff

- Évolution de $K$ avec la température :
  $$
  \\frac{d \\ln K}{dT} = \\frac{\\Delta H^0}{RT^2}
  $$

- Conséquence :
  - Si $\\Delta H^0 > 0$ : $K$ **augmente** avec $T$ (réaction favorisée à chaud)  
  - Si $\\Delta H^0 < 0$ : $K$ **diminue** avec $T$ (réaction favorisée à froid)

---

#### Grandeurs de formation standard

- Enthalpie standard de formation :
  $$
  \\Delta H_f^0 = \\sum \\Delta H^0_{produits} - \\sum \\Delta H^0_{réactifs}
  $$
- De même :
  $$
  \\Delta G_f^0 = \\sum \\Delta G^0_{produits} - \\sum \\Delta G^0_{réactifs}
  $$

---

#### Conditions standards

- Température : $T^0 = 298\\,\\text{K}$  
- Pression : $P^0 = 1\\,\\text{atm}$  
- Concentration : $1\\,\\text{mol/L}$

---

#### Loi de Le Chatelier

> Tout système chimique à l’équilibre, soumis à une **modification extérieure**, évolue dans le sens **s'opposant** à cette modification.

- Température :
  - Si on chauffe ⟶ favorise la réaction **endothermique**
  - Si on refroidit ⟶ favorise la réaction **exothermique**

- Pression (gaz uniquement) :
  - Augmentation ⟶ favorise le sens avec **moins de moles gazeuses**
  - Diminution ⟶ favorise le sens avec **plus de moles gazeuses**

- Concentration :
  - Ajout d’un réactif ⟶ favorise la **formation de produits**
  - Ajout d’un produit ⟶ favorise la **réaction inverse**

---

#### Variance (Règle de Gibbs)

Nombre de **paramètres indépendants** pouvant être modifiés sans changer le nombre de phases à l’équilibre :
$$
V = C - P + 2
$$

- $C$ : nombre de composants indépendants  
- $P$ : nombre de phases

---

#### Optimisation des réactions chimiques

- Une réaction est optimisée si :
  - Elle est **exothermique**, réalisée à **basse température** (si souhait de rendement)
  - Elle a une forte $K$, donc un $\\Delta G^0$ **négatif**
  - Elle est **entropiquement favorisée** ($\\Delta S > 0$)
  - La **cinétique** est adaptée (catalyseurs si besoin)

---

### Résumé

| Grandeur | Interprétation |
|----------|----------------|
| $\\Delta H$ | Chaleur échangée à $P$ constant |
| $\\Delta S$ | Désordre, évolue vers le maximum |
| $\\Delta G$ | Critère de spontanéité |
| $K$ | Mesure de l’équilibre (si $K \\gg 1$, réaction quasi totale) |
| $V$ | Liberté du système (nombre de paramètres réglables) |

---

> La thermochimie, au croisement entre chimie et thermodynamique, permet de **prédire l’évolution des réactions**, **comparer leur rendement**, et **optimiser les conditions expérimentales** pour atteindre les objectifs désirés (rendement, pureté, etc.).

`,
  tags: [
    'thermochimie',
    'enthalpie',
    'entropie',
    'énergie libre de Gibbs',
    'température de flamme',
    'van\'t hoff',
    'variance',
    'loi de Le Chatelier',
    'équilibre chimique',
    'deuxième principe',
    'optimisation'
  ],
  datePublication: '2025-05-28',
  populaire: true,
  aReviser: false
},
];




export const fichesSI: Fiche[] = [ 
// mécanique-cinematique
{
  id: 'mecanique-cinematique',
  titre: "Mécanique – Cinématique du solide",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Mécanique",
  niveau: ["Prépa","Université"],
  contenu: `
### Mécanique – Cinématique du solide

---

#### 1. Repérage et position d’un point

- Un point $M$ dans l’espace est repéré dans un repère cartésien $\\mathcal{R} = (O, \\vec{x}, \\vec{y}, \\vec{z})$ :
  $$
  \\vec{OM} = x\\vec{x} + y\\vec{y} + z\\vec{z}
  $$
- En cas de mouvements complexes, on utilise des **repères mobiles** pour faciliter la description du mouvement relatif entre solides.

---

#### 2. Vitesse

- La vitesse d’un point $M$ appartenant à un solide $S$ en mouvement par rapport à un repère $\\mathcal{R}$ est :
  $$
  \\vec{v}_{M \\in S/\\mathcal{R}} = \\frac{d\\vec{OM}}{dt}
  $$
- Si le solide tourne autour d’un axe fixe, la vitesse de $M$ est donnée par :
  $$
  \\vec{v}_M = \\vec{\\omega} \\wedge \\vec{OM}
  $$
  où $\\vec{\\omega}$ est le vecteur rotation instantané.

---

#### 3. Accélération

- L’accélération du point $M$ est le dérivé temporel de la vitesse :
  $$
  \\vec{a}_M = \\frac{d\\vec{v}_M}{dt}
  $$

---

#### 4. Composition des mouvements

- Soit $M \\in S_2$, $S_2$ en mouvement par rapport à $S_1$, lui-même en mouvement par rapport à $S_0$ :
  $$
  \\vec{v}_{M/S_0} = \\vec{v}_{M/S_1} + \\vec{v}_{S_1/S_0}
  $$
  $$
  \\vec{a}_{M/S_0} = \\vec{a}_{M/S_1} + \\vec{a}_{S_1/S_0} + 2\\vec{\\omega}_{S_1/S_0} \\wedge \\vec{v}_{M/S_1}
  $$
- Le dernier terme correspond à l’accélération de **Coriolis**.

---

#### 5. Modélisation des liaisons mécaniques

- Une **liaison mécanique** impose des contraintes sur les mouvements possibles. Elle limite les **degrés de liberté (ddl)** :
  - **Pivot** : 1 ddl (rotation autour d’un axe)
  - **Glissière** : 1 ddl (translation selon un axe)
  - **Rotule** : 3 ddl (rotations selon les trois axes)
  - **Sphère-plan** : 3 ddl (deux translations et une rotation)
- Pour modéliser les vitesses relatives entre solides, on utilise le **torseur cinématique** :
  $$
  \\{V\\}_{S_2/S_1} = 
  \\left\\{
    \\begin{array}{c}
      \\vec{\\omega}_{S_2/S_1} \\\\
      \\vec{v}_{A \\in S_2/S_1}
    \\end{array}
  \\right\\}_{A}
  $$
  où $A$ est le point de réduction du torseur.

---

#### 6. Paramétrage et diagrammes cinématiques

- Les systèmes sont représentés via des **diagrammes de structure** avec :
  - les **solides** (nœuds)
  - les **liaisons** (arêtes)
- Le **paramétrage** consiste à définir les variables géométriques qui décrivent les mouvements (longueurs, angles, coordonnées...).
- Pour déterminer les relations entre les mouvements, on utilise les **lois de fermeture géométrique** :
  $$
  \\sum_i \\vec{AB}_i = \\vec{0}
  $$

---

### Résumé

- La **cinématique** permet de décrire les mouvements sans tenir compte des forces.
- Les outils clés sont :
  - le **repérage** dans l’espace,
  - le **calcul des vitesses** et **accélérations**,
  - la **composition des mouvements** (Coriolis),
  - les **torseurs cinématiques**,
  - la **modélisation des liaisons**,
  - les **diagrammes cinématiques**.
- Elle constitue une étape essentielle avant l’analyse dynamique d’un système mécanique.

---

### Conseils pour les exercices

- Identifier tous les **solides** et les **liaisons** du système.
- Choisir un **repère adapté** (fixe ou mobile).
- Calculer les **vitesses/accélérations** à l’aide des **torseurs cinématiques**.
- Appliquer la **composition des mouvements** si nécessaire.
- Toujours vérifier la **cohérence dimensionnelle** et l’orientation des vecteurs.
`,
  tags: [
    "cinématique",
    "repérage",
    "vitesse",
    "accélération",
    "liaisons mécaniques",
    "composition des mouvements",
    "torseur cinématique",
    "fermeture géométrique",
    "diagramme cinématique",
    "rotation",
    "vecteur vitesse",
    "corps solide"
  ],
  datePublication: "2025-05-27",
  populaire: false,
  aReviser: false
},

// mécanique-statique
{
  id: 'mecanique-statique',
  titre: "Mécanique – Statique des systèmes",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Mécanique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Mécanique – Statique des systèmes

---

#### 1. Actions mécaniques et torseurs statiques

- Toute action mécanique exercée par un solide $S_1$ sur un solide $S_2$ peut être représentée par un **torseur statique** au point $A$ :
  $$
  \\left\\{ T_{S_1 \\to S_2} \\right\\}_A = \\left\\{ \\begin{array}{c}
    \\vec{F}_{S_1 \\to S_2} \\\\
    \\vec{M}_{A, S_1 \\to S_2}
  \\end{array} \\right\\}
  $$
- Ce torseur comprend :
  - une résultante (ou force) $\\vec{F}$
  - un moment $\\vec{M}_A$ au point $A$

- **Types d'actions mécaniques** :
  - **Actions à distance** : gravitation, magnétisme, forces électriques.
  - **Actions de contact** : appuis, liaisons mécaniques.

- Changement de point d’application du torseur :
  $$
  \\left\\{ T \\right\\}_B = \\left\\{ \\begin{array}{c}
    \\vec{F} \\\\
    \\vec{M}_A + \\vec{AB} \\wedge \\vec{F}
  \\end{array} \\right\\}
  $$

---

#### 2. Principe Fondamental de la Statique (PFS)

- Le **Principe Fondamental de la Statique** (PFS) :  
  *Un solide est en équilibre dans un référentiel galiléen si la somme des actions mécaniques qui s'exercent sur lui est nulle.*

- Cela se traduit par :
  $$
  \\sum \\vec{F}_\\text{ext} = \\vec{0} \\quad \\text{et} \\quad \\sum \\vec{M}_O(\\text{ext}) = \\vec{0}
  $$

- Le point $O$ est choisi de manière stratégique (souvent un point d'appui ou un point de réduction des inconnues).

---

#### 3. Liaisons et modélisation

- Une **liaison mécanique** impose des **réactions** : ces forces et moments empêchent certains mouvements relatifs entre solides.

- Exemple : Torseur des actions mécaniques transmissibles par une **liaison pivot** en $A$ orientée selon $\\vec{z}$ :
  $$
  \\left\\{ T \\right\\}_A = \\left\\{ \\begin{array}{c}
    X\\vec{x} + Y\\vec{y} + Z\\vec{z} \\\\
    M_z \\vec{z}
  \\end{array} \\right\\}
  $$
  - 1 degré de liberté : rotation autour de $\\vec{z}$
  - 5 inconnues (3 forces, 2 moments bloqués)

- **Autres exemples de liaisons** :
  - **Glissière** : translation autorisée selon un axe → 1 ddl, 5 réactions
  - **Rotule** : 3 ddl (rotations), 3 réactions
  - **Appui plan** : 1 seule force normale
  - Chaque liaison est associée à un torseur d’action transmissible, défini selon ses directions bloquées.

---

#### 4. Résolution des systèmes isostatiques

- Un **système isostatique** est un système mécanique :
  - où le nombre d'inconnues mécaniques (réactions) est **égal** au nombre d'équations disponibles (équilibre).
  - donc **soluble sans hypothèse supplémentaire**.

- **Étapes de résolution** :
  1. Identifier les **solides** (numérotation, schéma).
  2. Déterminer les **liaisons** et exprimer leurs torseurs d’action.
  3. Isoler chaque solide et **appliquer le PFS**.
  4. Choisir judicieusement les **axes de projection**.
  5. Résoudre le **système d'équations linéaires**.

- En **statique plane**, on a 3 équations par solide :
  $$
  \\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0
  $$

- Le choix du point $O$ pour les moments est crucial (souvent un point où plusieurs forces passent, ce qui les annule).

---

#### 5. Cas particuliers

- **Système hyperstatique** : trop de liaisons (nombre d’équations < inconnues).
  - Nécessite des hypothèses supplémentaires ou une modélisation plus poussée (élasticité, déformations).

- **Système sous-contraint** : pas assez de liaisons (solide peut bouger → instable).

- **Réduction des torseurs** : cas où un torseur peut être simplifié (glisseur, couple pur).

---

#### 6. Application : schéma de structure et graphes

- Chaque système peut être représenté par un **schéma cinématique** :
  - Noeuds : solides
  - Arêtes : liaisons
  - On analyse les degrés de liberté, l’isostatisme, les torseurs.

---

### Résumé

- En statique, on modélise les **actions mécaniques** via des **torseurs statiques**.
- Le **Principe Fondamental de la Statique** permet d’écrire les équations d’équilibre.
- Un **système isostatique** se résout analytiquement par projection des forces et moments.
- Les **liaisons** sont essentielles à la modélisation (ddl, réactions).
- Attention aux systèmes **hyperstatiques** ou **instables**.

`,
  tags: [
    'statique',
    'torseur',
    'PFS',
    'équilibre',
    'liaisons mécaniques',
    'systèmes isostatiques',
    'résolution',
    'hyperstatisme',
    'glisseur',
    'couple pur'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// mécanique-dynamique
{
  id: 'mecanique-dynamique',
  titre: "Mécanique – Dynamique",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Mécanique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Mécanique – Dynamique des solides

---

#### 1. Lois de Newton – Principe Fondamental de la Dynamique (PFD)

- Le **Principe Fondamental de la Dynamique** (PFD) généralise la deuxième loi de Newton à tout système matériel :

- Pour un **point matériel** de masse $m$ :
  $$
  \\sum \\vec{F}_\\text{ext} = m \\vec{a}
  $$

- Pour un **solide indéformable** $S$, on applique le PFD au **centre d'inertie** $G$ :
  $$
  \\sum \\vec{F}_\\text{ext} = m \\vec{a}_G
  $$
  où $\\vec{a}_G$ est l’accélération du centre d’inertie $G$ du solide.

- En **rotation autour d’un axe fixe**, le PFD devient :
  $$
  \\sum M_{\\Delta} = J_{\\Delta} \\alpha
  $$
  avec :
  - $M_{\\Delta}$ : moment résultant des forces extérieures par rapport à l’axe $\\Delta$
  - $J_{\\Delta}$ : moment d’inertie par rapport à $\\Delta$
  - $\\alpha$ : accélération angulaire

---

#### 2. Moment cinétique et théorèmes associés

- **Moment cinétique** d’un solide $S$ par rapport à un point $O$ :
  $$
  \\vec{L}_O(S) = \\int_{S} \\vec{r} \\wedge \\vec{v} \\, dm
  $$

- Si $O = G$ (centre d’inertie), et si le solide tourne autour d’un axe fixe :
  $$
  \\vec{L}_G = J_G \\vec{\\omega}
  $$

- **Théorème du moment cinétique** :
  $$
  \\frac{d\\vec{L}_O}{dt} = \\sum \\vec{M}_O
  $$

- Cas fréquent : rotation autour d’un axe fixe $\\Delta$ :
  $$
  \\frac{dL_{\\Delta}}{dt} = \\sum M_{\\Delta}
  $$

---

#### 3. Énergie cinétique et théorème de l’énergie cinétique

- **Énergie cinétique** d’un solide $S$ en mouvement :
  $$
  E_c(S) = \\frac{1}{2} m v_G^2 + \\frac{1}{2} J_G \\omega^2
  $$
  - Première partie : translation du centre d’inertie
  - Deuxième partie : rotation autour du centre d’inertie

- **Théorème de l’énergie cinétique** :
  $$
  \\frac{dE_c}{dt} = \\sum \\vec{F}_\\text{ext} \\cdot \\vec{v}_P
  $$
  où $P$ est le point d’application de la force (ou $G$ dans le cas de la translation).

---

#### 4. Étude des systèmes oscillants

- Un **système oscillant linéaire** est souvent modélisé par un **système masse–ressort–amortisseur** :
  - Masse : $m$
  - Raideur du ressort : $k$
  - Amortissement visqueux : $c$
  - Force extérieure : $F(t)$

- **Équation différentielle du mouvement** (issue du PFD) :
  $$
  m \\ddot{x} + c \\dot{x} + kx = F(t)
  $$

- **Cas particuliers de réponse libre** ($F(t) = 0$) :
  - **Amortissement nul** ($c=0$) : oscillateur harmonique pur
  - **Sous-amorti** : oscillations amorties
  - **Critiquement amorti** : retour rapide sans oscillation
  - **Sur-amorti** : retour lent sans oscillation

- Réponse forcée ($F(t) \\neq 0$) → résonance, régime permanent, transitoire.

---

#### 5. Dynamique plane des systèmes

- En dynamique plane (mouvement dans un plan), les équations fondamentales deviennent :

  - **Translation** :
    $$
    \\sum F_x = m a_x, \\quad \\sum F_y = m a_y
    $$

  - **Rotation autour d’un point $O$ dans le plan** :
    $$
    \\sum M_O = J_O \\alpha
    $$

- On combine souvent les équations de translation et de rotation pour résoudre des problèmes dynamiques de solides.

---

### Résumé

- Le PFD est la loi fondamentale liant les forces appliquées à l’accélération d’un solide.
- La rotation est décrite par le **moment cinétique** et ses dérivées.
- L’**énergie cinétique** permet une approche énergétique complémentaire.
- Les systèmes **masse–ressort–amortisseur** modélisent des phénomènes d’oscillations classiques.
- En dynamique plane, les équations translation + rotation sont utilisées pour décrire les mouvements dans un plan.

`,
  tags: [
    'dynamique',
    'PFD',
    'lois de Newton',
    'moment cinétique',
    'inertie',
    'énergie cinétique',
    'systèmes oscillants',
    'ressort',
    'amortisseur',
    'résonance',
    'mouvement plan'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// mécanique-energetique
{
  id: 'mecanique-energetique',
  titre: "Mécanique – Énergétique",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Mécanique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Mécanique – Énergétique

---

#### 1. Énergie cinétique

- L’**énergie cinétique** représente l’énergie d’un système liée à son mouvement.

- **Pour un point matériel** de masse $m$ et de vitesse $\\vec{v}$ :
  $$
  E_c = \\frac{1}{2} m v^2
  $$

- **Pour un solide en mouvement général** :
  $$
  E_c = \\frac{1}{2} m v_G^2 + \\frac{1}{2} J_G \\omega^2
  $$
  où :
  - $v_G$ : vitesse du centre d’inertie $G$
  - $J_G$ : moment d’inertie par rapport à un axe passant par $G$
  - $\\omega$ : vitesse angulaire du solide

- Cas particuliers :
  - **Translation pure** : seule la première partie subsiste
  - **Rotation autour d’un axe fixe passant par $G$** : seule la deuxième partie est non nulle

---

#### 2. Travail d’une force

- Le **travail élémentaire** d’une force $\\vec{F}$ lors d’un déplacement infinitésimal $d\\vec{r}$ :
  $$
  dW = \\vec{F} \\cdot d\\vec{r}
  $$

- **Travail total** entre deux positions $A$ et $B$ :
  $$
  W_{A \\to B} = \\int_A^B \\vec{F} \\cdot d\\vec{r}
  $$

- **Cas particuliers** :
  - Force constante : $W = \\vec{F} \\cdot (\\vec{r}_B - \\vec{r}_A)$
  - Si $\\vec{F} \\perp d\\vec{r}$ : travail nul
  - Si $\\vec{F}$ est conservative (ex : poids, force de rappel) → énergie potentielle associée

---

#### 3. Théorème de l’énergie cinétique (TEC)

- Le **théorème de l’énergie cinétique** s’écrit :
  $$
  \\Delta E_c = E_{c,B} - E_{c,A} = W_{\\text{ext}}
  $$
  avec :
  - $E_{c,A}$, $E_{c,B}$ : énergies cinétiques initiale et finale
  - $W_{\\text{ext}}$ : travail des forces extérieures entre $A$ et $B$

- En dynamique, il s'agit d'une **forme énergétique du PFD**. Il permet souvent de résoudre un problème sans passer par les accélérations ou équations différentielles.

---

#### 4. Puissance d’une force

- La **puissance instantanée** d’une force $\\vec{F}$ appliquée à un point de vitesse $\\vec{v}$ :
  $$
  \\mathcal{P} = \\vec{F} \\cdot \\vec{v}
  $$

- La **puissance totale** appliquée à un solide :
  $$
  \\mathcal{P} = \\sum \\vec{F}_i \\cdot \\vec{v}_i
  $$

- Pour une **rotation autour d’un axe fixe** :
  $$
  \\mathcal{P} = \\sum M_{\\Delta} \\cdot \\omega
  $$

---

#### 5. Énergie potentielle et forces conservatives

- Une force est **conservative** si le travail ne dépend que des positions initiale et finale.

- On peut alors définir une **énergie potentielle $E_p$** telle que :
  $$
  W_{A \\to B} = -\\Delta E_p = E_{p,A} - E_{p,B}
  $$

- Exemples :
  - Poids : $E_p = m g z$
  - Ressort : $E_p = \\frac{1}{2} k x^2$

- **Énergie mécanique totale** :
  $$
  E_m = E_c + E_p
  $$

- Si seules des forces conservatives sont en jeu, alors :
  $$
  \\frac{dE_m}{dt} = 0 \\quad \\Rightarrow \\quad E_m = \\text{constante}
  $$

---

### Résumé

- L’**énergie cinétique** représente l’énergie liée au mouvement d’un système.
- Le **travail** est l’énergie transférée par une force lors d’un déplacement.
- Le **théorème de l’énergie cinétique** relie variation d’énergie cinétique et travail.
- Une force **conservative** possède une énergie potentielle associée.
- L’**énergie mécanique** (cinétique + potentielle) est conservée si le système est isolé.

`,
  tags: [
    'énergie cinétique',
    'travail',
    'puissance',
    'énergie potentielle',
    'théorème énergie cinétique',
    'forces conservatives',
    'énergie mécanique',
    'rotation',
    'translation',
    'mécanique'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// automatique-sli-schema-blocs
{
  id: 'automatique-sli-schema-blocs',
  titre: "Automatique – Systèmes Linéaires Invariants et Schéma-blocs",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Automatique – Systèmes Linéaires Invariants (SLI) et Schéma-blocs

---

#### 1. Définition des SLI

- Un **système linéaire invariant (SLI)** est un système :
  - **Linéaire** : répond au **principe de superposition** :
    $$
    S(\\alpha x_1 + \\beta x_2) = \\alpha S(x_1) + \\beta S(x_2)
    $$
  - **Invariant dans le temps** : ses caractéristiques ne dépendent pas du temps.

- Les SLI sont souvent **modélisés** par des **équations différentielles linéaires à coefficients constants**, ou via des **équations aux dérivées d’ordre n**.

---

#### 2. Fonction de transfert

- Après transformation de Laplace (hypothèse de conditions initiales nulles), on obtient la **fonction de transfert** :
  $$
  G(s) = \\frac{Y(s)}{U(s)}
  $$
  où :
  - $U(s)$ : transformée de Laplace de l’entrée $u(t)$
  - $Y(s)$ : transformée de Laplace de la sortie $y(t)$
  - $s$ : variable complexe (domaine de Laplace)

- Exemples de fonctions de transfert usuelles :
  - **Gain pur** : $G(s) = K$
  - **Intégrateur** : $G(s) = \\frac{1}{s}$
  - **Dérivateur** : $G(s) = s$
  - **Filtre du premier ordre** : $G(s) = \\frac{K}{1 + \\tau s}$

---

#### 3. Schéma-blocs

- Représentation graphique d’un système dynamique sous forme de **blocs interconnectés** :
  - Chaque bloc représente une fonction de transfert.
  - Les **flèches** indiquent le **flux des signaux**.
  - Permet de **visualiser la structure du système**, notamment les **boucles de rétroaction**.

- Avantages :
  - Clarifie la **composition de systèmes** (série, parallèle, boucle fermée…)
  - Facilite les **simplifications** de systèmes complexes.

---

#### 4. Opérations sur les blocs

- **Série** :
  $$
  G_{eq}(s) = G_1(s) \\cdot G_2(s)
  $$

- **Parallèle** :
  $$
  G_{eq}(s) = G_1(s) + G_2(s)
  $$

- **Boucle fermée** (rétroaction négative) :
  $$
  G_{cl}(s) = \\frac{G(s)}{1 + G(s) H(s)}
  $$

- Ces règles permettent de **réduire un schéma-blocs complexe** à une seule fonction de transfert équivalente.

---

#### 5. Types d’entrées classiques

- Échelon : $u(t) = 1$ pour $t \\geq 0$ ⇒ $U(s) = \\frac{1}{s}$
- Rampe : $u(t) = t$ ⇒ $U(s) = \\frac{1}{s^2}$
- Impulsion de Dirac : $\\delta(t)$ ⇒ $U(s) = 1$

---

### Résumé

- Les **SLI** modélisent une large classe de systèmes physiques.
- Leur **fonction de transfert** permet une étude dans le domaine de Laplace.
- Le **schéma-blocs** est un outil graphique puissant pour analyser et simplifier les systèmes.
- Les **opérations sur les blocs** permettent de déterminer la réponse globale d’un système complexe.
- La réponse d’un système dépend de la **forme de l’entrée** (échelon, rampe, etc.).

`,
  tags: [
    'sli',
    'systèmes linéaires',
    'invariance',
    'fonction de transfert',
    'schéma-blocs',
    'laplace',
    'automatique',
    'boucle fermée',
    'série',
    'parallèle',
    'réduction de schéma',
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// automatique-reponses-indicielle-frequentielle
{
  id: 'automatique-reponses-indicielle-frequentielle',
  titre: "Automatique – Réponses Indicielle et Fréquentielle",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Automatique – Réponses Indicielle et Fréquentielle

---

#### 1. Réponse indicielle

- La **réponse indicielle** est la sortie $y(t)$ d’un système soumis à une **entrée échelon unité** :
  $$
  u(t) = 1(t)
  $$
- Elle est obtenue en calculant :
  $$
  y(t) = \\mathcal{L}^{-1} \\left\\{ G(s) \\cdot \\frac{1}{s} \\right\\}
  $$

- Permet d’analyser :
  - **Temps de réponse** (rapidité)
  - **Dépassement** (amortissement)
  - **Erreur statique** (précision)
  - **Stabilité** (tendance à converger/diverger)

- Exemple pour un système du premier ordre $G(s) = \\frac{K}{1 + \\tau s}$ :
  $$
  y(t) = K \\left(1 - e^{-t/\\tau} \\right)
  $$

---

#### 2. Réponse fréquentielle

- Analyse du système soumis à une **entrée sinusoïdale** :
  $$
  u(t) = A \\sin(\\omega t)
  $$
- En régime permanent, la sortie est une sinusoïde de même fréquence :
  $$
  y(t) = |G(j\\omega)| A \\sin(\\omega t + \\varphi(\\omega))
  $$
- On évalue la fonction de transfert en $s = j\\omega$ :
  $$
  G(j\\omega) = |G(j\\omega)| e^{j\\varphi(\\omega)}
  $$

- Deux caractéristiques importantes :
  - **Gain** : $|G(j\\omega)|$
  - **Phase** : $\\varphi(\\omega)$

- Utilisé pour :
  - Évaluer la réponse du système à différentes fréquences.
  - Étudier la stabilité en fréquence.
  - Concevoir des correcteurs (filtrage, asservissement).

---

#### 3. Diagramme de Bode

- Représentation graphique de la réponse fréquentielle :
  - **Gain** (en dB) : $20 \\log_{10} |G(j\\omega)|$ en fonction de $\\log_{10}(\\omega)$
  - **Phase** (en degrés) : $\\varphi(\\omega)$ en fonction de $\\log_{10}(\\omega)$

- Lecture facile des caractéristiques du système :
  - Bandes passantes
  - Résonances
  - Marges de gain et de phase

---

### Résumé

- La **réponse indicielle** étudie le comportement temporel d’un système à une entrée échelon.
- La **réponse fréquentielle** analyse comment le système réagit à des signaux sinusoïdaux.
- Le **diagramme de Bode** donne une vue d’ensemble de la stabilité et des performances en fréquence.

`,
  tags: [
    'réponse indicielle',
    'réponse fréquentielle',
    'diagramme de Bode',
    'automatique',
    'analyse temporelle',
    'analyse fréquentielle',
    'stabilité',
    'fonction de transfert',
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// automatique-correcteurs
{
  id: 'automatique-correcteurs',
  titre: "Automatique – Correcteurs P, PI, PID",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Automatique – Correcteurs P, PI, PID

---

#### 1. Correcteur Proportionnel (P)

- Commande proportionnelle à l’erreur $e(t)$ :
  $$
  u(t) = K_p e(t)
  $$
- **Effets** :
  - Accélère la réponse du système
  - Diminue l’erreur statique sans l’annuler complètement
  - Peut amplifier les oscillations si $K_p$ trop grand

- **Avantages** : simple, rapide à mettre en œuvre  
- **Inconvénient** : présence possible d’un **écart permanent**

---

#### 2. Correcteur Proportionnel-Intégral (PI)

- Intègre l’erreur dans le temps pour supprimer l’écart statique :
  $$
  u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau
  $$
- **Effets** :
  - Supprime l’erreur statique
  - Améliore la précision
  - Ralentit légèrement la réponse (temps de réponse plus long)

- **Utilisation courante** dans les systèmes à asservissement de position ou de vitesse

---

#### 3. Correcteur Proportionnel-Intégral-Dérivé (PID)

- Ajoute une anticipation des variations de l’erreur :
  $$
  u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de}{dt}
  $$
- **Effets** :
  - Améliore la stabilité
  - Réduit le dépassement
  - Accélère la correction des erreurs brusques

- **Paramètres à ajuster** :
  - $K_p$ : action immédiate sur l’erreur
  - $K_i$ : élimination de l’écart permanent
  - $K_d$ : amortissement des variations rapides

---

#### 4. Choix du correcteur

| Correcteur | Précision | Rapidité | Stabilité |
|------------|-----------|----------|-----------|
| P          | Moyenne   | Bonne    | Moyenne   |
| PI         | Bonne     | Moyenne  | Moyenne   |
| PID        | Excellente| Bonne    | Excellente|

---

### Résumé

- Les correcteurs P, PI et PID sont utilisés pour améliorer la précision, la rapidité et la stabilité d’un système.
- Le **P** agit immédiatement, le **I** élimine l’erreur à long terme, le **D** stabilise et anticipe.
- Le bon réglage des gains $K_p$, $K_i$, $K_d$ est crucial pour des performances optimales.

`,
  tags: [
    'correcteur',
    'P',
    'PI',
    'PID',
    'commande',
    'automatique',
    'asservissement',
    'réglage de système'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

// automatique-stabilite-routh-marges
{
  id: 'automatique-stabilite-routh-marges',
  titre: "Automatique – Analyse de Stabilité",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Analyse de Stabilité

---

#### 1. Critère de Routh-Hurwitz

- Permet de déterminer la **stabilité** d’un système sans calculer explicitement les racines du polynôme caractéristique.
- On considère le polynôme caractéristique associé à la fonction de transfert :
  $$
  P(s) = a_0 s^n + a_1 s^{n-1} + \\dots + a_n
  $$

- Construction du **tableau de Routh** à partir des coefficients :
  - Première ligne : $a_0$, $a_2$, $a_4$, ...
  - Deuxième ligne : $a_1$, $a_3$, $a_5$, ...
  - Les lignes suivantes sont calculées par déterminants.

- **Condition de stabilité** : tous les termes de la **première colonne** doivent être **strictement positifs** (ou tous de même signe).

- Si un terme est nul ou change de signe : présence d’au moins un pôle à partie réelle positive → système **instable**.

---

#### 2. Marges de Gain et de Phase

- **Outils de robustesse** issus de l’analyse fréquentielle (diagrammes de Bode) :

##### Marge de gain :
- Valeur maximale (en dB) que l’on peut ajouter au gain sans rendre le système instable.
- Mesurée **au point de phase -180°** :
  $$
  \\text{MG} = -20 \\log_{10}(|G(j\\omega_{180})|)
  $$

##### Marge de phase :
- Écart entre la phase actuelle et -180° lorsque le gain est unitaire (0 dB).
- Mesurée **au point de gain unitaire** :
  $$
  \\text{MP} = 180^\\circ + \\varphi(\\omega_{0})
  $$

- **Interprétation** :
  - Marges faibles : système peu robuste
  - Marges élevées : système plus stable, moins sensible aux perturbations

---

### Résumé

- Le **critère de Routh-Hurwitz** permet d’analyser la stabilité sans résolution numérique.
- Les **marges de gain et de phase** évaluent la **robustesse** vis-à-vis des incertitudes.
- Ces outils sont essentiels pour le **dimensionnement de correcteurs**.

`,
  tags: [
    'stabilité',
    'Routh',
    'marge de gain',
    'marge de phase',
    'diagramme de Bode',
    'commande',
    'automatique',
    'robustesse'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},

//automatique-transformee-laplace
{
  id: 'automatique-reponses-temporelles',
  titre: "Automatique – Réponses Temporelles Types",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Réponses Temporelles Types

---

#### 1. Système du premier ordre

- Fonction de transfert :  
  $$
  G(s) = \\frac{K}{\\tau s + 1}
  $$
- Réponse indicielle :  
  $$
  y(t) = K(1 - e^{-t/\\tau})
  $$
- Paramètres caractéristiques :
  - **Constante de temps** $\\tau$ : temps nécessaire pour atteindre 63% de la valeur finale.
  - **Temps de réponse à 5%** : $t_{r5\\%} \\approx 3\\tau$

---

#### 2. Système du second ordre

- Fonction de transfert canonique :  
  $$
  G(s) = \\frac{K \\omega_0^2}{s^2 + 2\\xi\\omega_0 s + \\omega_0^2}
  $$
  avec :
  - $\\omega_0$ : pulsation propre
  - $\\xi$ : coefficient d’amortissement

##### Cas typiques :
- **$\\xi > 1$** (sur-amorti) : pas d’oscillation, réponse lente.
- **$\\xi = 1$** (amorti critique) : réponse la plus rapide sans oscillation.
- **$0 < \\xi < 1$** (sous-amorti) : oscillations amorties.
- **$\\xi = 0$** (non amorti) : oscillation permanente.

##### Paramètres clés pour $0 < \\xi < 1$ :
- **Temps de montée** $t_m$
- **Temps de réponse à 5%** $t_{r5\\%}$
- **Dépassement** $D = e^{-\\frac{\\pi \\xi}{\\sqrt{1 - \\xi^2}}}$
- **Temps de dépassement maximal** $t_{max} = \\frac{\\pi}{\\omega_0 \\sqrt{1 - \\xi^2}}$

---

### Résumé

- Les **réponses temporelles** permettent d’analyser :
  - la **vitesse** (temps de réponse),
  - la **précision** (valeur finale),
  - la **stabilité** (présence ou non d’oscillations).

- Ces informations sont cruciales pour :
  - **choisir** un modèle adapté,
  - **concevoir** un correcteur.

`,
  tags: [
    'réponse temporelle',
    'premier ordre',
    'second ordre',
    'temps de réponse',
    'dépassement',
    'oscillations',
    'automatique',
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
// automatique-fonction-transfert-equivalente
{
  id: 'automatique-fonction-transfert-equivalente',
  titre: "Automatique – Fonction de Transfert Équivalente",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Fonction de Transfert Équivalente

---

#### 1. Définition

- La **fonction de transfert** $G(s)$ représente le lien entre une **entrée** $U(s)$ et une **sortie** $Y(s)$ :
  $$
  G(s) = \\frac{Y(s)}{U(s)}
  $$

- Elle permet d’analyser le comportement du système dans le domaine de Laplace (temps continu), en négligeant les conditions initiales.

---

#### 2. Système en **Boucle Ouverte**

- Pas de retour d’information.  
- Fonction de transfert directe :
  $$
  G_{BO}(s) = G(s)
  $$

---

#### 3. Système en **Boucle Fermée Unitaire**

- Avec retour direct de la sortie (sans gain correctif) 
  

- Fonction de transfert équivalente :
  $$
  G_{BF}(s) = \\frac{G(s)}{1 + G(s)}
  $$

---

#### 4. Système en **Boucle Fermée avec Correcteur C(s)**

- Schéma typique :
  
  Entrée → [Correcteur $C(s)$] → [Système $G(s)$] → Sortie  
  ↑__________________________________↓

- Fonction de transfert en boucle fermée :
  $$
  T(s) = \\frac{C(s)G(s)}{1 + C(s)G(s)}
  $$

- Fonction de **boucle d’asservissement** :
  - Numérateur : chaîne directe
  - Dénominateur : 1 + boucle de retour

---

#### 5. Cas avec retour non unitaire $H(s)$

- Fonction de transfert :
  $$
  T(s) = \\frac{C(s)G(s)}{1 + C(s)G(s)H(s)}
  $$

---

### Résumé

| Structure                | Fonction de transfert équivalente |
|--------------------------|------------------------------------|
| Boucle ouverte           | $G(s)$                             |
| Boucle fermée unitaire   | $\\frac{G(s)}{1 + G(s)}$           |
| Avec correcteur $C(s)$   | $\\frac{C(s)G(s)}{1 + C(s)G(s)}$   |
| Retour non unitaire $H(s)$ | $\\frac{C(s)G(s)}{1 + C(s)G(s)H(s)}$ |

- La fonction de transfert **équivalente** est essentielle pour :
  - l’**analyse de la stabilité**,
  - l’**étude fréquentielle**,
  - le **dimensionnement des correcteurs**.

`,
  tags: [
    'fonction de transfert',
    'boucle ouverte',
    'boucle fermée',
    'correcteur',
    'automatique',
    'commande'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
// automatique-types-systemes-erreurs-statiques
{
  id: 'automatique-types-systemes-erreurs-statiques',
  titre: "Automatique – Types de Systèmes et Erreurs Statique",
  matiere: "Sciences de l'Ingénieur",
  categorie: "Automatique",
  niveau: ["Prépa", "Université"],
  contenu: `
### Types de Systèmes et Erreur Statique

---

#### 1. Type d’un système

- Le **type** d’un système correspond au **nombre de pôles à l’origine** dans sa fonction de transfert en boucle ouverte $G(s)$ :
  - **Type 0** : pas de pôle en 0
  - **Type 1** : un pôle en 0
  - **Type 2** : deux pôles en 0
  - etc.

- Exemple :  
  $$
  G(s) = \\frac{10}{s(s+2)} \\Rightarrow \\text{Type 1}
  $$

---

#### 2. Erreur statique

- L’erreur statique $e_{ss}$ est la **différence entre la consigne et la sortie en régime permanent** :
  $$
  e_{ss} = \\lim_{t \\to \\infty} (r(t) - y(t))
  $$

- Calcul par le théorème de la valeur finale :
  $$
  e_{ss} = \\lim_{s \\to 0} s \\cdot E(s) = \\lim_{s \\to 0} \\left[ \\frac{s}{1 + G(s)} R(s) \\right]
  $$

---

#### 3. Réponse aux entrées usuelles

| Entrée       | $R(s)$         | Type 0             | Type 1             | Type 2             |
|--------------|----------------|--------------------|--------------------|--------------------|
| Échelon      | $\\frac{1}{s}$ | $\\neq 0$          | 0                  | 0                  |
| Rampe        | $\\frac{1}{s^2}$ | $\\infty$         | $\\neq 0$          | 0                  |
| Parabole     | $\\frac{1}{s^3}$ | $\\infty$         | $\\infty$          | $\\neq 0$          |

- Le **type du système détermine son aptitude à suivre des consignes lentes (échelon, rampe...)**.

---

#### 4. Erreur statique et constante de système

- On définit une **constante statique** selon l’entrée :

| Entrée | Constante  | Formule                                     | Erreur statique |
|--------|------------|---------------------------------------------|------------------|
| Échelon | $K_p$     | $\\lim_{s\\to0} G(s)$                      | $\\frac{1}{1 + K_p}$ |
| Rampe   | $K_v$     | $\\lim_{s\\to0} sG(s)$                     | $\\frac{1}{K_v}$ |
| Parabole| $K_a$     | $\\lim_{s\\to0} s^2 G(s)$                  | $\\frac{1}{K_a}$ |

---

### Résumé

- Le **type** d’un système indique son **comportement en régime permanent**.
- Plus le type est élevé, plus le système suit **précisément les consignes lentes**.
- L’**erreur statique** permet de **quantifier la précision**, et peut être corrigée via un **correcteur intégral** (PI, PID).

`,
  tags: [
    'erreur statique',
    'type système',
    'réponse échelon',
    'précision',
    'asservissement',
    'automatique'
  ],
  datePublication: '2025-05-27',
  populaire: false,
  aReviser: false
},
];


// Toutes les fiches réunies (pour compatibilité avec l’existant)
export const fiches: Fiche[] = [
  ...fichesMaths,
  ...fichesPhysique,
  ...fichesInfo,
  ...fichesChimie,
  ...fichesSI
];
