import React from "react";
import Sidebar from "@/src/components/Sidebar";
import MainSection from "@/src/components/MainSection";

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
        <div className="container3 border w-[63vw]">Right</div>
      </div>
    </div>
  );
};

export default page;
