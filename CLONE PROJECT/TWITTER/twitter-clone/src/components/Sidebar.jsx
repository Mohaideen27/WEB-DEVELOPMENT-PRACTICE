import React from "react";
import Logo from "@/src/components/Logo";
import Navbar from "./Navbar";
import SidebarPost from "./SidebarPost";
import AccountInfo from "./AccountInfo";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="flex-col my-5">
          <div className="logoComp flex justify-end">
            <div className="logo w-50 mx-4">
              <Logo />
            </div>
          </div>
          <div className="navbarComp flex justify-end">
            <Navbar />
          </div>
          <div className="postComp">
            <SidebarPost />
          </div>
        </div>
        <div className="accountinfoComp flex justify-end">
          <AccountInfo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
