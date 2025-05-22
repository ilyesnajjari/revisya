import Head from "next/head";
import Header from "../components/Header";

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
            Nous collectons uniquement les données personnelles nécessaires à la bonne gestion des demandes via notre formulaire de contact, notamment votre nom, adresse email et message.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Utilisation des données</h2>
          <p>
            Les informations recueillies sont utilisées uniquement pour répondre à vos demandes et ne seront jamais partagées avec des tiers sans votre consentement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées uniquement le temps nécessaire au traitement de votre demande.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Droits des utilisateurs</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous via la <a href="/contact" className="text-blue-600 hover:underline">page Contact</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Cookies</h2>
          <p>
            Ce site utilise des cookies strictement nécessaires au fonctionnement et à l’analyse de l’audience (Google Analytics anonymisé). Vous pouvez gérer vos préférences via les paramètres de votre navigateur.
          </p>
        </section>
      </main>
    </>
  );
}
