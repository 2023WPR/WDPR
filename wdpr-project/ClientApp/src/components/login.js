import React from "react";
import 'Login.css';
import {Container, Button, Form} from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';


return (

<Container classname= "LoginCon">
<h1>Login</h1>

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  //url toevoegen aan google authenticator cloud
/>
    </Container>
)
// https://developer.microsoft.com/en-us/graph/graph-explorer?WT.mc_id=AZ-MVP-5001802
// https://www.nuget.org/packages/Flurl.Http
// belangrijk 2fa .net microsoft