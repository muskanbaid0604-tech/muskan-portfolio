import Image from "next/image";
import { Button } from "../ui/button";

export default function Section1() {
  return (
    <section className="min-h-[480px] bg-secondary grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 max-sm:divide-y border-t border-black/60 lg:divide-x divide-black/60">
      <div className="bg-primary aspect-auto p-6 sm:p-8 lg:p-16 xl:p-24 col-span-1 lg:col-span-2">
        <Image
          src="/images/emilia.webp"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-cover border border-black/60 size-full grayscale-100"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 py-12 lg:col-span-3 p-6 sm:p-8 lg:p-16 xl:p-24 pb-12">
        <div className="flex max-lg:flex-col w-full justify-between">
          <h2 className="heading pb-4 !font-medium z-10">
            F<i className="-ms-1">or</i> {"  "}
            Bad*ss <br />C<i className="-ms-1 me-0.5">re</i>ative {"  "}
            Bran
            <i className="-ms-0.5">ds</i>
          </h2>
          <div className="max-h-[28rem] border-2 border-black/60 aspect-[3/4] sm:m-8 xl:me-24">
            <Image
              src="/images/img2.jpeg"
              height={420}
              width={360}
              sizes="100"
              alt="Emilia Clarke"
              className="object-cover  object-right size-full grayscale-100"
            />
            <div className="w-full flex sm:justify-end">
              <Button className="sm:mt-6 mt-16 sm:ms-auto">Know More</Button>
            </div>
          </div>
        </div>
        <p className="self-end justify-end text-sm mt-4">
          Emilia Clarke is an actress known for her <br /> roles in film and
          television
        </p>
      </div>
    </section>
  );
}
