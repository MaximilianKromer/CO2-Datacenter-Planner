import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel"
import FormSelect from 'react-bootstrap/FormSelect';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { FormControl } from 'react-bootstrap';
import DcSpecForm from "./dc-spec-form";
import InputChart from "./InputChart";
import Form from "react-bootstrap/Form";
import datacenter_t from "./dc-specs";
import { countries } from "../assets/countries";

const BuildDataCentre = ({ onSubmit }) => {

    function selectAll() {
        var element = document.getElementsByName('country');
        for (var i = 0; i < element.length; i++) {
            if (element[i].type === 'checkbox')
                element[i].checked = true;
        }
    }

    function deSelectAll() {
        const element = document.getElementsByName('country');
        for (let i = 0; i < element.length; i++) {
            if (element[i].type === 'checkbox')
                element[i].checked = false;

        }
    }

    const calculationWays = ["Select", "Hardware components", "kWh", "Teraflops"];
    const [dcName, setDcName] = React.useState("");
    const [calcWay, setCalcWay] = React.useState(calculationWays[0]);
    const [load, setLoad] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [cpuValue, setCpuValue] = React.useState("0");
    const [ramValue, setRamValue] = React.useState("0");
    const [memValue, setMemValue] = React.useState("0");
    const [graphValue, setGraphValue] = React.useState("0");
    const [kwhValue, setKwhValue] = React.useState("");
    const [teraFlopsValue, setTeraFlopsValue] = React.useState("");


    function handleSubmit() {
        const name = dcName || "Datacenter";
        const locations = Array.from(document.getElementsByName('country'))
            .filter(e => e.checked === true)
            .map(e => e.id);
        const currDatacenter = new datacenter_t(name, null, cpuValue, ramValue, memValue, graphValue, load, locations);
        console.log(JSON.stringify(currDatacenter));
        onSubmit(currDatacenter);
    }

    function renderOptions() {
        if (calcWay === "Hardware components") {
            return (
                <DcSpecForm cpuValue={cpuValue} setCpuValue={setCpuValue} ramValue={ramValue} setRamValue={setRamValue}
                    memValue={memValue} setMemValue={setMemValue} graphValue={graphValue} setGraphValue={setGraphValue}></DcSpecForm>

            );
        } else if (calcWay === "kWh") {
            return (
                <FormControl
                    id='kWh'
                    placeholder='0'
                    value={parseFloat(kwhValue)}
                    type='number'
                    min={0.0}
                    onChange={e => setKwhValue(e.target.value)}>
                </FormControl>
            );
        } else if (calcWay === "Teraflops") {
            return (
                <FormControl
                    id='teraflops'
                    placeholder='0'
                    value={parseFloat(teraFlopsValue)}
                    type='number'
                    min={0.0}
                    onChange={e => setTeraFlopsValue(e.target.value)}>

                </FormControl >
            );
        } else {
            return null;
        }
    }

    return (
        <Container>
            <h1>Build your new data centre</h1>
            <br></br>
            <Form id='dataCenterForm'>

                <Label for="namecentre">Name</Label>
                <FormControl id='namecentre' placeholder='Datacenter' value={dcName} onChange={e => setDcName(e.target.value)}></FormControl>

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

                {renderOptions()}

                <br></br>
                <InputChart title="Geschätzte Auslastung" data={load} onChange={setLoad} />
                <br></br>

                <br></br>
                <Label for='country'>Pick desired countries</Label>
                <br></br>

                {countries.map((c) => (
                    <div className="form-check form-check-inline">
                        <FormCheckInput name="country" type="checkbox" id={c.code} />
                        <FormCheckLabel for={c.code}>{c.name}</FormCheckLabel>
                    </div>
                ))}

                <br></br><br></br>
                <div className="d-grid gap-2 d-md-flex">
                    <Button type="button" onClick={selectAll} >Select all countries</Button>
                    <Button type="button" onClick={deSelectAll} >Cancel all countries</Button>
                </div>
                <br></br>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
                <br></br>
            </Form>
        </Container>
    )
}

export default BuildDataCentre