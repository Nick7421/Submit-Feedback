import React, { Component } from 'react'

class FeedbackSuccess extends Component {
    handleChange = () => {
        this.props.history.push('/');

    }
  render() {

    return (
      <div>
        <h1>Feedback Has Been Submitted</h1>
        <p></p>
        <h3>Thank you!</h3>
        <p></p>
        <h4>Please click below to submit new feedback</h4>
        <button onClick ={this.handleChange}>Leave New Feedback</button>
      </div>
    )
  }
}
export default FeedbackSuccess;