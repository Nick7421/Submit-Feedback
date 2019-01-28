import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';


class FeedbackReview extends Component {
    constructor(props){
        super(props);
            this.state = {
                comments:'',
         
            }
        
    }
    //tested to make sure my reduxStore object is showing correctly before sending to the server
    // submitFeedback = () =>{
    //     console.log(this.props.reduxStore.feedback);
    //     }

    submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/userfeedback',
            data: this.props.reduxStore.feedback,
        }).then((response) => {
            const action = { type: 'SUBMIT_CLEAR', };
            this.props.dispatch(action);
            this.props.history.push('/feedback-success');
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            console.log(errorMessage);
        })
    
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

