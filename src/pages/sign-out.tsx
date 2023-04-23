// import { SignOut } from '@clerk/nextjs';

import Link from "next/link";

export default function SignOutPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <p>Signed Out</p> <br />
      <p>Redirecting...</p> <br />
        
      <Link href={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
