interface TableProps {
  firstCol: string;
  secondCol: string;
  thirdCol?: string;
}

function Table(props: TableProps) {
  return (
    <>
      <div
        className={`w-full grid md:grid-cols-${
          props.thirdCol ? "3" : 2
        } text-center`}
      >
        <div className="font-semibold text-sm md:text-base border-2 border-zinc-500 py-8">
          {props.firstCol}
        </div>
        <div
          className={`font-semibold text-sm md:text-base border-2 border-zinc-500 border-y-0 md:border-y-2 md:border-x-0 py-8 ${
            !props.thirdCol ? "border-b-2 md:border-r-2" : ""
          }`}
        >
          {props.secondCol}
        </div>
        {props.thirdCol && (
          <div className="font-semibold text-sm md:text-base border-2 border-zinc-500 py-8">
            {props.thirdCol}
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
