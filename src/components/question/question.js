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
        showAnswers: false,
        finish: false,
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
        if (this.state.answer) {
            // if answer was playing than after answer it must be a question or final answer from server
            if (this.state.answer.question) {
                //if current answer has another question
                this.setState(({ text, answer }) => {
                    return {
                        question: answer.question,
                        prevText: text,
                        text: answer.question.text,
                        track: answer.question.track,
                        answer: null,
                    };
                });
            } else {
                // if current answer has no other questions it must have final answer from server
                this.setState(({ text, answer }) => {
                    return {
                        prevText: text,
                        text: answer.finalAnswer.text,
                        track: answer.finalAnswer.track,
                        answer: null,
                        finish: true,
                    };
                });
            }
        } else {
            //if question was playing then show answers
            if (!this.state.finish) {
                this.setState({
                    showAnswers: true,
                });
            }
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
