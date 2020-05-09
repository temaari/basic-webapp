import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:0
    };
    this.countTaps = this.countTaps.bind(this);
  }

  countTaps() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (  
      <div className="App">
      <div className="App-header">
        <input className="App-Button" type="Button" value="Tap me" onClick={this.countTaps} />
        <p>{this.state.counter}</p>
      </div>
    </div>
    )
  }
}



