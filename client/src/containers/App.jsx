import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import Home from "../components/Home.jsx";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app-container">
            <h1>Skeleton</h1>
            <div>
              <Route path="/" exact component={Home} />
            </div>
          </div>
        </Router>
    );
  }
}

export default connect(a => a)(App);
