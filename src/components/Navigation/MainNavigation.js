import React from "react";
import "./styles.scss";

export const MainNavigation = () => {
  return (
    <div className="nav">
      <h2 className="nav__title">Dashboard</h2>
      <ul className="nav__list">
        <li className="nav__list__item nav__list__item--active">Analytics</li>
        <li className="nav__list__item">Marks</li>
        <li className="nav__list__item">Notes</li>
        <li className="nav__list__item">Calendar</li>
        <li className="nav__list__item">Extras</li>
      </ul>
    </div>
  );
};
