import React from "react";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <img src="%PUBLIC_URL%/assets/images/icons/arrow_back.svg" />
      </div>
      <div className="header__search"></div>
      <div className="header__actions"></div>
    </header>
  );
};
