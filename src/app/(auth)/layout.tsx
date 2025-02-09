import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className=" w-screen p-6">
        {/* <Image src="/logo.svg" alt="logo" width={160} height={100} /> */}
        <h1 className=" text-3xl font-bold">Excaltext</h1>
      </header>
      {children}
    </div>
  );
};

export default layout;
