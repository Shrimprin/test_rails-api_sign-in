"use client";

import Link from "next/link";
import { useUserState } from "@/hooks/useGlobalState";

const Header = () => {
  const [user] = useUserState();
  console.log(user);
  return (
    <header className="bg-white text-black py-3 shadow-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {user.isFetched && (
            <>
              {!user.isSignedIn && (
                <div>
                  <Link href="/sign_in">
                    <button className="bg-blue-500 text-white text-lg rounded-md shadow-none px-4 py-2">
                      Sign in
                    </button>
                  </Link>
                  <Link href="/sign_up">
                    <button className="border border-blue-500 text-lg rounded-md shadow-none px-4 py-2 ml-2">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
              {user.isSignedIn && (
                <div>
                  <p>{user.name}</p>
                  <Link href="/sign_out">
                    <button className="bg-red-500 text-white text-lg rounded-md shadow-none px-4 py-2">
                      Sign out
                    </button>
                  </Link>
                </div>
              )}{" "}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
