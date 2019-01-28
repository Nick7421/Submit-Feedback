import React, { Component } from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';

//Components needed for the routing pages
import './App.css';
import FeedbackHeader from './../FeedbackHeader/FeedbackHeader';
import FeedbackFeeling from './../FeedbackFeeling/FeedbackFeeling.js';
import FeedbackUnderstanding from '../FeedbackUnderstanding/FeedbackUnderstanding.js';
import FeedbackSupport from './../FeedbackSupport/FeedbackSupport.js';
import FeedbackComments from './../FeedbackComments/FeedbackComments.js';
import FeedbackSucess from './../FeedbackSuccess/FeedbackSuccess.js';
import FeedbackHome from './../FeedbackHome/FeedbackHome.js';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <FeedbackHeader/>
        <br/>
      <Router>
        <div>
      <Route exact path ="/" component={FeedbackHome}/>
      <Route exact path ="/feedback-feeling" component={FeedbackFeeling}/>
      <Route exact path ="/feedback-understanding" component={FeedbackUnderstanding}/>
      <Route exact path ="/feedback-support" component={FeedbackSupport}/>
      <Route exact path ="/feedback-comments" component={FeedbackComments}/>
      <Route exact path ="/feedback-success" component={FeedbackSucess}/>
      <Route exact path ="/feedback-review" component ={FeedbackReview}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
