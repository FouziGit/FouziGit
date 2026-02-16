import Image from "next/image";

export function EditorialHero() {
  return (
    <section className="relative min-h-[60dvh] md:min-h-[70dvh] flex flex-col" aria-label="Editorial hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial-2.jpg"
          alt="Architectural fashion editorial"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 flex flex-col justify-end flex-1 px-5 pb-12 pt-24 md:px-10 lg:px-16 md:pb-20">
        <div className="max-w-xl flex flex-col gap-4">
          <p className="text-xs tracking-[0.3em] uppercase text-background/60">
            Editorial
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-background leading-tight text-balance">
            Entre ombre et lumiere
          </h1>
          <p className="text-sm md:text-base text-background/70 leading-relaxed text-pretty">
            {"Explorez nos editorials : mode, art, architecture. Chaque image est une narration visuelle."}
          </p>
        </div>
      </div>
    </section>
  );
}
