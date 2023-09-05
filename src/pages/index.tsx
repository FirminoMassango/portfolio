import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Zen_Dots } from "next/font/google";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Skills from "@/components/Skills";

const montserrat = Montserrat({ subsets: ["latin"] });
const zenDots = Zen_Dots({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  return (
    <main
      className={`h-screen snap-y snap-mandatory overflow-y-scroll p-28 text-white ${montserrat.className}`}
    >
      <Hero font={zenDots.className} />
      <Works font={zenDots.className} />
      <Services font={zenDots.className} />
      <Skills font={zenDots.className} />
    </main>
  );
}
