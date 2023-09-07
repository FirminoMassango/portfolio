import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Zen_Dots } from "next/font/google";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";

const montserrat = Montserrat({ subsets: ["latin"] });
const zenDots = Zen_Dots({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main
      className={`h-screen snap-y snap-mandatory overflow-y-scroll p-8 md:p-16 lg:p-28 text-white ${montserrat.className}`}
    >
      <Hero font={zenDots.className} />
      <Works font={zenDots.className} />
      <Services font={zenDots.className} />
      <Skills font={zenDots.className} />
    </main>
  );
}
