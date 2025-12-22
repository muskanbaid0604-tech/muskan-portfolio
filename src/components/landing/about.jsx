export default function Inspiration() {
  return (
    <div id="about">
      <section className="grid min-h-[24rem] gap-4 px-4 py-8 sm:px-8 lg:px-16 xl:px-24 sm:grid-cols-2">
        <div className="flex flex-col justify-end">
          <div>
            <h3 className="text-xl font-light max-lg:w-full sm:text-2xl md:text-3xl lg:max-w-sm">
              What do I actually do?
            </h3>
            <ul className="p-4">
              <li className="tracking-tight font-medium text-sm">
                › I design with intention.
              </li>
              <li className="tracking-tight font-medium text-sm">
                › Every layout has a hierarchy.
              </li>
              <li className="tracking-tight font-medium text-sm">
                › Every colour has a mood.
              </li>
              <li className="tracking-tight font-medium text-sm">
                › Every visual has a reason to exist - otherwise, it gets
                deleted.
              </li>
            </ul>
          </div>
          <p className="text-sm max-w-sm pt-4 tracking-tight">
            I think in grids, speak in typography, and see colours in hex codes
            before I see them in words. Design isn&apos;t just my job but
            it&apos;s the lens through which I look at everything.
          </p>
        </div>
        <div className="flex justify-center pt-8 gap-4 flex-col">
          <h4 className="max-w-xs text-lg font-medium">
            I&apos;m Muskan Baid, a graphic designer who obsesses over the
            details people pretend not to notice.
          </h4>

          <div>
            <p className="text-sm max-w-sm pt-4">
              I work confidently across the Adobe Suite - Photoshop for
              precision, Illustrator for identity, InDesign for structure - and
              I blend that with a strong hold over AI tools to speed up
              creativity without losing the human touch.
            </p>
            <h5 className="mt-8 p-2 text-lg leading-tight max-w-sm">
              <span className="uppercase font-medium">
                My workflow sits at a sweet spot:
              </span>
              <br />
              <span className="bg-primary text-primary-foreground py-0.5 px-1">
                logic + instinct, strategy + aesthetics.
              </span>
            </h5>
          </div>
        </div>
        {/* <h4 className="max-w-xs">
          BELOW - WORKING ON TOSA&apos;S VIDEO PRODUCTION DETAILS.
        </h4> */}
      </section>

      {/* <section className="grid gap-4 px-4 py-8 pb-12 sm:grid-cols-2 lg:pb-24">
        <div className="flex gap-4 max-lg:flex-col">
          <h3 className="text-xl font-light max-lg:w-full sm:text-2xl md:text-3xl lg:w-36">
            belief in great drawings
          </h3>

          <p className="font-light  max-lg:w-full lg:max-w-sm lg:ps-16">
            say after he completes a highly detailed 15000 sq ft site. Humble to
            the core, always letting his work speak for himself. He stayed with
            us in our most prestigious site. Him being at site bring unique
            harmony between studio and on site creation. Deeply understaing what
            are motive are behind certain designs, his patents and perseverence
            helps us realise these unique vision of the studio to reality.
            <br />
            <br />
            Unique studio has been known him for more than 15 years, but in
            recent found a synergy to work on certain high-end projects where
            there is a comfortable and ambitous harmony between one graphite,
            clients and Ramnarayan Suthar.
          </p>
        </div>
        <div className="flex gap-4 max-lg:flex-col lg:justify-center">
          <h4 className="lg:max-w-44">
            ABOVE - COMPLETE SET OF DRAWING DISCUSSION BEFORE NEPAL SITE BEGINS
            CONSTRUCTION.
            <br />
            <br />
            LEFT - SKETCHES BEFORE DRAWINGS PRODUCTION
          </h4>
        </div>
      </section> */}

      <section className="grid min-h-72 gap-4 pb-12 px-4 py-8 sm:px-8 lg:px-16 xl:px-24 lg:grid-cols-3 sm:gap-8 lg:pb-24">
        <div className="flex flex-1 gap-4 w-full items-center">
          <h3 className=" w-full text-3xl lg:max-w-48">Process & Philosophy</h3>
          {/* <p className="self-end font-light lg:max-w-60">
            LEFT - TANIYA AND PRACHI WORKING ON PROCESS MODEL IN FARM HOUSE
            PROJECT (THE NEEM TRIO)
          </p> */}
        </div>
        <div className="grid tracking-tight  lg:col-span-2 gap-8">
          <div className="space-y-1  text-justify ">
            <p>
              I love building visual systems that are clean, bold, and
              consistent. From branding to social media to digital visuals,
            </p>
            <p>
              I make sure everything feels cohesive, balanced, and unmistakably
              “designed,” not just arranged.
            </p>
          </div>
          <div className="space-y-1  text-justify">
            <p>
              Along with visuals, I also handle social media management and
              content writing,
            </p>
            <p>
              which means I shape how a brand looks and how it speaks. Design
              sets the tone; content carries it forward.
            </p>
          </div>
          <div className="space-y-1  text-justify">
            <p>
              If you want someone who understands design psychology, reads
              spacing like body language,
            </p>
            <p>
              and doesn&apos;t hesitate to tell you when your layout is
              screaming for help! Hi. I&apos;m that designer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
