import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  if (token) {
    return (
      <div className="navbar">
        <div className="nav-logo">
        <Link to="/"><img src={logo} alt="The Mini Store" /></Link>
        </div>

        <div className="nav-login">
            <Link to="/"><button onClick={handleLogout}>Logout</button></Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="navbar">
        <div className="nav-logo">
        <Link to="/"><img src={logo} alt="The Mini Store" /></Link>
        </div>

        <div className="nav-login">
            <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    )
  }

}

export default Navbar;
