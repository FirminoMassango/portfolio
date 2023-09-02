interface ProjectProps {
  name: string;
}

function Project(props: ProjectProps) {
  return (
    <div className="w-full h-56 mb-0 border border-white rounded text-center">
      <span className="relative top-44 bg-zinc-800/80 py-2 px-8 rounded">
        {props.name}
      </span>
    </div>
  );
}

export default Project;
