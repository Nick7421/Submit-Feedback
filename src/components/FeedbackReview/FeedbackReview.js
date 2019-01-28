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
            //*******The Following error was resolved by proping history to this component***********/
            // I am getting an error Here when trying to go to the next page
            // not sure if it is a timeing issue but it is
            //saying push is undefined but my data does get to the server and into the database.
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

