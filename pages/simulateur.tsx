import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Simulateur() {
  return (
    <>
      <Head>
        <title>Simulateur de Moyenne Bac & Concours | Revisya</title>
        <meta name="description" content="Simulateur de moyenne pour le Bac, CPGE scientifique et commerce. Calculez vos résultats facilement !" />
      </Head>
      <Header />
      <main
        className="simulateur-main"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "2em 1em",
          paddingTop: "5.5rem",
        }}
      >
        <h1 className="simulateur-title" style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5em" }}>
          Simulateur de Moyenne
        </h1>

        <section className="simulateur-section">
          <h2>1. Simulateur Bac – Générale</h2>
          <ul>
            <li>Spécialité 1 coef 16</li>
            <li>Spécialité 2 coef 16</li>
            <li>Français (1re) coef 5</li>
            <li>Philosophie coef 8</li>
            <li>Grand oral coef 10</li>
            <li>EPS coef 2</li>
            <li>Histoire-géographie coef 4</li>
            <li>Langues vivantes coef 7</li>
            <li>Enseignement scientifique coef 2</li>
            <li>Contrôle continu autres matières coef 11</li>
          </ul>
          <p>
            <b>Exemple :</b> Spé Maths coef 16, Spé Physique coef 16, Philo coef 8, Grand oral coef 10, Contrôle continu coef 11<br />
            <i>Moyenne = (note×coef)/somme des coefs</i>
          </p>
          <Link href="/simulateur/bac" className="bouton-simuler" style={{ marginTop: 12, display: "inline-block" }}>Ouvrir le simulateur Bac</Link>
        </section>

        <section className="simulateur-section" style={{ marginTop: "2em" }}>
          <h2>2. Simulateur CPGE – Scientifique</h2>
          <ul>
            <li>Mathématiques écrit coef 6, oral coef 3</li>
            <li>Physique écrit coef 4, oral coef 2</li>
            <li>Chimie écrit coef 3, oral coef 2 (PC/PSI)</li>
            <li>Sciences industrielles écrit coef 3, oral coef 2 (PSI)</li>
            <li>TIPE écrit coef 2, oral coef 2</li>
            <li>Français/Philo écrit coef 2, oral coef 2</li>
            <li>Langues vivantes écrit coef 2, oral coef 1</li>
          </ul>
          <p>
            <b>Exemple :</b> Maths écrit 6, oral 3, Physique écrit 4, oral 2, Chimie écrit 3, oral 2, SI écrit 3, oral 2, TIPE écrit 2, oral 2, Français écrit 2, oral 2, Langues écrit 2, oral 1<br />
            <i>Moyenne pondérée sur 20</i>
          </p>
          <Link href="/simulateur/cpge-sci" className="bouton-simuler" style={{ marginTop: 12, display: "inline-block" }}>Ouvrir le simulateur CPGE Scientifique</Link>
        </section>

        <section className="simulateur-section" style={{ marginTop: "2em" }}>
          <h2>3. Simulateur CPGE – Commerce (ECG/ECE)</h2>
          <ul>
            <li>Mathématiques écrit coef 6, oral coef 4</li>
            <li>Culture générale écrit coef 3, oral coef 3</li>
            <li>Histoire écrit coef 3, oral coef 3</li>
            <li>Langues vivantes écrit coef 6, oral coef 4</li>
            <li>Économie écrit coef 4, oral coef 3</li>
            <li>Management écrit coef 3, oral coef 3</li>
            <li>LV3 optionnelle écrit coef 2, oral coef 1</li>
            <li>Analyse (option) écrit coef 3</li>
          </ul>
          <p>
            <b>Exemple :</b> Maths écrit 6, oral 4, CG écrit 3, oral 3, Histoire écrit 3, oral 3, Langues écrit 6, oral 4, Économie écrit 4, oral 3, Management écrit 3, oral 3<br />
            <i>Moyenne pondérée sur 20</i>
          </p>
          <Link href="/simulateur/cpge-eco" className="bouton-simuler" style={{ marginTop: 12, display: "inline-block" }}>Ouvrir le simulateur CPGE Commerce</Link>
        </section>
        <Link
          href="/fiches"
          className="simulateur-fab-quit"
          title="Quitter les simulateurs"
        >
          ✖
        </Link>
      </main>
      <Footer />
    </>
  );
}