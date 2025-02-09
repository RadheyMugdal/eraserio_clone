import LoginWithGoogle from "@/components/auth/LoginWithGoogle";
import LoginWithGithub from "@/components/auth/LogniWithGithub";

const page = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center  gap-8  h-[60vh] ">
      <div className=" flex flex-col gap-2 items-center justify-center  ">
        <h1 className=" text-center font-bold text-4xl tracking-tight">
          Login into Excaltext
        </h1>
        <p className=" text-sm text-foreground/50">
          Sign in to continue and start using excaltext
        </p>
      </div>
      <div className=" flex gap-5 flex-col ">
        <LoginWithGoogle />
        <LoginWithGithub />
      </div>
    </div>
  );
};

export default page;
