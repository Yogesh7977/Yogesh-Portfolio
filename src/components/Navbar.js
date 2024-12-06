import React from "react";
import logo from "../images/yogeshLogo.png";
import "../App.css";
import NavbarStyle from "../CSS/navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg border-bottom border-body ${NavbarStyle.navbar}`}
        style={{
          backgroundColor: "#121212",
          color: "white",
          minHeight: "80px",
          paddingInlineStart: "30px",
        }}
      >
        <div className={`container-fluid ${NavbarStyle["container-fluid"]}`}>
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="44"
              style={{ margin: "inherit" }}
            />
            Yogesh Anabhavne
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class={`navbar-toggler-icon ${NavbarStyle['navbar-toggler-icon']}`}></span>
    </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ marginRight: "200px", justifyContent: "center" }}
          >
            <ul
              className={`navbar-nav mb-4 mb-lg-0 ${NavbarStyle["navbar-nav"]}`}
              style={{ gap: "55px" }}
            >
              <li className={`nav-item ${NavbarStyle["nav-item"]}`}>
                <Link
                  smooth={true}
                  className={`nav-link ${NavbarStyle[`nav-link`]}`}
                  aria-current="page"
                  to="/"
                  style={{ cursor: "default" }}
                >
                  INTRO
                </Link>
              </li>
              <li className={`nav-item ${NavbarStyle["nav-item"]}`}>
                <Link
                  smooth={true}
                  duration={400}
                  className={`nav-link ${NavbarStyle[`nav-link`]}`}
                  to="about"
                  style={{ cursor: "default" }}
                >
                  ABOUT
                </Link>
              </li>
              <li className={`nav-item ${NavbarStyle["nav-item"]}`}>
                <Link
                  smooth={true}
                  className={`nav-link ${NavbarStyle[`nav-link`]}`}
                  to="works"
                  style={{ cursor: "default" }}
                >
                  WORKS
                </Link>
              </li>
              <li className={`nav-item ${NavbarStyle["nav-item"]}`}>
                <Link
                  smooth={true}
                  className={`nav-link ${NavbarStyle[`nav-link`]}`}
                  to="contact"
                  style={{ cursor: "default" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
