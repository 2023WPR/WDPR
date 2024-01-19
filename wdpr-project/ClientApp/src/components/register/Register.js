import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';
import axios from 'axios';
import * as patterns from '../contraints/Constraints';

export class Register extends Component {
    static displayName = Register.name;
    constructor(props) {
        super(props);
        this.state = {
            homeNumber:'',
            street:'',
            UserName:'',
            password:'',
            postCode:'',
            URL:'',
            isValidConstraint: true
        };
        this.submit = this.submit.bind(this);
        this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleHomeNumberChange = this.handleHomeNumberChange.bind(this);
        this.handleHomeStreetChange = this.handleHomeStreetChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }
      handleUserNameChange = (event) => {
        this.setState({ UserName: event.target.value });
      };
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
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
      handleURLChange = (event) => {
        this.setState({ URL: event.target.value });
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

      HandleConstraintsChange = (event, validationPattern) => {
        const { value } = event.target;

        // Validate the input against the provided pattern
        const isValid = validationPattern.test(value);

        // Customize the error message based on the type of constraint
        const errorMessage = isValid ? "" : "Invalid input";
          console.log("helllooo"+errorMessage)
        this.setState({
            isValidConstraint: isValid,
            errorMessage: errorMessage,
        });
    }
    render(){
        return(
            <div>
                <h1>Registreer</h1>
            <Form className="custom-form-control">
                <>
                {!this.state.isValidConstraint && ( <Form.Text className="text-danger">{this.state.errorMessage}</Form.Text>  )}
                    <Form.Group className="mb-3 " controlId="formBasicPostalCode">
                            <Form.Label>Vul je Postcode in</Form.Label>
                            <Form.Control type="postalCode" pattern={patterns.postalCodePattern} required value={this.state.postCode} 
                            onChange={(event) => this.handlePostCodeChange(event, patterns.postalCodePattern)}
                            placeholder="vul in Postcode"/>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicHome">
                        <Form.Label>Vul je Huisnummer in</Form.Label>
                        <Form.Control type="homeNumber" value={this.state.homeNumber} onChange={this.handleHomeNumberChange} placeholder="vul in Huisnummer" />
                        <Form.Label>Vul je Straatnaam in</Form.Label>
                        <Form.Control type="street" value={this.state.street} onChange={this.handleHomeStreetChange} placeholder="vul in straatnaam " />
                        <Form.Label>Vul je website url in</Form.Label>
                        <Form.Control type="URL" value={this.state.URL} onChange={this.handleURLtChange} placeholder="vul in URL " />
                    </Form.Group>
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
            </Form> 
            </div>
        );
    }
}