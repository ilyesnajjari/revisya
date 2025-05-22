import Head from "next/head";
import Header from "../components/Header";

export default function Cours() {
  return (
    <>
      <Head>
        <title>Cours Particuliers - Accompagnement Personnalisé | Fiches de Révision</title>
        <meta
          name="description"
          content="Découvrez nos services de cours particuliers pour réussir en classes préparatoires et lycée."
        />
        <meta property="og:title" content="Cours Particuliers - Fiches de Révision" />
        <meta
          property="og:description"
          content="Accompagnement personnalisé en maths, physique, économie et plus, pour réussir vos examens."
        />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Cours Particuliers</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Pourquoi choisir nos cours particuliers ?</h2>
          <p className="mb-4">
            Nos cours particuliers sont adaptés à vos besoins, que vous soyez en classes préparatoires scientifiques, économiques, ou au lycée. Nous proposons un accompagnement personnalisé pour :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Clarifier les notions difficiles</li>
            <li>Préparer efficacement les concours et examens</li>
            <li>Optimiser vos méthodes de travail</li>
            <li>Répondre à toutes vos questions en direct</li>
          </ul>
          <p>
            Chaque séance est préparée en fonction de votre niveau et de vos objectifs. Vous bénéficiez d’un suivi régulier pour progresser rapidement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Matières proposées</h2>
          <ul className="list-disc list-inside">
            <li>Mathématiques (Prépa scientifique, économique, lycée)</li>
            <li>Physique-Chimie</li>
            <li>Sciences Industrielles</li>
            <li>Économie et Gestion</li>
            <li>Autres matières sur demande</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Tarifs</h2>
          <p>Les tarifs sont adaptés à la durée et au format des cours (en ligne ou en présentiel).</p>
          <ul className="list-disc list-inside">
            <li>1h : 30€</li>
            <li>1h30 : 40€</li>
            <li>Pack 5h : 140€</li>
          </ul>
          <p className="mt-2">
            Contactez-nous via la <a href="/contact" className="text-blue-600 hover:underline">page Contact</a> pour un devis personnalisé.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Comment réserver ?</h2>
          <p>
            Envoyez-nous un message via la <a href="/contact" className="text-blue-600 hover:underline">page Contact</a> en précisant votre niveau, matières et vos disponibilités. Nous vous recontacterons rapidement pour organiser les séances.
          </p>
        </section>
      </main>
    </>
  );
}
