import React, { Component } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    console.log(feedback);
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };

      // if (feedback === 'Good') {
      //   return { good: prevState.good + 1 };
      // }

      // if (feedback === 'Neutral') {
      //   return { neutral: prevState.neutral + 1 };
      // }

      // if (feedback === 'Bad') {
      //   return { bad: prevState.bad + 1 };
      // }
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    console.log();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
