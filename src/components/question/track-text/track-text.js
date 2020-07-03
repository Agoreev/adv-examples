import React from "react";
import classes from "./track-text.module.css";

const TrackText = ({ prevText, text }) => {
    return (
        <div className={classes.TrackText}>
            <p className={classes.PrevText}>{prevText}</p>
            <p className={classes.NewText}>{text}</p>
        </div>
    );
};

export default TrackText;
