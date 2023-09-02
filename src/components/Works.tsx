import Project from "./Project";
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
        <Project name="Mettical" />
        <Project name="Windbnb" />
        <Project name="Random Quote Generator" />
        <Project name="Wheather App" />
      </div>
    </section>
  );
}

export default Works;
