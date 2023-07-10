import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import { Link } from "gatsby";
import BestZoneCard from "../components/beste_standort";
import YourComponent from "../components/best_standort2";

const Home = () => {
  const titleVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1.25 } },
  };
  const linkStyle = {
    color: "#e74c3c",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const linkHoverStyle = {
    color: "#c0392b",
  };
  const sectionStyle = {
    margin: "100px 0",
  };
  const subtitleStyle = {
    fontSize: "32px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const textStyle = {
    fontSize: "18px",
  };

  return (
    <Layout>
      <div style={{ backgroundColor: "#f0f5f9", padding: "20px" }}>
        <motion.div
          className="title-container"
          initial="initial"
          animate="animate"
          variants={titleVariants}
        >
          <h1 className="title">
            <strong>CO2</strong> Planner for Datacenters
          </h1>

          <h3 style={{ color: "#3498db" }}>
            Plan, manage and visualize energy consumption and CO2 emissions for
            your datacenters.
          </h3>
        </motion.div>
        <div class="container text-center">
          <div class="row">
            <div class="col-8">
              <div style={sectionStyle}>
                <h2 style={subtitleStyle}>Who are we?</h2>
                <p style={textStyle}>
                  We are a small team of student developers @ TU-Berlin ,
                  Germany.
                </p>
                <p style={textStyle}>
                  Our goal is to provide a tool that facilitates the planning
                  and managing of <strong>CO2</strong> emissions of Datacenters
                  in Europe.
                </p>
                <p style={textStyle}>
                  We focus in strategic planning based on <strong>CO2</strong>{" "}
                  emission data provided by Electricity Maps.
                </p>
                <p style={textStyle}>This site is a WIP.</p>
              </div>
            </div>
            <div class="col-4" style={{ margin: "100px 0" }}>
              <YourComponent></YourComponent>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div style={{ margin: "100px 0" }}>
                <h2 style={{ textAlign: "center" }}>Our Tools:</h2>
                <ul style={{ marginLeft: "20px" }}>
                  <li style={{ fontSize: "24px", marginBottom: "30px" }}>
                    <Link to="/planner" style={linkStyle}>
                      Datacenter Planner
                    </Link>
                  </li>

                  <li style={{ fontSize: "24px", marginBottom: "30px" }}>
                    <Link to="/docs" style={linkStyle}>
                      Documentation
                    </Link>
                  </li>
                  <li style={{ fontSize: "24px", marginBottom: "30px" }}>
                    Coming Soon...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>CO2 Datacenter Planner</title>;
