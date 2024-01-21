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
        // console.log("componentDidMount");
        this.fetchDetails();
        // console.log("componentDidMount END");
    }

    handleChange = async (event) =>
    {
        // console.log("handleChange");

        var target = event.target;
        var value = target.value;
        var name = target.id;
        
        console.log("target:\t", target, "\nvalue:\t", value, "\nname:\t", name);

        // https://stackoverflow.com/a/43041334
        var user = {...this.state.user}
        user[name] = value;
        
        this.setState({user})
        
        // console.log("this.state.user:\t", this.state.user);
        // console.log("handleChange END");
    }

    getCurrentUserId ()
    {
        // console.log("getCurrentUserId");
        const authToken = localStorage.getItem('token');
        
        // console.log("authToken:\t", authToken);
        
        // console.log("jwtDecode:\t", jwtDecode);
        
        if (authToken) {
            try
            {
                const decodedToken = jwtDecode(authToken);
                const currentUserId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
                // console.log('decodedToken:\t', decodedToken);
                // console.log('User currentID:\t', currentUserId);
                return currentUserId;
            }
            catch (e)
            {
                console.error("cannot decode authToken:\t", e);
            }
        }
        
        // console.log("getCurrentUserId END");
    }

    fetchDetails = async () =>
    {
        // console.log("fetchDetails");

        const id = this.getCurrentUserId();
        // console.log("id:\t", id);
        
        // const response = await axios.get(process.env.REACT_APP_API_URL + "/expert/" + id);

        // Dit staat hier zo omdat deze data niet uit de backend endpoints komt
        const response = {
            data: {
                "id": "1c772805-a76b-4ac4-8551-dcef035a3e51",// Ervaringsdeskundige1
                "username": "Ervaringsdeskundige1",
                "firstname": "Bob",
                "middlenames":"de",
                "lastname": "Bouwer",
                "contactbyphone": false,
                "contactbythirdparty": false,
                "disabilities": [
                    3
                ],
                "aids": [
                    3
                ],
                "emailaddress": "a@a.nl",
                "phonenumber": "0612345678",
                "caretaker": null,
                "postCode": "1234ab",
                "houseNumber": "32",
                "addition": "a",
                "age": 30

                
            }
        }
        
        console.log("response.data:", response.data);
        
        this.setState({ user: response.data })
        
        //TOFIX: user disability
        //TOFIX: user disability aides
        // console.log("fetchDetails END");
    }

    onFormSubmit = async (e) =>
    {
        // console.log("onFormSubmit");
        e.preventDefault();
        
        const formData = {
            id: this.getCurrentUserId(),
            passWord: "Expert1@",
            username: "Ervaringsdeskundige1",
            //disability en disability aids bestaan nog niet in de backend
            DisabilityIds : [Number(this.state.user.disabilities)],
            DisabilityAidIds : [Number(this.state.user.aids)],
            PersonalData : {
                firstname: this.state.user.firstname,
                lastname: this.state.user.lastname,
                phonenumber: this.state.user.phonenumber,
                emailaddress: this.state.user.emailaddress,
                Address: {
                    Postcode: this.state.user.postCode,
                    Adress: String(this.state.user.houseNumber).concat(this.state.user.addition)
                },
            }
          };

          console.log("formData:\t", formData);
          
          const response = await axios.put(process.env.REACT_APP_API_URL + "/expert/" + this.getCurrentUserId(), formData);
          
        //   console.log("onFormSubmit.response:\t", response);
          
        //   console.log("onFormSubmit END");
    }
  
    render() {
        // console.log("render");
    
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
                                value={this.state.user.firstname ?? ""}
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
                                    value={this.state.user.middlenames ?? ""}
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
                                        value={this.state.user.lastname ?? ""}
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
                                value={this.state.user.postCode ?? "1234ab"}
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
                                        value={this.state.user.houseNumber ?? "1"}
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
                                        value={this.state.user.addition ?? "a"}
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
                                value={this.state.user.phonenumber ?? "12345678"}
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
                                value={this.state.user.age ?? 0}
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
                                value={this.state.user.emailaddress ?? "a@a.a"}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="disabilities">
                        <Form.Label column xs="2">
                            Aandoening
                        </Form.Label>
                        <Col>
                            <Form.Select
                                aria-label="Selecteer enige aandoeningen die u heeft."
                                value={this.state.user.disabilities}
                                onChange={this.handleChange}
                            >
                                <option>Selecteer uw aandoending</option>
                                {/* TODO: dit in een forloopje doen ofzo */}
                                <option selected value="1">Doof</option>
                                <option selected value="2">(gedeeltelijk) verlamt</option>
                                <option selected value="3">Blind</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="aids">
                        <Form.Label column xs="2">
                            Hulpmiddelen
                        </Form.Label>
                        <Col>
                            <Form.Select
                                aria-label="Selecteer enige hulpmiddelen die u gebruikt."
                                value={this.state.user.aids}
                                onChange={this.handleChange}
                            >
                                <option>Selecteer uw hulpmiddelen</option>
                                {/* TODO: dit in een forloopje doen ofzo */}
                                <option value="1">Schermlezer</option>
                                <option value="2">Kunstmatige ledematen</option>
                                <option value="3">Leesregel</option>
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
