import React from "react";
import Button from "../../ui/button";

const AnswersList = ({ answers, onAnswerSelected }) => {
    const list = Object.keys(answers).map((key) => {
        return (
            <Button
                key={key}
                clicked={() => onAnswerSelected(answers[key])}
                text={answers[key].btnText}
            />
        );
    });
    return <div>{list}</div>;
};

export default AnswersList;
