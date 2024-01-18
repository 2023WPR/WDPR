import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Access from './Access';

const Login = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const backendEndpoint = process.env.REACT_APP_API_URL +'/login';

    const formData = {
      UserName: username,
      Password: password,
    };

    try {
      const response = await axios.post(backendEndpoint, formData);
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      Access();

      // Redirect based on user role
      redirect();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form to backend:', error);
      // Handle login errors, show an error message to the user, etc.
    }
  };

  const redirect = () => {
    const userRole = localStorage.getItem("role");
    switch (userRole) {
      case 'Expert':
        history('/expertHome');
        break;
      case 'Business':
        history('/businessHome');
        break;
      case 'Admin':
        history('/adminHome');
        break;
      default:
        history('/');
    }
  };

  
  return (
    <Form onSubmit={handleSubmit}>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Vul je gebruikersnaam in</Form.Label>
        <Form.Control
          type="Username"
          value={username}
          onChange={handleUserNameChange}
          placeholder="vul in gebruikersnaam"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Vul je wachtwoord in</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="vul in wachtwoord"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Inloggen
      </Button>
    </Form>
  );
};

export default Login;
