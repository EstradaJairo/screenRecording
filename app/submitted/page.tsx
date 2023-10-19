"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Submitted = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const subscribe = searchParams.get("subscribe");

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="p-4 border rounded-lg max-w-md mx-auto">
        <h1 className="text-2xl mb-4">Submitted Data</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Subscribe: {subscribe}</p>
        {/* <Link href="/">
        <a className="block mt-4 text-blue-500">Back to Form</a>
      </Link> */}
      </div>
    </div>
  );
};

export default Submitted;
