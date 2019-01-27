import React, { Component } from 'react'
import FeedbackReview from './../FeedbackReview/FeedbackReview'

class FeedbackFeeling extends Component {
  render() {
    return (
        <div>
      <div>
        <h1> How are you feeling today?</h1>
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default FeedbackFeeling;