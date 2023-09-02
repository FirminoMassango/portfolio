interface TableProps {
  firstCol: string;
  secondCol: string;
  thirdCol?: string;
}

function Table(props: TableProps) {
  return (
    <table className="table-auto w-full">
      <tbody>
        <tr className="text-center">
          <td className="font-semibold border-2 border-zinc-500 py-8">
            {props.firstCol}
          </td>
          <td className="font-semibold border-2 border-zinc-600 py-8">
            {props.secondCol}
          </td>
          {props.thirdCol && (
            <td className="font-semibold border-2 border-zinc-600 py-8 ">
              {props.thirdCol}
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
