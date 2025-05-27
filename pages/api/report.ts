import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Simple in-memory rate limit: { [key: string]: timestamp }
const lastSent: Record<string, number> = {};
const DELAY_MS = 5 * 60 * 1000; // 5 minutes

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REPORT_EMAIL,
    pass: process.env.REPORT_EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { ficheId, ficheTitre, message } = req.body;
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || 'unknown';
  const key = `${ip}_${ficheId}`;

  // Rate limit: 1 mail per fiche per IP per DELAY_MS
  if (lastSent[key] && Date.now() - lastSent[key] < DELAY_MS) {
    return res.status(429).json({ error: "Trop de signalements pour cette fiche. Merci d'attendre quelques minutes." });
  }

  try {
    await transporter.sendMail({
      from: `"Revisya Signalement" <${process.env.REPORT_EMAIL}>`,
      to: process.env.REPORT_EMAIL,
      subject: `Signalement fiche #${ficheId} - ${ficheTitre || ''}`,
      text: `Fiche ID: ${ficheId}\nTitre: ${ficheTitre}\n\nMessage:\n${message}`,
    });
    lastSent[key] = Date.now();
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: "Erreur lors de l'envoi du mail." });
  }
}