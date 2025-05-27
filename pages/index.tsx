import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SearchFiches from "../components/SearchFiches";
import { FaGraduationCap, FaBriefcase, FaSchool, FaSearch } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { temoignages } from "../data/temoignages";
import { SITE_URL } from '../config';

type Temoignage = {
  text: string;
  author: string;
};

export default function Home() {
  const [displayedTemoignages, setDisplayedTemoignages] = useState<Temoignage[]>([]);

  const getRandomTemoignages = () => {
    const shuffled = [...temoignages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setDisplayedTemoignages(getRandomTemoignages());
    const interval = setInterval(() => {
      setDisplayedTemoignages(getRandomTemoignages());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Fiches de Révision - Prépa & Lycée</title>
        <meta
          name="description"
          content="Fiches de révision gratuites et synthétiques pour réussir en classes préparatoires et au lycée."
        />
        <meta property="og:title" content="Fiches de Révision - Prépa & Lycée" />
        <meta property="og:description" content="Des fiches claires, gratuites et efficaces pour réussir vos études." />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:url" content={SITE_URL + '/'} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={SITE_URL + '/'} />
      </Head>

      <Header />

      <main aria-label="Contenu principal">

        {/* SEO Structured Data */}
        <div itemScope itemType="https://schema.org/Product" style={{ display: "none" }}>
          <meta itemProp="name" content="Fiches de révision prépa et lycée" />
          <meta itemProp="description" content="Fiches gratuites pour réussir les examens en prépa et au lycée." />
          <meta itemProp="image" content={`${SITE_URL}/preview-image.png`} />
          <meta itemProp="url" content={SITE_URL + '/'} />

          {/* Aggregate Rating */}
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="reviewCount" content={String(displayedTemoignages.length)} />
          </div>

          {/* Reviews */}
          {displayedTemoignages.map((item, index) => (
            <div key={index} itemProp="review" itemScope itemType="https://schema.org/Review">
              <meta itemProp="reviewBody" content={item.text} />
              <meta itemProp="author" content={item.author} />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="5" />
              </div>
            </div>
          ))}
        </div>

        {/* Hero */}
        <section className="section-hero bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100 relative overflow-hidden py-16 md:py-24">
          {/* Arrière-plan décoratif */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="bg-blue-300 rounded-full blur-3xl opacity-50 absolute -top-48 -left-48" style={{ width: 700, height: 700 }} />
            <div className="bg-blue-200 rounded-full blur-2xl opacity-40 absolute -bottom-40 -right-40" style={{ width: 450, height: 450 }} />
          </div>

          {/* Titre principal */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight drop-shadow-md max-w-3xl"
          >
            Fiches de Révision{" "}
            <span className="text-gradient bg-gradient-blue">Prépa & Lycée</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl font-light"
          >
            Des fiches claires, gratuites et optimisées pour réussir vos examens
            en prépa scientifique, économique, et au lycée.
          </motion.p>

          {/* Illustration */}
          <div className="mb-12 w-full max-w-2xl mx-auto">
            <Image
              src="/index_pages/index_pages.png"
              alt="Illustration de révision pour prépa et lycée"
              width={900}
              height={600}
              sizes="(max-width: 600px) 100vw, 400px"
              className="rounded-custom"
              priority
              quality={80}
            />
          </div>
        </section>

        {/* Recherche rapide */}
        <section className="section-search bg-gray-50 dark:bg-[#181c23] text-gray-900 dark:text-gray-100 py-12">
          <h2 id="search-title" className="text-3xl font-extrabold mb-6 text-gray-900">
            <FaSearch size={24} color="#333" /> Recherche rapide
          </h2>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <SearchFiches />
          </div>
        </section>

        {/* Avantages */}
        <section className="section-avantages bg-white dark:bg-[#23272f] py-20">
          <h2 id="avantages-title" className="text-4xl font-extrabold text-center text-blue-800 dark:text-blue-300 mb-16">
            Pourquoi choisir nos fiches ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
            {[
              { title: "Prépas Scientifiques", desc: "Maths, Physique, Chimie, SII, Informatique et plus.", icon: <FaGraduationCap size={60} color="#4a90e2" /> },
              { title: "Prépas Économiques", desc: "Maths, Informatique (Python).", icon: <FaBriefcase size={60} color="#f5a623" /> },
              { title: "Lycée", desc: "Maths, Physique, Chimie, Informatique, SII.", icon: <FaSchool size={60} color="#7ed321" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[280px] text-white bg-gradient-to-br from-blue-600 to-blue-400 dark:from-gray-800 dark:to-gray-700"
                aria-label={item.title}
              >
                <div className="text-6xl mb-5 drop-shadow-lg" aria-hidden="true">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{item.title}</h3>
                <div className="speech-bubble">
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Témoignages visibles */}
        <section className="section-temoignages bg-gray-50 dark:bg-[#181c23] py-16">
          <h2 id="temoignages-title" className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
            Ils ont réussi grâce à nos fiches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {displayedTemoignages.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="speech-bubble1"
                style={{
                  minHeight: "170px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p>{item.text}</p>
                <span>{item.author}</span>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Appel à l'action final */}
        <section className="section-cta bg-blue-700 dark:bg-gray-900 py-16">
          <h2 id="cta-title" className="text-4xl md:text-5xl font-extrabold mb-6 text-white dark:text-blue-200 drop-shadow-lg">
            Prêt à améliorer tes résultats ?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-300 mb-10 max-w-3xl mx-auto font-light">
            Accède à des centaines de fiches classées par matière et par programme, gratuitement.
          </p>
          <Link href="/fiches" className="btn-primary text-xl" aria-label="Explorer les Fiches">
            Explorer les Fiches
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
