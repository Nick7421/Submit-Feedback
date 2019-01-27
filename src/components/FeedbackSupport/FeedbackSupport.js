import React, { Component } from 'react';
import FeedbackReview from './../FeedbackReview/FeedbackReview';
import { connect } from 'react-redux';

class FeedbackSupport extends Component {
    
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    }
  
    
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
export default connect()(FeedbackSupport);