import React, { Component, createRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import classes from "./track.module.css";

class Track extends Component {
    //must play on track prop changes
    componentDidUpdate(prevProps) {
        if (this.props.track !== prevProps.track) {
            this.player.current.audio.current.play();
        }
    }
    player = createRef();
    render() {
        const { track, onTrackEnded } = this.props;
        return (
            <div className={classes.Track}>
                <AudioPlayer
                    customAdditionalControls={[]}
                    showJumpControls={false}
                    src={track}
                    autoPlay
                    onEnded={onTrackEnded}
                    ref={this.player}
                />
            </div>
        );
    }
}

export default Track;
