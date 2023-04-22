const CompetitionTitle = () => {
  return (
    <h1 className="text-6xl font-extrabold">
      Inter Collegate <br />
      <strong className="block font-extrabold text-teal-700">
        Coding Competition
      </strong>
    </h1>
  );
};

const Descriptions = () => {
  return (
    <div className="flex justify-center">
      <p className="mt-4 max-w-lg text-3xl">
        You Think you can code? <br />
        Prove it! <br />
      </p>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="mt-8 flex justify-center gap-4 text-center">
      <a
        href="#"
        className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
        Login
      </a>
      <a
        href="#"
        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-800 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
      >
        Register Team
      </a>
    </div>
  );
};

export default function HomeHeader() {
  return (
    <div className="max-w-xl text-center">
      <CompetitionTitle />
      <Descriptions />
      <Buttons />
    </div>
  );
}