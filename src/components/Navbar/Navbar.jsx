import React, { Component } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <a href="news">News</a>
      </div>
      <div className={style.item}>
        <a href="music">Music</a>
      </div>
    </nav>
  );
};

export default Navbar;
