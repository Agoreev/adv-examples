import React from "react";

const answersList = ({ answers, onAnswerSelected }) => {
    const list = Object.keys(answers).map((key) => {
        return (
            <button key={key} onClick={() => onAnswerSelected(answers[key])}>
                {answers[key].btnText}
            </button>
        );
    });
    return <div>{list}</div>;
};

export default answersList;
