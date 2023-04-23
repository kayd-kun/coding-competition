import { SignedIn, SignedOut } from "@clerk/nextjs";
import ProblemList from "~/components/Molecules/dashboardTable";
import NavigationBar from "~/components/navigationBar";

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <SignedIn>
        <ProblemList />
      </SignedIn>
      <SignedOut>Login to see your dashboard</SignedOut>
    </>
  );
};

export default Dashboard;
