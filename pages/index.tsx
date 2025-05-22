import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SearchFiches from "../components/SearchFiches";
import "../styles/index.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fiches de Révision - Prépa & Lycée</title>
        <meta
          name="description"
          content="Fiches de révision gratuites et synthétiques pour réussir en classes préparatoires et au lycée."
        />
        <meta property="og:title" content="Fiches de Révision - Prépa & Lycée" />
        <meta
          property="og:description"
          content="Des fiches claires, gratuites et efficaces pour réussir vos études."
        />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:url" content="https://ton-site.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ton-site.com/" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-hero" aria-labelledby="hero-title">
          <div className="absolute inset-0 pointer-events-none">
            <div
              style={{ width: 700, height: 700 }}
              className="bg-blue-300 rounded-full blur-3xl opacity-50 absolute -top-48 -left-48"
            ></div>
            <div
              style={{ width: 450, height: 450 }}
              className="bg-blue-200 rounded-full blur-2xl opacity-40 absolute -bottom-40 -right-40"
            ></div>
          </div>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight drop-shadow-md max-w-3xl"
          >
            Fiches de Révision{" "}
            <span className="text-gradient bg-gradient-blue">
              Prépa & Lycée
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl font-light"
          >
            Des fiches claires, gratuites et optimisées pour réussir vos examens
            en prépa scientifique, économique, et au lycée.
          </motion.p>
          <div className="mb-12 w-full max-w-md md:max-w-lg">
            <Image
              src="/illustration-revision.svg"
              alt="Illustration de révision"
              width={600}
              height={360}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>
          <Link
            href="/fiches"
            className="btn-primary text-xl"
            aria-label="Accéder aux fiches de révision"
          >
            Accéder aux Fiches
          </Link>
        </section>

        {/* Recherche rapide */}
        <section className="section-search" aria-labelledby="search-title">
          <h2
            id="search-title"
            className="text-3xl font-extrabold mb-6 text-gray-900"
          >
            🔍 Recherche rapide
          </h2>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <SearchFiches />
          </div>
        </section>

        {/* Avantages sous forme de bulles */}
        <section
          className="section-avantages"
          aria-labelledby="avantages-title"
        >
          <h2
            id="avantages-title"
            className="text-4xl font-extrabold text-center text-blue-800 mb-16"
          >
            Pourquoi choisir nos fiches ?
          </h2>
          <div
            style={{ maxWidth: "80rem", margin: "0 auto" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "🎓 Prépas Scientifiques",
                desc: "Maths, Physique, SII, Informatique et plus.",
                icon: "📚",
              },
              {
                title: "📊 Prépas Économiques",
                desc: "Maths, Culture Générale, Économie approfondie.",
                icon: "💼",
              },
              {
                title: "🏫 Lycée",
                desc: "Fiches par matière et par niveau (Seconde à Terminale).",
                icon: "🎒",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className="relative rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[280px] text-white"
                aria-label={item.title}
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                }}
              >
                <div className="text-6xl mb-5 drop-shadow-lg">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">
                  {item.title}
                </h3>
                <div className="speech-bubble">
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section
          className="section-temoignages"
          aria-labelledby="temoignages-title"
        >
          <h2
            id="temoignages-title"
            className="text-3xl font-extrabold text-center text-gray-900 mb-12"
          >
            Ils ont réussi grâce à nos fiches
          </h2>
          <div
            style={{ maxWidth: "60rem", margin: "0 auto" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
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
            ].map((item, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="bg-blue-50 rounded-3xl shadow-xl p-8 border-l-8 border-blue-400 text-left text-gray-800 italic font-light"
              >
                <p className="mb-4">{item.text}</p>
                <span className="block text-blue-700 font-semibold text-lg">
                  {item.author}
                </span>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-cta" aria-labelledby="cta-title">
          <h2
            id="cta-title"
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
          >
            Prêt à améliorer tes résultats ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
            Accède à des centaines de fiches classées par matière et par programme,
            gratuitement.
          </p>
          <Link
            href="/fiches"
            className="btn-primary text-xl"
            aria-label="Explorer les Fiches"
          >
            Explorer les Fiches
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
