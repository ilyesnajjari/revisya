import Link from "next/link";
import { useRouter } from "next/router"; // Importer useRouter
import "../styles/Header.css";

export default function Header() {
  const router = useRouter(); // Utiliser useRouter pour récupérer le chemin actuel

  return (
    <header className="bg-blue-700 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav
        className="max-w-5xl mx-auto flex justify-between items-center"
        aria-label="Navigation principale"
      >
        <Link href="/" className="text-2xl font-bold" aria-label="Accueil">
          FichesRévision
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className={`btn-primary ${router.pathname === "/" ? "active" : ""}`}
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
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
