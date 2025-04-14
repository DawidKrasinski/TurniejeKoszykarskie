import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full  bg-[#06010D] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-boldonse text-xl font-bold tracking-tight text-[#F27507] mb-4">
              TurniejeKoszykarskie.pl
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              TurniejeKoszykarskie.pl – miejsce dla graczy i organizatorów.
              Znajdź swój turniej, dołącz do drużyny lub zorganizuj własne
              wydarzenie.
            </p>
          </div>
          <div>
            <div className="text-lg font-medium mb-4">Szybkie linki</div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/turnieje"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Turnieje
                </Link>
              </li>
              <li>
                <Link
                  href="/dla-organizatorow"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Dla organizatorów
                </Link>
              </li>
              <li>
                <Link
                  href="/dla-zawodnikow"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Dla zawodników
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Regulamin
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#F27507] transition-colors"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-medium mb-4">Śledź nas</div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F27507] transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F27507] transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#F27507] transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TurniejeKoszykarskie.pl. Wszelkie
          prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
