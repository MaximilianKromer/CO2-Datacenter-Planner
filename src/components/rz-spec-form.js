import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, InputGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const RzSpecForm = ({show, handleClose, save}) => {
    const [cpuValue, setCpuValue] = React.useState("");
    const [ramValue, setRamValue] = React.useState("");
    const [memValue, setMemValue] = React.useState("");
    const [graphValue, setGraphValue] = React.useState("");
    function changeValue(handler, event) {
        const num_string = event.target.value;
        if (num_string != null) {
            handler(num_string.match(/[0-9]*\.?[0-9]*/));
        }
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
                                <Button onClick={() => setCpuValue(cpuValue - 1)}>-</Button>
                                <Form.Control value={cpuValue} name="cpu" onChange={(e) => changeValue(setCpuValue, e)}></Form.Control>
                                <Button onClick={() => setCpuValue(cpuValue + 1)}>+</Button>
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
                                <Button onClick={() => setRamValue(ramValue - 1)}>-</Button>
                                <Form.Control value={ramValue} name="ram" onChange={(e) => changeValue(setRamValue, e)}></Form.Control>
                                <Button onClick={() => setRamValue(ramValue + 1)}>+</Button>
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
                                <Button onClick={() => setMemValue(memValue - 1)}>-</Button>
                                <Form.Control value={memValue} name="mem" onChange={(e) => changeValue(setMemValue, e)}></Form.Control>
                                <Button onClick={() => setMemValue(memValue + 1)}>+</Button>
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
                                <Button onClick={() => setGraphValue(graphValue - 1)}>-</Button>
                                <Form.Control value={graphValue} name="graphics_cards" onChange={(e) => changeValue(setGraphValue, e)}></Form.Control>
                                <Button onClick={() => setGraphValue(graphValue + 1)}>+</Button>
                            </InputGroup></Col>
                            <Col xs={3}>
                                <Form.Label>TODO: find decripter</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default RzSpecForm