import React, { Component } from 'react'
import FeedbackReview from './../FeedbackReview/FeedbackReview'
import { connect } from 'react-redux';

class FeedbackComments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
        // this.props.FeedbackReview.buttonShow;
    }
      
    handleNext = (event) => {
        const action = { type: 'Submit_Comments_Info', payload: this.state };
        this.props.dispatch(action);
        alert('You can now submit your feedback');
        }
  render() {
    return (
        <div>
      <div>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleChange}type ="text" placeholder = "enter comments here" value = {this.state.comments}></input>
        <button onClick={this.handleNext}>Next</button>
      </div>
      <FeedbackReview buttonShow />
      </div>
    )
  }
}
export default connect() (FeedbackComments);