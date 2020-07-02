import React, { useEffect } from "react";

const Track = ({ track, onTrackEnded }) => {
  //must play on track prop changes
  useEffect(() => {});
  return (
    <div>
      <audio autoPlay src={track} onEnded={onTrackEnded}></audio>
    </div>
  );
};

export default Track;
