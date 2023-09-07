interface TechStackProps {
  stack: string;
}

export default function TechStack(props: TechStackProps) {
  return (
    <div className="px-16 py-2 bg-zinc-700 rounded">
      <span className="font-medium">{props.stack}</span>
    </div>
  );
}
