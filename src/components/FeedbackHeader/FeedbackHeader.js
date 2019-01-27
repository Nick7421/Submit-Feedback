import React, { Component } from 'react'
import './../App/App.css';

class FeedbackHeader extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      </div>
    )
  }
}
export default FeedbackHeader;