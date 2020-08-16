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

    const signed = (response, type) => {
      sessionStorage.setItem("user", JSON.stringify(response));
      sessionStorage.setItem("type", type);
      this.setState({ redirect: true });
    };

    const responseFacebook = response => {
      signed(response, "facebook");
    };

    const componentClicked = response => {};

    const responseGoogle = response => {
      signed(response, "gmail");
    };

    const responseGoogleF = response => {};

    return (
      <div className="container page-welcome">
        <div className="row  justify-content-center">
          <div className="col-6 align-self-center">
            <div className="row ">
              <div className="text-welcome1 col-12">
                Plateforme Web OBANSSI, client Open Banking WS02
              </div>

              <br />
              <br />
              <div className="welcome col-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <br />
                    <br />
                    <h2>Connexion</h2>
                    <br />
                    <br />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <GoogleLogin
                      clientId="271136507958-arm623if8vrq6h1d0ihelthslcuqb274.apps.googleusercontent.com"
                      render={renderProps => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="loginBtn loginBtn--google"
                        >
                          Connectez-vous avec Gmail
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogleF}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <br />
                    <br />
                    <FacebookLogin
                      appId="729314794577517"
                      autoLoad={true}
                      fields="name,email,picture"
                      onClick={componentClicked}
                      callback={responseFacebook}
                      textButton="Connectez-vous avec Facebook"
                      cssClass="loginBtn loginBtn--facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
