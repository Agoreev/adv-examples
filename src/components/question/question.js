import React, { Component } from "react";
import TrackText from "./track-text";
import Track from "./track";
import AnswersList from "./answers-list";

class Question extends Component {
  state = {
    prevText: "",
    text: this.props.question.text,
    track: this.props.question.track,
    question: this.props.question,
    answer: null,
    showAnswers: true,
  };

  onAnswerSelected = (answer) => {
    this.setState(({ text }) => {
      return {
        text: answer.text,
        prevText: text,
        track: answer.track,
        answer: answer,
        showAnswers: false,
      };
    });
  };

  onTrackEnded = () => {
    if (this.state.answer && this.state.answer.question) {
      this.setState(({ text, answer }) => {
        return {
          question: answer.question,
          track: answer.question.track,
          prevText: text,
          answer: null,
          showAnswers: true,
        };
      });
    }
  };

  render() {
    const { question, track, text, prevText, showAnswers } = this.state;

    let answersList = null;
    if (showAnswers) {
      answersList = (
        <AnswersList
          answers={question.answers}
          onAnswerSelected={this.onAnswerSelected}
        />
      );
    }

    return (
      <div>
        <TrackText prevText={prevText} text={text} />
        <Track track={track} onTrackEnded={this.onTrackEnded} />
        {answersList}
      </div>
    );
  }
}

export default Question;
