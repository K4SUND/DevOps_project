import React from "react";
import "./Navbar.css";

function Navbar({ user }) {

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">MovieApp</a>
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
        {user? (<a href="/login" className="nav-link">Logout</a>):(<a href="/login" className="nav-link">Login</a>) }
      </div>
    </div>
  );
};

export default Navbar;
