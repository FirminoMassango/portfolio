import Project from "./Project";
import mettical from "../assets/mettical.png";
import wheatherApp from "../assets/weather-app.png";
import windbnb from "../assets/windbnb.png";
import randomQuoteGenerator from "../assets/random-quote-generator.png";

interface FontProps {
  font: string;
}

function Works(props: FontProps) {
  return (
    <section className="h-screen snap-start mb-16 pt-8">
      <h1 className={`text-5xl mb-8 ${props.font}`}>Works</h1>
      <div className="flex">
        <div className="flex flex-col flex-1 items-start mr-8">
          <span className="text-xl font-semibold bg-zinc-800 py-2 px-4 rounded">
            Software Development
          </span>
          <span className="text-white/50 text-xl font-semibold py-2 px-4 my-16">
            UI/UX
          </span>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <Project name="Mettical" projectCover={mettical} />
          <Project name="Windbnb" projectCover={windbnb} />
          <Project
            name="Random Quote Generator"
            projectCover={randomQuoteGenerator}
          />
          <Project name="Wheather App" projectCover={wheatherApp} />
        </div>
      </div>
    </section>
  );
}

export default Works;
