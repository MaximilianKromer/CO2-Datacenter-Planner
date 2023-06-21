import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { countries } from "../assets/countries";
import calculateCO2History from "../utils/array-to-co2";
import ResultItem from "./result-item";

const ResultList = ({ datacenter }) => {

	const [load, setLoad] = useState(datacenter.kWhArray);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const convert = async () => {
			let result = await calculateCO2History(datacenter.kWhArray, "DE")
			setLoad(result.co2Array)
			setTotal(result.totalCO2)
			console.log("data:", result);
		}
		convert().catch(console.error)
	}, [])

	// TODO: calculate CO2 for each country
	// TODO: sort countries by CO2
	// TODO: optional: sort countries by price

  return (
    <Container>
      <h1>Your desired destinations to build Data Centre</h1>
      <br></br>
      <Form id="results">
        <ul class="list-group  list-group-numbered">
          <li class="list-group-item">

            <br></br>
            <Label>Country: &nbsp; </Label>
            {countries
              .filter((c) => c.code === "DE")
              .map((c) => (
                <Label for={c.code}>{c.name}</Label>
              ))}
            <br></br>
            <Label>Name: &nbsp; </Label>
            <br></br>
            <Label>Carbon Intensity: &nbsp;</Label>
            <br></br>
            <Label>Costs: &nbsp;</Label>
            <br></br>
						<LineChart dataArray={calculateCO2History(datacenter.kWhArray, "DE")} title="CO2" label="CO2" />
          </li>


          <li class="list-group-item">
            <br></br>
            <Label>Country: &nbsp;  </Label>
            {countries
              .filter((c) => c.code === "SK")
              .map((c) => (
                <Label for={c.code}>{c.name}</Label>
              ))}
            <br></br>
            <Label>Name: &nbsp; </Label>
            <br></br>
            <Label>Carbon Intensity: &nbsp;</Label>
            <br></br>
            <Label>Costs: &nbsp;</Label>
            <br></br>
						<LineChart dataArray={datacenter.kWhArray} title="CO2" label="CO2" />
          </li>
        </ul>
      </Form>
    </Container>
  );
};

export default ResultList;
