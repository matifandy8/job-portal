import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";

import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const [name, setName] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [auth, setAuth] = useState(false);

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      console.log(parseRes);
      setName(parseRes.user_name);
      console.log(name);
    } catch (err) {
      console.log(err.message);
    }
  }

  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    toast("Logged out successfully!");
    history.push("/signup");
  };

  useEffect(() => {
    getName();
    if (localStorage.getItem("token") !== null) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    console.log(auth);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          Jobox
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
          {localStorage.getItem("token") === null ? (
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
          ) : (
            <ul>
              <li className="navbar__item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <AiOutlineQuestionCircle />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  <AiOutlineLogin />
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </ul>
        <Link to="/signup">
          {localStorage.getItem("token") === null ? (
            <button className="sign-up__btn">Sign in</button>
          ) : (
            <button className="logout__btn" onClick={(e) => logout(e)}>
              Logout
            </button>
          )}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
