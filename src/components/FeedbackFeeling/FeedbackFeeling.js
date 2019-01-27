import React, { Component } from 'react';
import FeedbackReview from './../FeedbackReview/FeedbackReview';
import { connect } from 'react-redux';

class FeedbackFeeling extends Component {
    constructor() {
        super();
        this.state = {
            feeling:'',
        }
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        });
    }
    handleNext = (event) => {
        const action = { type: 'Submit_Feeling_Info', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('/feedback-understanding');
        
        }
  render() {
   

    return (
        <div>
      <div>
        <h1> How are you feeling today?</h1>
        <input onChange={this.handleChange}type ="Number" placeholder = "enter a number 1-5 " value = {this.state.feeling}></input>
        <button onClick={this.handleNext}>Next</button>
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default connect()(FeedbackFeeling);