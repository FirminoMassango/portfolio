import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectProps {
  name: string;
  projectCover: StaticImageData;
}

function Project(props: ProjectProps) {
  return (
    <div className="relative w-full h-60 mb-0 border border-white rounded text-center">
      <Image src={props.projectCover} alt="Picture of the author" fill />
      {/* <span className="relative top-44 bg-zinc-800/80 py-2 px-8 rounded">
        {props.name}
      </span> */}
    </div>
  );
}

export default Project;
