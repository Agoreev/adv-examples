import React from "react";
import Button from "../../ui/button";
import classes from "./answers-list.module.css";

const AnswersList = ({ answers, onAnswerSelected, onBackClicked }) => {
  let list = null;
  if (answers) {
    list = Object.keys(answers).map((key) => {
      return (
        <Button
          key={key}
          clicked={() => onAnswerSelected(answers[key])}
          text={answers[key].btnText}
          type="normal"
        />
      );
    });
  }

  return (
    <div className={classes.AnswersList}>
      <div>{list}</div>
      <Button clicked={onBackClicked} text="Back" type="back" />
    </div>
  );
};

export default AnswersList;
