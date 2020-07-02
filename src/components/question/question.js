import React, { Component } from "react";
import TrackText from "./track-text";
import Track from "./track";
import AnswersList from "./answers-list";

class Question extends Component() {
    state = {
        currentQuestion: null,
        currentAnswer: null,
        currentTrack: null,
    };
    componentDidMount() {
        const { question } = this.props;
        const { track } = question;
        this.setState({
            currentQuestion: question,
            currentTrack: track,
        });
    }
    onAnswerSelected = (answer) => {
        if (currentAnswer && currentAnswer.question) {
        }
        this.setState({ currentAnswer: answer, currentTrack: answer.track });
    };

    onTrackEnded = () => {};
    render() {
        const { currentQuestion, currentTrack, currentAnswer } = this.state;
        return (
            <div>
                <TrackText oldText={currentQuestion.text} />
                <Track track={currentTrack} onTrackEnded={this.onTrackEnded} />
                <AnswersList
                    answers={currentQuestion.answers}
                    onAnswerSelected={this.onAnswerSelected}
                />
            </div>
        );
    }
}

export default Question;
