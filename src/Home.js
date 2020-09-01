import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container ">
        <a href="/teacher" className="btn-large">
          Teacher
        </a>
        <a href="/student" className="btn-large">
          Student
        </a>
      </div>
    );
  }
}

export default Home;
