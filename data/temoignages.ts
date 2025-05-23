// Définition du type pour un témoignage
export type Temoignage = {
  text: string;
  author: string;
};

// Liste des témoignages
export const temoignages: Temoignage[] = [
  {
    text: "“Des fiches ultra claires, j’ai gagné un temps fou pour mes révisions de maths !”",
    author: "— Amine, MP2I",
  },
  {
    text: "“J’ai enfin compris la physique grâce à vos synthèses, merci !”",
    author: "— Sarah, Terminale",
  },
  {
    text: "“Parfait pour préparer les concours BCE, tout est synthétique.”",
    author: "— Hugo, ECE2",
  },
  {
    text: "“Un gain de temps énorme pendant les révisions. Merci !”",
    author: "— Lina, PCSI",
  },
  {
    text: "“Les fiches sont bien structurées et m’ont aidé à mieux comprendre les concepts difficiles.”",
    author: "— Karim, MPSI",
  },
  {
    text: "“Grâce à vos fiches, j’ai pu réviser efficacement pour mes examens de physique.”",
    author: "— Emma, Terminale S",
  },
  {
    text: "“Les fiches d’informatique sont excellentes pour apprendre Python rapidement.”",
    author: "— Yassine, Prépa TSI",
  },
  {
    text: "“Vos fiches m’ont permis de mieux organiser mes révisions et de gagner en confiance.”",
    author: "— Clara, ECE1",
  },
];