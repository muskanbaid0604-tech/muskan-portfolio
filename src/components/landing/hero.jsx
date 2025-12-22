import Image from "next/image";
import HeroButtons from "../ui/animated-button";

export default function Hero() {
  return (
    <section className="relative h-full w-full! min-h-96 sm:min-h-[30rem] max-sm:-mb-20 max-sm:mt-auto lg:min-h-[36rem] aspect-video xl:min-h-[960px] xl:h-auto -my-4 overflow-hidden">
      <Image
        src="/images/first-banner.webp"
        alt="Hero Image"
        fill
        sizes="100"
        className="w-full h-auto object-contain aspect-video sm:object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {/* <h1 className="text-8xl sm:text-9xl !font-water-brush md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold text-white">
            muskan
          </h1> */}
          <p className="text-white/90 text-sm sm:text-base">
            Curating Digital Excellence | Since '25
          </p>
          {/* <Button>View My Best Work</Button> */}
          <HeroButtons>View My Best Work</HeroButtons>
        </div>
      </div>
    </section>
  );
}
