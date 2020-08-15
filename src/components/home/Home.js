import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if (!sessionStorage.getItem("user")) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        {/* Home page */}
        <h1> Home page displayed</h1>
      </div>
    );
  }
}

export default Home;
