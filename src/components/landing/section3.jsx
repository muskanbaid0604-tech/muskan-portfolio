import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";

export default function Section3() {
  return (
    <section className="w-full  border-t border-black/60 relative lg:min-h-screen overflow-x-hidden max-h-[1920px] lg:max-h-[1024px] bg-secondary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Marquee speed={75} direction="right" loop={0}>
          {Array.from({ length: 8 }).map((_, i) => (
            <h2 className="font-editorial-old flex items-center gap-8 text-8xl leading-relaxed sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem]  text-primary">
              WORK {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                className="w-16 h-16 max-md:w-4 max-md:h-4 -mt-12"
              >
                <circle cx="3.5" cy="4" r="3.5" fill="currentColor" />
              </svg>
            </h2>
          ))}
        </Marquee>
      </div>
      <div className="grid relative grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 p-4 grid-rows-1 md:grid-rows-2 lg:grid-rows-4">
        <div className="col-span-2 max-w-36 max-h-32 row-span-1 lg:ms-auto lg:place-end lg:row-span-2">
          <h2 className="text-2xl max-w-36 lg:text-right self-end ">
            Featured Collections
          </h2>
        </div>
        <Image
          src="/images/img2.jpeg"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-cover col-span-2 md:col-span-1 lg:col-span-4 max-h-40 place-end ms-auto max-md:w-1/2 lg:w-1/3 border border-black/75 lg:me-8 lg:-mb-8 lg:row-span-2 aspect-square object-right size-full grayscale-100"
        />
        <Image
          src="/images/img1.jpeg"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-cover mt-8 col-span-2 lg:col-span-6 md:aspect-[3/4] place-items-center mx-auto border border-black/75 lg:row-span-2 max-w-sm h-full w-auto grayscale-100 max-h-96"
        />
        <Image
          src="/images/img1.jpeg"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-cover mt-8 col-span-2 lg:col-span-6 aspect-[3/4] md:aspect-[4/3] place-items-center mx-auto border border-black/75 lg:row-span-2 max-w-sm h-full md:w-full md:h-auto w-auto grayscale-100 max-h-96"
        />
        <p className="lg:row-span-2 place-content-center text-sm text-justify col-span-2 sm:max-w-64">
          A curated collection of projects where vision met execution. Each
          piece represents a deliberate push against the status quo to achieve
          undeniable brand presence and impact.
        </p>
        <div className="lg:row-span-2 place-content-center text-sm text-justify col-span-2 sm:max-w-64">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button className="mt-4 ms-auto w-full">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
