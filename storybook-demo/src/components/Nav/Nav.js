import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
