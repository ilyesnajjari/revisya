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
    // Transporteur SMTP Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER, // ton email Outlook complet
        pass: process.env.SMTP_PASS, // mot de passe de ta boîte Outlook
      },
      tls: {
        ciphers: 'SSLv3',
      }
    });

    const mailOptions = {
      from: `"Fiches de Révision" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // où tu veux recevoir les messages
      subject: `Nouveau message de contact de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
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
