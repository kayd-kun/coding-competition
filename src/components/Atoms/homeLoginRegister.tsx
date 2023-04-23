import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const HomeLoginRegisterButtons = () => {
  return (
    <>
      <SignedOut>
        <div className="mt-8 flex justify-center gap-4 text-center">
          <Link
            href="/sign-in"
            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            <button>Login</button>
          </Link>
          <Link
            href="/sign-up"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-800 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            <button>Register</button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-8 flex justify-center gap-4 text-center">
          <a
            href="/dashboard"
            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            My Dashboard
          </a>
        </div>
      </SignedIn>
    </>
  );
};

export default HomeLoginRegisterButtons;
