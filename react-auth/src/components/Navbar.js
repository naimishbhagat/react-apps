import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  let buttons;
  const logout = () => {
    localStorage.removeItem("token");
    props.setUser({});
  };
  if (props.user) {
    buttons = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link onClick={logout} className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    );
  } else {
    buttons = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <Link to="/">Home</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          {buttons}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
