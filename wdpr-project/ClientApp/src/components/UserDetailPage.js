import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export class UserDetailPage extends Component {
    static displayName = UserDetailPage.name;
  
    render() {
        return (
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="given_name">
                    <Form.Label column xs="2">
                        Voornaam
                    </Form.Label>
                    <Col>
                        <Form.Control required type="text" placeholder="Voornaam" />
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="infix">
                            <Form.Label column xs="4">
                                Tussenvoegsel
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Tussenvoegsel" />
                            </Col>
                        </Form.Group>
                    </Col>
                
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="family_name">
                            <Form.Label column xs="2">
                                Achternaam
                            </Form.Label>
                            <Col>
                                <Form.Control required type="text" placeholder="Achternaam" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="street_name">
                            <Form.Label column xs="4">
                                Straatnaam
                            </Form.Label>
                            <Col>
                                <Form.Control required type="text" placeholder="Straatnaam" />
                            </Col>
                        </Form.Group>
                    </Col>
                
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="house_number">
                            <Form.Label column xs="2">
                                Huisnummer
                            </Form.Label>
                            <Col>
                                <Form.Control required type="text" placeholder="Huisnummer" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group as={Row} className="mb-3" controlId="zip_code">
                    <Form.Label column xs="2">
                        Postcode
                    </Form.Label>
                    <Col>
                        <Form.Control required type="text" placeholder="Postcode" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="phone_number">
                    <Form.Label column xs="2">
                    Telefoonnummer
                    </Form.Label>
                    <Col>
                        <Form.Control required type="text" placeholder="Telefoonnummer" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="age">
                    <Form.Label column xs="2">
                        Leeftijd
                    </Form.Label>
                    <Col>
                        <Form.Control required type="number" placeholder="Leeftijd" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="email_address">
                    <Form.Label column xs="2">
                        E-mailadres
                    </Form.Label>
                    <Col>
                        <Form.Control required type="email" placeholder="E-mailadres" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="disabilities">
                    <Form.Label column xs="2">
                        Aandoening
                    </Form.Label>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Selecteer uw aandoending</option>
                            {/* TODO: dit in een forloopje doen ofzo */}
                            <option value="1">One</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="assistive_technologies">
                    <Form.Label column xs="2">
                        Hulpmiddelen
                    </Form.Label>
                    <Col>
                        <Form.Select aria-label="Default select example">
                            <option>Selecteer uw hulpmiddelen</option>
                            {/* TODO: dit in een forloopje doen ofzo */}
                            <option value="1">One</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="availability">
                    <Form.Label column xs="2">
                        Tijden beschikbaar
                    </Form.Label>
                    <Col>
                        {/* Weet niet zeker wat 'name' hier doet. Maar het stond in het voorbeeld dus ik kopiëer het gewoon. */}
                        <Form.Check
                            inline
                            label="Maandag"
                            name="monday"
                            type="checkbox"
                            id="monday"
                        />
                        <Form.Check
                            inline
                            label="Dinsdag"
                            name="tuesday"
                            type="checkbox"
                            id="Dinsdag"
                        />
                        <Form.Check
                            inline
                            label="Woensdag"
                            name="wednesday"
                            type="checkbox"
                            id="Woensdag"
                        />
                        <Form.Check
                            inline
                            label="Donderdag"
                            name="thursday"
                            type="checkbox"
                            id="Donderdag"
                        />
                        <Form.Check
                            inline
                            label="Vrijdag"
                            name="friday"
                            type="checkbox"
                            id="Vrijdag"
                        />

                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                    <Col>
                        <Button type="submit">Opslaan</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}
