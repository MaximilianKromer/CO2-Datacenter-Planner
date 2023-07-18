<h1 align="center">
  CO2-Datacenter-Planner Documentation
</h1>

## Home Page (home.js)

The home page is the main landing page of the application. It provides an overview of the app and includes links to other pages.

- The page also includes a card component (`BestZoneCard`), which showcases the best zone of the day based on the lastest available information on carbon intensity.

## Planner Page (planner.js)

Inside the planner page, the main components of the app are used to input, manipulate and output data. After the input of Datacenter data, the user can view recommendations for locations based on the carbon intensity and energy prices.

## Build Data Centre Component (builddatacentre.js)

The Build Data Centre component allows users to input information about a datacenter.

- Users can enter the name of the datacenter and choose the desired countries for the datacenter's location.
- The page includes options for specifying the energy consumption calculation method, such as hardware components, kWh, or teraflops. Calculations are done based on online researched metrics.
- Users can provide load values using an input chart, and the page offers the ability to select or deselect all countries.
- Upon submission, the data is processed and passed to the `onSubmit` function.

## Layout Component (layout.js)

Defines the Navbar and Footer used throughout the app.

## Result List Component (result-list.js)

The Result List component is used to display the possible locations for building a datacenter based on the provided data.

- The component takes the `datacenter` object as a prop.
- Inside the `useEffect` hook, the component calls the `calculateCO2History` utility function for each country in the `datacenter.locations` array. It retrieves the CO2 data for each country and updates the `co2Arrays` and `totalCO2s` states accordingly.
- Countries are sorted by total CO2 emissions in ascending order.
- Finally, it renders a list of `ResultItem` components, passing the country code, CO2 emissions, cost, and the CO2 information for each country.

## Utility Components

### `dc-specs.js`

The `datacenter_t` class represents a datacenter with various specifications. It includes methods to calculate power consumption and retrieve power consumption data for analysis.

### `InputChart.js`

The `InputChart` component utilizes [Highcharts](https://api.highcharts.com/highcharts/) to create an interactive chart for inputting load values at different time intervals.

### `array-to-co2.js`

The `calculateCO2History` function is a utility that makes an API call to the backend to calculate the CO2 generated for each hour based on KW/H values. It retrieves CO2 data for a specified zone and performs calculations related to CO2 emissions.

## How to run

To run a development Version locally just simply run the following commands, with a node installation >= 18.

```
npm install
npm run develop
```

To build a static website run:

```
npm run build
```

Then configure your webserver of choice to serve the files in the public/ directory.
