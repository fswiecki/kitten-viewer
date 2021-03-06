import React, { Component } from 'react';
import { connect } from 'react-redux';
import kipsum from '../kipsum'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kittenNumber: 1,
      catIpsum: kipsum()
    }
    this.prevKitten = this.prevKitten.bind(this);
    this.nextKitten = this.nextKitten.bind(this);
  }

  nextKitten() {
    let kittenNumber = this.state.kittenNumber;
    if (kittenNumber < 16) {
      kittenNumber ++;
    } else {
      //loop counter if kittenNumber goes below 1
      kittenNumber = 1;
    }
    this.setState({
      kittenNumber,
      catIpsum: kipsum()
    });
  }

  prevKitten() {
    let kittenNumber = this.state.kittenNumber;
    if (kittenNumber > 1) {
      kittenNumber --;
    } else {
      //loop counter if kittenNumber goes below 1
      kittenNumber = 16;
    }
    this.setState({
      kittenNumber,
      catIpsum: kipsum()
    });
  }

  render() {
    return (
      <div className="widget">
        <div className="title">
          Reactive kitten # {this.state.kittenNumber}
          <nav>
            <button type="button" name="previous" onClick={this.prevKitten}>&lt;</button>
            <button type="button" name="next" onClick={this.nextKitten}>&gt;</button>
          </nav>
        </div>
        <div className="caption">
          {this.state.catIpsum}
        </div>
        <img src={ "http://placekitten.com/300/300?image=" + this.state.kittenNumber } alt="look at this cute kitten" />
      </div>
    );
  }
}
