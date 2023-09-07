import React from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <div className="header__main">
      <div className="header__container">
        <Logo />
        <HamburgerMenu />
      </div>
    </div>
  );
}
