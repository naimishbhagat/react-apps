import React from "react";
import logo from "../logo.svg";

const Nav = () => {
  return (
    <div className="header">
      <nav className="nav">
        <div className="app-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="rlink">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Countries</a>
            </li>
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
