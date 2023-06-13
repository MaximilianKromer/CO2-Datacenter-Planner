import React from "react";

import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel";
import InputChart from "./InputChart";
import Form from "react-bootstrap/Form";
import { countries } from "../assets/countries";

const Results = () => {

  let loadArr = [10, 20, 33, 20, 45, 70, 73, 50, 40, 44, 2, 10, 10];
  let loadArr2 = [13, 27, 33, 60, 70, 77, 90, 80, 60, 33, 40, 20, 13];


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
            <InputChart
              data={loadArr}
              onChange={(newLoad) => (loadArr = newLoad)}
            />
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
            <InputChart
              data={loadArr2}
              onChange={(newLoad) => (loadArr2 = newLoad)}
            />
          </li>
        </ul>
      </Form>
    </Container>
  );
};

export default Results;
