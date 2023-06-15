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
      <h1>Countries where you should build new Data Centre</h1>
      <br></br>
      <Form id="results">
        <ul class="list-group  list-group-numbered">
					<ResultItem countryCode="DE" co2={total} co2Array={load} cost={12}/>
					<ResultItem countryCode="FR" co2={total} co2Array={load} cost={12}/>
        </ul>
      </Form>
    </Container>
  );
};

export default ResultList;
