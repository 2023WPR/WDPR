import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../RequireAuth'; // Adjust the path
import  decodeToken from '../JWTtoken'; // Adjust the path

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const backendEndpoint = 'http://localhost:5192/login';

    const formData = {
      UserName: username,
      Password: password,
    };

    try {
      const response = await axios.post(backendEndpoint, formData);
      const userData = response.data;

      if (userData && userData.Token) {
        // Decode the JWT token to access claims (e.g., user type)
        const decodedToken = decodeToken(userData.Token);

        if (decodedToken) {
          setAuth({
            ...userData,
            userType: decodedToken.role, // Assuming 'role' is a claim in the token
          });

          console.log('Backend response:', response.data);

          // Assuming userType is a property in the decoded token
          if (decodedToken.role === 'business') {
            history('/business-dashboard');
          } else if (decodedToken.role === 'expert') {
            history('/expert-dashboard');
          } else if (decodedToken.role === 'admin') {
            history('/admin-dashboard');
          } else {
            console.error('Unknown user type or other conditions');
          }
        } else {
          console.error('Error decoding token');
        }
      } else {
        console.error('Invalid response from the server');
      }
    } catch (error) {
      console.error('Error submitting form to backend:', error);
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
