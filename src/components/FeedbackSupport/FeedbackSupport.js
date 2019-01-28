import React, { Component } from 'react';
import FeedbackReview from './../FeedbackReview/FeedbackReview';
import { connect } from 'react-redux';

class FeedbackSupport extends Component {
    constructor(){
        super();
        this.state = {
            support: '',
        }
    }
    
    handleChange = (event) => {
        this.setState({
            support: event.target.value,
        });
    }
      
    handleNext = (event) => {
        const action = { type: 'Submit_Support_Info', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('/feedback-comments');
        
        }
    
    render() {
      
    return (
        <div>
      <div>
        <h1>How well are you bring supported?</h1>
        <input onChange={this.handleChange}type ="Number" placeholder = "enter a number 1-5 " value = {this.state.support}></input>
        <button onClick={this.handleNext}>Next</button>
        
      </div>
      <FeedbackReview/>
      </div>
    )
  }
}
export default connect()(FeedbackSupport);