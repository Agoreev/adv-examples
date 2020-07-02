import React from "react";

const track = ({ track, onTrackEnded }) => {
    return (
        <div>
            <audio autoplay src={track} onEnded={onTrackEnded}></audio>
        </div>
    );
};

export default track;
