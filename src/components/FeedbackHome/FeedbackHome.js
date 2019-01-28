import React, { Component } from 'react'

 class FeedbackHome extends Component {
    startFeedback = () =>{
        this.props.history.push('/feedback-feeling');
    }

  render() {
    return (
      <div>
        <button onClick={this.startFeedback}>Click here to Start Feeback</button>
      </div>
    )
  }
}
export default FeedbackHome