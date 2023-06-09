import React, { useState, useEffect } from "react";

import Label from "react-bootstrap/FormLabel";
import { countries } from "../assets/countries";
import LineChart from "./line-chart";

const ResultItem = ({ countryCode, co2, co2Array, cost }) => {
  return (
    <li class="list-group-item">
      {countries
        .filter((c) => c.code === countryCode)
        .map((c) => (
          <Label for={c.code}>Country: {c.name}</Label>
        ))}
      <br />
      <Label>Carbon Intensity: {co2}g of CO2 per day</Label>
      <br />
      {countries
        .filter((c) => c.code === countryCode)
        .map((c) => (
          <Label for={c.code}>Costs: {Math.ceil(c.costs * cost)} €/day</Label>
        ))}
      <br />
      <LineChart dataArray={co2Array} title="CO2" label="CO2" />
    </li>
  );
};

export default ResultItem;
