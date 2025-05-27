import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FaCalculator } from "react-icons/fa";

const COEFS = {
  mathsEcrit: 6,
  mathsOral: 3,
  physiqueEcrit: 4,
  physiqueOral: 2,
  chimieEcrit: 3,      // PC/PSI
  chimieOral: 2,
  siEcrit: 3,          // PSI
  siOral: 2,
  tipeEcrit: 2,
  tipeOral: 2,
  francaisEcrit: 2,
  francaisOral: 2,
  languesEcrit: 2,
  languesOral: 1,
};

export default function SimulateurCPGESci() {
  const [notes, setNotes] = useState({
    mathsEcrit: "",
    mathsOral: "",
    physiqueEcrit: "",
    physiqueOral: "",
    chimieEcrit: "",
    chimieOral: "",
    siEcrit: "",
    siOral: "",
    tipeEcrit: "",
    tipeOral: "",
    francaisEcrit: "",
    francaisOral: "",
    languesEcrit: "",
    languesOral: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setNotes({
      mathsEcrit: "",
      mathsOral: "",
      physiqueEcrit: "",
      physiqueOral: "",
      chimieEcrit: "",
      chimieOral: "",
      siEcrit: "",
      siOral: "",
      tipeEcrit: "",
      tipeOral: "",
      francaisEcrit: "",
      francaisOral: "",
      languesEcrit: "",
      languesOral: "",
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
        <title>Simulateur CPGE Scientifique | Revisya</title>
      </Head>
      <Header />
      <main className="simulateur-main">
        <h1 className="simulateur-title">
          <FaCalculator style={{ marginRight: 8, verticalAlign: "middle" }} />
          Simulateur CPGE Scientifique
        </h1>
        <form className="simulateur-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
          <div className="simulateur-fields">
            <label>
              Mathématiques écrit (coef 6)
              <input
                type="number"
                name="mathsEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.mathsEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Mathématiques oral (coef 3)
              <input
                type="number"
                name="mathsOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.mathsOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Physique écrit (coef 4)
              <input
                type="number"
                name="physiqueEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.physiqueEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Physique oral (coef 2)
              <input
                type="number"
                name="physiqueOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.physiqueOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Chimie écrit (coef 3, PC/PSI)
              <input
                type="number"
                name="chimieEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.chimieEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Chimie oral (coef 2)
              <input
                type="number"
                name="chimieOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.chimieOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Sciences industrielles écrit (coef 3, PSI)
              <input
                type="number"
                name="siEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.siEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Sciences industrielles oral (coef 2)
              <input
                type="number"
                name="siOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.siOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              TIPE écrit (coef 2)
              <input
                type="number"
                name="tipeEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.tipeEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              TIPE oral (coef 2)
              <input
                type="number"
                name="tipeOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.tipeOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Français/Philosophie écrit (coef 2)
              <input
                type="number"
                name="francaisEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.francaisEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Français/Philosophie oral (coef 2)
              <input
                type="number"
                name="francaisOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.francaisOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Langues vivantes écrit (coef 2)
              <input
                type="number"
                name="languesEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.languesEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Langues vivantes oral (coef 1)
              <input
                type="number"
                name="languesOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.languesOral}
                onChange={handleChange}
                placeholder="Note sur 20"
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
          <span>Moyenne pondérée :</span>
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