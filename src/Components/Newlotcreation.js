import React from "react";
import { Container, Form, Button, Accordion, Row, Col } from "react-bootstrap";
import "../Stylesheet/Newlotcreation.css";
function Newlotcreation() {
  return (
    <div>
      <Container>
        <h2> New lot Creation</h2>
        <br />
        <Form>
          <Row>
            <Col sm>
              <Form.Group className="mb-3" controlId="Lot Id">
                <Form.Label>Lot Id</Form.Label>
                <Form.Control type="lotid" placeholder="#131942" disabled />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Strain">
                <Form.Label>Strain</Form.Label>
                <Form.Control type="Strain" placeholder="Punk Kush" disabled />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Exit Date">
                <Form.Label>Exit Date</Form.Label>
                <Form.Control
                  type="Exit Date"
                  placeholder="01/10/2022"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Expected Weight">
                <Form.Label>Expected Weight</Form.Label>
                <Form.Control
                  type="Expected Weight"
                  placeholder="55Kg"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Grower">
                <Form.Label>Grower</Form.Label>
                <Form.Select disabled>
                  <option>Heather K.</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Batch Number">
                <Form.Label>Batch Number</Form.Label>
                <Form.Control
                  className="txtbox"
                  type="Batch Number"
                  placeholder="131942A"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="Status">
                <Form.Label>Status</Form.Label> <br />
                <Button variant="successe">Success</Button>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* WEEK 1 */}
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 1</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                        Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            {/* WEEK 2*/}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 2</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                       Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            {/* WEEK 3 */}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 3</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                      Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            {/* WEEK 4 */}
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 4</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                      Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            {/* WEEK 5 */}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 5</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                      Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            {/* WEEK 6 */}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Week 6</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Lot ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Type</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Growing Method</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Veg Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Curing</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Seed</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Organic Nutrition</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Flower Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Packege</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="lotId">
                        <Form.Label>Grower</Form.Label>
                        <Form.Select>
                          <option>#131942</option>
                          <option>#131942</option>
                          <option>#131942</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Strain</Form.Label>
                        <Form.Select>
                          <option>Hybrid </option>
                          <option>Indica</option>
                          <option>Sativa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Expected Yield</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Havest Date</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group className="mb-3" controlId="Grower">
                        <Form.Label>Shipping</Form.Label>
                        <Form.Select>
                          <option>Heather K.</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Button style={{ float: "right" }} variant="success">
                      Start Lot
                      </Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Newlotcreation;
