import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <CgWorkAlt />
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineHistory />
              Lastest
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineQuestionCircle />
              About
            </Link>
          </li>
          <li>
            <Link to="/login">
              <AiOutlineLogin />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
