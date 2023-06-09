import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, InputGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import datacenter_t from "./dc-specs";

const RzSpecForm = ({show, handleClose}) => {
    const [cpuValue, setCpuValue] = React.useState("0");
    const [ramValue, setRamValue] = React.useState("0");
    const [memValue, setMemValue] = React.useState("0");
    const [graphValue, setGraphValue] = React.useState("0");
    function changeValue(handler, event, is_float = true) {
        let num_string = event.target.value;
        if (num_string != null) {
            if(is_float){
                num_string = num_string.match(/[0-9]*\.?[0-9]*/);
            }
            else{
                num_string = num_string.match(/[1-9][0-9]*/);
            }

            if(!num_string){
                handler("0")
            }
            else {
                handler(num_string)
            }
        }
    }

    function saveData(){
        console.log(new datacenter_t(cpuValue, ramValue, memValue, graphValue));
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Spec your Datacenter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form.Group controlId="CpuInput">
                        <Row>
                            <Col xs={3}>
                                <Form.Label>CPUs:</Form.Label>
                            </Col>
                            <Col xs={6}><InputGroup>
                                <Button onClick={() => setCpuValue((parseInt(cpuValue) || 0) - 1)}>-</Button>
                                <Form.Control value={cpuValue} name="cpu" onChange={(e) => changeValue(setCpuValue, e, false)}></Form.Control>
                                <Button onClick={() => setCpuValue((parseInt(cpuValue) || 0) + 1)}>+</Button>
                            </InputGroup></Col>
                            <Col xs={3}>
                                <Form.Label>Cores</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="RamInput">
                        <Row>
                            <Col xs={3}>
                                <Form.Label>RAM:</Form.Label>
                            </Col>
                            <Col xs={6}><InputGroup>
                                <Button onClick={() => setRamValue((parseFloat(ramValue) || 0) - 1)}>-</Button>
                                <Form.Control value={ramValue} name="ram" onChange={(e) => changeValue(setRamValue, e)}></Form.Control>
                                <Button onClick={() => setRamValue((parseFloat(ramValue) || 0) + 1)}>+</Button>
                            </InputGroup></Col>
                            <Col xs={3}>
                                <Form.Label>GB</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="RamInput">
                        <Row>
                            <Col xs={3}>
                                <Form.Label>Storage:</Form.Label>
                            </Col>
                            <Col xs={6}><InputGroup>
                                <Button onClick={() => setMemValue((parseFloat(memValue) || 0) - 1)}>-</Button>
                                <Form.Control value={memValue} name="mem" onChange={(e) => changeValue(setMemValue, e)}></Form.Control>
                                <Button onClick={() => setMemValue((parseFloat(memValue) || 0) + 1)}>+</Button>
                            </InputGroup></Col>
                            <Col xs={3}>
                                <Form.Label>TB</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="RamInput">
                        <Row>
                            <Col xs={3}>
                                <Form.Label>Graphics Cards:</Form.Label>
                            </Col>
                            <Col xs={6}><InputGroup>
                                <Button onClick={() => setGraphValue((parseInt(graphValue) || 0) - 1)}>-</Button>
                                <Form.Control value={graphValue} name="graphics_cards" onChange={(e) => changeValue(setGraphValue, e, false)}></Form.Control>
                                <Button onClick={() => setGraphValue((parseInt(graphValue) || 0) + 1)}>+</Button>
                            </InputGroup></Col>
                            <Col xs={3}>
                                <Form.Label>Cards</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => {saveData(); handleClose()}}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RzSpecForm