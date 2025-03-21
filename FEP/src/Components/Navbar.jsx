import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    
  return (
    <nav className="navbar">
       <div>
        <Link to="/">
        <h1 className="welcome">Pawsitive Futures</h1>
        </Link>
       </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
