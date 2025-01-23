import LoginWithGoogle from "@/components/auth/LoginWithGoogle";
import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center  gap-8  h-[60vh] ">
      <div className=" flex flex-col items-center justify-center  ">
        <h1 className=" text-center font-bold text-4xl tracking-tight">
          Login into Eraser
        </h1>
        <p className=" text-sm mt-2  text-gray-400">
          New to Eraser ?
          <Link href={"/sign-up"} className=" text-blue-500 cursor-pointer">
            {" "}
            Sign up for free
          </Link>
        </p>
      </div>
      <div className=" flex gap-5 flex-col ">
        <div>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default page;
