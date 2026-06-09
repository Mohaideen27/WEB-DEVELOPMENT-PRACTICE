import React from "react";
import Logo from "@/src/components/Logo";
import Navbar from "./Navbar";
import SidebarPost from "./SidebarPost";
import AccountInfo from "./AccountInfo";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="flex-col my-3">
          <div className="logoComp flex justify-end">
            <div className="logo w-60 mx-4">
              <Logo />
            </div>
          </div>
          <div className="navbarComp flex justify-end">
            <div className="w-67">
              <Navbar />
            </div>
          </div>
          <div className="postComp flex justify-end">
            <div className="w-67">
              <SidebarPost />
            </div>
          </div>
        </div>
        <div className="accountinfoComp flex justify-end">
          <div className="w-70">
            <AccountInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
