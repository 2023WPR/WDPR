/* eslint-disable no-undef */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';
import axios from 'axios';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

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
            switchP:'',
            switchT:'',
            UserName:'',
            password:'',
            city:'',
            email:'',
            aid:''
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
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAidChange = this.handleAidChange.bind(this);
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
      handleMiddelNameChange = (event) => {
        this.setState({ middelName: event.target.value });
      };
      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };
      handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
      };
      handleCityChange = (event) => {
        this.setState({ city: event.target.value });
      };
      handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
      };
      handleAidChange = (event) => {
        this.setState({ email: event.target.value });
      };

      handleAgeChange = (event) => {
        let newAge = event.target.value;
        if (newAge < 0) {
          newAge = 0;
        } else if (newAge > 100) {
          newAge = 100;
        }
        this.setState({ age: newAge });
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
        const backendEndpoint = 'https://stichingaccessebility.azurewebsites.net/create' 
        const formData = {
          UserName: this.state.UserName,
          Password: this.state.password,
          ContactByPhone:  true, 
          ContactByThirdParty: true, 
          Disabilities: [
            {
              Type: "Visual Impairment",
              Description: "Some description about the visual impairment"
            }
          ],
          Aids: [
            {
              Description: this.state.aid
            }
          ],
          PersonalData: {
            Firstname: this.state.name,
            Middlenames: this.state.middelName,  
            Lastname: this.state.lastName,
            Emailaddress: this.state.email,
            Phonenumber: this.state.phoneNumber,
            Age: this.state.age,
            Address: {
              Street: this.state.street,
              City: this.state.city,  
              State: this.state.state,  
              Postcode: this.state.postCode
            }
          }
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
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Vul je leeftijd in</Form.Label>
                        <Form.Control type="number" min="0" max="100" value={this.state.age} onChange={this.handleAgeChange} placeholder="vul in leeftijd"/>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicPhoneNumber">
                        <Form.Label>Vul je telefoonnummer in </Form.Label>
                        <Form.Control type="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} placeholder="vul in telefoonnummer" />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Vul je email adres in </Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="vul in email" />
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
                        <Form.Label>Vul je stad in</Form.Label>
                        <Form.Control type="city" value={this.state.city} onChange={this.handleCityChange} placeholder="vul in stad" />
                        <Form.Label>Vul je provincie in</Form.Label>
                        <Form.Control type="state" value={this.state.state} onChange={this.handleStateChange} placeholder="vul in provincie" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.previousPage }> Vorige </Button>
                    <Button variant="primary" type="button" onClick={this.nextPage}> Volgende</Button>
                </>
             )}  
              {currentPage === 3 && (
                <>
                    <Form.Group className="mb-3" controlId="formBasicDisabilities">
                        <Form.Label>Vul je beperkingen in</Form.Label>
                        <Form.Control type="disabilities" value={this.state.disabilities} onChange={this.handleDisabilitiesChange} placeholder="vul in beperkingen" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAid">
                        <Form.Label>Vul je hulpmiddelen in</Form.Label>
                        <Form.Control type="aid" value={this.state.aid} onChange={this.handleAidChange} placeholder="vul in hulpmiddelen" />
                    </Form.Group>
                    <>
                    <Form.Group className="mb-3" controlId="formBasicDaysOfWeek">
                      <Form.Label>Select days of the week</Form.Label>
                      <ToggleButtonGroup
                        type="checkbox"
                        value={this.state.selectedDays}
                        onChange={(selectedDays) => this.setState({ selectedDays })}
                      >
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                          <ToggleButton key={index} value={day}>
                            {day}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </Form.Group>
                    <br />
                  </>
                    <Button variant="primary" type="button" onClick={this.previousPage }> Vorige </Button>
                    <Button variant="primary" type="button"  onClick={this.nextPage}> Volgende </Button>
                </>
             )}  
            {currentPage === 4 && (
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