import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Real time with Socket.IO, Node.Js, and React</h1>
          <h2>by Erick LV</h2>
          <br/>
        </header>
        <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              The temperature in Florence is: {response} °F or {((response-32)/1.8).toFixed(2)} °C
            </p>
          : <p>Loading...</p>}
      </div>
      </div>
    );
  }
}

export default App;