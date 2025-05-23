import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Veuillez remplir tous les champs.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Adresse email invalide.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg((error as Error).message || "Une erreur est survenue.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Demande de Cours Particuliers | Fiches de Révision</title>
        <meta
          name="description"
          content="Contactez-nous pour demander des cours particuliers et obtenir un accompagnement personnalisé."
        />
      </Head>
      <Header />
      <div className="contact-center-container">
        <main className="contact-main">
          <h1 className="contact-title">Contactez-nous</h1>
          <p className="contact-subtitle">
            Vous souhaitez des cours particuliers ? Envoyez-nous un message via ce formulaire.
          </p>
          <div className="contact-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                  required
                />
              </div>
              {status === "error" && (
                <p className="form-error">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="form-success">
                  Merci pour votre message ! Nous vous répondrons rapidement.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="form-button"
              >
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
