import React from "react";
import classes from "./track-text.module.css";

const TrackText = ({ prevText, text }) => {
  const prevP = prevText ? (
    <p className={classes.PrevText}>- {prevText}</p>
  ) : null;
  return (
    <div className={classes.TrackText}>
      {prevP}
      <p className={classes.NewText}>- {text}</p>
    </div>
  );
};

export default TrackText;
