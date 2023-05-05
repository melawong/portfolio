import React from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <div className="header__container header__grid-area">
      <Logo />
      <HamburgerMenu />
    </div>
  );
}
