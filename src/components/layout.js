import * as React from "react";
import icon from "../images/TU-Berlin-Logo.png";
import { Link } from "gatsby";
/*
 * Page wrapper adding navbar & footer to all pages
 * TODO: Navbar, Footer
 * Todo: decide a name for the project
 */
const NavBar = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#3282F6" }}>
=======
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#3282F6" }}
    >
>>>>>>> home_design
      <div className="container-fluid">
        <a className="navbar-brand">CO2-Planner</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planner">
                Planner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/mydatacenter" >
                My Datacenters
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#DBF1B5",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", backgroundColor: "#DBF1B5", }}>
        <div style={{ marginRight: "10px" }}>
          <p>Skalierbare Systeme - Gruppe B</p>
        </div>
        <div>
          <img
            src={icon}
            alt="Logo"
            style={{ width: "60px", height: "46px", marginRight: "10px" }}
          />
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
