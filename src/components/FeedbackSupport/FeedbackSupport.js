import React, { Component } from 'react'
import FeedbackReview from './../FeedbackReview/FeedbackReview'

class FeedbackSupport extends Component {
  render() {
    return (
        <div>
      <div>
        <h1>How well are you bring supported?</h1>
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default FeedbackSupport;