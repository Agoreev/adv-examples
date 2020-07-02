import React from "react";

const TrackText = ({ prevText, text }) => {
  return (
    <div>
      <p>{prevText}</p>
      <p>{text}</p>
    </div>
  );
};

export default TrackText;
