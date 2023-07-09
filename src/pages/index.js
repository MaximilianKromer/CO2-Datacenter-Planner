import * as React from "react";
import Layout from "../components/layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 520,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 40,
  color: "#663399",
  maxWidth: 800,
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Planner Page - Starting Point",
    url: "/planner",
    color: "#FF0000",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Welcome
          <br />
          <span style={headingAccentStyles}>
            Let's see our project!
          </span>
        </h1>
        <h3 style={paragraphStyles}>
          Thanks to us you can check what air pollution potentially creates a new data center
          in a given region and what costs it may incur!
        </h3>
        <h4 style={paragraphStyles}>
          Hope you like it!
        </h4>
        <ul style={listStyles}>
          {/* <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {docLink.text}
            </a>
          </li> */}
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>CO2 Datacenter Planner</title>;
