import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectProps {
  name: string;
  skillIcon: StaticImageData;
}

function Skill(props: ProjectProps) {
  return (
    <div className="flex items-center mt-4 ml-8">
      <Image
        src={props.skillIcon}
        width={32}
        height={32}
        alt="Picture of the author"
      />
      <div className="ml-4">{props.name}</div>
    </div>
  );
}

export default Skill;
