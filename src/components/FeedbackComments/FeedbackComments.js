import React, { Component } from 'react'
import FeedbackReview from './../FeedbackReview/FeedbackReview'

class FeedbackComments extends Component {
  render() {
    return (
        <div>
      <div>
        <h1>Any comments you want to leave?</h1>
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default FeedbackComments;