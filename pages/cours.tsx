import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import "../styles/cours.css";

export default function About() {
  return (
    <>
      <Head>
        <title>À propos | Cours particuliers pour lycée, prépa et université</title>
        <meta
          name="description"
          content="Cours particuliers en ligne pour les lycéens, les étudiants en prépa scientifique, prépa commerce et à l’université. Méthodologie personnalisée et soutien sur-mesure."
        />
      </Head>
      <Header />
      <main className="cours-main">
        <h1 className="cours-title">À propos</h1>
        <div className="cours-subtitle">Des cours particuliers sur-mesure pour réussir au lycée, en prépa et à l’université</div>

        <section className="card">
          <p>
            Nous proposons des <strong>cours particuliers en ligne</strong> destinés aux élèves de <strong>lycée</strong>, de <strong>prépa scientifique</strong>, de <strong>prépa commerce</strong> et aux <strong>étudiants à l’université</strong>. Notre objectif est de vous accompagner efficacement dans votre progression grâce à un suivi personnalisé et des méthodes pédagogiques adaptées à chaque niveau.
          </p>
          <p>
            <strong>Tarif :</strong> 25€ de l'heure – flexibilité et qualité au rendez-vous.
          </p>
        </section>

        <section className="card">
          <h2 className="cours-section-title">Pourquoi choisir nos cours ?</h2>
          <p>
            Des centaines d’élèves nous font déjà confiance grâce à notre approche humaine et sur-mesure. Nos enseignants s’adaptent à votre niveau et à vos objectifs pour vous proposer un parcours d'apprentissage personnalisé. Grâce à notre flexibilité horaire et nos outils interactifs, chaque séance devient un levier de réussite.
          </p>
        </section>

        <section className="card">
          <h2 className="cours-section-title">Notre Équipe</h2>
          <ul>
            <li>
              <strong>Ilyes</strong> – Responsable pédagogique, passionné par l’enseignement, actuellement étudiant à Télécom Saint-Étienne.
            </li>
          </ul>
        </section>

        <section className="card">
          <h2 className="cours-section-title">Notre Méthodologie</h2>
          <ul>
            <li>Des cours structurés pour mieux comprendre les notions clés.</li>
            <li>Des supports adaptés : résumés, exercices corrigés, QCM, etc.</li>
            <li>Une disponibilité constante par messagerie pour répondre à vos questions entre les cours.</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="cours-section-title">Nos Propositions</h2>
          <div className="cours-exemples-grid">
            <div className="cours-exemple-item">
              <Image
                src="/cours_particuliers/exemple_cours_math.png"
                alt="Démonstration de cours en ligne"
                width={1200}
                height={600}
                className="cours-exemple-img"
              />
              <div>Démonstration de cours</div>
            </div>
            <div className="cours-exemple-item">
              <Image
                src="/cours_particuliers/formulaire_physique.png"
                alt="Formulaire de demande"
                width={1200}
                height={600}
                className="cours-exemple-img"
              />
              <div>Formulaires personnalisés</div>
            </div>
            <div className="cours-exemple-item">
              <Image
                src="/cours_particuliers/exemple_info.png"
                alt="Exercices corrigés"
                width={1200}
                height={600}
                className="cours-exemple-img"
              />
              <div>Exercices corrigés</div>
            </div>
          </div>
        </section>
      </main>
      <a
        href="/contact"
        className="contact-float-btn"
        aria-label="Contact"
      >
        Contact
      </a>
      <Footer />
    </>
  );
}
