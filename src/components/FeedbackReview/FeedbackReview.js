import React, { Component } from 'react'
import { connect } from 'react-redux';

class FeedbackReview extends Component {
    constructor(props){
        super(props);{
            this.state = {
                comments:'',
         
            }
        }
    }
    submitFeedback = () =>{
    
    }

  render() {

    // This variable looks at the redux store to return a boolen if comments is empty or completed.
    const isEnabled = this.props.reduxStore.feedback.comments !== '';

    return (
      <div>
        <h1>Review Your Feedback</h1>
        <p></p>
        <p>Feelings: {this.props.reduxStore.feedback.feeling}</p>
        <p>Understanding: {this.props.reduxStore.feedback.understanding}</p>
        <p>Support: {this.props.reduxStore.feedback.support}</p>
        <p>Comments: {this.props.reduxStore.feedback.comments}</p>
        <button disabled={!isEnabled} onClick={this.submitFeedback}>Submit</button>
      </div>
    )
  }
}

//Below will map and connect this component to the redux store to retrieve state.
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeedbackReview);

