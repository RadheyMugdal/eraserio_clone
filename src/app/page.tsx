import { Briefcase } from "lucide-react";

const page = () => {
  return (
    <div>
      <header className=" flex items-center justify-between p-4">
        <h1 className=" font-bold text-2xl flex items-center gap-2 ">
          <Briefcase />
          ExcalText
        </h1>
        <div>
          <nav>
            <ul className=" flex  gap-6 items-center justify-center">
              <li>Home</li>
              <li>Pricing</li>
              <li></li>
            </ul>
          </nav>
        </div>
        <div className=" flex gap-4">
          <button className=" px-4 rounded-lg hover:border-gray-400">
            Login
          </button>
          <button className=" p-2 px-4 bg-primary rounded-full border">
            Sign up
          </button>
        </div>
      </header>
      <div>
        <div className=" flex h-[70vh] lg:h-[60vh] md:h-[70vh]    w-screen items-center justify-center flex-col gap-6 bg-radial from-pink-400 from-40% to-fuchsia-700  ">
          <h1 className=" text-5xl tracking-tighter md:tracking-normal md:text-7xl lg:text-7xl font-bold  bg-gradient-to-b from-primary to-foreground  bg-clip-text  text-transparent ">
            Where Ideas Flow{" "}
          </h1>
          <p className="  md:text-lg lg:w-[30% ] text-sm w-[40%] md:w-[40%] text-center text-foreground/50">
            Collaborate, Design, and Innovate on an Endless Whiteboard.
          </p>
        </div>
        <div
          className="w-[70vw] h-[70vh] border-2 mx-auto rounded-xl relative bg-background 
  before:absolute before:top-0 before:left-0 before:w-full before:h-full 
  before:bg-gradient-to-br before:from-primary before:to-primary before:blur-2xl 
  before:-z-10  "
        >
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            className=" rounded-xl   "
          ></video>
        </div>
        <div className=" h-50vh"></div>
      </div>
    </div>
  );
};

export default page;
