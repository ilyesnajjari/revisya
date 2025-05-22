import Head from "next/head";
import Header from "../../../components/Header";

export default function FicheMathsPrepa() {
  return (
    <>
      <Head>
        <title>Mathématiques - Prépa Scientifique | Fiches de Révision</title>
        <meta
          name="description"
          content="Fiche de révision complète en mathématiques pour les étudiants de classes préparatoires scientifiques. Théorèmes, exercices, méthodes et astuces."
        />
        <meta property="og:title" content="Mathématiques - Prépa Scientifique | Fiches de Révision" />
        <meta property="og:description" content="Découvrez une fiche complète pour réussir en mathématiques en prépa scientifique." />
        <meta property="og:type" content="article" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Mathématiques - Prépa Scientifique</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            Cette fiche de révision couvre les concepts clés en mathématiques pour les classes préparatoires scientifiques. Vous y trouverez des définitions, théorèmes importants, méthodes de résolution ainsi que des exemples d'exercices corrigés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Théorèmes et Formules Importants</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Théorème de Rolle :</strong> Si une fonction f est continue sur [a, b], dérivable sur ]a, b[ et f(a) = f(b), alors il existe c ∈ ]a, b[ tel que f'(c) = 0.</li>
            <li><strong>Formule de Taylor :</strong> Pour une fonction suffisamment dérivable, f(x) ≈ f(a) + f'(a)(x−a) + ... + f⁽ⁿ⁾(a)/n! * (x−a)ⁿ.</li>
            <li><strong>Intégrale de Riemann :</strong> ∫_a^b f(x) dx représente l'aire sous la courbe de f entre a et b.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Méthodes et Conseils</h2>
          <p>
            Pour réussir en mathématiques, il est essentiel de bien maîtriser la rigueur du raisonnement, la rédaction et la compréhension des énoncés. N'hésitez pas à :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Relire attentivement chaque exercice avant de commencer.</li>
            <li>Revoir régulièrement les formules et théorèmes fondamentaux.</li>
            <li>Pratiquer avec des exercices variés pour gagner en aisance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Exemple d'Exercice Corrigé</h2>
          <p><strong>Énoncé :</strong> Soit f(x) = x³ − 3x + 1. Étudier les variations de f sur ℝ.</p>
          <p><strong>Correction :</strong></p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Calcul de la dérivée : f'(x) = 3x² − 3 = 3(x² − 1).</li>
            <li>Étude du signe de f'(x) : f'(x) = 0 ⇔ x = ±1.</li>
            <li>Tableau de variations : décroissante sur ]−∞, −1], croissante sur [−1, 1], décroissante sur [1, +∞[.</li>
          </ol>
        </section>
      </main>
    </>
  );
}
