import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12 text-sm text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} MonSiteRévision - Tous droits réservés</p>
        <div className="flex space-x-6">
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions Légales
          </Link>
          <Link href="/confidentialite" className="hover:text-white">
            Confidentialité
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
