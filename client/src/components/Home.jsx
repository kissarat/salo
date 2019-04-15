import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  setRef(element) {
    console.log(element);
    this.element = element;
  }

  render() {
    return (
      <div className="home">
        <p>Environment: {process.env.NODE_ENV}</p>
        <button type="button" onClick={() => this.setState({show: !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {this.state.show ? <div ref={e => this.setRef(e)}>Element</div> : null}
      </div>
    );
  }
}

export default Home;
