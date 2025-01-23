import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className=" w-screen p-6">
        <Image src="/logo.svg" alt="logo" width={160} height={100} />
      </header>
      {children}
    </div>
  );
};

export default layout;
