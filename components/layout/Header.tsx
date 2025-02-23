import React from "react";
import TopNotificationBar from "./HeaderComponents/TopNotificationBar";
import MainHeader from "./HeaderComponents/MainHeader";
import Slider from "./HeaderComponents/Slider";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <TopNotificationBar />
      <MainHeader />
      <Slider />
    </div>
  );
};

export default Header;
