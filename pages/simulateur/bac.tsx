import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FaCalculator } from "react-icons/fa";

const COEFS = {
  spe1: 16,
  spe2: 16,
  francais: 5,
  philo: 8,
  grandOral: 10,
  eps: 2,
  histGeo: 4,
  langues: 7,
  ensSc: 2,
  controleContinu: 11, // Moyenne pour "autres matières" (10-12)
};

export default function SimulateurBac() {
  const [notes, setNotes] = useState({
    spe1: "",
    spe2: "",
    francais: "",
    philo: "",
    grandOral: "",
    eps: "",
    histGeo: "",
    langues: "",
    ensSc: "",
    controleContinu: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setNotes({
      spe1: "",
      spe2: "",
      francais: "",
      philo: "",
      grandOral: "",
      eps: "",
      histGeo: "",
      langues: "",
      ensSc: "",
      controleContinu: "",
    });
  };

  const totalCoef = Object.values(COEFS).reduce((a, b) => a + b, 0);

  const moyenne =
    Object.entries(COEFS).reduce(
      (acc, [key, coef]) =>
        acc +
        (Number(notes[key as keyof typeof notes]) || 0) * coef,
      0
    ) / totalCoef;

  return (
    <>
      <Head>
        <title>Simulateur Bac Général | Revisya</title>
      </Head>
      <Header />
      <main className="simulateur-main">
        <h1 className="simulateur-title">
          <FaCalculator style={{ marginRight: 8, verticalAlign: "middle" }} />
          Simulateur Bac Général
        </h1>
        <form className="simulateur-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
          <div className="simulateur-fields">
            <label>
              Spécialité 1 (coef 16)
              <input
                type="number"
                name="spe1"
                min={0}
                max={20}
                step={0.01}
                value={notes.spe1}
                onChange={handleChange}
                placeholder="Note sur 20"
                required
              />
            </label>
            <label>
              Spécialité 2 (coef 16)
              <input
                type="number"
                name="spe2"
                min={0}
                max={20}
                step={0.01}
                value={notes.spe2}
                onChange={handleChange}
                placeholder="Note sur 20"
                required
              />
            </label>
            <label>
              Français (épreuve anticipée, coef 5)
              <input
                type="number"
                name="francais"
                min={0}
                max={20}
                step={0.01}
                value={notes.francais}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Philosophie (coef 8)
              <input
                type="number"
                name="philo"
                min={0}
                max={20}
                step={0.01}
                value={notes.philo}
                onChange={handleChange}
                placeholder="Note sur 20"
                required
              />
            </label>
            <label>
              Grand Oral (coef 10)
              <input
                type="number"
                name="grandOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.grandOral}
                onChange={handleChange}
                placeholder="Note sur 20"
                required
              />
            </label>
            <label>
              EPS (éducation physique, coef 2)
              <input
                type="number"
                name="eps"
                min={0}
                max={20}
                step={0.01}
                value={notes.eps}
                onChange={handleChange}
                placeholder="Moyenne sur 20"
              />
            </label>
            <label>
              Histoire-géographie (coef 4)
              <input
                type="number"
                name="histGeo"
                min={0}
                max={20}
                step={0.01}
                value={notes.histGeo}
                onChange={handleChange}
                placeholder="Moyenne sur 20"
              />
            </label>
            <label>
              Langues vivantes (LV1 + LV2, coef 7)
              <input
                type="number"
                name="langues"
                min={0}
                max={20}
                step={0.01}
                value={notes.langues}
                onChange={handleChange}
                placeholder="Moyenne sur 20"
              />
            </label>
            <label>
              Enseignement scientifique (1re, coef 2)
              <input
                type="number"
                name="ensSc"
                min={0}
                max={20}
                step={0.01}
                value={notes.ensSc}
                onChange={handleChange}
                placeholder="Moyenne sur 20"
              />
            </label>
            <label>
              Contrôle continu (autres matières, coef 11)
              <input
                type="number"
                name="controleContinu"
                min={0}
                max={20}
                step={0.01}
                value={notes.controleContinu}
                onChange={handleChange}
                placeholder="Moyenne sur 20"
              />
            </label>
          </div>
          <button
            type="button"
            className="bouton-simuler"
            style={{ marginTop: 16, background: "linear-gradient(135deg,#64748b 60%,#94a3b8 100%)" }}
            onClick={handleReset}
          >
            Réinitialiser les scores
          </button>
        </form>
        <div className="simulateur-result">
          <span>Moyenne générale :</span>
          <span className="simulateur-moyenne">
            {isNaN(moyenne) ? "--" : moyenne.toFixed(2)} / 20
          </span>
        </div>
        <Link
          href="/fiches"
          className="simulateur-fab-quit"
          title="Retourner aux fiches"
        >
          ✖
        </Link>
      </main>
      <Footer />
    </>
  );
}