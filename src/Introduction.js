import React, { Component } from 'react';
import Typist from 'react-typist';
import logo from './logo.svg';
import './Introduction.css';

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
    (this.state.index < this.props.message.length) && (this.state.string += this.props.message.split('')[this.state.index]);
    (this.state.index >= this.props.message.length) && (clearInterval(this.timerID));
    return (
      this.state.string
    );

  }
}

class Introduction extends Component {
  render() {
    return (
      <div className="Introduction">
        <br/>
        <br/>
        <Typist avgTypingDelay={90} stdTypingDelay={35} cursor={{show: false}}>
        <Typist.Delay ms={800} />
          <div className = "intro">
            Hello, my name is
          </div>
          <Typist.Delay ms={500} />
          <div className = "name">
            Rohil Tuli.
          </div>
          <br/>
          <br/>
        </Typist>
        <br/>
        <Typist avgTypingDelay={35} stdTypingDelay={30} cursor={{show: false}}>
          <Typist.Delay ms={5000} />
          <div className = "temporaryMessage">
            I'm currently working on designing my personal website, while learning to use React.
            Feel free to check out my&nbsp;
            <a href="https://www.github.com/rohilt/rohilt.github.io">
            progress on GitHub
            </a>, or my&nbsp;
            <a href="https://www.linkedin.com/in/rohiltuli">
            LinkedIn profile
            </a>
            .
          </div>
        </Typist>
      </div>
    );
  }
}

export default Introduction;
