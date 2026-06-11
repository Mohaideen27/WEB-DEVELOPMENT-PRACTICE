import React from "react";
import Sidebar from "@/src/components/Sidebar";
import MainSection from "@/src/components/MainSection";
import SidebarRight from "@/src/components/SidebarRight";

const page = () => {
  return (
    <div className="bg-black text-white flex">
      <div className="container1 w-[26vw]">
        <Sidebar />
      </div>
      <div className="container2 border border-[#333333] flex w-[74vw]">
        <div className="center w-full">
          <MainSection />
        </div>
        <div className="container3 border border-[#333333] w-[63vw]">
          <div className="mainArea h-full w-97 flex justify-center">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
