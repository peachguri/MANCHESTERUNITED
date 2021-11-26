import React, { Component } from "react";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-icon">
        <div className="menu-icon">
          <img src="./logoemyu.svg" alt=""></img>
        </div>
        <h1 className="navbar-title">
          <a href="/homepage">EMYU</a>
        </h1>
      </nav>
    );
  }
}

export default Navbar;