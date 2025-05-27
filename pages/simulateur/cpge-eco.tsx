import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { FaCalculator } from "react-icons/fa";

// Coefficients adaptés pour Banque Ecricome (exemple)
const COEFS = {
  mathsEcrit: 6,
  mathsOral: 4,
  cgEcrit: 3,
  cgOral: 3,
  histoireEcrit: 3,
  histoireOral: 3,
  languesEcrit: 6,
  languesOral: 4,
  economieEcrit: 4,
  economieOral: 3,
  managementEcrit: 3,
  managementOral: 3,
  // LV3 optionnelle
  lv3Ecrit: 2,
  lv3Oral: 1,
  // Analyse (économie/maths) si besoin
  analyseEcrit: 3,
};

export default function SimulateurCPGEEco() {
  const [notes, setNotes] = useState({
    mathsEcrit: "",
    mathsOral: "",
    cgEcrit: "",
    cgOral: "",
    histoireEcrit: "",
    histoireOral: "",
    languesEcrit: "",
    languesOral: "",
    economieEcrit: "",
    economieOral: "",
    managementEcrit: "",
    managementOral: "",
    lv3Ecrit: "",
    lv3Oral: "",
    analyseEcrit: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  // Ajout du bouton de réinitialisation
  const handleReset = () => {
    setNotes({
      mathsEcrit: "",
      mathsOral: "",
      cgEcrit: "",
      cgOral: "",
      histoireEcrit: "",
      histoireOral: "",
      languesEcrit: "",
      languesOral: "",
      economieEcrit: "",
      economieOral: "",
      managementEcrit: "",
      managementOral: "",
      lv3Ecrit: "",
      lv3Oral: "",
      analyseEcrit: "",
    });
  };

  // Calcul du total des coefficients (ne compte LV3/analyse que si une note est saisie)
  const totalCoef = Object.entries(COEFS).reduce(
    (acc, [key, coef]) =>
      notes[key as keyof typeof notes] !== "" ? acc + coef : acc,
    0
  );

  const moyenne =
    totalCoef === 0
      ? NaN
      : Object.entries(COEFS).reduce(
          (acc, [key, coef]) =>
            acc +
            ((Number(notes[key as keyof typeof notes]) || 0) *
              (notes[key as keyof typeof notes] !== "" ? coef : 0)),
          0
        ) / totalCoef;

  return (
    <>
      <Head>
        <title>Simulateur CPGE Commerce | Revisya</title>
      </Head>
      <Header />
      <main className="simulateur-main">
        <h1 className="simulateur-title">
          <FaCalculator style={{ marginRight: 8, verticalAlign: "middle" }} />
          Simulateur CPGE Commerce (ECG/ECE)
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
              Mathématiques oral (coef 4)
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
              Culture générale écrit (coef 3)
              <input
                type="number"
                name="cgEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.cgEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Culture générale oral (coef 3)
              <input
                type="number"
                name="cgOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.cgOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Histoire écrit (coef 3)
              <input
                type="number"
                name="histoireEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.histoireEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Histoire oral (coef 3)
              <input
                type="number"
                name="histoireOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.histoireOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Langues vivantes écrit (coef 6)
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
              Langues vivantes oral (coef 4)
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
            <label>
              Économie écrit (coef 4)
              <input
                type="number"
                name="economieEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.economieEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Économie oral (coef 3)
              <input
                type="number"
                name="economieOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.economieOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Management écrit (coef 3)
              <input
                type="number"
                name="managementEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.managementEcrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Management oral (coef 3)
              <input
                type="number"
                name="managementOral"
                min={0}
                max={20}
                step={0.01}
                value={notes.managementOral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            {/* Optionnel */}
            <label>
              LV3 écrit (option, coef 2)
              <input
                type="number"
                name="lv3Ecrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.lv3Ecrit}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              LV3 oral (option, coef 1)
              <input
                type="number"
                name="lv3Oral"
                min={0}
                max={20}
                step={0.01}
                value={notes.lv3Oral}
                onChange={handleChange}
                placeholder="Note sur 20"
              />
            </label>
            <label>
              Analyse (économie/maths, option, coef 3)
              <input
                type="number"
                name="analyseEcrit"
                min={0}
                max={20}
                step={0.01}
                value={notes.analyseEcrit}
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