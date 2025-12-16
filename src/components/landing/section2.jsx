import { services } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import TitleScroll from "./titleScroll/page";

export default function Section2() {
  return (
    <section
      id="portfolio"
      className="grid grid-cols-1 relative overflow-hidden md:grid-cols-2 max-sm:divide-y border-t border-black/60 lg:divide-x divide-black/60"
    >
      <div className="p-6 sm:p-8 lg:p-16 xl:p-24 flex flex-col justify-center items-center text-justify gap-4">
        <h2 className="heading pb-4 lg:leading-14 max-sm:justify-start max-sm:self-start max-sm:ps-8 !font-medium z-10">
          The <i className="-ms-1.5">Muskan</i> <br />
          Baid <i className="-ms-0.5 me-1">Method</i>: <br />
          Beyond <i className="-ms-1 me-0.5">the</i> Brief
        </h2>
        <p className="max-w-xs">
          In a sea of sameness, your brand needs an anchor. I don't just
          execute; I immerse myself in your vision to unearth the raw,
          compelling narrative that connects deeply with your audience. It's not
          about trends-it's about legacy building.
        </p>
        <Button className="sm:ms-52 mt-8">What I Offer</Button>
      </div>
      <div className="relative md:z-10">
        {services.map((service, i) => (
          <div
            key={service.id ?? `service-${i}`}
            className="flex flex-col md:flex-row items-stretch
                 odd:md:flex-row-reverse"
          >
            <img
              className="w-full border border-black/60 md:w-1/2 h-64 md:h-80 lg:h-96 object-cover grayscale"
              src={service.imageUrl}
              alt={service.title}
              loading="lazy"
            />

            <div className="bg-primary text-white p-6 flex flex-col justify-center h-64 md:h-80 lg:h-96 md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-editorial-new font-medium leading-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base mt-3 font-light text-accent max-w-xs">
                {service.description}
              </p>
              <Button className="mt-6 w-max" asChild variant={"secondary"}>
                <Link href={`/portfolio/${service.slug}`}>View More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="md:absolute col-span-1 md:bottom-0 md:left-1/2 md:-translate-x-1/2 ">
        <TitleScroll />
      </div>
    </section>
  );
}
