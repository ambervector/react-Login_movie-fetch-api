import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.main_navigation}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/companyInfo"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Company Info
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
