import CallToAction from "../CallToAction";
import SocialLinks from "../SocialIcons";

interface FontProps {
  font: string;
}

function Hero(props: FontProps) {
  return (
    <section className="md:h-screen md:snap-start pt-8 lg:mb-16 lg:pt-24">
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
          <CallToAction marginTopDefault="md:mt-8" marginTopMedium="xl:mt-14" />
        </div>
        <SocialLinks />
      </div>
      <div className="grid place-content-center animate-bounce none">
        <svg
          width="24"
          height="48"
          viewBox="0 0 24 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-16"
        >
          <path
            d="M10.9393 80.0607C11.5251 80.6464 12.4749 80.6464 13.0607 80.0607L22.6066 70.5147C23.1924 69.9289 23.1924 68.9792 22.6066 68.3934C22.0208 67.8076 21.0711 67.8076 20.4853 68.3934L12 76.8787L3.51472 68.3934C2.92894 67.8076 1.97919 67.8076 1.3934 68.3934C0.807615 68.9792 0.807615 69.9289 1.3934 70.5147L10.9393 80.0607ZM10.5 6.55671e-08L10.5 79L13.5 79L13.5 -6.55671e-08L10.5 6.55671e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
