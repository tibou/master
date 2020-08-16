import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

class Home extends Component {
  render() {
    if (!sessionStorage.getItem("user")) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        {/* Home page */}
        {/* <h1> Home page displayed</h1> */}
        <div className="home-page">
          <div className="home-header">
            <Header />
          </div>

          <div className="home-main">
            <div className="home-side-menu"></div>
            <div className="home-content"></div>
          </div>

          <div className="home-footer">
            {" "}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
