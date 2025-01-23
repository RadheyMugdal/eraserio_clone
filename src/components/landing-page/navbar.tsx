"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className=" min-w-full bg-black/25 p-6 relative">
      <nav className=" flex justify-between w-[90%] xl:w-[80%] m-auto ">
        <div className=" flex  gap-12 items-center">
          <Image src={"/logo.svg"} alt="logo" width={130} height={100} />
          <ul className="  gap-4 hidden md:flex">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Features</li>
            <li className=" cursor-pointer">Pricing</li>
          </ul>
        </div>
        <div className="  gap-6 items-center hidden md:flex">
          <p className=" font-light cursor-pointer text-white/70 hover:text-white">
            Log in
          </p>
          <Button className=" font-normal">
            Try Eraser
            <MoveRight />
          </Button>
        </div>
        {isOpen ? (
          <X
            className=" cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className=" cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          />
        )}
      </nav>
      <div
        className={clsx(
          "  absolute  top-full w-screen  left-0 p-4  border-b  md:hidden  transition-all duration-300 ease-in-out   "
        )}
      >
        <div className=" flex w-full  justify-center gap-6 ">
          <Button variant={"secondary"} size={"sm"} className="w-1/2">
            {" "}
            Sign in
          </Button>
          <Button className=" font-normal w-1/2" size={"sm"}>
            Try Eraser
            <MoveRight />
          </Button>
        </div>
        <ul className=" flex  flex-col gap-2 text-sm  my-8  items-center justify-center">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
