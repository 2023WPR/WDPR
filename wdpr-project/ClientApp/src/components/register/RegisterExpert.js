/* eslint-disable no-undef */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';
import axios from 'axios';

export class RegisterExpert extends Component {
    static displayName = RegisterExpert.name;
    
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            name:'',
            middelName:'',
            lastName:'',
            postCode:'',
            homeNumber:'',
            street:'',
            state:'',
            phoneNumber:'',
            switch:'',
            username:'',
            password:''
        };
        this.submit = this.submit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMiddelNameChange = this.handleMiddelNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
        this.handleHomeNumberChange = this.handleHomeNumberChange.bind(this);
        this.handleHomeStreetChange = this.handleHomeStreetChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
      }
      handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
      };
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
      };
      handleSwitchChange = (event) => {
        this.setState({ switch: event.target.value });
      };
      handlePhoneNumberChange = (event) => {
        this.setState({ phoneNumber: event.target.value });
      };
      handleStateChange = (event) => {
        this.setState({ state: event.target.value });
      };
      handleHomeStreetChange = (event) => {
        this.setState({ street: event.target.value });
      };
      handleHomeNumberChange = (event) => {
        this.setState({ homeNumber: event.target.value });
      };
      handlePostCodeChange = (event) => {
        this.setState({ postCode: event.target.value });
      };
      handleMiddelNameChange = (event) => {
        this.setState({ middelName: event.target.value });
      };
      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };
      handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
      };

      nextPage = () => {
        this.setState((prevState) => ({
          currentPage: prevState.currentPage + 1,
        }));
      };
    
      previousPage = () => {
        this.setState((prevState) => ({
          currentPage: prevState.currentPage - 1,
        }));
      };

      submit = () => {
        const backendEndpoint = 'http://localhost:5192/register';  // Adjust the endpoint accordingly
      
        // Get form data or construct the data you want to send to the backend
        const formData = {
          name: this.state.name,
          middelName: this.state.middelName,
          lastName: this.state.lastName,
          postCode: this.state.postCode,
          homeNumber: this.state.homeNumber,
          street: this.state.street,
          state: this.state.state,
          phoneNumber: this.state.phoneNumber,
          switch: this.state.switch,  // Assuming you have a switch state
          username: this.state.username,
          password: this.state.password,
        };
      
        // Use axios to send the data to the backend
        axios.post(backendEndpoint, formData)
          .then(response => {
            console.log('Backend response:', response.data);
      
            // Optionally, you can handle success scenarios here, e.g., show a success message
          })
          .catch(error => {
            console.error('Error submitting form to backend:', error);
      
            // Optionally, you can handle error scenarios here, e.g., show an error message
          });
      };      

    render(){
        const { currentPage } = this.state;
        return(
            <div>
                <h1>Registreer</h1>
            <Form className="custom-form-control">
            {currentPage === 1 && (
                <>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Vul je voornaam in</Form.Label>
                        <Form.Control type="name" value={this.state.name} onChange={this.handleNameChange} placeholder="vul in voornaam"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMiddleName">
                        <Form.Label>Vul tussenvoegsel in</Form.Label>
                        <Form.Control type="middelName" value={this.state.middelName} onChange={this.handleMiddelNameChange} placeholder="vul in tussenvoegsel"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Vul je achternaam in</Form.Label>
                        <Form.Control type="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="vul in achternaam"/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.nextPage}> Volgende </Button>
                </>
            )}
            {currentPage === 2 && (
                <>
                    <Form.Group className="mb-3 " controlId="formBasicPostalCode">
                        <Form.Label>Vul je Postcode in</Form.Label>
                        <Form.Control type="postalCode" value={this.state.postCode} onChange={this.handlePostCodeChange} placeholder="vul in Postcode" />
                        <Form.Label>Vul je Huisnummer in</Form.Label>
                        <Form.Control type="homeNumber" value={this.state.homeNumber} onChange={this.handleHomeNumberChange} placeholder="vul in Huisnummer" />
                        <Form.Label>Vul je Straatnaam in</Form.Label>
                        <Form.Control type="street" value={this.state.street} onChange={this.handleHomeStreetChange} placeholder="vul in straatnaam " />
                        <Form.Label>Vul je provincie in</Form.Label>
                        <Form.Control type="state" value={this.state.state} onChange={this.handleStateChange} placeholder="vul in provincie" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicPhoneNumber">
                        <Form.Label>Wilt u telefonisch benaderd worden? </Form.Label>
                        <Form.Control type="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} placeholder="vul in telefoonnummer" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicThirdParty">
                        <Form.Label>Wilt u derde partijen de mogelijkheid geven om contact met u op te nemen</Form.Label>
                        <Form.Check  type="switch" id="custom-switch" checked={this.state.switch} onChange={(e) => this.setState({ switch: e.target.checked })}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.previousPage }> Vorige </Button>
                    <Button variant="primary" type="button" onClick={this.nextPage}> Volgende</Button>
                </>
             )}  
            {currentPage === 3 && (
                <>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Vul je gebruikersnaam in</Form.Label>
                        <Form.Control type="username" value={this.state.username} onChange={this.handleUsernameChange} placeholder="vul in gebruikersnaam" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Vul je wachtwoord in</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="vul in wachtwoord" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.previousPage }> Vorige </Button>
                    <Button variant="primary" type="button"  onClick={this.submit}> Registreer </Button>
                </>
             )}  
            </Form> 
            </div>
        );
    }
}