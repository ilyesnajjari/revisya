import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Ton adresse Gmail complète
        pass: process.env.GMAIL_PASS, // Le mot de passe d'application Gmail
      },
    });

    const mailOptions = {
      from: `"revisya" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Adresse de réception
      subject: `Nouveau message de contact de ${name}`,
      text: `
Nom : ${name}
Email : ${email}
Message : ${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return res.status(500).json({ message: "Erreur serveur lors de l'envoi du mail." });
  }
}
