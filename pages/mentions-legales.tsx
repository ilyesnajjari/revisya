import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales - Fiches de Révision</title>
        <meta
          name="description"
          content="Mentions légales du site Fiches de Révision, informations légales et contact."
        />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
          <p>Nom : Ilyes Najjari</p>
          <p>
            Email :{" "}
            <a
              href="mailto:Ilyes.najjari@hotmail.com"
              className="text-blue-600 hover:underline"
            >
              Ilyes.najjari@hotmail.com
            </a>
          </p>
          <p>
            Ce site est édité à titre personnel dans le cadre d&apos;un projet en
            phase de test. Aucune activité commerciale n&apos;est actuellement
            exercée.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>Nom de l&apos;hébergeur : Vercel</p>
          <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
          <p>
            Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu présent sur ce site (textes, images, logos,
            vidéos, etc.) est la propriété exclusive de Ilyes Najjari, sauf
            indication contraire. Toute reproduction, distribution, modification
            ou utilisation sans autorisation est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont données à titre indicatif.
            Ilyes Najjari ne saurait être tenu responsable des erreurs ou
            omissions, ni des conséquences liées à l&apos;utilisation des
            informations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>
            Pour toute question, contactez-moi via la{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              page Contact
            </Link>{" "}
            ou par email.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
