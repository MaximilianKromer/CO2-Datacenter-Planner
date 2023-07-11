import * as React from "react";
import icon from "../images/TU-Berlin-Logo.png";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#3EB6E6" }}
    >
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
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planner">
                Planner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mydatacenter">
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
        backgroundColor: "#3EB6E6",
        left: 0,
        right: 0,
        height: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#3EB6E6",
        }}
      >
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
    </footer >
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
