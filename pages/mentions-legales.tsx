import Head from "next/head";
import Header from "../components/Header";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales - Fiches de Révision</title>
        <meta name="description" content="Mentions légales du site Fiches de Révision, informations légales et contact." />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
          <p>Nom : [Ton nom ou celui de ton entreprise]</p>
          <p>Adresse : [Ton adresse postale]</p>
          <p>Téléphone : [Ton numéro de téléphone]</p>
          <p>Email : [Ton adresse email]</p>
          <p>Numéro SIRET : [Ton numéro SIRET si applicable]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>Nom de l’hébergeur : [Nom de l’hébergeur]</p>
          <p>Adresse : [Adresse de l’hébergeur]</p>
          <p>Téléphone : [Téléphone de l’hébergeur]</p>
          <p>Site web : [URL de l’hébergeur]</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, etc.) est la propriété exclusive de [Ton nom ou entreprise], sauf indication contraire.
            Toute reproduction, distribution, modification ou utilisation sans autorisation est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont données à titre indicatif. [Ton nom ou entreprise] ne saurait être tenu responsable des erreurs ou omissions, ni des conséquences liées à l’utilisation des informations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>Pour toute question, contactez-nous via la <a href="/contact" className="text-blue-600 hover:underline">page Contact</a>.</p>
        </section>
      </main>
    </>
  );
}
