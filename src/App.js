import React from 'react';
import propTypes from "prop-types";

class App extends React.Component{
  state = {  //changable data
    count:0,
  }

  //setState refreshes page with new state and calls render function again
  add = () => {  //using 'current' is better way
    this.setState(current => ({count: current.count+1}));
  }
  minus = () => {
    this.setState({count: this.state.count-1});
  }

  render(){  //react automatically execute render method
    return <div>
        <h1>I'm a class componet</h1>
        <h4>I have number {this.state.count}</h4>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>;
  }
}

export default App;
