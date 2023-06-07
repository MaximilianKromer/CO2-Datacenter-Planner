import * as React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container";

import BuildDataCentre from "./builddatacentre";

const IndexPage = () => {


  return (
    <Container className="py-3">
      <BuildDataCentre></BuildDataCentre>
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>CO2 Datacenter Planner</title>
