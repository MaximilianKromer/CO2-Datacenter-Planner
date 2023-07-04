import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { countries } from "../assets/countries";
import calculateCO2History from "../utils/array-to-co2";
import ResultItem from "./result-item";


const ResultList = ({ datacenter }) => {

  const [loading, setLoading] = useState(true);
  const [co2Arrays, setCo2Arrays] = useState({
    "DE": [],
    "FR": [],
  });
  const [totalCO2s, setTotalCO2s] = useState({
    "DE": 0,
    "FR": 0,
  });

  useEffect(() => {
    const convert = async () => {
      let arr = {}
      let total = {}
      for (let country of datacenter.locations) {
        let result = await calculateCO2History(datacenter.kWhArray, country)
        arr[country] = result.co2Array
        total[country] = result.totalCO2
      }
      setCo2Arrays(arr)
      setTotalCO2s(total)
      setLoading(false)
      console.log("data:", arr);
    }
    convert().catch(console.error)
  }, [])

  // TODO: optional: sort countries by price

  return (
    <Container>
      <h1>Your desired destinations to build Data Centre</h1>
      <br></br>
      <Form id="results">
        <ul class="list-group  list-group-numbered">
          
          {
            loading ? <p>Loading...</p> :
            Object.entries(totalCO2s)
              .sort((a, b) => a[1] - b[1])
              .map((element) => {
                return <ResultItem countryCode={element[0]} co2={element[1]} cost={100} co2Array={co2Arrays[element[0]]} />
              })
          }
          
        </ul>
        <br></br>
      </Form>
    </Container>
  );
};

export default ResultList;
