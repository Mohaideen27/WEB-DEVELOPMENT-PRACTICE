import React from "react";
import Search from "./Search";
import Subscribe from "./Subscribe";
import TodaysNews from "./TodaysNews";
import WhatsHappening from "./WhatsHappening";

const SidebarRight = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="subscribe">
        <Subscribe />
      </div>
      <div className="todaysNews">
        <TodaysNews />
      </div>
      <div className="whatsHappening">
        <WhatsHappening />
      </div>
      <div className="whoToFollow"></div>
      <div className="footer"></div>
    </div>
  );
};

export default SidebarRight;
