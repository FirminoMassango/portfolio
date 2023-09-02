import Project from "./Project";
import wheatherApp from "../assets/weather-app.png";
import windbnb from "../assets/windbnb.png";
import randomQuoteGenerator from "../assets/random-quote-generator.png";

interface FontProps {
  font: string;
}

function Works(props: FontProps) {
  return (
    <section className="mb-16">
      <h1 className={`text-5xl mb-8 ${props.font}`}>Works</h1>
      <div className="mb-8">
        <span className="text-2xl font-semibold mr-8">
          Software Development
        </span>
        <span className="text-white/50 text-2xl font-semibold">UI/UX</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Project name="Mettical" projectCover={wheatherApp} />
        <Project name="Windbnb" projectCover={windbnb} />
        <Project
          name="Random Quote Generator"
          projectCover={randomQuoteGenerator}
        />
        <Project name="Wheather App" projectCover={wheatherApp} />
      </div>
    </section>
  );
}

export default Works;
