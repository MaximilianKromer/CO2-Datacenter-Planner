import * as React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container";

import RzSpecForm from "../components/rz-spec-form";
import BuildDataCentre from "./builddatacentre";

const IndexPage = () => {

  const [dcFormShow, showDcForm] = React.useState(true);

  function saveDcSpecs(){
    console.log(FormData);
  }

  function closeDCform(){
    showDcForm(false);
  }


  return (
    <Container className="py-3">
      <RzSpecForm show={dcFormShow} handleClose={closeDCform} save={saveDcSpecs}/>
      <BuildDataCentre></BuildDataCentre>
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>CO2 Datacenter Planner</title>
