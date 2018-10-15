import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0, string: ""}
    console.log(this.message);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.delay
    );
    console.log(this.props.message.split(''));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) =>({
      index: state.index + 1
    }));
  }
  render() {
    var j = 0;
    (this.state.index < this.props.message.length) && (this.state.string += this.props.message.split('')[this.state.index]);
    (this.state.index >= this.props.message.length) && (clearInterval(this.timerID));
    return (
      this.state.string
    );

  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypingAnimation message={"Hello, my name is Rohil \n Tuli. "} delay={100} />
        <br/>
        <TypingAnimation message={"I'm currently working on designing my personal website with React JS. Feel free to check out my progress on GitHub, or my LinkedIn profile."} delay={50}/>
      </div>
    );
  }
}

export default App;
