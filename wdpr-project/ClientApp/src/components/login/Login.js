import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../login/Login.css';
import axios from 'axios';

export class Login extends Component {
    static displayName = Login.name;
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
        this.submit = this.submit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }

    submit(){
        const backendEndpoint = 'http://localhost:5192/login';
        // Get form data or construct the data you want to send to the backend
        const formData = {
          username: this.state.username,
          password: this.state.password,
        };
        axios.post(backendEndpoint, formData)
          .then(response => {
            console.log('Backend response:', response.data);
          })
          .catch(error => {
            console.error('Error submitting form to backend:', error);
          })
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
      };
    
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
      };

    render(){
        return(
            <Form>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <Form.Group className="mb-3 " controlId="formBasicUsername">
                    <Form.Label>Vul je gebruikersnaam in</Form.Label>
                    <Form.Control type="username" value={this.state.username} onChange={this.handleUsernameChange} placeholder="vul in gebruikersnaam" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Vul je wachtwoord in</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="vul in wachtwoord" />
                </Form.Group>

                <Button variant="primary" type="button" to="/Home" onClick={this.submit}>
                    Inloggen
                </Button>
            </Form> 
        );
    }
}