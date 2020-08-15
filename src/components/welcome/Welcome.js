import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";

import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/home"} />;
    }

    const signed = response => {
      sessionStorage.setItem("user", JSON.stringify(response));
      this.setState({ redirect: true });
    };

    const responseFacebook = response => {
      console.log(response);
      signed(response);
    };

    const componentClicked = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
      signed(response);
    };

    return (
      <div className="welcome">
        <div className="medium-12 columns">
          <GoogleLogin
            clientId="271136507958-arm623if8vrq6h1d0ihelthslcuqb274.apps.googleusercontent.com"
            buttonText="Connectez-vous avec Gmail"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <br />
          <br />
          <FacebookLogin
            appId="729314794577517"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            textButton="Connectez-vous avec Facebook"
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
