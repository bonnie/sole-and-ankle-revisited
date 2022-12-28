import React from "react";

import SuperHeader from "../SuperHeader";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
