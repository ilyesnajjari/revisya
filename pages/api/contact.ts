import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  // Validation simple côté serveur
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  // TODO: ici tu peux par exemple envoyer un email via un service SMTP ou un service tiers (SendGrid, Mailgun, etc.)

  console.log("Nouveau message de contact :", { name, email, message });

  // Pour l’instant, on répond OK directement
  return res.status(200).json({ message: "Message reçu avec succès" });
}
