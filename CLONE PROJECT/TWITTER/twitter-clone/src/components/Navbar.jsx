import React from "react";

import Logo from "@/src/components/Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="">
        <li>
          <span className="material-symbols-outlined">home</span>Home
        </li>
        <li>
          <span className="material-symbols-outlined">search</span>Explore
        </li>
        <li>
          <span className="material-symbols-outlined">notifications</span>
          Notification
        </li>
        <li>
          <span className="material-symbols-outlined">person_add</span>Follow
        </li>
        <li>
          <span className="material-symbols-outlined">chat_bubble</span>Chat
        </li>
        <li>
          <span className="material-symbols-outlined">g_mobiledata_badge</span>
          Grok
        </li>
        <li>
          <span className="material-symbols-outlined">bookmark</span>Bookmarks
        </li>
        <li>
          <span className="material-symbols-outlined">rocket_launch</span>
          Creator Studio
        </li>
        <li className="flex">
          <span>
            <Logo className="h-5 invert" />
          </span>
          Premium
        </li>
        <li>
          <span className="material-symbols-outlined">person</span>Profile
        </li>
        <li>
          <span className="material-symbols-outlined">pending</span>More
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
