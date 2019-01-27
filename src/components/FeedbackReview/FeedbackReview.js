import React, { Component } from 'react'
import { connect } from 'react-redux';

class FeedbackReview extends Component {
  render() {
    //   const isenabled = '' 
    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p></p>
        <p>Feelings:{this.props.reduxStore.feedback.feeling}</p>
        <p>Understanding:</p>
        <p>Support:</p>
        <p>Comments:</p>
        <button>Submit</button>
      </div>
    )
  }
}

//Below will map and connect this component to the redux store to retrieve state.
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeedbackReview);

////disabled = !isenabled
