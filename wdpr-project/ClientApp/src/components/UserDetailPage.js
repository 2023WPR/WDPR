import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


export class UserDetailPage extends Component {
    static displayName = UserDetailPage.name;

    constructor(props) {
        super(props);
        
        this.fetchDetails = this.fetchDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            user: null,
        };
      }


    componentDidMount ()
    {
        console.log("componentDidMount");
        this.fetchDetails();
    }

    handleChange = async (event) =>
    {
        var target = event.target;
        var value = target.value;
        var name = target.id;
        
        // https://stackoverflow.com/a/43041334
        var user = {...this.state.user}
        user[name] = value;
        
        this.setState({user})
    }

    getCurrentUserId ()
    {
        console.log("getCurrentUserId");
        const authToken = localStorage.getItem('token');

        console.log("authToken:\t", authToken);

        console.log("jwtDecode:\t", jwtDecode);

        if (authToken) {
            try
            {
                const decodedToken = jwtDecode(authToken);
                const currentUserId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
                console.log('decodedToken:\t', decodedToken);
                console.log('User currentID:\t', currentUserId);
                return currentUserId;
            }
            catch (e)
            {
                console.error("cannot find current user:\t", e);
            }
        }

    }

    fetchDetails = async () =>
    {
        console.log("fetchDetails");

        const id = "38e32081-d943-45b5-81ad-01087833c26c";
        //TODO: current user
        const id2 = this.getCurrentUserId();
        console.log("id2:\t", id2);

        const response = await axios.get("http://localhost:5056/expert/" + id);

        console.log("response.data:", response.data);

        this.setState({ user: response.data })

        //TOFIX: user disability
        //TOFIX: user disability aides
    }

    onFormSubmit = async (e) =>
    {
        console.log("onFormSubmit");
        e.preventDefault();

        const formData = {
            ...this.state.user,
            id: "38e32081-d943-45b5-81ad-01087833c26c"
          };

        console.log("formData:\t", formData);
        
        // const response = await axios.put("http://localhost:5056/expert/" + this.getCurrentUserId(), formData);

        // console.log("response:\t", response);

    }
  
    render() {
        console.log("render");
    
        return (
            <>
            <h1>Persoonsgegevens</h1>
            {
                (this.state.user == null) 
                ?
                <h2>Aan het laden.</h2>
                :
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="firstname" >
                        <Form.Label column xs="2">
                            Voornaam
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Voornaam"
                                value={this.state.user.firstname}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="middlenames">
                                <Form.Label column xs="4">
                                    Tussenvoegsel
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                    type="text"
                                    placeholder="Tussenvoegsel"
                                    value={this.state.user.middlenames}
                                    onChange={this.handleChange}
                                />
                                </Col>
                            </Form.Group>
                        </Col>
                    
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="lastname">
                                <Form.Label column xs="2">
                                    Achternaam
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Achternaam"
                                        value={this.state.user.lastname}
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group as={Row} className="mb-3" controlId="postCode"  >
                        <Form.Label column xs="2">
                            Postcode
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Postcode"
                                value={this.state.user.postCode}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="houseNumber">
                                <Form.Label column xs="4">
                                    Huisnummer
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Huisnummer"
                                        value={this.state.user.houseNumber}
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    
                        <Col>
                            <Form.Group as={Row} className="mb-3" controlId="addition">
                                <Form.Label column xs="2">
                                    Toevoegsel
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Toevoegsel"
                                        value={this.state.user.addition}
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group as={Row} className="mb-3" controlId="phonenumber">
                        <Form.Label column xs="2">
                        Telefoonnummer
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Telefoonnummer"
                                value={this.state.user.phonenumber}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="age">
                        <Form.Label column xs="2">
                            Leeftijd
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Leeftijd"
                                value={this.state.user.age}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="emailaddress">
                        <Form.Label column xs="2">
                            E-mailadres
                        </Form.Label>
                        <Col>
                            <Form.Control
                                required
                                type="email"
                                placeholder="E-mailadres"
                                value={this.state.user.emailaddress}
                                onChange={this.handleChange}
                            />
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
                            {/* TODO: dit ook inladen met 'checked' op basis van de TijdenBeschikbaar? */}
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
                            <Button type="submit" onClick={this.onFormSubmit}>Opslaan</Button>
                        </Col>
                    </Form.Group>
                </Form>
            }
            </>
            


            
        )
    }
}
