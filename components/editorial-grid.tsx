import Image from "next/image";

const items = [
  {
    title: "La Matiere Premiere",
    category: "Textile",
    image: "/images/editorial-1.jpg",
    alt: "Raw textile close-up",
    span: "md:col-span-2 md:row-span-2",
    aspectClass: "aspect-[4/5]",
  },
  {
    title: "Formes Pures",
    category: "Architecture",
    image: "/images/editorial-3.jpg",
    alt: "Pure architectural forms in fashion",
    span: "",
    aspectClass: "aspect-square",
  },
  {
    title: "Le Geste",
    category: "Artisanat",
    image: "/images/hero.jpg",
    alt: "Artisan craftsmanship detail",
    span: "",
    aspectClass: "aspect-square",
  },
];

export function EditorialGrid() {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-16 md:py-24" aria-label="Editorial grid">
      <div className="flex flex-col gap-3 mb-10 md:mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Collection
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-balance">
          {"Pieces editorials"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden bg-muted ${item.span}`}
          >
            <div className={`relative w-full ${item.aspectClass}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </div>

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-xs tracking-[0.2em] uppercase text-background/60 mb-1">
                {item.category}
              </p>
              <h3 className="font-serif text-lg md:text-xl text-background">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
