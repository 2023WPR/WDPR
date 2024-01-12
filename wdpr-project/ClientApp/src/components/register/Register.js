import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';
import axios from 'axios';


export class Register extends Component {
    static displayName = Register.name;
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            url:'',
            homeNumber:'',
            street:'',
            state:'',
            UserName:'',
            password:'',
            city:'',
            email:'',
        };
        this.submit = this.submit.bind(this);
        this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
        this.handleHomeNumberChange = this.handleHomeNumberChange.bind(this);
        this.handleHomeStreetChange = this.handleHomeStreetChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
      }
      handleUserNameChange = (event) => {
        this.setState({ UserName: event.target.value });
      };
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
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
      handleCityChange = (event) => {
        this.setState({ city: event.target.value });
      };
      handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
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
        const backendEndpoint = 'https://stichingaccessebility.azurewebsites.net/create-Business'; //https://stichingaccessebility.azurewebsites.net/create-Business'
        const formData = {
          UserName: this.state.UserName,
          Password: this.state.password,
        };
        axios.post(backendEndpoint, formData)
          .then(response => {
            console.log('Backend response:', response.data);
          })
          .catch(error => {
            console.error('Error submitting form to backend:', error);
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
                    <Form.Group className="mb-3 " controlId="formBasicPostalCode">
                        <Form.Label>Vul je Postcode in</Form.Label>
                        <Form.Control type="postalCode" value={this.state.postCode} onChange={this.handlePostCodeChange} placeholder="vul in Postcode" />
                        <Form.Label>Vul je Huisnummer in</Form.Label>
                        <Form.Control type="homeNumber" value={this.state.homeNumber} onChange={this.handleHomeNumberChange} placeholder="vul in Huisnummer" />
                        <Form.Label>Vul je Straatnaam in</Form.Label>
                        <Form.Control type="street" value={this.state.street} onChange={this.handleHomeStreetChange} placeholder="vul in straatnaam " />
                        <Form.Label>Vul je stad in</Form.Label>
                        <Form.Control type="city" value={this.state.city} onChange={this.handleCityChange} placeholder="vul in stad" />
                        <Form.Label>Vul je provincie in</Form.Label>
                        <Form.Control type="state" value={this.state.state} onChange={this.handleStateChange} placeholder="vul in provincie" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.previousPage }> Vorige </Button>
                    <Button variant="primary" type="button" onClick={this.nextPage}> Volgende</Button>
                </>
             )}  
            {currentPage === 2 && (
                <>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>Vul je gebruikersnaam in</Form.Label>
                        <Form.Control type="UserName" value={this.state.UserName} onChange={this.handleUserNameChange} placeholder="vul in gebruikersnaam" />
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