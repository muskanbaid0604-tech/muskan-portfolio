import Image from "next/image";
import HeroButtons from "../ui/animated-button";

export default function Hero() {
  return (
    <section className="relative w-full max-sm:pt-28 overflow-hidden">
      <Image
        src="/images/first-banner.webp"
        alt="Hero Image"
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="w-full h-auto"
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
