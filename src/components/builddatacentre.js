import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel"
import FormSelect from 'react-bootstrap/FormSelect';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { FormControl, input } from 'react-bootstrap';
import DcSpecForm from "./dc-spec-form";
import InputChart from "./InputChart";
import Form from "react-bootstrap/Form";

const BuildDataCentre = () => {

    function selectAll(){
        var element=document.getElementsByName('country');
        for(var i=0; i<element.length; i++){
            if(element[i].type === 'checkbox')
                element[i].checked=true;
        }
    }

    function deSelectAll(){
        const element=document.getElementsByName('country');
        for(let i=0; i<element.length; i++){
            if(element[i].type === 'checkbox')
                element[i].checked=false;

        }
    }

    const calculationWays = [ "Hardware components", "kWh/year", "Teraflops"]
    const [calcWay, setCalcWay] = React.useState(calculationWays[0]);
    let loadArr = [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0]

    return (
        <Container>
            <h1>Build your new data centre</h1>
            <br></br>
            <Form id='dataCenterForm'>
                <Label for="namecentre">Name</Label>
                <FormControl id='namecentre' placeholder='...'></FormControl>
                <br></br>
                <Label for="energy">Energy consumption</Label>
                <FormSelect id='watt_calculation' value={calcWay} onChange={e => setCalcWay(e.target.value)}>
                    {calculationWays.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </FormSelect>
                <br></br>
                <DcSpecForm show={true}></DcSpecForm>

                <br></br>
                <InputChart data={loadArr} onChange={newLoad => loadArr = newLoad}/>
                <br></br>

                <br></br>
                <Label for='country'>Pick desired countries</Label>
                <br></br>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country1'/>
                    <FormCheckLabel for='country1'>Germany</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country2'/>
                    <FormCheckLabel for='country2'>Spain</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country3'/>
                    <FormCheckLabel for='country3'>Portugal</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country4'/>
                    <FormCheckLabel for='country4'>France</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country5'/>
                    <FormCheckLabel for='country5'>Poland</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country6'/>
                    <FormCheckLabel for='country6'>Sweden</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country7'/>
                    <FormCheckLabel for='country7'>Denmark</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country8'/>
                    <FormCheckLabel for='country8'>Norway</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country9'/>
                    <FormCheckLabel for='country9'>Finland</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country10'/>
                    <FormCheckLabel for='country10'>Belgium</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country11'/>
                    <FormCheckLabel for='country11'>Netherlands</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country12'/>
                    <FormCheckLabel for='country12'>Iceland</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country13'/>
                    <FormCheckLabel for='country13'>United Kingdom</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country14'/>
                    <FormCheckLabel for='country14'>Austria</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country15'/>
                    <FormCheckLabel for='country15'>Czechia</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country16'/>
                    <FormCheckLabel for='country16'>Hungary</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country17'/>
                    <FormCheckLabel for='country17'>Romania</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country18'/>
                    <FormCheckLabel for='country18'>Montenegro</FormCheckLabel>
                </div>
                <div className="form-check form-check-inline">
                    <FormCheckInput name="country" type="checkbox" id='country19'/>
                    <FormCheckLabel for='country19'>Greece</FormCheckLabel>
                </div>

                <br></br>
                <br></br>
                <div className="d-grid gap-2 d-md-flex">
                    <Button type="button" onClick={selectAll} >Select all countries</Button>
                    <Button type="button" onClick={deSelectAll} >Cancel all countries</Button>
                </div>
                <br></br>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button onClick={e => console.log(document.getElementById("dataCenterForm"))}>Submit</Button>
                </div>

            </Form>
        </Container>
    )
}

export default BuildDataCentre