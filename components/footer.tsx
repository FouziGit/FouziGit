import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background safe-bottom" role="contentinfo">
      <div className="px-5 py-12 md:px-10 lg:px-16 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wider uppercase"
              aria-label="Solange — Home"
            >
              Solange
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              {"Maison d'art et d'encheres. Curating the extraordinary since 2024."}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-xs tracking-widest uppercase text-background/40 mb-1">
                Navigation
              </h3>
              <Link
                href="/"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                Accueil
              </Link>
              <Link
                href="/editorial"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                Editorial
              </Link>
              <Link
                href="/editorial#auction"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                Auction
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs tracking-widest uppercase text-background/40 mb-1">
                Contact
              </h3>
              <a
                href="mailto:contact@solange.art"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                contact@solange.art
              </a>
              <span className="text-sm text-background/70">Paris, France</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-background/40">
            {"© 2024 Solange. Tous droits reserves."}
          </p>
          <p className="text-xs text-background/40 tracking-wider uppercase">
            Art & Auction House
          </p>
        </div>
      </div>
    </footer>
  );
}
