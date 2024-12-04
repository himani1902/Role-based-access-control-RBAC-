import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <h1 className="text-xl font-semibold">Welcome to Admin Panel</h1>
      <nav className="auth-links">
        <Link to="/" className="text-white">Dashboard</Link>
        <Link to="/login" className="text-white">Admin Login</Link>
        <Link to="/register" className="text-white">Create Account</Link>
      </nav>
    </div>
  );
};

export default Navbar;
