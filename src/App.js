import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Student from "./components/student/Student";
import Result from "./components/student/Result/Result"
import Teacher from "./components/teacher/Teacher"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/teacher" component={Teacher} />
      </BrowserRouter>
    )


  }
}

export default App;
