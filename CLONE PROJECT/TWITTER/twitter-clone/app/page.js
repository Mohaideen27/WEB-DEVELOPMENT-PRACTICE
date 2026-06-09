import React from "react";
import Sidebar from "@/src/components/Sidebar";

const page = () => {
  return (
    <div className="bg-black text-white flex">
      <div className="container1 border w-[25vw]">
        <Sidebar />
      </div>
      <div className="container2 border w-[45vw]">Main</div>
      <div className="container3 border w-[30vw]">Right</div>
    </div>
  );
};

export default page;
