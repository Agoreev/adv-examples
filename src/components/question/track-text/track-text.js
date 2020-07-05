import React, { Component } from "react";
import classes from "./track-text.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TrackText extends Component {
  render() {
    const { texts } = this.props;
    const textsList = texts.slice(-2).map((text) => {
      return (
        <CSSTransition key={text} timeout={1000} classNames="fade-slide-up">
          <li className={classes.TextItem}>- {text}</li>
        </CSSTransition>
      );
    });

    return (
      <div className={classes.TrackText}>
        <ul className={classes.TextsList}>
          <TransitionGroup>{textsList}</TransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TrackText;
