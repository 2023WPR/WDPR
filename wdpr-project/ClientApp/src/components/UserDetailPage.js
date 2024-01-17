import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export class UserDetailPage extends Component {
    static displayName = UserDetailPage.name;

    constructor (props)
    {
        super(props);
        // this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentDidMount ()
    {
        console.log("componentDidMount");
        // this.fetchUsers();
    }

    fetchUsers = async () =>
    {
        console.log("fetchUsers");

        //TODO: current user
        const id = "38e32081-d943-45b5-81ad-01087833c26c";

        const response = await axios.get("http://localhost:5056/expert/" + id);
        const user = response.data;
        console.log(user);

        console.log("user.address:\t" +  user.Address);

        console.log("username:\t" + localStorage.getItem("username"));

        //TOFIX: user heeft geen adres
        //TOFIX: user disability
        //TOFIX: user disability aides

        return user;
    }
  
    render() {
        console.log("render");

        // TODO: formulier invullen bij het laden
        var user = this.fetchUsers();
        // console.log(user);
        // var user = {
        //     "id": 0,
        //     "Firstname" : "jan",
        //     "Middlenames": "",
        //     "Lastname": "jansen",
        //     "Address": {
        //         "HouseNumber": 12,
        //         "Addition": "a"
        //     },
        //     "Phonenumber": "061234567",
        //     "Age": "31",
        //     "Emailaddress": "bal@bla.nl",
        //     "Disabilities": [

        //     ],
        //     "Aids": [

        //     ],
        //     "Availability": {
        //         "monday": false,
        //         "tuesday": false,
        //         "wednesday": false,
        //         "thursday": false,
        //         "friday": false,
        //         "saturday": false,
        //         "sunday": false
        //     }
        // };

        return (
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="given_name">
                    <Form.Label column xs="2">
                        Voornaam
                    </Form.Label>
                    <Col>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Voornaam"
                            value={user.firstname}
                        />
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="infix">
                            <Form.Label column xs="4">
                                Tussenvoegsel
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Tussenvoegsel" value={user.Middlenames} />
                            </Col>
                        </Form.Group>
                    </Col>
                
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="family_name">
                            <Form.Label column xs="2">
                                Achternaam
                            </Form.Label>
                            <Col>
                                <Form.Control required type="text" placeholder="Achternaam" value={user.Lastname} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group as={Row} className="mb-3" controlId="zip_code">
                    <Form.Label column xs="2">
                        Postcode
                    </Form.Label>
                    <Col>
                        <Form.Control required type="text" placeholder="Postcode" value={user.zip_code} />
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="infix">
                            <Form.Label column xs="4">
                                Huisnummer
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Huisnummer" value={user.Address?.HouseNumber ?? "address.defaultValue"} />
                            </Col>
                        </Form.Group>
                    </Col>
                
                    <Col>
                        <Form.Group as={Row} className="mb-3" controlId="family_name">
                            <Form.Label column xs="2">
                                Toevoegsel
                            </Form.Label>
                            <Col>
                                <Form.Control required type="text" placeholder="Toevoegsel" value={user.Address?.Addition ?? "address.defaultValue"} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group as={Row} className="mb-3" controlId="phone_number">
                    <Form.Label column xs="2">
                    Telefoonnummer
                    </Form.Label>
                    <Col>
                        <Form.Control required type="text" placeholder="Telefoonnummer" value={user.Phonenumber} />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="age">
                    <Form.Label column xs="2">
                        Leeftijd
                    </Form.Label>
                    <Col>
                        <Form.Control required type="number" placeholder="Leeftijd" value={user.Age} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="email_address">
                    <Form.Label column xs="2">
                        E-mailadres
                    </Form.Label>
                    <Col>
                        <Form.Control required type="email" placeholder="E-mailadres" value={user.Emailaddress} />
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
                            <option selected value="1">Blind</option>
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
                            <option selected value="1">Schermlezer</option>
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
                            checked
                            inline
                            label="Woensdag"
                            name="wednesday"
                            type="checkbox"
                            id="Woensdag"
                        />
                        <Form.Check
                            checked
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
