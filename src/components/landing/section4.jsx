import Image from "next/image";

export default function Section4() {
  return (
    <section
      id="services"
      className="min-h-[520px] lg:min-h-[688px] bg-secondary grid grid-cols-1 sm:grid-cols-5 max-sm:divide-y border-y border-black/60 lg:divide-x divide-black/60"
    >
      <div className="col-span-1 py-12 sm:col-span-3 p-6 sm:p-8 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
        <div className="col-span-1 sm:col-span-2">
          <h2 className="heading !font-medium ">
            SMM & <i className="-ms-1 me-0.5">Content</i> Writing <br />
          </h2>
        </div>
        <div className="max-h-[28rem] border-2 border-black/60 aspect-square xl:me-16">
          <Image
            src="/images/smm-image.webp"
            height={420}
            width={360}
            sizes="100"
            alt="Emilia Clarke"
            className="object-cover  object-right size-full  "
          />
        </div>
        <div className="max-h-[28rem] border-2 border-black/60 aspect-square xl:me-16">
          <Image
            src="/images/smm-2nd.webp"
            height={420}
            width={360}
            sizes="100"
            alt="Emilia Clarke"
            className="object-cover  object-right size-full  "
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <p className="text-sm leading-relaxed max-w-xl">
            Boost your brand's voice with our expert SMM and content writing
            services. We craft compelling narratives and engaging posts that
            resonate with your audience, driving interaction and growth across
            all social media platforms.
          </p>
        </div>
      </div>

      <div className="bg-primary p-6 sm:p-8  col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image
          src="/images/bridal.webp"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-contain aspect-[9/16] size-full  "
        />
        <Image
          src="/images/gold-rush.webp"
          height={420}
          width={360}
          sizes="100"
          alt="Emilia Clarke"
          className="object-contain aspect-[9/16] size-full  "
        />
      </div>
    </section>
  );
}
