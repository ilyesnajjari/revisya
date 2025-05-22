import Link from "next/link";
import "../styles/Header.css";



export default function Header() {
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
            <Link href="/fiches" className="font-semibold hover:text-blue-300 transition">
              Fiches
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-semibold hover:text-blue-300 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-semibold hover:text-blue-300 transition">
              À propos
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
