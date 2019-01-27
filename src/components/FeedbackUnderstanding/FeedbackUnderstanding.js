import React, { Component } from 'react'
import FeedbackReview from './../FeedbackReview/FeedbackReview'

class FeedbackUnderstanding extends Component {
  render() {
    return (
      <div>
      <div>
        <h1>How well are you understanding the content?</h1>
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default FeedbackUnderstanding;