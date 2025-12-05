import { Button } from "../ui/button";

const services = [
  {
    title: "Creative Direction",
    description:
      "Defining the visual and conceptual roadmap for campaigns and digital presence.",
    imageUrl: "/images/img1.jpeg",
  },
  {
    title: "Digital Styling & Strategy",
    description:
      "Translating aesthetic vision into conversion-focused online strategies.",
    imageUrl: "/images/img2.jpeg",
  },
  {
    title: "Premium Brand Identity",
    description:
      "Developing cohesive, aspirational, and memorable visual language systems.",
    imageUrl: "/images/img1.jpeg",
  },
  {
    title: "Editorial Design",
    description:
      "Creating high-quality lookbooks, e-commerce assets, and impactful layouts.",
    imageUrl: "/images/img2.jpeg",
  },
];

export default function Section2() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 max-sm:divide-y border-t border-black/60 lg:divide-x divide-black/60"
    >
      <div className="p-6 sm:p-8 lg:p-16 xl:p-24 flex flex-col justify-center items-center text-justify gap-4">
        <h2 className="heading pb-4 lg:leading-14 !font-medium z-10">
          The <i className="-ms-1.5">Muskan</i> <br />
          Baid <i className="-ms-0.5 me-1">Method</i>: <br />
          Beyond <i className="-ms-1 me-0.5">the</i> Brief
        </h2>
        <p className="max-w-xs">
          In a sea of sameness, your brand needs an anchor. I don't just
          execute; I immerse myself in your vision to unearth the raw,
          compelling narrative that connects deeply with your audience. It's not
          about trends—it's about legacy building.
        </p>
        <Button className="sm:ms-52 mt-8">What I Offer</Button>
      </div>
      <div className="">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
