import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-full w-full min-h-96 lg:h-screen max-h-[1024px] overflow-hidden">
      <Image
        src="/images/img1.jpeg"
        alt="Hero Image"
        fill
        className="w-full h-auto lg:h-screen max-h-[1024px] lg:w-auto object-cover"
      />
      <h1 className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] select-none xl:text-[14rem] font-bold !font-water-brush text-white">
        emilia
      </h1>
    </section>
  );
}
