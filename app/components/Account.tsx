"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="content">
      {session ? (
        <div className="profile flex items-center">
          <Image
            src={session?.user?.image ?? "/avatar.svg"}
            width={40}
            height={40}
            alt="profile image"
            className="rounded-full ml-2 sm:ml-2 mr-2 cursor-pointer "
          />
          <button
            onClick={handleSignOut}
            className="sm:ml-2 cursor-pointer hover:bg-secondary sm:hover:bg-transparent sm:hover:text-secondary  px-2 sm:px-0"
          >
            signout
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="w-full sm:w-min sm:ml-2 cursor-pointer hover:bg-secondary sm:hover:bg-transparent sm:hover:text-secondary  px-2 sm:px-0"
        >
          signin
        </Link>
      )}
    </div>
  );
};

export default Account;
