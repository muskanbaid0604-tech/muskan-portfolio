// app/portfolio/[slug]/page.tsx
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ✅ STATIC GENERATION */
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* ✅ ASYNC PAGE (IMPORTANT) */
export default async function PortfolioPage({ params }) {
  const { slug } = await params; // ✅ unwrap params

  const imageData = services.find((service) => service.slug === slug);

  if (!imageData) return notFound();

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">
      {/* Title */}
      <header className="mb-12 max-w-2xl">
        <h1 className="heading mb-4">{imageData.title}</h1>
        <p className="text-muted-foreground">{imageData.description}</p>
      </header>

      {/* Images */}
      <ul className="flex flex-col items-start justify-start gap-4 sm:gap-8">
        {imageData.images.map((img, index) => (
          <li key={`${slug}-${index}`} className="w-full">
            <Image
              src={img}
              alt={imageData.title}
              width={1200}
              height={800}
              sizes="100vw"
              priority={index === 0}
              className={`h-full w-full max-h-[80vh] object-contain ${
                index % 2 !== 0 ? "" : ""
              }`}
            />
          </li>
        ))}
      </ul>

      {/* Back */}
      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </section>
  );
}
