import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="nav-links">
            <Link className="nav-link" to="/">
              All Products
            </Link>
            {token ? (
              <>
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
                <button onClick={handleLogOut} className="logOut">
                  Log Out
                </button>
              </>
            ) : (
              <>
                {/* <Link className="nav-link" to="/register">
                  Sign Up
                </Link> */}
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
