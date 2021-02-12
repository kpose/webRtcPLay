import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.localVideoref = React.createRef();
  }

  render() {
    const constraints = {
      video: { width: 1280, height: 720 } /* audio: true */,
    };

    const success = (stream) => {
      this.localVideoref.current.srcObject = stream;
    };

    const failure = (e) => {
      console.log("getUserMedia Error: ", e);
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success)
      .catch(failure);
    return (
      <div>
        <video ref={this.localVideoref} autoPlay></video>
      </div>
    );
  }
}
export default App;
