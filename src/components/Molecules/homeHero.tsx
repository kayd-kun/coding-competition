import CompetitionTitle from "../Atoms/homeCompetitionTitle";
import Descriptions from "../Atoms/homeDescription";
import HomeLoginRegisterButtons from "../Atoms/homeLoginRegister";

export default function HomeHero() {
  return (
    <div className="max-w-xl text-center">
      <CompetitionTitle />
      <Descriptions />
      <HomeLoginRegisterButtons />
    </div>
  );
}