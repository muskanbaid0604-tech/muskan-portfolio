import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[786px] relative border-t border-black/60 flex flex-col justify-evenly items-center">
      <Image
        src="/images/img1.jpeg"
        alt="Hero Image"
        fill
        className="w-full h-[786px] lg:w-auto object-cover grayscale"
      />
      <h2 className={cn("heading pb-4 !font-light text-secondary/90 z-10")}>
        Cr<i className="-ms-1">eat</i>ing {"  "}
        <span className="font-protest-revolution italic main-heading font-base text-primary pe-1">
          A-List{" "}
        </span>{" "}
        Dig<i className="-ms-1 me-0.5">it</i>al {"  "}
        Pre<i className="-ms-1 me-0.5">sen</i>ce.
      </h2>
      <h3 className="text-secondary heading !font-light z-10">
        Muskan Baid. A Creative Force.
      </h3>
    </footer>
  );
}
