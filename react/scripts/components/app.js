import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div className="widget">
          <div className="title">
            Reactive kittens!
            <nav>
              <button type="button" name="previous">&lt;</button>
              <button type="button" name="next">&gt;</button>
            </nav>
          </div>
          <div className="caption">
            Working navigation coming soon!
          </div>
          <img src="http://placekitten.com/300/300" alt="look at this cute kitten" />
        </div>
      );
  }
}
