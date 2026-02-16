import { VideoPlayer } from "@/components/video-player";

export function AuctionSection() {
  return (
    <section
      id="auction"
      className="px-5 py-16 md:px-10 lg:px-16 md:py-24 bg-foreground text-background scroll-mt-20"
      aria-label="Auction video"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Section header */}
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-[0.3em] uppercase text-background/50">
            Vente exclusive
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background text-balance">
            {"Enchere Margiela"}
          </h2>
          <p className="text-sm md:text-base text-background/60 leading-relaxed max-w-xl text-pretty">
            {"Decouvrez en video les pieces d'exception proposees lors de notre prochaine vente. Chaque lot a ete selectionne pour son caractere unique et son histoire."}
          </p>
        </div>

        {/* Video */}
        <div className="w-full">
          <VideoPlayer
            src="/videos/auction.mp4"
            title="Margiela Artisanal — Lot Preview"
            description="Apercu des lots presentes lors de la vente du 15 mars 2025. Pieces issues de la collection Artisanal, saisons 2018 a 2024."
          />
        </div>

        {/* Auction details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-background/10">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-background/40">
              Date
            </h3>
            <p className="font-serif text-lg text-background">15 Mars 2025</p>
            <p className="text-sm text-background/60">{"19h00 — Paris, France"}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-background/40">
              Estimation
            </h3>
            <p className="font-serif text-lg text-background">{"€ 150,000 — 420,000"}</p>
            <p className="text-sm text-background/60">Estimation globale</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-background/40">
              Catalogue
            </h3>
            <p className="font-serif text-lg text-background">24 lots</p>
            <p className="text-sm text-background/60">{"Consultation sur rendez-vous"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
