interface ProblemTableRowProps {
  problemDifficulty: string;
  problemName: string;
  isSolved: boolean;
}

export default function ProblemTableRow(props: ProblemTableRowProps) {

    const table_bg_color = props.isSolved ? "bg-green-100" : "bg-red-200";

  return (
    <tr className={`border-b ${table_bg_color} border-pink-300`}>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        {props.problemDifficulty}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
        {props.problemName}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
        {props.isSolved ? "Yes" : "No"}
      </td>
    </tr>
  );
}
