import Link from "next/link";

export function AuctionPreview() {
  return (
    <section
      className="px-5 py-16 md:px-10 lg:px-16 md:py-24 bg-foreground text-background"
      aria-label="Auction preview"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="text-xs tracking-[0.3em] uppercase text-background/50">
          Prochaine vente
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background text-balance">
          Margiela Artisanal Auction
        </h2>
        <p className="text-sm md:text-base text-background/70 leading-relaxed max-w-lg text-pretty">
          {"Une selection de pieces d'exception issues des collections Artisanal de Maison Margiela. Encheres exclusives, curation rigoureuse."}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-4">
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-accent">24</span>
            <span className="text-xs tracking-widest uppercase text-background/50">
              {"Pieces"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-accent">12</span>
            <span className="text-xs tracking-widest uppercase text-background/50">
              Artistes
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl md:text-4xl text-accent">1</span>
            <span className="text-xs tracking-widest uppercase text-background/50">
              {"Soiree"}
            </span>
          </div>
        </div>

        <Link
          href="/editorial#auction"
          className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] bg-background text-foreground text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-colors duration-300 mt-4"
        >
          {"Voir l'enchere"}
        </Link>
      </div>
    </section>
  );
}
