import React, { Component } from "react";
import TrackText from "./track-text";
import Track from "./track";
import AnswersList from "./answers-list";
import classes from "./question.module.css";
import { CSSTransition } from "react-transition-group";

class Question extends Component {
  state = {
    question: this.props.question,
    questionsHistory: [],
    texts: [this.props.question.text],
    track: this.props.question.track,
    answer: null,
    showAnswers: false,
  };

  onAnswerSelected = (answer) => {
    this.setState(({ texts, questionsHistory, question }) => {
      return {
        text: answer.text,
        texts: [...texts, answer.text],
        track: answer.track,
        answer: answer,
        showAnswers: false,
        questionsHistory: [...questionsHistory, question], //add current question to history array
      };
    });
  };

  onTrackEnded = () => {
    if (this.state.answer) {
      // if answer was playing than after answer it must be a question or final answer from server
      if (this.state.answer.question) {
        //if current answer has another question
        this.setState(({ texts, answer }) => {
          return {
            question: answer.question,
            texts: [...texts, answer.question.text],
            track: answer.question.track,
            answer: null,
          };
        });
      } else {
        // if current answer has no other questions it must have final answer from server
        this.setState(({ texts, answer, questionsHistory }) => {
          return {
            texts: [...texts, answer.finalAnswer.text],
            track: answer.finalAnswer.track,
            answer: null,
            question: null,
          };
        });
      }
    } else {
      this.setState({
        showAnswers: true,
      });
    }
  };

  onBackClicked = () => {
    if (this.state.questionsHistory.length === 0) {
      this.props.onExitFromQuestion();
      return;
    }

    this.setState(({ texts, questionsHistory }) => {
      return {
        question: questionsHistory[questionsHistory.length - 1],
        track: questionsHistory[questionsHistory.length - 1].track,
        questionsHistory: questionsHistory.slice(
          0,
          questionsHistory.length - 1
        ),
        answer: null,
        texts: texts.slice(0, texts.length - 2),
      };
    });
  };

  render() {
    const { question, track, texts, showAnswers } = this.state;

    return (
      <div className={classes.Question}>
        <TrackText texts={texts} />
        <Track track={track} onTrackEnded={this.onTrackEnded} />
        <CSSTransition
          classNames="fade-slide-down"
          timeout={800}
          mountOnEnter
          unmountOnExit
          in={showAnswers}
        >
          <AnswersList
            answers={question ? question.answers : null}
            onAnswerSelected={this.onAnswerSelected}
            onBackClicked={this.onBackClicked}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default Question;
