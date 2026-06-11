import React from "react";
import Search from "./Search";
import Subscribe from "./Subscribe";
import TodaysNews from "./TodaysNews";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";
import Footer from "./Footer";
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
      <div className="whoToFollow">
        <WhoToFollow />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SidebarRight;
