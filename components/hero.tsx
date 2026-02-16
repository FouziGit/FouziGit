import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Haute couture fashion editorial"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-5 pb-16 pt-24 md:px-10 lg:px-16 md:pb-24">
        <div className="max-w-2xl flex flex-col gap-6">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-background/70">
            Editorial & Auction House
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background leading-tight text-balance">
            {"L'art de la rarete"}
          </h1>
          <p className="text-base md:text-lg text-background/80 leading-relaxed max-w-md text-pretty">
            {"Decouvrez nos collections editorials et encheres exclusives. Chaque piece raconte une histoire."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/editorial"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] bg-background text-foreground text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-colors duration-300"
            >
              Explorer
            </Link>
            <Link
              href="/editorial#auction"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] border border-background/50 text-background text-sm tracking-widest uppercase hover:bg-background/10 transition-colors duration-300"
            >
              Encheres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
