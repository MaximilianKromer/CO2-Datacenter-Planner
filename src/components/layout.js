import * as React from "react";
import icon from "../images/TU-Berlin-Logo.png";
/*
 * Page wrapper adding navbar & footer to all pages
 * TODO: Navbar, Footer
 * Todo: decide a name for the project
 */
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/planner">
                Planner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/planner" >
                My Datacenters
              </a>
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
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>
          <p>Skalierbare Systeme - Gruppe B</p>
        </div>
        <div>
          <img
            src={icon}
            alt="Logo"
            style={{ width: "60px", height: "46px" }}
          />
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
