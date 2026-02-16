import Image from "next/image";
import Link from "next/link";

const editorials = [
  {
    title: "Margiela Artisanal",
    subtitle: "Collection Automne 2024",
    description:
      "Une exploration de la deconstruction et de la reconstruction dans la haute couture contemporaine.",
    image: "/images/editorial-1.jpg",
    alt: "Margiela Artisanal collection details",
  },
  {
    title: "Silhouettes Architecturales",
    subtitle: "Edition Speciale",
    description:
      "Quand la mode rencontre l'architecture : lignes epurees et volumes sculpturaux.",
    image: "/images/editorial-2.jpg",
    alt: "Architectural silhouettes in fashion",
  },
  {
    title: "Heritage Deconstructed",
    subtitle: "Capsule Exclusive",
    description:
      "L'heritage de la maison revisite a travers le prisme de l'art contemporain.",
    image: "/images/editorial-3.jpg",
    alt: "Deconstructed fashion heritage pieces",
  },
];

export function FeaturedEditorial() {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-16 md:py-24" aria-label="Featured editorials">
      {/* Section header */}
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Editorials
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
          Selections du moment
        </h2>
      </div>

      {/* Editorial grid */}
      <div className="flex flex-col gap-12 md:gap-16">
        {editorials.map((item, index) => (
          <article
            key={item.title}
            className={`flex flex-col gap-6 md:gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={80}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-4 md:w-1/2 md:px-6 lg:px-12">
              <p className="text-xs tracking-[0.3em] uppercase text-accent">
                {item.subtitle}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-balance">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
              <Link
                href="/editorial"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300 mt-2 group"
              >
                {"Decouvrir"}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  {"→"}
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
