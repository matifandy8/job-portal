import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <Link to="/" className="footer__logo">
            JobPortal
            <i className="fab fa-firstdraft" />
          </Link>
        </div>
        <div className="footer__column">
          Awards
          <div className="footer__column-item">
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
          </div>
        </div>
        <div className="footer__column">
          Products
          <div className="footer__column-item">
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
            <a>Lorem ipsum</a>
          </div>
        </div>
        <div className="footer__column">
          Follows us
          <div className="footer__social-buttons">
            <a href="">
              <i className="fab fa-instagram circle-icon"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook circle-icon"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin-in circle-icon"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter circle-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
