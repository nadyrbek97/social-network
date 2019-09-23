import React, { Component } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";


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
        <Friends />
    </nav>
  );
};

export default Navbar;
