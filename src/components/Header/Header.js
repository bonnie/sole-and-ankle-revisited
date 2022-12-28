import React from "react";

import SuperHeader from "../SuperHeader";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
