import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          JobPortal
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="navbar__menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navbar__item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/jobs" className="nav-links" onClick={closeMobileMenu}>
              <CgWorkAlt />
              Jobs
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/latest" className="nav-links" onClick={closeMobileMenu}>
              <AiOutlineHistory />
              Latest
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              <AiOutlineQuestionCircle />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <AiOutlineLogin />
              Sign Up
            </Link>
          </li>
        </ul>
        <Link to="/signup">
          <button className="sign-up__btn">Sign Up</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
