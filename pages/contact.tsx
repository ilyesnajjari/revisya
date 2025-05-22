import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple côté client
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Veuillez remplir tous les champs.");
      return;
    }

    // Regex basique email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Adresse email invalide.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      // Appel API pour envoyer le message (à créer côté API)
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
      <main className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h1>

        <p className="mb-6 text-center">
          Vous souhaitez des cours particuliers ? Envoyez-nous un message via ce formulaire.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {status === "error" && (
            <p className="text-red-600 font-semibold">{errorMsg}</p>
          )}

          {status === "success" && (
            <p className="text-green-600 font-semibold">
              Merci pour votre message ! Nous vous répondrons rapidement.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </main>
    </>
  );
}
