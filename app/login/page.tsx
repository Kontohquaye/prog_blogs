"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

import Loading from "../loading";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);
  if (session.status === "loading") return <Loading />;
  return (
    session.status !== "authenticated" && (
      <section className="website">
        <form>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => {
              signIn("google");
            }}
          >
            <FcGoogle className="text-3xl" /> <span>signIn with github</span>
          </div>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => {
              signIn("github");
            }}
          >
            <VscGithub className="text-3xl" />
            <span>signIn with google</span>
          </div>
        </form>
      </section>
    )
  );
};

export default Login;
