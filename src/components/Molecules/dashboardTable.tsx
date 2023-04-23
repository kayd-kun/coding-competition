import DashboardProblemTableHeader from "../Atoms/problemTableHeader";
import ProblemTableRow from "../Atoms/problemTableRow";

// Table Component:
// https://tailwindcomponents.com/component/table-7

const ProblemList = () => {
  return (
    <div className="flex flex-col text-center mt-7">
        <h1 className="text-4xl">Problems</h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <DashboardProblemTableHeader />
              <tbody>
                <ProblemTableRow problemDifficulty="Easy" problemName="Two Sums" isSolved/>
                <ProblemTableRow problemDifficulty="Medium" problemName="Max Power" isSolved/>
                <ProblemTableRow problemDifficulty="Hard" problemName="Contiguous Array" isSolved={false} />
                <ProblemTableRow problemDifficulty="Easy" problemName="Least Count" isSolved={false}/>
                <ProblemTableRow problemDifficulty="Hard" problemName="Two Sums" isSolved/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemList;
