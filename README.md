<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Home Page (home.js)

The home page is the main landing page of the application. It provides an overview of the app and includes links to other pages.

- The page displays a title and a description of the CO2 Planner for Datacenters.
- It showcases the development team, their goals, and their focus on strategic planning based on CO2 emission data provided by Electricity Maps.
- The page also includes a work-in-progress notice and a card component (`BestZoneCard`), which may provide additional information.

## Build Data Centre Page (builddatacentre.js)

The Build Data Centre page allows users to input information about a datacenter.

- Users can enter the name of the datacenter and choose the desired countries for the datacenter's location.
- The page includes options for specifying the energy consumption calculation method, such as hardware components, kWh, or teraflops.
- Users can provide load values using an input chart, and the page offers the ability to select or deselect all countries.
- Upon submission, the data is processed and passed to the `onSubmit` function.

## Utility Functions

### `dc-specs.js`

The `datacenter_t` class represents a datacenter with various specifications. It includes methods to calculate power consumption and retrieve power consumption data for analysis.

### `InputChart.js`

The `InputChart` component utilizes Highcharts to create an interactive chart for inputting load values at different time intervals.

### `array-to-co2.js`

The `calculateCO2History` function is a utility that makes an API call to the backend to calculate the CO2 generated for each hour based on KW/H values. It retrieves CO2 data for a specified zone and performs calculations related to CO2 emissions.
