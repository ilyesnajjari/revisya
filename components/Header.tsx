import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydratation côté client
  useEffect(() => {
    setHydrated(true);
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("darkMode")
        : null;
    if (stored === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode, hydrated]);

  if (!hydrated) return null; // Évite le clignotement SSR/CSR

  return (
    <header className="bg-blue-700 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav
        className="max-w-5xl mx-auto flex justify-between items-center"
        aria-label="Navigation principale"
      >
        {/* Logo à gauche */}
        <Link href="/" className="text-2xl font-bold" aria-label="Accueil">
          Revisya
        </Link>

        {/* Menu à droite */}
        <div className="flex items-center">
          <button
            className="menu-toggle md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
          <ul className={`flex items-center space-x-6 ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                href="/"
                className={`font-semibold hover:text-blue-300 transition ${
                  router.pathname === "/" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/fiches"
                className={`font-semibold hover:text-blue-300 transition ${
                  router.pathname.startsWith("/fiches") ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Fiches
              </Link>
            </li>
            <li>
              <Link
                href="/cours"
                className={`font-semibold hover:text-blue-300 transition ${
                  router.pathname === "/cours" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Cours particuliers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-semibold hover:text-blue-300 transition ${
                  router.pathname === "/contact" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            {/* Bouton mode nuit dans le menu */}
            <li>
              <span
                onClick={() => setDarkMode((v) => !v)}
                aria-label={darkMode ? "Désactiver le mode nuit" : "Activer le mode nuit"}
                tabIndex={0}
                role="button"
                className="p-2 rounded-full cursor-pointer hover:bg-blue-800 transition flex items-center"
                style={{ lineHeight: 0 }}
              >
                {darkMode ? (
                  <FaSun className="w-6 h-6 text-yellow-300" />
                ) : (
                  <FaMoon className="w-6 h-6 text-blue-100" />
                )}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
