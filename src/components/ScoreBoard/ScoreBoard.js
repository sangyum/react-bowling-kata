import React from "react";
import Frame from "../Frame/Frame";

const ScoreBoard = (props) => {
  const {currentFrame, rollScores, frameScores} = props
  // TODO: Current frame css is wack, find out how to fix it.
  return (
    <div className="scoreboard">
      <div className="currentFrame">Current Frame: {currentFrame}</div>
      <div className="frames">{renderFrames(rollScores, frameScores)}</div>
    </div>
  );
};

const renderFrames = (rollScores, frameScores) => {
  const frames = [];
  for (let i = 0; i < 10; i++) {
    frames.push(renderFrame(i, rollScores[i], frameScores[i]));
  }
  return <React.Fragment>{frames}</React.Fragment>;
};

const renderFrame = (index, rolls, frameScore) => (
  <Frame key={index} rolls={rolls} frameScore={frameScore}/>
);

export default ScoreBoard;
