import CallToAction from "../CallToAction";
import SocialLinks from "../SocialLinks";
import DownArrow from "../DownArrow";

interface FontProps {
  font: string;
}

function Hero(props: FontProps) {
  return (
    <section className="h-screen md:snap-start pt-8 lg:mb-16 lg:pt-24">
      <div className="lg:flex justify-between">
        <h1
          className={`text-white text-5xl md:text-8xl 2xl:text-9xl ${props.font}`}
        >
          Firmino
          <br /> Massango
        </h1>
        <div>
          <span className="mx-auto text-3xl md:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">
            <br />A UX Developer
          </span>
        </div>
      </div>
      <div className="w-full lg:flex justify-between">
        <div className="lg:w-2/3">
          <p className="text-justify md:text-2xl mt-4 lg:mt-12">
            I am a <span className="font-semibold pr-2">Software Engineer</span>
            and a<span className="font-semibold pl-2">UX Designer</span>. I love
            building better experiences for clients / users.
          </p>
          <SocialLinks hidden="sm" />
          <CallToAction marginTopDefault="mt-8" marginTopMedium="xl:mt-14" />
        </div>
        <SocialLinks hidden="md" />
      </div>
      <DownArrow />
    </section>
  );
}

export default Hero;
