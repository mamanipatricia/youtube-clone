import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
// or
// import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="CLIENT_ID"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);
