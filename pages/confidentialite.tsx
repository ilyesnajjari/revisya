import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - Fiches de Révision</title>
        <meta
          name="description"
          content="Politique de confidentialité concernant la collecte et l'utilisation des données personnelles sur le site Fiches de Révision."
        />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Politique de Confidentialité</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Collecte des données personnelles</h2>
          <p>
            Ce site ne propose pas de création de compte utilisateur. Les seules données personnelles éventuellement collectées sont celles transmises volontairement via le formulaire de contact (nom, adresse email, message).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Utilisation des données</h2>
          <p>
            Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre aux messages reçus. Elles ne sont ni conservées durablement, ni partagées avec des tiers sans consentement explicite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Sécurité des données</h2>
          <p>
            Nous veillons à protéger les données transmises via des moyens techniques appropriés. Aucune base de données nominative n’est conservée sur le site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Durée de conservation</h2>
          <p>
            Les données sont conservées uniquement le temps nécessaire pour traiter la demande, puis supprimées.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Droits des utilisateurs</h2>
          <p>
            Conformément à la réglementation en vigueur, vous pouvez demander l’accès, la rectification ou la suppression de vos données en nous contactant via la <a href="/contact" className="text-blue-600 hover:underline">page Contact</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies essentiels au fonctionnement et à la mesure d’audience (ex : Google Analytics avec IP anonymisée). Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
