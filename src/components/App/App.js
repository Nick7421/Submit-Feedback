import React, { Component } from 'react';
import { HashRouter as Router,Route, Link } from 'react-router-dom';
import axios from 'axios';

//Components needed for the routing pages
import './App.css';
import FeedbackFeeling from './../FeedbackFeeling/FeedbackFeeling.js';
import FeedbackUnderstanding from './../FeedbackUnderstanding/FeedbackUnderstaning.js';
import FeedbackSupport from './../FeedbackSupport/FeedbackSupport.js';
import FeedbackComments from './../FeedbackComments/FeedbackComments.js';
import FeedbackReview from './../FeedbackReview/FeedbackReview.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

      </div>
    );
  }
}

export default App;
