import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav
        className="max-w-5xl mx-auto flex justify-between items-center"
        aria-label="Navigation principale"
      >
        <Link href="/" className="text-2xl font-bold" aria-label="Accueil">
          FichesRévision
        </Link>

        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <ul className={`flex space-x-6 ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              href="/"
              className={`btn-primary ${router.pathname === "/" ? "active" : ""}`}
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
        </ul>
      </nav>
    </header>
  );
}
