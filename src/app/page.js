import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Section1 from "@/components/landing/section1";
import Section2 from "@/components/landing/section2";
import Section4 from "@/components/landing/section4";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section1 />
      <About />
      <Section2 />
      {/* <Section3 /> */}
      <Section4 />
    </main>
  );
}
