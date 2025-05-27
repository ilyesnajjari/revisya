This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Configuration du nom de domaine et hébergement

### Nom de domaine personnalisé avec OVH
Le nom de domaine `revisya.fr` est géré via OVH. Voici les étapes pour configurer le domaine avec Vercel :
1. Connectez-vous à votre compte OVH.
2. Accédez à la section **Domaines** et sélectionnez `revisya.fr`.
3. Configurez les enregistrements DNS pour pointer vers Vercel :
   - **Type A** : Ajoutez un enregistrement pointant vers l'adresse IP de Vercel.
   - **Type CNAME** : Ajoutez un enregistrement pour `www` pointant vers `cname.vercel-dns.com`.
4. Vérifiez la configuration DNS dans l'interface OVH.
5. Dans le tableau de bord Vercel, ajoutez `revisya.fr` comme domaine personnalisé.

### Hébergement sur Vercel
L'application est hébergée sur [Vercel](https://vercel.com), qui offre un déploiement rapide et optimisé pour les applications Next.js. Voici les étapes pour déployer :
1. Connectez-vous à votre compte Vercel.
2. Importez le projet depuis GitHub ou un autre dépôt Git.
3. Configurez les variables d'environnement nécessaires dans l'onglet **Settings** > **Environment Variables**.
4. Déployez automatiquement à chaque push sur la branche principale.

---

## Utilisation de LaTeX dans le projet

Dans le texte :
- Utilisez `$ ... $` pour le LaTeX inline, par exemple :
  `Soit $f : U \\subset \\mathbb{R}^p \\to \\mathbb{R}$.`
- Pour une formule sur une ligne seule, centrée, utilisez `$$ ... $$`, par exemple :
  ```latex
  $$
  \\nabla f = \\left( \\frac{\\partial f}{\\partial x_1}, \\ldots, \\frac{\\partial f}{\\partial x_p} \\right)
  $$
  ```
- Pour la **valeur absolue**, utilisez :  
  - `$\\lvert x \\rvert$` ou `$|x|$`  
  - Pour une expression plus complexe : `$\left| x^2-1 \right|$`

Dans les chaînes de caractères (JS, JSON, etc.) :
- Doublez les backslash dans les commandes LaTeX :
  - `\nabla` → `\\nabla`
  - `\frac` → `\\frac`
  - `\lvert` → `\\lvert`
  - `\implies` → `\\implies`
  - `\quad` → `\\quad`
- Ne pas échapper les `$` (ils délimitent la formule) ni les `{}` (utilisés normalement).

---

## Analyse et monitoring

### Performance
- Utilisez [Vercel Analytics](https://vercel.com/analytics) pour surveiller les performances de votre site.
- Activez les outils de mesure comme Google Lighthouse pour optimiser le chargement des pages.

### Logs et monitoring
- Configurez les logs dans Vercel pour surveiller les erreurs et les requêtes.
- Intégrez des outils comme [Sentry](https://sentry.io/) pour le suivi des erreurs en production.

### Outils d'analyse
- Ajoutez Google Analytics ou Plausible pour suivre les statistiques de trafic.
- Configurez des outils comme Hotjar pour analyser le comportement des utilisateurs.

---

Avec ces configurations, votre projet est prêt pour un déploiement professionnel avec un domaine personnalisé et un hébergement optimisé.



