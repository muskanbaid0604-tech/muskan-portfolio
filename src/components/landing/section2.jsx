import { Button } from "../ui/button";

const services = [
  {
    title: "Content Creation",
    description:
      "Create unique and engaging content for social media platforms and websites.",
    imageUrl: "/images/img1.jpeg",
  },
  {
    title: "Marketing Strategy",
    description:
      "Develop strategic marketing plans that drive results and growth.",
    imageUrl: "/images/img2.jpeg",
  },
  {
    title: "Branding",
    description: "Build and manage brand identity and visual assets.",
    imageUrl: "/images/img1.jpeg",
  },
];

export default function Section2() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-sm:divide-y border-t border-black/60 lg:divide-x divide-black/60">
      <div className="p-6 sm:p-8 lg:p-16 xl:p-24 flex flex-col justify-center items-center text-justify gap-4">
        <h2 className="heading pb-4 lg:leading-14 !font-medium z-10">
          We Do T<i className="-ms-1.5">hings</i> {"  "}
          <br />
          Differently
          <br />A<i className="-ms-1 me-0.5">ro</i>und {"  "}
          He
          <i className="-ms-0.5">re</i>
        </h2>
        <p className="max-w-xs">
          At Emilia, we believe in pushing the boundaries of creativity and
          innovation. Our team is dedicated to crafting unique solutions that
          set us apart in the industry.
          <br />
          <br />
          Through collaboration and a passion for excellence, we strive to
          deliver results that not only meet but exceed expectations.
        </p>
        <Button className="sm:ms-52 mt-8">Know More</Button>
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
