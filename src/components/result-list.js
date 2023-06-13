import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
import { countries } from "../assets/countries";
import LineChart from "./line-chart";
import calculateCO2History from "../utils/array-to-co2";

const ResultList = ({ datacenter }) => {

	console.log(datacenter.kWhArray);
	console.log(calculateCO2History(datacenter.kWhArray, "DE"));

	const [load, setLoad] = useState(datacenter.kWhArray)

	useEffect(() => {
		const convert = async () => {
			setLoad(await calculateCO2History(datacenter.kWhArray, "DE"))
		}
		convert().catch(console.error)
	}, [])

  return (
    <Container>
      <h1>Countries where you should build new Data Centre</h1>
      <br></br>
      <Form id="results">
        <ul class="list-group  list-group-numbered">
          <li class="list-group-item">
            {countries
              .filter((c) => c.code === "DE")
              .map((c) => (
                <Label for={c.code}>{c.name}</Label>
              ))}
            <br></br>
            <Label>Carbon Intensity: 202 gCO₂eq/kWh</Label>
            <br></br>
            <Label>Costs: 10€/day</Label>
            <br></br>
						<LineChart dataArray={calculateCO2History(datacenter.kWhArray, "DE")} title="CO2" label="CO2" />
          </li>
          <li class="list-group-item">
            {countries
              .filter((c) => c.code === "SK")
              .map((c) => (
                <Label for={c.code}>{c.name}</Label>
              ))}
            <br></br>
            <Label>Carbon Intensity: 222 gCO₂eq/kWh</Label>
            <br></br>
            <Label>Costs: 11€/day</Label>
            <br></br>
            

						<LineChart dataArray={datacenter.kWhArray} title="CO2" label="CO2" />
          </li>
        </ul>
      </Form>
    </Container>
  );
};

export default ResultList;
